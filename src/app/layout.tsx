import WalletProvider from "@/providers/WalletProvider";
import "@near-wallet-selector/modal-ui/styles.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { EvmProvider } from "@/providers/EvmProvider";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Bitte AI Chat Boilerplate",
  description: "Bite AI Chat Boilerplate",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.className} antialiased`}>
        <EvmProvider>
          <WalletProvider>{children}</WalletProvider>
        </EvmProvider>
      </body>
    </html>
  );
}
