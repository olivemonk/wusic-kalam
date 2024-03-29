import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/providers/theme-provider";
import RecoilContextProvider from "@/components/providers/recoil-context-provider";
import ModalProvider from "@/components/providers/modal-providers";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Wusic",
  description: "A music streaming service for everyone.",
  icons: {
    icon: '/logo.svg',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <RecoilContextProvider>
            <ModalProvider />
            {children}
          </RecoilContextProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
