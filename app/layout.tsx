import Header from "@/components/Header";
import { Toaster } from "@/components/ui/toaster";
import { cn } from "@/lib/utils";
import AuthProvider from "@/provider/AuthProvider";
import GlobalProvider from "@/provider/GlobalProvider";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Cyber Fish",
  description: "Cyber Fish",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={cn(inter.className, "scrollbar-hide m-0 bg-[#EEF3F5]")}>
        <AuthProvider>
          <GlobalProvider>
            <Header />
            <div className="mt-[54px] pb-4">{children}</div>
          </GlobalProvider>
        </AuthProvider>

        <Toaster />
      </body>
    </html>
  );
}
