/**
 * Finds a node recursively.
 */

export function findTreeNode(nodes, id) {

    for (const node of nodes) {

        if (node.id === id) {
            return node;
        }

        const child = findTreeNode(
            node.children || [],
            id
        );

        if (child) {
            return child;
        }

    }

    return null;

}