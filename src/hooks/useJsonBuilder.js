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
            return {};

        default:
            return "";

    }

}

export default function useJsonBuilder() {

    // ===============================
    // Load saved builder
    // ===============================

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

    // ===============================
    // History
    // ===============================

    const history = useHistory(savedFields);

    const fields = history.state;

    // ===============================
    // Auto Save
    // ===============================

    useAutoSave(
        "json-card-builder",
        fields
    );

    /**
     * Internal helper
     */
    function setFields(valueOrUpdater) {
        history.set(valueOrUpdater);
    }

    /**
     * Add field
     */
    function addField(type = "string") {

        // Ignore React click events
        if (typeof type !== "string") {
            type = "string";
        }

        setFields((prev) => [
            ...prev,
            createField(type),
        ]);
    }

    /**
     * Delete field
     */
    function deleteField(id) {

        setFields((prev) =>
            prev.filter(
                (field) => field.id !== id
            )
        );

    }

    /**
     * Update field
     */
    function updateField(id, property, value) {

        setFields((prev) =>
            prev.map((field) => {

                if (field.id !== id)
                    return field;

                if (property === "type") {

                    return {

                        ...field,

                        type: value,

                        value: getDefaultValue(value),

                        children:
                            value === "object" || value === "array"
                                ? field.children || []
                                : [],

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

        function addToTree(items) {

            return items.map((field) => {

                if (field.id === parentId) {

                    return {
                        ...field,
                        children: [
                            ...field.children,
                            createField(),
                        ],
                    };

                }

                return {
                    ...field,
                    children: addToTree(field.children),
                };

            });

        }

        setFields((prev) => addToTree(prev));

    }

    /**
     * Clear Builder
     */
    function clearFields() {

        localStorage.removeItem(
            "json-card-builder"
        );

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
        addChildField,
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