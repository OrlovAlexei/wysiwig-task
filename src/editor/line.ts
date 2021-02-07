export function createLine() {
  const p = document.createElement("div");
  const br = document.createElement("br");

  p.appendChild(br);
  return p;
}

export function isLine(target: Node): boolean {
  if (target instanceof Element) {
    return target.localName === "div";
  }

  return false;
}
