import { useRef, useState } from "react";

import {
    Braces,
    CircleHelp,
    Settings,
    Sparkles,
} from "lucide-react";

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

    /* =========================================================
       REFS
    ========================================================= */

    const previewRef = useRef(null);

    /* =========================================================
       BUILDER STATE
    ========================================================= */

    const [theme, setTheme] = useState("apple");

    const [aspectRatio, setAspectRatio] = useState("16:9");

    const [background, setBackground] = useState("white");

    const [padding, setPadding] = useState(32);

    const [quality, setQuality] = useState(2);

    const [shadow, setShadow] = useState(true);

    const [fileName, setFileName] = useState("Business Card");

    const [activeField, setActiveField] = useState(null);

    /* =========================================================
       VALIDATION
    ========================================================= */

    const errors = validateFields(fields);

    /* =========================================================
       DRAG START
    ========================================================= */

    function handleDragStart(event) {

        const field = fields.find(
            (item) => item.id === event.active.id
        );

        setActiveField(field || null);
    }

    /* =========================================================
       DRAG END
    ========================================================= */

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

        if (oldIndex === -1 || newIndex === -1) {

            setActiveField(null);

            return;
        }

        const reordered = arrayMove(
            fields,
            oldIndex,
            newIndex
        );

        setFields(reordered);

        setActiveField(null);
    }

    /* =========================================================
       CLEAR BUILDER
    ========================================================= */

    function handleClear() {

        clearFields();

        setActiveField(null);
    }

    /* =========================================================
       UI
    ========================================================= */

    return (

        <div className="builder-shell min-h-screen">

            {/* =====================================================
                NAVBAR
            ===================================================== */}

            <header
                className="
                    builder-navbar
                    fixed
                    left-1/2
                    top-4
                    z-50
                    w-[calc(100%-32px)]
                    max-w-[1500px]
                    -translate-x-1/2
                "
            >

                <div
                    className="
                        flex
                        h-16
                        items-center
                        justify-between
                        rounded-2xl
                        px-4
                        sm:px-6
                    "
                >

                    {/* ================= BRAND ================= */}

                    <div className="flex items-center gap-3">

                        <div
                            className="
                                flex
                                h-10
                                w-10
                                shrink-0
                                items-center
                                justify-center
                                rounded-xl
                                bg-black
                                text-white
                                shadow-lg
                            "
                        >
                            <Braces size={20} />
                        </div>

                        <div className="hidden sm:block">

                            <p
                                className="
                                    text-sm
                                    font-black
                                    tracking-tight
                                    text-gray-950
                                "
                            >
                                JSON Card Studio
                            </p>

                            <p
                                className="
                                    text-[10px]
                                    font-medium
                                    text-gray-400
                                "
                            >
                                Visual JSON Workspace
                            </p>

                        </div>

                    </div>

                    {/* ================= NAVIGATION ================= */}

                    <nav
                        className="
                            hidden
                            items-center
                            gap-1
                            rounded-xl
                            bg-black/[0.035]
                            p-1
                            md:flex
                        "
                    >

                        <button
                            type="button"
                            className="
                                rounded-lg
                                bg-white
                                px-4
                                py-2
                                text-xs
                                font-bold
                                text-black
                                shadow-sm
                            "
                        >
                            Builder
                        </button>

                        <button
                            type="button"
                            className="
                                rounded-lg
                                px-4
                                py-2
                                text-xs
                                font-semibold
                                text-gray-500
                                transition
                                hover:bg-white
                                hover:text-black
                            "
                        >
                            Templates
                        </button>

                        <button
                            type="button"
                            className="
                                rounded-lg
                                px-4
                                py-2
                                text-xs
                                font-semibold
                                text-gray-500
                                transition
                                hover:bg-white
                                hover:text-black
                            "
                        >
                            Docs
                        </button>

                    </nav>

                    {/* ================= ACTIONS ================= */}

                    <div className="flex items-center gap-2">

                        <button
                            type="button"
                            title="Help"
                            className="
                                hidden
                                h-10
                                w-10
                                items-center
                                justify-center
                                rounded-xl
                                text-gray-500
                                transition
                                hover:bg-black/5
                                hover:text-black
                                sm:flex
                            "
                        >
                            <CircleHelp size={18} />
                        </button>

                        <button
                            type="button"
                            title="Settings"
                            className="
                                hidden
                                h-10
                                w-10
                                items-center
                                justify-center
                                rounded-xl
                                text-gray-500
                                transition
                                hover:bg-black/5
                                hover:text-black
                                sm:flex
                            "
                        >
                            <Settings size={18} />
                        </button>

                        <div
                            className="
                                flex
                                h-10
                                items-center
                                gap-2
                                rounded-xl
                                bg-black
                                px-4
                                text-xs
                                font-bold
                                text-white
                                shadow-lg
                            "
                        >

                            <Sparkles size={15} />

                            <span className="hidden sm:block">
                                Pro Export
                            </span>

                        </div>

                    </div>

                </div>

            </header>

            {/* =====================================================
                MAIN
            ===================================================== */}

            <main
                className="
                    mx-auto
                    max-w-[1500px]
                    px-4
                    pb-20
                    pt-28
                    sm:px-6
                    lg:px-8
                "
            >

                {/* =================================================
                    HERO
                ================================================= */}

                <section className="mb-8">

                    <div
                        className="
                            flex
                            flex-col
                            gap-6
                            xl:flex-row
                            xl:items-center
                            xl:justify-between
                        "
                    >

                        {/* HERO CONTENT */}

                        <div>

                            <div
                                className="
                                    mb-3
                                    inline-flex
                                    items-center
                                    gap-2
                                    rounded-full
                                    border
                                    border-black/5
                                    bg-white/70
                                    px-3
                                    py-1.5
                                    text-xs
                                    font-bold
                                    text-gray-500
                                    shadow-sm
                                    backdrop-blur-xl
                                "
                            >

                                <span
                                    className="
                                        h-1.5
                                        w-1.5
                                        animate-pulse
                                        rounded-full
                                        bg-green-500
                                    "
                                />

                                Workspace ready

                            </div>

                            <h1
                                className="
                                    text-4xl
                                    font-black
                                    tracking-[-0.045em]
                                    text-gray-950
                                    sm:text-5xl
                                    lg:text-6xl
                                "
                            >

                                Build something{" "}

                                <span className="builder-gradient">
                                    beautiful.
                                </span>

                            </h1>

                            <p
                                className="
                                    mt-4
                                    max-w-2xl
                                    text-base
                                    leading-7
                                    text-gray-500
                                    sm:text-lg
                                "
                            >
                                Transform structured JSON into polished
                                visual cards. Build nested data, customize
                                every detail and export your creation.
                            </p>

                        </div>

                        {/* STATS */}

                        <div className="flex shrink-0 items-center gap-3">

                            <div
                                className="
                                    rounded-2xl
                                    border
                                    border-gray-200
                                    bg-white/75
                                    px-5
                                    py-3
                                    shadow-sm
                                    backdrop-blur-xl
                                "
                            >

                                <p
                                    className="
                                        text-[10px]
                                        font-bold
                                        uppercase
                                        tracking-wider
                                        text-gray-400
                                    "
                                >
                                    Properties
                                </p>

                                <p className="mt-1 text-xl font-black">
                                    {fields.length}
                                </p>

                            </div>

                            <div
                                className="
                                    rounded-2xl
                                    border
                                    border-gray-200
                                    bg-white/75
                                    px-5
                                    py-3
                                    shadow-sm
                                    backdrop-blur-xl
                                "
                            >

                                <p
                                    className="
                                        text-[10px]
                                        font-bold
                                        uppercase
                                        tracking-wider
                                        text-gray-400
                                    "
                                >
                                    Theme
                                </p>

                                <p
                                    className="
                                        mt-1
                                        text-sm
                                        font-black
                                        capitalize
                                    "
                                >
                                    {theme}
                                </p>

                            </div>

                        </div>

                    </div>

                </section>

                {/* =================================================
                    TOOLBAR
                ================================================= */}

                <section className="mb-6">

                    <div
                        className="
                            rounded-[24px]
                            border
                            border-white/80
                            bg-white/75
                            p-3
                            shadow-[0_20px_60px_rgba(0,0,0,.06)]
                            backdrop-blur-2xl
                        "
                    >

                        <Toolbar

                            fields={fields}

                            clearFields={handleClear}

                            previewRef={previewRef}

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

                </section>

                {/* =================================================
                    MAIN GRID
                ================================================= */}

                <div
                    className="
                        grid
                        grid-cols-1
                        items-start
                        gap-6
                        xl:grid-cols-[minmax(0,0.92fr)_minmax(0,1.08fr)]
                        2xl:gap-8
                    "
                >

                    {/* =================================================
                        JSON BUILDER
                    ================================================= */}

                    <section
                        className="
                            builder-panel
                            overflow-hidden
                            rounded-[32px]
                            border
                            border-white/80
                            bg-white/80
                            shadow-[0_30px_90px_rgba(0,0,0,.08)]
                            backdrop-blur-2xl
                        "
                    >

                        {/* ================= BUILDER HEADER ================= */}

                        <div
                            className="
                                border-b
                                border-gray-100/80
                                bg-white/70
                                px-6
                                py-5
                                backdrop-blur-xl
                                sm:px-7
                            "
                        >

                            <div className="flex items-center justify-between gap-4">

                                <div className="flex items-center gap-4">

                                    <div
                                        className="
                                            flex
                                            h-11
                                            w-11
                                            shrink-0
                                            items-center
                                            justify-center
                                            rounded-2xl
                                            bg-black
                                            text-white
                                            shadow-lg
                                        "
                                    >
                                        <Braces size={20} />
                                    </div>

                                    <div>

                                        <h2
                                            className="
                                                text-xl
                                                font-black
                                                tracking-tight
                                            "
                                        >
                                            JSON Builder
                                        </h2>

                                        <p
                                            className="
                                                mt-0.5
                                                text-xs
                                                text-gray-400
                                            "
                                        >
                                            Structure your data visually
                                        </p>

                                    </div>

                                </div>

                                <div
                                    className="
                                        rounded-full
                                        bg-black
                                        px-4
                                        py-2
                                        text-xs
                                        font-bold
                                        text-white
                                    "
                                >

                                    {fields.length}

                                    <span className="ml-1 text-white/50">
                                        properties
                                    </span>

                                </div>

                            </div>

                        </div>

                        {/* =================================================
                            DYNAMIC BUILDER CONTENT
                        ================================================= */}

                        <div
                            className="
                                bg-gradient-to-br
                                from-slate-50
                                via-white
                                to-blue-50/30
                                p-5
                                sm:p-7
                            "
                        >

                            {fields.length === 0 ? (

                                /* ================= EMPTY ================= */

                                <div
                                    className="
                                        relative
                                        overflow-hidden
                                        rounded-[26px]
                                        border
                                        border-dashed
                                        border-gray-300
                                        bg-white/80
                                        px-6
                                        py-16
                                        text-center
                                        backdrop-blur-xl
                                    "
                                >

                                    <div
                                        className="
                                            pointer-events-none
                                            absolute
                                            left-1/2
                                            top-0
                                            h-40
                                            w-40
                                            -translate-x-1/2
                                            rounded-full
                                            bg-blue-400/10
                                            blur-3xl
                                        "
                                    />

                                    <div className="relative">

                                        <div
                                            className="
                                                mx-auto
                                                flex
                                                h-16
                                                w-16
                                                items-center
                                                justify-center
                                                rounded-2xl
                                                bg-black
                                                text-white
                                                shadow-xl
                                            "
                                        >
                                            <Braces size={27} />
                                        </div>

                                        <h3
                                            className="
                                                mt-5
                                                text-xl
                                                font-black
                                            "
                                        >
                                            Start building
                                        </h3>

                                        <p
                                            className="
                                                mx-auto
                                                mt-2
                                                max-w-sm
                                                text-sm
                                                leading-6
                                                text-gray-500
                                            "
                                        >
                                            Add your first property to start
                                            creating your JSON card.
                                        </p>

                                    </div>

                                </div>

                            ) : (

                                /* ================= FIELDS ================= */

                                <DndContext
                                    collisionDetection={closestCenter}
                                    onDragStart={handleDragStart}
                                    onDragEnd={handleDragEnd}
                                    autoScroll
                                >

                                    <SortableContext
                                        items={fields.map(
                                            (field) => field.id
                                        )}
                                        strategy={
                                            verticalListSortingStrategy
                                        }
                                    >

                                        <div className="space-y-5">

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

                                    {/* ================= DRAG OVERLAY ================= */}

                                    <DragOverlay>

                                        {activeField ? (

                                            <div
                                                className="
                                                    w-[430px]
                                                    rotate-1
                                                    rounded-3xl
                                                    border
                                                    border-gray-200
                                                    bg-white
                                                    p-5
                                                    shadow-[0_30px_90px_rgba(0,0,0,.20)]
                                                "
                                            >

                                                <div
                                                    className="
                                                        flex
                                                        items-center
                                                        gap-4
                                                    "
                                                >

                                                    <div
                                                        className="
                                                            flex
                                                            h-11
                                                            w-11
                                                            items-center
                                                            justify-center
                                                            rounded-xl
                                                            bg-gray-100
                                                        "
                                                    >
                                                        ☰
                                                    </div>

                                                    <div>

                                                        <p className="font-bold">
                                                            {activeField.key ||
                                                                "Untitled"}
                                                        </p>

                                                        <p className="text-sm capitalize text-gray-500">
                                                            {activeField.type}
                                                        </p>

                                                    </div>

                                                </div>

                                            </div>

                                        ) : null}

                                    </DragOverlay>

                                </DndContext>

                            )}

                            {/* =================================================
                                ADD PROPERTY
                                IMPORTANT: INSIDE THE BUILDER CONTENT
                            ================================================= */}

                            <div
                                className="
                                    mt-6
                                    border-t
                                    border-gray-200/70
                                    pt-5
                                "
                            >

                                <AddFieldButton
                                    addField={addField}
                                />

                            </div>

                        </div>

                    </section>

                    {/* =================================================
                        LIVE PREVIEW
                    ================================================= */}

                    <section
                        className="
                            builder-panel
                            overflow-hidden
                            rounded-[32px]
                            border
                            border-white/80
                            bg-white/80
                            shadow-[0_30px_90px_rgba(0,0,0,.08)]
                            backdrop-blur-2xl
                        "
                    >

                        {/* ================= PREVIEW HEADER ================= */}

                        <div
                            className="
                                border-b
                                border-gray-100/80
                                bg-white/70
                                px-6
                                py-5
                                backdrop-blur-xl
                                sm:px-7
                            "
                        >

                            <div
                                className="
                                    flex
                                    flex-col
                                    gap-4
                                    sm:flex-row
                                    sm:items-center
                                    sm:justify-between
                                "
                            >

                                <div className="flex items-center gap-4">

                                    <div
                                        className="
                                            flex
                                            h-11
                                            w-11
                                            shrink-0
                                            items-center
                                            justify-center
                                            rounded-2xl
                                            bg-gray-100
                                        "
                                    >
                                        <Sparkles size={19} />
                                    </div>

                                    <div>

                                        <h2
                                            className="
                                                text-xl
                                                font-black
                                                tracking-tight
                                            "
                                        >
                                            Live Preview
                                        </h2>

                                        <p
                                            className="
                                                mt-0.5
                                                text-xs
                                                text-gray-400
                                            "
                                        >
                                            Your final card in real time
                                        </p>

                                    </div>

                                </div>

                                <ThemeSelector
                                    theme={theme}
                                    setTheme={setTheme}
                                />

                            </div>

                        </div>

                        {/* ================= PREVIEW ================= */}

                        <div
                            className="
                                relative
                                min-h-[420px]
                                overflow-hidden
                                bg-gradient-to-br
                                from-slate-50
                                via-white
                                to-indigo-50/30
                                p-5
                                sm:p-7
                            "
                        >

                            <div
                                className="
                                    pointer-events-none
                                    absolute
                                    -right-20
                                    -top-20
                                    h-60
                                    w-60
                                    rounded-full
                                    bg-blue-400/10
                                    blur-3xl
                                "
                            />

                            <div
                                className="
                                    pointer-events-none
                                    absolute
                                    -bottom-20
                                    -left-20
                                    h-60
                                    w-60
                                    rounded-full
                                    bg-purple-400/10
                                    blur-3xl
                                "
                            />

                            <div className="relative">

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

                    </section>

                </div>

            </main>

        </div>
    );
}