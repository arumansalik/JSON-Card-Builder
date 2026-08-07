import { Trash2 } from "lucide-react";
import RecursiveChildren from "./RecursiveChildren";

export default function FieldRow({
                                     field,
                                     parentType = "object",
                                     addChildField,
                                     updateField,
                                     deleteField,
                                     errors,
                                 }) {

    const isArrayItem = parentType === "array";

    return (
        <div className="space-y-4">

            {/* Main Row */}

            <div
                className={`
        grid
        gap-4
        items-center
        ${
                    isArrayItem
                        ? "grid-cols-[1fr_180px_56px]"
                        : "grid-cols-[1.2fr_1.2fr_180px_56px]"
                }
    `}
            >

                {/* Hide key for array items */}

                {!isArrayItem && (

                    <input
                        type="text"
                        placeholder="Key"
                        value={field.key}
                        onChange={(e) =>
                            updateField(field.id, "key", e.target.value)
                        }
                        className="w-full rounded-lg border p-3 outline-none"
                    />

                )}

                {/* Hide value for containers */}

                {field.type !== "object" &&
                    field.type !== "array" && (

                        <input
                            type="text"
                            placeholder="Value"
                            value={field.value}
                            onChange={(e) =>
                                updateField(field.id, "value", e.target.value)
                            }
                            className="w-full rounded-lg border p-3 outline-none"
                        />

                    )}

                <select
                    value={field.type}
                    onChange={(e) =>
                        updateField(field.id, "type", e.target.value)
                    }
                    className="rounded-lg border p-3"
                >
                    <option value="string">String</option>
                    <option value="number">Number</option>
                    <option value="boolean">Boolean</option>
                    <option value="array">Array</option>
                    <option value="object">Object</option>
                </select>

                <button
                    onClick={() => deleteField(field.id)}
                    className="
        h-[54px]
        w-[54px]
        shrink-0
        rounded-xl
        bg-red-500
        text-white
        flex
        items-center
        justify-center
        transition-all
        duration-200
        hover:bg-red-600
        hover:scale-105
        active:scale-95
    "
                >
                    <Trash2 size={18}/>
                </button>

            </div>

            {/* Children */}

            {(field.type === "object" || field.type === "array") && (

                <div className="ml-8 mt-4">

                    <button
                        onClick={() => addChildField(field.id)}
                        className="
        mt-4
        flex
        items-center
        gap-2
        rounded-xl
        bg-gray-100
        px-4
        py-3
        text-sm
        font-semibold
        text-gray-700
        transition
        hover:bg-black
        hover:text-white
    "
                    >
                        ＋
                        {field.type === "array"
                            ? "Add Item"
                            : "Add Child"}
                    </button>

                    <RecursiveChildren
                        childrenFields={field.children}
                        parentType={field.type}
                        updateField={updateField}
                        deleteField={deleteField}
                        addChildField={addChildField}
                        errors={errors}
                    />

                </div>

            )}

        </div>
    );
}