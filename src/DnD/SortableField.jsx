import { useSortable } from "@dnd-kit/sortable";
import { CSS } from "@dnd-kit/utilities";
import { GripVertical } from "lucide-react";

import FieldRow from "../components/Builder/FieldRow";

export default function SortableField({
                                          field,
                                          parentType,
                                          updateField,
                                          deleteField,
                                          addChildField,
                                          errors,
                                      }) {
    const {
        attributes,
        listeners,
        setNodeRef,
        setActivatorNodeRef,
        transform,
        transition,
        isDragging,
    } = useSortable({
        id: field.id,
    });

    const style = {
        transform: CSS.Transform.toString(transform),
        transition: transition || undefined,

        // Keep the dragged item above the other fields
        zIndex: isDragging ? 1000 : "auto",

        // Prevent the browser from interfering with dragging
        touchAction: "manipulation",
    };

    return (
        <div
            ref={setNodeRef}
            style={style}
            className={`
                relative
                mb-5
                w-full
                rounded-2xl
                transition-shadow
                duration-200
                ${
                isDragging
                    ? "z-[1000] scale-[1.01] bg-white shadow-[0_25px_70px_rgba(0,0,0,0.18)]"
                    : "bg-transparent"
            }
            `}
        >
            <div className="flex w-full items-start gap-3">

                {/* =====================================================
                    DRAG HANDLE
                ===================================================== */}

                <button
                    type="button"
                    ref={setActivatorNodeRef}
                    {...attributes}
                    {...listeners}
                    aria-label={`Drag ${field.key || "property"}`}
                    title="Drag to reorder"
                    className="
                        mt-4
                        flex
                        h-10
                        w-10
                        shrink-0
                        cursor-grab
                        touch-none
                        select-none
                        items-center
                        justify-center
                        rounded-xl
                        border
                        border-gray-200
                        bg-gray-50
                        text-gray-500
                        transition-all
                        duration-200
                        hover:border-gray-300
                        hover:bg-gray-100
                        hover:text-black
                        active:cursor-grabbing
                        focus:outline-none
                        focus:ring-2
                        focus:ring-black/10
                    "
                >
                    <GripVertical size={18} />
                </button>

                {/* =====================================================
                    FIELD CONTENT
                ===================================================== */}

                <div className="min-w-0 flex-1">
                    <FieldRow
                        field={field}
                        parentType={parentType}
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