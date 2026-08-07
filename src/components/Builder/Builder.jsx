import { useRef, useState } from "react";

import useJsonBuilder from "../../hooks/useJsonBuilder";

import Toolbar from "../Toolbar/Toolbar";
import JsonPreview from "../Preview/JsonPreview";
import ThemeSelector from "../ThemeSelector";

import AddFieldButton from "./AddFieldButton";
import FieldRow from "./FieldRow";

import { validateFields } from "../../utils/validator";

export default function Builder() {
    const {
        fields,
        setFields,
        addField,
        deleteField,
        updateField,
    } = useJsonBuilder();

    const previewRef = useRef(null);

    const [theme, setTheme] = useState("apple");

    const errors = validateFields(fields);

    return (
        <div className="space-y-8">

            {/* ================= HEADER ================= */}

            <div className="flex flex-col gap-6 lg:flex-row lg:items-center lg:justify-between">

                <div>

                    <h1 className="text-5xl font-black tracking-tight text-gray-900">
                        JSON Card Studio
                    </h1>

                    <p className="mt-3 max-w-2xl text-lg text-gray-500">
                        Build, customize and export beautiful JSON cards.
                    </p>

                </div>

                <Toolbar
                    fields={fields}
                    setFields={setFields}
                    previewRef={previewRef}
                />

            </div>

            {/* ================= MAIN ================= */}

            <div className="grid grid-cols-1 gap-8 xl:grid-cols-[1fr_1.2fr]">

                {/* ================= BUILDER ================= */}

                <div className="rounded-3xl border border-gray-200 bg-white shadow-lg">

                    <div className="border-b border-gray-200 p-6">

                        <h2 className="text-2xl font-bold">
                            JSON Builder
                        </h2>

                        <p className="mt-2 text-gray-500">
                            Create your JSON card using custom properties.
                        </p>

                    </div>

                    <div className="space-y-5 p-6">

                        {fields.length === 0 ? (

                            <div className="rounded-3xl border-2 border-dashed border-gray-300 py-20">

                                <div
                                    className="mx-auto flex h-16 w-16 items-center justify-center rounded-2xl bg-gray-100 text-3xl">

                                    📄

                                </div>

                                <h3 className="mt-5 text-xl text-center font-bold text-gray-800">

                                    Start Building

                                </h3>

                                <p className="mx-auto mt-2 max-w-xs text-center text-gray-500">

                                    Click "Add Property" below to create your first JSON field.

                                </p>

                            </div>

                        ) : (

                            fields.map((field) => (

                                <FieldRow
                                    key={field.id}
                                    field={field}
                                    updateField={updateField}
                                    deleteField={deleteField}
                                    errors={errors}
                                />

                            ))

                        )}

                        <AddFieldButton
                            addField={addField}
                        />

                    </div>

                </div>

                {/* ================= PREVIEW ================= */}

                <div className="rounded-3xl border border-gray-200 bg-white shadow-lg">

                    {/* Header */}

                    <div className="border-b border-gray-200 px-6 py-5">

                        <div className="flex items-start justify-between">

                            {/* Left */}

                            <div>

                                <h2 className="text-2xl font-bold text-gray-900">
                                    Live Preview
                                </h2>

                                <p className="mt-1 text-sm text-gray-500">
                                    Preview exactly what will be exported.
                                </p>

                            </div>

                            {/* Right */}

                            <ThemeSelector
                                theme={theme}
                                setTheme={setTheme}
                            />

                        </div>

                    </div>



                {/* Preview */}

                <div className="p-8">

                    <JsonPreview
                        ref={previewRef}
                        fields={fields}
                        theme={theme}
                    />

                </div>

            </div>

        </div>

</div>
)
    ;
}