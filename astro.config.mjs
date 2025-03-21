import { defineConfig } from "astro/config";
import tailwind from "@astrojs/tailwind";
import react from "@astrojs/react";
import markdownConfig from "./markdown.config";
import mdx from "@astrojs/mdx";
import sitemap from "@astrojs/sitemap";
import partytown from "@astrojs/partytown";
import robotsTxt from "astro-robots-txt";

import playformCompress from "@playform/compress";
import vercel from "@astrojs/vercel/serverless";

// https://astro.build/config
export default defineConfig({
  site: "https://nlgiangji.vercel.app/",
  prefetch: true,
  markdown: {
    ...markdownConfig,
  },
  integrations: [
    tailwind({
      config: {
        applyBaseStyles: false,
      },
    }),
    react(),
    mdx({
      ...markdownConfig,
      syntaxHighlight: "shiki",
      shikiConfig: {
        theme: "one-dark-pro",
      },
    }),
    sitemap(),
    partytown({
      config: {
        forward: ["dataLayer.push"],
      },
    }),
    robotsTxt({
      sitemap: ["https://nlgiangji.vercel.app//sitemap-0.xml", "https://nlgiangji.vercel.app//sitemap-index.xml"],
    }),
    playformCompress(),
  ],
  output: "server",
  adapter: vercel(),
  // adapter: vercel({
  //   webAnalytics: {
  //     enabled: true
  //   },
  //   speedInsights: {
  //     enabled: true
  //   },
  //   imageService: true
  // })
});
