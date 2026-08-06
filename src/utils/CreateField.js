import { v4 as uuid } from "uuid";

export function getDefaultValue(type) {
    switch (type) {
        case "number":
            return 0;

        case "boolean":
            return false;

        case "array":
            return [];

        case "object":
            return null;

        default:
            return "";
    }
}

export function createField(type = "string") {
    return {
        id: uuid(),
        key: "",
        type,
        value: getDefaultValue(type),
        children: [],
    };
}