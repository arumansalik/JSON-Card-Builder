export function deleteTree(nodes, id) {

    return nodes
        .filter((node) => node.id !== id)
        .map((node) => ({
            ...node,
            children: deleteTree(
                node.children || [],
                id
            ),
        }));

}