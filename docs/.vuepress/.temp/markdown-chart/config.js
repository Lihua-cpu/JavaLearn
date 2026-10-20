import { defineClientConfig } from "vuepress/client";
import Mermaid from "/Users/user/Documents/GitHub/JavaLearn/node_modules/@vuepress/plugin-markdown-chart/dist/client/components/Mermaid.js";

export default defineClientConfig({
  enhance: ({ app }) => {
    app.component("Mermaid", Mermaid);
  },
});
