export function generateJSON(fields = []) {

    function build(nodes, isArray = false) {

        if (isArray) {
            return nodes.map((node) => {

                if (node.type === "object") {
                    return build(node.children || []);
                }

                if (node.type === "array") {
                    return build(node.children || [], true);
                }

                switch (node.type) {

                    case "number":
                        return Number(node.value);

                    case "boolean":
                        return node.value === true || node.value === "true";

                    default:
                        return node.value;

                }

            });
        }

        const result = {};

        nodes.forEach((node) => {

            if (!node.key && !isArray) return;

            switch (node.type) {

                case "object":
                    result[node.key] = build(node.children || []);
                    break;

                case "array":
                    result[node.key] = build(node.children || [], true);
                    break;

                case "number":
                    result[node.key] = Number(node.value);
                    break;

                case "boolean":
                    result[node.key] =
                        node.value === true ||
                        node.value === "true";
                    break;

                default:
                    result[node.key] = node.value;

            }

        });

        return result;
    }

    return build(fields);

}