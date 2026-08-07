import { v4 as uuid } from "uuid";
import useHistory from "./useHistory";
import useAutoSave from "./useAutoSave";

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



    const fields = history.state;

    useAutoSave("json-card-builder", fields);

    const savedFields = (() => {

        try {

            const data = localStorage.getItem(
                "json-card-builder"
            );

            return data
                ? JSON.parse(data)
                : [createField()];

        } catch {

            return [createField()];

        }

    })();

    const history = useHistory(savedFields);

    /**
     * Internal helper
     */
    function setFields(updater) {

        const newFields =
            typeof updater === "function"
                ? updater(fields)
                : updater;

        history.set(newFields);
    }

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
     * Update a field
     */
    function updateField(id, property, value) {
        setFields((prev) =>
            prev.map((field) => {

                if (field.id !== id) return field;

                if (property === "type") {
                    return {
                        ...field,
                        type: value,
                        value: getDefaultValue(value),
                        children: field.children,
                    };
                }

                return {
                    ...field,
                    [property]: value,
                };
            })
        );
    }

    /**
     * Clear Builder
     */
    function clearFields() {
        history.set([]);
    }

    /**
     * Reset Builder
     */
    function resetFields() {
        history.set([
            createField(),
        ]);
    }

    return {
        fields,

        setFields,

        addField,
        deleteField,
        updateField,

        clearFields,
        resetFields,

        undo: history.undo,
        redo: history.redo,

        canUndo: history.canUndo,
        canRedo: history.canRedo,
    };
}