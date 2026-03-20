from fastapi import FastAPI, Body
from pydantic import BaseModel
from fastapi.middleware.cors import CORSMiddleware
from motor.motor_asyncio import AsyncIOMotorClient 
import httpx
import certifi
ca = certifi.where()


app = FastAPI()

# origins = [
#     "http://localhost:3000",
#     "https://debug-quest-4xy43ugej-nikita24846s-projects.vercel.app",
#     "https://debug-quest-roan.vercel.app",
# ]


origins = [
    "http://localhost:3000",
    "https://debug-quest-roan.vercel.app", # Isko fix man lo
    "https://debug-quest-nhaffbime-nikita24846s-projects.vercel.app", # Ye fix wala
]

MONGO_URI = "mongodb+srv://Nikita:Panwar123@cluster0.jqnltm3.mongodb.net/?appName=Cluster0"
client = AsyncIOMotorClient(MONGO_URI)
db = client.zia_neural_lab
users_collection = db.users


app.add_middleware(
    CORSMiddleware,
    # allow_origins=["http://localhost:3000"],
    allow_origins=origins,
    allow_methods=["*"],
    allow_headers=["*"],
)


class ZiaRequest(BaseModel):
    userCode: str
    question: str
    bugReport: str
    context: str


NVIDIA_KEY = "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"


@app.post("/auth/google")
async def auth_google(user_data: dict = Body(...)):
    existing_user = await users_collection.find_one({"google_id": user_data['sub']})
    
    if existing_user:
        existing_user["_id"] = str(existing_user["_id"])
        return existing_user
    
    new_user = {
        "name": user_data['name'],
        "email": user_data['email'],
        "picture": user_data['picture'],
        "google_id": user_data['sub'],
        "solved_levels": [] 
    }
    result = await users_collection.insert_one(new_user)
    new_user["_id"] = str(result.inserted_id)
    return new_user


@app.post("/update-progress")
async def update_progress(data: dict = Body(...)):
    await users_collection.update_one(
        {"google_id": data['google_id']},
        {"$addToSet": {"solved_levels": data['level_id']}} # $addToSet ensures no duplicates
    )
    return {"status": "success", "message": f"Level {data['level_id']} cleared."}

@app.post("/zia-mentor")
async def ask_zia(req: ZiaRequest):
    is_hard_stuck = "GIVE DIRECT CODE HELP" in req.context

    system_prompt = f"""
    You are Zia, the Elite Neural Debugging AI. 
    You are mentoring Nikita in a high-tech coding lab.
    
    ENVIRONMENT CONTEXT:
    - Current Bug: {req.bugReport}
    - Nikita's Code: {req.userCode}
    
    MENTORING PROTOCOL:
    1. Listen carefully to Nikita's Question: "{req.question}"
    2. Phase 1 (Hints 1-7): Be a clever guide. Use analogies. Do NOT give the code. 
    3. Phase 2 (Hints 8+): User is stuck. Provide the exact code fix clearly.
    
    TONE: 
    - Intelligent, Indian English, supportive.
    - Response must be under 3 sentences.
    """

    async with httpx.AsyncClient() as client:
        response = await client.post(
            "https://integrate.api.nvidia.com/v1/chat/completions",
            headers={"Authorization": f"Bearer {NVIDIA_KEY}"},
            json={
                "model": "meta/llama-3.1-405b-instruct",
                "messages": [
                    {"role": "system", "content": system_prompt},
                    {"role": "user", "content": f"Nikita asks: {req.question}"}
                ],
                "temperature": 0.5
            }
        )
        data = response.json()
        return {"reply": data['choices'][0]['message']['content']}














