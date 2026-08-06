import { Plus, Trash2 } from "lucide-react";

export default function ArrayEditor({
                                        field,
                                        updateField,
                                    }) {
    const addItem = () => {
        updateField(field.id, "value", [
            ...field.value,
            "",
        ]);
    };

    const updateItem = (index, value) => {
        const updated = [...field.value];

        updated[index] = value;

        updateField(field.id, "value", updated);
    };

    const removeItem = (index) => {
        const updated = field.value.filter(
            (_, i) => i !== index
        );

        updateField(field.id, "value", updated);
    };

    return (
        <div className="mt-4 rounded-lg border bg-gray-50 p-4">

            <p className="mb-3 font-medium">
                Array Items
            </p>

            <div className="space-y-2">

                {field.value.map((item, index) => (

                    <div
                        key={index}
                        className="flex gap-2"
                    >

                        <input
                            value={item}
                            onChange={(e)=>
                                updateItem(
                                    index,
                                    e.target.value
                                )
                            }
                            placeholder={`Item ${index+1}`}
                            className="flex-1 rounded-lg border p-2"
                        />

                        <button
                            onClick={()=>
                                removeItem(index)
                            }
                            className="rounded-lg bg-black p-2 text-white"
                        >
                            <Trash2 size={16}/>
                        </button>

                    </div>

                ))}

            </div>

            <button
                onClick={addItem}
                className="mt-4 flex items-center gap-2 rounded-lg bg-black px-4 py-2 text-white"
            >
                <Plus size={16}/>
                Add Item
            </button>

        </div>
    );
}