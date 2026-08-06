export function generateJSON(fields) {
    const json = {};

    fields.forEach((field) => {

        if (!field.key.trim()) return;

        switch(field.type){

            case "number":
                json[field.key] = Number(field.value);
                break;

            case "boolean":
                json[field.key] =
                    field.value === "true";

                break;

            default:
                json[field.key] = field.value;

        }

    });

    return json;
}