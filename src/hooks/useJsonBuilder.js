import { useState } from "react";
import { v4 as uuid } from "uuid";

export default function useJsonBuilder() {
    const [fields, setFields] = useState([
        {
            id: uuid(),
            key: "",
            value: "",
            type: "string",
        },
    ]);

    function addField() {
        setFields((prev) => [
            ...prev,
            {
                id: uuid(),
                key: "",
                value: "",
                type: "string"
            },
        ]);
    }

    function deleteField(id) {
        setFields((prev) => prev.filter((field) => field.id !== id));
    }

    function updateField(id, property, value) {
        setFields((prev) =>
            prev.map((field) =>
                field.id === id
                    ? {
                        ...field,
                        [property]: value,
                    }
                    : field
            )
        );
    }

    return {
        fields,
        setFields,
        addField,
        deleteField,
        updateField,
    };
}