import { defineClientConfig } from "vuepress/client";
import { defineAsyncComponent, h } from "vue";
import DeferredLayoutToggle from "./components/DeferredLayoutToggle.vue";
import ClickImagePreview from "./components/ClickImagePreview.vue";
import LazyMermaid from "./components/LazyMermaid.vue";
import GlobalUnlock from "./components/unlock/GlobalUnlock.vue";

const UnlockContent = defineAsyncComponent(
  () => import("./components/unlock/UnlockContent.vue"),
);

const CHUNK_LOAD_ERROR_PATTERN =
  /Failed to fetch dynamically imported module|Importing a module script failed|error loading dynamically imported module|Unable to preload CSS/i;

const getCurrentLocation = (): string =>
  `${window.location.pathname}${window.location.search}${window.location.hash}`;

const COPYRIGHT_NOTICE = [
  "",
  "",
  "———————————————",
  "作者：Leon",
  "原文链接：{url}",
  "来源：LeonLearn | Java 面试指南",
  "著作权归作者所有，转载请注明出处。",
].join("\n");

const COPYRIGHT_CONTENT_SELECTOR = ".theme-hope-content, .vp-page-content";
const COPYRIGHT_MIN_LENGTH = 30;

const appendCopyrightNotice = (event: ClipboardEvent): void => {
  const selection = window.getSelection();
  if (!selection || selection.isCollapsed || selection.rangeCount === 0) return;

  const text = selection.toString();
  if (text.trim().length < COPYRIGHT_MIN_LENGTH) return;

  const anchor = selection.getRangeAt(0).commonAncestorContainer;
  const element = anchor instanceof Element ? anchor : anchor.parentElement;
  if (!element?.closest(COPYRIGHT_CONTENT_SELECTOR)) return;

  const clipboardData = event.clipboardData;
  if (!clipboardData) return;

  clipboardData.setData(
    "text/plain",
    `${text}${COPYRIGHT_NOTICE.replace("{url}", window.location.href)}`,
  );
  event.preventDefault();
};

export default defineClientConfig({
  setup(): void {
    document.addEventListener("copy", appendCopyrightNotice);
  },
  enhance({ app, router }) {
    app.component("Mermaid", LazyMermaid);
    app.component("UnlockContent", UnlockContent);

    router.onError((error, to) => {
      if (typeof window === "undefined") return;

      const message = error instanceof Error ? error.message : String(error);
      if (!CHUNK_LOAD_ERROR_PATTERN.test(message)) return;

      const target = to?.fullPath || getCurrentLocation();
      const reloadKey = `leonLearn:chunk-reload:${target}`;

      if (window.sessionStorage.getItem(reloadKey) === "1") return;

      window.sessionStorage.setItem(reloadKey, "1");
      window.location.assign(target);
    });

    router.afterEach((to) => {
      if (typeof window === "undefined") return;
      window.sessionStorage.removeItem(`leonLearn:chunk-reload:${to.fullPath}`);
    });
  },
  rootComponents: [
    () => h(DeferredLayoutToggle),
    () => h(GlobalUnlock),
    () => h(ClickImagePreview),
  ],
});
