/**
 * Recursively updates a node in the tree.
 */

export function updateTree(nodes, id, updater) {

    return nodes.map((node) => {

        if (node.id === id) {
            return updater(node);
        }

        return {
            ...node,
            children: updateTree(
                node.children || [],
                id,
                updater
            ),
        };

    });

}