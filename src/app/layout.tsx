import { type Metadata } from "next";
import {
  ClerkProvider,
  SignInButton,
  SignUpButton,
  SignedIn,
  SignedOut,
  UserButton,
} from "@clerk/nextjs";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Link from "next/link";
import { Button } from "@/components/ui/button";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "min tasks",
  description: "A minimal task manager",
  metadataBase: new URL("https://min-tasks-new.vercel.app/"),
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <ClerkProvider>
      <html lang="en">
        <body
          className={`${geistSans.variable} ${geistMono.variable} antialiased`}
        >
          <div className="px-4 max-w-screen-lg mx-auto">
            <nav className="flex justify-between py-8">
              <Link href="/">min tasks</Link>
              <div className="gap-4 hidden md:flex">
                <Link href="/">features</Link>
                <Link href="/">pricing</Link>
                <Link href="/">about</Link>
              </div>
              <div className="flex gap-4">
                <SignedOut>
                  <SignInButton>
                    <Button variant="outline" className="cursor-pointer">
                      Sign In
                    </Button>
                  </SignInButton>
                  <SignUpButton>
                    <Button className="cursor-pointer">Sign Up</Button>
                  </SignUpButton>
                </SignedOut>
                <SignedIn>
                  <UserButton />
                </SignedIn>
              </div>
            </nav>
            {children}
            <footer className="py-8 mt-12 border-t">Made by Ryan Furrer</footer>
          </div>
        </body>
      </html>
    </ClerkProvider>
  );
}
