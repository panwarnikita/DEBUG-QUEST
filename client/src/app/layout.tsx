import { GoogleOAuthProvider } from '@react-oauth/google';
import "./globals.css";

export default function RootLayout({ children }: { children: React.ReactNode }) {
  
  return (
    <html lang="en">
      <body className="bg-[#050505] text-white">
        {/* Aapki Nayi Client ID yahan hai */}
        <GoogleOAuthProvider clientId="13152559929-uocevit4of3rteq9d5ebg445a1kupbff.apps.googleusercontent.com">
          {children}
        </GoogleOAuthProvider>
      </body>
    </html>
  );
}







