import { useState } from "react";
import { v4 as uuid } from "uuid";
import { updateTree } from "../utils/treeHelpers";


export const createField = (type = "string") => ({
    id: uuid(),
    key: "",
    type,
    value: getDefaultValue(type),
    children: [],
});

/**
 * Returns the default value for each field type.
 */
function getDefaultValue(type) {
    switch (type) {
        case "string":
            return "";

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

export default function useJsonBuilder() {
    const [fields, setFields] = useState([
        createField(),
    ]);

    /**
     * Add a new field
     */
    function addField(type = "string") {
        setFields((prev) => [
            ...prev,
            createField(type),
        ]);
    }

    /**
     * Delete a field
     */
    function deleteField(id) {
        setFields((prev) =>
            prev.filter((field) => field.id !== id)
        );
    }

    /**
     * Update any property of a field
     */
    function updateField(id, property, value) {
        setFields((prev) =>
            updateTree(prev, id, (field) => {
                if (property === "type") {
                    return {
                        ...field,
                        type: value,
                        value: getDefaultValue(value),
                        children: value === "object" ? [] : [],
                    };
                }

                return {
                    ...field,
                    [property]: value,
                };
            })
        );
    }

    function addChildField(parentId) {
        setFields((prev) =>
            updateTree(prev, parentId, (field) => ({
                ...field,
                children: [
                    ...field.children,
                    createField(),
                ],
            }))
        );
    }

    return {
        fields,
        setFields,
        addField,
        deleteField,
        updateField,
        addChildField,
    };
}