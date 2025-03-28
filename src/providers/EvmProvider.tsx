"use client";

import "@rainbow-me/rainbowkit/styles.css";

import { getDefaultConfig, RainbowKitProvider } from "@rainbow-me/rainbowkit";
import { WagmiProvider } from "wagmi";
import { mainnet, polygon, optimism, arbitrum, base } from "wagmi/chains";
import { QueryClientProvider, QueryClient } from "@tanstack/react-query";
import { defineChain, http } from "viem";

const kiteAiTestnet = defineChain({
  id: 2368,
  name: "KiteAI Testnet",
  network: "kite-ai-testnet",
  nativeCurrency: { name: "KITE", symbol: "KITE", decimals: 18 },
  rpcUrls: {
    default: {
      http: ["https://rpc-testnet.gokite.ai"],
    },
  },
  blockExplorers: {
    default: {
      name: "KiteAI Testnet Explorer",
      url: "https://testnet.kitescan.ai",
    },
  },
});
const config = getDefaultConfig({
  appName: "Bitte Chat App",
  projectId: "ea847e190be91d10050b71343a5ce873",
  chains: [kiteAiTestnet],
  transports: {
    [kiteAiTestnet.id]: http(),
  },
});

const queryClient = new QueryClient();

export const EvmProvider = ({ children }: { children: React.ReactNode }) => {
  return (
    <WagmiProvider config={config}>
      <QueryClientProvider client={queryClient}>
        <RainbowKitProvider>{children}</RainbowKitProvider>
      </QueryClientProvider>
    </WagmiProvider>
  );
};
