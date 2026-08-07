import { useSortable } from "@dnd-kit/sortable";
import { CSS } from "@dnd-kit/utilities";
import { GripVertical } from "lucide-react";

import FieldRow from "../components/Builder/FieldRow";

export default function SortableField({
                                          field,
                                          updateField,
                                          deleteField,
                                          errors,
    addChildField,
                                      }) {

    const {
        attributes,
        listeners,
        setNodeRef,
        transform,
        transition,
        isDragging,
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
            className={`
                mb-4
                rounded-2xl
                transition-all
                duration-200
                ${
                isDragging
                    ? "scale-[1.02] opacity-80 shadow-2xl z-50"
                    : "hover:shadow-md"
            }
            `}
        >

            <div className="flex items-start gap-3">

                {/* Drag Handle */}

                <button
                    {...attributes}
                    {...listeners}
                    className="
                        mt-4
                        flex
                        h-10
                        w-10
                        items-center
                        justify-center
                        rounded-xl
                        border
                        border-gray-200
                        bg-gray-50
                        text-gray-500
                        transition-all
                        hover:bg-gray-100
                        hover:text-black
                        active:cursor-grabbing
                        cursor-grab
                    "
                >
                    <GripVertical size={18} />
                </button>

                {/* Field */}

                <div className="flex-1">

                    <FieldRow
                        field={field}
                        updateField={updateField}
                        deleteField={deleteField}
                        addChildField={addChildField}
                        errors={errors}
                    />

                </div>

            </div>

        </div>

    );

}