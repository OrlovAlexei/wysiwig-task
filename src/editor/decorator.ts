export interface IViewDecorator {
  decoratorName: string;
  className: string;
  tagName: string;
}

export interface IDecoratorParams {
  className: string;
  tagName?: string;
}

export function createDecorator(
  decoratorName: string,
  params: IDecoratorParams
) {
  return {
    decoratorName,
    tagName: "span",
    ...params,
  };
}

export enum DecoratorActions {
  WRAP = "WRAP",
  UNWRAP = "UNWRAP",
}

export const DECORATOR_NAME_ATTRIBUTE = "data-decorator";

export function newDecorator(decorator: IViewDecorator): Element {
  const t = document.createElement(decorator.tagName);
  t.setAttribute(DECORATOR_NAME_ATTRIBUTE, decorator.decoratorName);
  t.className = decorator.className;
  // t.style.display = "inline";
  return t;
}

export function decorateNodes(
  nodes: Node[],
  decorator: IViewDecorator
): Element {
  const t = document.createElement(decorator.tagName);

  t.setAttribute(DECORATOR_NAME_ATTRIBUTE, decorator.decoratorName);
  t.className = decorator.className;
  // t.style.display = "inline";
  nodes.forEach((n) => t.appendChild(n.cloneNode(true)));
  return t;
}

export function unDecorateNodes(nodes: Node[], decoratorName: string): string {
  const node = document.createElement("div");

  nodes.forEach((n) => {
    if (
      n instanceof Element &&
      n.getAttribute(DECORATOR_NAME_ATTRIBUTE) === decoratorName
    ) {
      node.appendChild(document.createTextNode(n.innerHTML));
    }
    node.appendChild(n);
  });

  return node.innerHTML;
}