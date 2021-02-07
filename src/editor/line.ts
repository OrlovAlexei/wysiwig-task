import { DECORATOR_NAME_ATTRIBUTE } from "./decorator";

const tagName = "div";
const lineDecoratorName = "line";

export function createLine() {
  const line = document.createElement(tagName);
  line.setAttribute(DECORATOR_NAME_ATTRIBUTE, lineDecoratorName);
  const br = document.createElement("br");

  line.appendChild(br);
  return line;
}

export function isLine(target: Node): boolean {
  if (target instanceof Element) {
    return target.getAttribute(DECORATOR_NAME_ATTRIBUTE) === lineDecoratorName;
  }

  return false;
}
