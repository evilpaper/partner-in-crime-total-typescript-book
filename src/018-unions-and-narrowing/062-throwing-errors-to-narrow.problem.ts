import { Equal, Expect } from "@total-typescript/helpers";

const appElement = document.getElementById("app");

if (!appElement) {
  throw new Error("App element not found");
}

type Test = Expect<Equal<typeof appElement, HTMLElement>>;
