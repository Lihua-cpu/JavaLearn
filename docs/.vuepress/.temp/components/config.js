import { hasGlobalComponent } from "/Users/user/Documents/code/github/JavaLearn-main/node_modules/@vuepress/helper/dist/client/index.js";
import Badge from "/Users/user/Documents/code/github/JavaLearn-main/node_modules/vuepress-plugin-components/dist/client/components/Badge.js";

import "/Users/user/Documents/code/github/JavaLearn-main/node_modules/@vuepress/helper/dist/client/styles/sr-only.css";

export default {
  enhance: ({ app }) => {
    if(!hasGlobalComponent("Badge")) app.component("Badge", Badge);
    
  },
  setup: () => {

  },
  rootComponents: [

  ],
};
