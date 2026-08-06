export function updateTree(
    fields,
    targetId,
    callback
) {
    return fields.map((field) => {

        if (field.id === targetId) {
            return callback(field);
        }

        if (
            field.children &&
            field.children.length > 0
        ) {
            return {
                ...field,
                children: updateTree(
                    field.children,
                    targetId,
                    callback
                ),
            };
        }

        return field;
    });
}