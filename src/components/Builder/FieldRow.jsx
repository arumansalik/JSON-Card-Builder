import { Trash2 } from "lucide-react";


export default function FieldRow({
                                     field,

                                     updateField,
                                     deleteField,
                                 }) {
    return (
        <div className="flex items-end gap-3">
            <div className="w-1/2">
                <input
                    type="text"
                    placeholder="Key"
                    value={field.key}
                    onChange={(e) =>
                        updateField(field.id, "key", e.target.value)
                    }
                    className="w-full rounded-lg border p-3 outline-none"
                />
            </div>

            {field.type !== "object" && field.type !== "array" && (
                <input
                    type="text"
                    placeholder="Value"
                    value={field.value}
                    onChange={(e) =>
                        updateField(field.id, "value", e.target.value)
                    }
                    className="w-1/2 rounded-lg border p-3 outline-none"
                />
            )}

            <select
                value={field.type}
                onChange={(e) =>
                    updateField(field.id, "type", e.target.value)
                }
                className="rounded-lg border p-3"
            >
                <option value="string">
                    String
                </option>

                <option value="number">
                    Number
                </option>

                <option value="boolean">
                    Boolean
                </option>

                <option value="array">
                    Array
                </option>


            </select>

            <button
                onClick={() => deleteField(field.id)}
                className="flex h-12 w-12 items-center justify-center rounded-lg bg-red-500 px-4 text-white"
            >
                <Trash2 size={18}/>
            </button>
        </div>
    );
}
