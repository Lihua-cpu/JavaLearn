import { GitContributors } from "/Users/user/Documents/GitHub/JavaLearn/node_modules/@vuepress/plugin-git/dist/client/components/GitContributors.js";

export default {
  enhance: ({ app }) => {
    app.component("GitContributors", GitContributors);
  },
};
