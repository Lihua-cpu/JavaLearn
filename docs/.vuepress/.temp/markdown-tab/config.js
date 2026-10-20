import { CodeTabs } from "/Users/user/Documents/GitHub/JavaLearn/node_modules/@vuepress/plugin-markdown-tab/dist/client/components/CodeTabs.js";

export default {
  enhance: ({ app }) => {
    app.component("CodeTabs", CodeTabs);
  },
};
