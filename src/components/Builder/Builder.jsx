import { useRef, useState } from "react";

import useJsonBuilder from "../../hooks/useJsonBuilder";
import SettingsPanel from "../Settings/SettingsPanel";
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
    const [aspectRatio, setAspectRatio] = useState("16:9");

    const errors = validateFields(fields);

    return (
        <div className="space-y-8">

            {/* ====================================================== */}
            {/* HEADER */}
            {/* ====================================================== */}

            <div className="flex flex-col gap-6 lg:flex-row lg:items-center lg:justify-between">

                <div>

                    <h1 className="text-5xl font-black tracking-tight text-gray-900">
                        JSON Card Studio
                    </h1>

                    <p className="mt-3 max-w-2xl text-lg text-gray-500">
                        Build, customize and export beautiful JSON cards for
                        portfolios, resumes and social media.
                    </p>

                </div>

                <Toolbar
                    fields={fields}
                    setFields={setFields}
                    previewRef={previewRef}
                />

            </div>

            {/* ====================================================== */}
            {/* MAIN */}
            {/* ====================================================== */}

            <div className="grid grid-cols-1 gap-8 xl:grid-cols-[1fr_1.3fr_320px]">

                {/* ====================================================== */}
                {/* BUILDER */}
                {/* ====================================================== */}

                <div className="rounded-3xl border border-gray-200 bg-white shadow-lg">

                    <div className="border-b border-gray-200 p-6">

                        <h2 className="text-2xl font-bold">
                            JSON Builder
                        </h2>

                        <p className="mt-2 text-gray-500">
                            Create your JSON business card using dynamic properties.
                        </p>

                    </div>

                    <div className="space-y-5 p-6">

                        {fields.length === 0 ? (

                            <div className="rounded-2xl border-2 border-dashed border-gray-300 py-16 text-center">

                                <p className="text-lg font-semibold text-gray-700">
                                    No properties added
                                </p>

                                <p className="mt-2 text-gray-400">
                                    Click Add Property to begin.
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

                {/* ====================================================== */}
                {/* PREVIEW */}
                {/* ====================================================== */}

                <div className="rounded-3xl border border-gray-200 bg-white shadow-lg">

                    <div className="border-b border-gray-200 p-6">

                        <h2 className="text-2xl font-bold">
                            Live Preview
                        </h2>

                        <p className="mt-2 text-gray-500">
                            Preview exactly what will be exported.
                        </p>

                    </div>

                    <div className="flex justify-center p-8">

                        <div className="w-full max-w-3xl">

                            <JsonPreview
                                ref={previewRef}
                                fields={fields}
                                theme={theme}
                            />

                        </div>

                    </div>

                </div>

                {/* ====================================================== */}
                {/* SETTINGS */}
                {/* ====================================================== */}

                <SettingsPanel
                    theme={theme}
                    setTheme={setTheme}
                    aspectRatio={aspectRatio}
                    setAspectRatio={setAspectRatio}
                />

            </div>

        </div>
    );
}