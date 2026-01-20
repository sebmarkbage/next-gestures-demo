import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Next Gestures Demo",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <div className="h-screen w-full max-w-md mx-auto bg-gray-50 flex flex-col">
          {children}
        </div>
      </body>
    </html>
  );
}
