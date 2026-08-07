import { forwardRef } from "react";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { oneDark } from "react-syntax-highlighter/dist/esm/styles/prism";
import { FileJson } from "lucide-react";

import { generateJSON } from "../../utils/jsonHelpers";

import apple from "../../themes/apple";
import vscode from "../../themes/vscode";
import github from "../../themes/github";
import terminal from "../../themes/terminal";

const JsonPreview = forwardRef(
    (
        {
            fields,
            theme = "apple",
        },
        ref
    ) => {

        const json = generateJSON(fields);

        const themeMap = {
            apple,
            vscode,
            github,
            terminal,
        };

        const current = themeMap[theme] || apple;

        const nameField = fields.find(
            (field) =>
                field.key?.trim().toLowerCase() === "name"
        );

        const fileName = nameField?.value
            ? `${nameField.value}'s Business Card.json`
            : "Business Card.json";

        return (

            <div
                ref={ref}
                className="w-full transition-all duration-300"
            >

                {/* Canvas */}

                <div className="rounded-3xl bg-neutral-100 p-8">

                    {/* macOS Window */}

                    <div
                        className="overflow-hidden rounded-3xl shadow-2xl"
                        style={{
                            background: current.background,
                            border: `1px solid ${current.border}`,
                        }}
                    >

                        {/* ================= Header ================= */}

                        <div
                            className="flex items-center px-5 py-4"
                            style={{
                                background: current.header,
                                borderBottom: `1px solid ${current.border}`,
                            }}
                        >

                            <div className="flex gap-2">

                                <div className="h-3 w-3 rounded-full bg-red-500" />

                                <div className="h-3 w-3 rounded-full bg-yellow-400" />

                                <div className="h-3 w-3 rounded-full bg-green-500" />

                            </div>

                            <div
                                className="mx-auto flex items-center gap-2"
                                style={{
                                    color: current.text,
                                }}
                            >

                                <FileJson size={16} />

                                <span className="text-sm font-semibold">
                                    {fileName}
                                </span>

                            </div>

                        </div>

                        {/* ================= JSON ================= */}

                        <SyntaxHighlighter
                            language="json"
                            style={oneDark}
                            wrapLongLines
                            customStyle={{
                                margin: 0,
                                padding: "28px",
                                background: current.background,
                                color: current.text,
                                borderRadius: 0,
                                fontSize: "15px",
                                lineHeight: "1.8",
                                overflow: "visible",
                            }}
                        >
                            {JSON.stringify(json, null, 2)}
                        </SyntaxHighlighter>

                    </div>

                </div>

            </div>

        );

    }
);

export default JsonPreview;