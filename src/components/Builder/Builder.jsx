import { useRef, useState } from "react";

import useJsonBuilder from "../../hooks/useJsonBuilder";
import Toolbar from "../Toolbar/Toolbar";
import JsonPreview from "../Preview/JsonPreview";
import ThemeSelector from "../ThemeSelector";

import AddFieldButton from "./AddFieldButton";
import SortableField from "../../dnd/SortableField";

import {
    DndContext,
    closestCenter,
    DragOverlay,
} from "@dnd-kit/core";

import {
    SortableContext,
    verticalListSortingStrategy,
    arrayMove,
} from "@dnd-kit/sortable";

import { validateFields } from "../../utils/validator";

export default function Builder() {

    const {
        fields,
        addField,
        setFields,
        deleteField,
        updateField,
        addChildField,
        undo,
        redo,
        canUndo,
        canRedo,
        clearFields,
    } = useJsonBuilder();

    const previewRef = useRef(null);

    const [theme, setTheme] = useState("apple");

    const [aspectRatio, setAspectRatio] = useState("16:9");

    const [background, setBackground] = useState("white");

    const [padding, setPadding] = useState(32);

    const [quality, setQuality] = useState(2);

    const [shadow, setShadow] = useState(true);

    const [fileName, setFileName] = useState("Business Card");

    const [activeField, setActiveField] = useState(null);

    const errors = validateFields(fields);

    function handleDragStart(event) {

        const field = fields.find(
            (item) => item.id === event.active.id
        );

        setActiveField(field);

    }

    function handleDragEnd(event) {

        const { active, over } = event;

        if (!over || active.id === over.id) {

            setActiveField(null);

            return;

        }

        const oldIndex = fields.findIndex(
            (item) => item.id === active.id
        );

        const newIndex = fields.findIndex(
            (item) => item.id === over.id
        );

        const reordered = arrayMove(
            fields,
            oldIndex,
            newIndex
        );

        setFields(reordered);

        setActiveField(null);

    }

    return (

        <div className="space-y-8">

            {/* ================= Header ================= */}

            <div className="flex flex-col gap-6 lg:flex-row lg:items-center lg:justify-between">

                <div>

                    <h1 className="text-5xl font-black tracking-tight text-gray-900">
                        JSON Card Studio
                    </h1>

                    <p className="mt-3 text-lg text-gray-500 max-w-2xl">
                        Build, customize and export beautiful JSON cards with nested objects,
                        arrays and drag & drop.
                    </p>

                </div>

                <Toolbar
                    fields={fields}
                    previewRef={previewRef}

                    clearFields={clearFields}

                    undo={undo}
                    redo={redo}

                    canUndo={canUndo}
                    canRedo={canRedo}

                    theme={theme}

                    aspectRatio={aspectRatio}
                    setAspectRatio={setAspectRatio}

                    background={background}
                    setBackground={setBackground}

                    padding={padding}
                    setPadding={setPadding}

                    quality={quality}
                    setQuality={setQuality}

                    shadow={shadow}
                    setShadow={setShadow}

                    fileName={fileName}
                    setFileName={setFileName}
                />

            </div>

            {/* ================= Main ================= */}

            <div className="grid grid-cols-1 gap-8 xl:grid-cols-[1fr_1.20fr]">

                {/* ================================================= */}
                {/* Builder */}
                {/* ================================================= */}

                <div className="overflow-hidden rounded-[32px] border border-gray-200 bg-white shadow-[0_20px_70px_rgba(0,0,0,.08)]">

                    {/* Header */}

                    <div className="flex items-center justify-between border-b border-gray-100 bg-gradient-to-r from-slate-50 to-white px-8 py-7">

                        <div>

                            <h2 className="text-3xl font-bold">
                                JSON Builder
                            </h2>

                            <p className="mt-2 text-gray-500">
                                Build nested JSON visually.
                            </p>

                        </div>

                        <div className="rounded-full bg-black px-5 py-2 text-sm font-semibold text-white">

                            {fields.length} Properties

                        </div>

                    </div>

                    {/* Body */}

                    <div className="bg-slate-50 p-8 space-y-6">

                        {fields.length === 0 ? (

                            <div className="rounded-3xl border border-dashed border-gray-300 bg-white py-20">

                                <div className="mx-auto flex h-20 w-20 items-center justify-center rounded-3xl bg-blue-50 text-4xl">

                                    📄

                                </div>

                                <h3 className="mt-6 text-center text-2xl font-bold">

                                    Start Building

                                </h3>

                                <p className="mx-auto mt-3 max-w-sm text-center text-gray-500">

                                    Click Add Property below to create your first JSON field.

                                </p>

                            </div>

                        ) : (

                            <DndContext
                                collisionDetection={closestCenter}
                                onDragStart={handleDragStart}
                                onDragEnd={handleDragEnd}
                                autoScroll
                            >

                                <SortableContext
                                    items={fields.map((f) => f.id)}
                                    strategy={verticalListSortingStrategy}
                                >

                                    <div className="space-y-6">

                                        {fields.map((field) => (

                                            <SortableField
                                                key={field.id}
                                                field={field}
                                                parentType="object"
                                                updateField={updateField}
                                                deleteField={deleteField}
                                                addChildField={addChildField}
                                                errors={errors}
                                            />

                                        ))}

                                    </div>

                                </SortableContext>

                                <DragOverlay>

                                    {activeField && (

                                        <div className="w-[450px] rounded-3xl bg-white p-6 shadow-[0_25px_80px_rgba(0,0,0,.18)] rotate-2">

                                            <div className="flex items-center gap-4">

                                                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-slate-100 text-xl">

                                                    ☰

                                                </div>

                                                <div>

                                                    <h3 className="text-lg font-bold">

                                                        {activeField.key || "Untitled"}

                                                    </h3>

                                                    <p className="capitalize text-gray-500">

                                                        {activeField.type}

                                                    </p>

                                                </div>

                                            </div>

                                        </div>

                                    )}

                                </DragOverlay>

                            </DndContext>

                        )}

                    </div>

                    {/* Footer */}

                    <div className="border-t border-gray-200 bg-white p-6">

                        <AddFieldButton
                            addField={addField}
                        />

                    </div>

                </div>

                {/* ================================================= */}
                {/* Preview */}
                {/* ================================================= */}

                <div className="overflow-hidden rounded-[32px] border border-gray-200 bg-white shadow-[0_20px_70px_rgba(0,0,0,.08)]">

                    <div className="flex items-center justify-between border-b border-gray-100 px-8 py-7">

                        <div>

                            <h2 className="text-3xl font-bold">

                                Live Preview

                            </h2>

                            <p className="mt-2 text-gray-500">

                                Preview exactly what will be exported.

                            </p>

                        </div>

                        <ThemeSelector
                            theme={theme}
                            setTheme={setTheme}
                        />

                    </div>

                    <div className="p-8">

                        <JsonPreview
                            ref={previewRef}
                            fields={fields}
                            theme={theme}
                            aspectRatio={aspectRatio}
                            background={background}
                            padding={padding}
                            shadow={shadow}
                        />

                    </div>

                </div>

            </div>

        </div>

    );

}