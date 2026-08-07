import { useSortable } from "@dnd-kit/sortable";
import { CSS } from "@dnd-kit/utilities";
import { GripVertical } from "lucide-react";

import FieldRow from "../components/Builder/FieldRow";

export default function SortableField({
                                          field,
                                          updateField,
                                          deleteField,
                                          errors,
                                      }) {

    const {
        attributes,
        listeners,
        setNodeRef,
        transform,
        transition,
    } = useSortable({
        id: field.id,
    });

    const style = {
        transform: CSS.Transform.toString(transform),
        transition,
    };

    return (

        <div
            ref={setNodeRef}
            style={style}
            className="mb-4"
        >

            <div className="flex items-start gap-3">

                {/* Drag Handle */}

                <button
                    {...attributes}
                    {...listeners}
                    className="mt-4 cursor-grab rounded-lg border bg-gray-100 p-2 hover:bg-gray-200 active:cursor-grabbing"
                >
                    <GripVertical size={18} />
                </button>

                {/* Original Field */}

                <div className="flex-1">

                    <FieldRow
                        field={field}
                        updateField={updateField}
                        deleteField={deleteField}
                        errors={errors}
                    />

                </div>

            </div>

        </div>

    );

}