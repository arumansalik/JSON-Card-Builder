import { Plus } from "lucide-react";
import RecursiveField from "./RecursiveField";

export default function ObjectEditor({
                                         field,
                                         updateField,
                                         deleteField,
                                         addChildField,
                                     }) {
    return (
        <div className="mt-4 rounded-xl border bg-gray-50 p-4">

            <h4 className="mb-4 font-semibold">
                Object Properties
            </h4>

            <div className="space-y-4">

                {field.children.map((child) => (

                    <RecursiveField
                        key={child.id}
                        field={child}
                        updateField={updateField}
                        deleteField={deleteField}
                        addChildField={addChildField}
                    />

                ))}

            </div>

            <button
                onClick={() =>
                    addChildField(field.id)
                }
                className="mt-4 flex items-center gap-2 rounded-lg bg-black px-4 py-2 text-white"
            >
                <Plus size={16} />

                Add Property
            </button>

        </div>
    );
}