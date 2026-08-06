import useJsonBuilder from "../../hooks/useJsonBuilder";

import FieldRow from "./FieldRow";
import AddFieldButton from "./AddFieldButton";

import JsonPreview from "../Preview/JsonPreview";
import Toolbar from "../Toolbar/Toolbar";

import { validateFields } from "../../utils/validator";

export default function Builder() {
    const {
        fields,
        setFields,
        addField,
        deleteField,
        updateField,
    } = useJsonBuilder();

    const errors = validateFields(fields);

    return (
        <div className="space-y-8">
            {/* ================= HEADER ================= */}

            <div className="flex items-start justify-between">
                <div>
                    <h1 className="text-4xl font-bold text-gray-900">
                        JSON Card Studio
                    </h1>

                    <p className="mt-2 text-gray-500">
                        Build your custom JSON business card dynamically.
                    </p>
                </div>

                <Toolbar
                    fields={fields}
                    setFields={setFields}
                />
            </div>

            {/* ================= MAIN CONTENT ================= */}

            <div className="grid grid-cols-1 gap-8 lg:grid-cols-2">

                {/* ================= BUILDER ================= */}

                <div className="rounded-2xl border border-gray-200 bg-white shadow-sm">

                    {/* Card Header */}

                    <div className="border-b border-gray-200 p-6">

                        <h2 className="text-2xl font-semibold">
                            JSON Builder
                        </h2>

                        <p className="mt-1 text-sm text-gray-500">
                            Add custom key-value pairs.
                        </p>

                    </div>

                    {/* Card Body */}

                    <div className="space-y-5 p-6">

                        {fields.length === 0 ? (
                            <div className="rounded-lg border border-dashed border-gray-300 py-10 text-center text-gray-500">
                                No properties added.
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

                        {/* Add Property */}

                        <AddFieldButton
                            addField={addField}
                        />

                    </div>

                </div>

                {/* ================= JSON PREVIEW ================= */}

                <div className="rounded-2xl border border-gray-200 bg-white shadow-sm">

                    {/* Card Header */}

                    <div className="border-b border-gray-200 p-6">

                        <h2 className="text-2xl font-semibold">
                            Live JSON Preview
                        </h2>

                        <p className="mt-1 text-sm text-gray-500">
                            Generated JSON updates in real time.
                        </p>

                    </div>

                    {/* Card Body */}

                    <div className="p-6">

                        <JsonPreview
                            fields={fields}
                        />

                    </div>

                </div>

            </div>
        </div>
    );
}