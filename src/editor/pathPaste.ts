import { getAllNodes } from "./converter";
import { isLine } from "./line";
import { changeTag } from "./pathCopy";
import { sanitizeAttributes } from "./sanitizeHtml";

export function pathPaste(event: ClipboardEvent) {
  event.preventDefault();
  const data = event.clipboardData?.getData("text/html");

  const wrapper = document.createElement("div");

  wrapper.innerHTML = data || "";

  wrapper.removeChild(wrapper.firstChild!);

  const lines = getAllNodes(Array.from(wrapper.childNodes)).filter(
    (n) => n instanceof Element && isLine(n)
  );

  lines.forEach((line) =>
    line.parentNode?.replaceChild(changeTag(line as Element, "p"), line)
  );

  sanitizeAttributes(Array.from(wrapper.childNodes));

  const rangeForInsert = window.getSelection()?.getRangeAt(0);

  wrapper.childNodes.forEach((node) => {
    rangeForInsert?.insertNode(node);
  });
  rangeForInsert?.collapse();
}
