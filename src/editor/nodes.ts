import { isLine } from "./line";

export function getNodesBetweenNodes(
  rootNode: Node,
  first: Node,
  second: Node
): Node[] {
  let result: Node[] = [];
  let cahPush = false;

  if (rootNode.isSameNode(first) && first.isSameNode(second)) {
    return [];
  }

  rootNode.childNodes.forEach((node) => {
    if (node.contains(first) || node.contains(second)) {
      cahPush = result.length === 0;
      result.push(node);
    } else if (cahPush) {
      result.push(node);
    }
  });

  return result.slice(1, -1);
}

export function getLineChildren(node: Node): Node[] {
  const result: Node[] = [];

  if (node instanceof Element && isLine(node)) {
    result.push(node);
  }

  node.childNodes.forEach((n) => result.push(...getLineChildren(n)));

  return result;
}
