export function generateJSON(fields) {
    const json = {};

    fields.forEach((field) => {
        if (!field.key.trim()) return;

        switch (field.type) {
            case "string":
                json[field.key] = field.value;
                break;

            case "number":
                json[field.key] = Number(field.value);
                break;

            case "boolean":
                json[field.key] =
                    field.value === true ||
                    field.value === "true";
                break;

            case "array":
                json[field.key] = field.value;
                break;


            default:
                json[field.key] = field.value;
        }
    });

    return json;
}