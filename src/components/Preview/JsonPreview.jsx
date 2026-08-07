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
            fields = [],
            theme = "apple",
            background = "white",
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

        const backgrounds = {
            white: "#ffffff",
            dark: "#111827",
            blue: "#2563eb",
            purple: "#7c3aed",
            orange: "#ea580c",
            gradient:
                "linear-gradient(135deg,#4f46e5,#9333ea,#ec4899)",
        };

        const current = themeMap[theme] || apple;

        const nameField = (fields || []).find(
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

                <div className="rounded-3xl p-8 transition-all duration-300"
                     style={{
                         background:
                             backgrounds[background] || "#ffffff",
                     }}>

                    {/* macOS Window */}

                    <div
                        className="overflow-hidden rounded-3xl shadow-[0_25px_70px_rgba(0,0,0,.18)]"
                        style={{
                            background: current.background,
                            border: `1px solid ${current.border}`,
                        }}
                    >

                        {/* ================= Header ================= */}

                        <div
                            className="flex items-center justify-between px-5 py-4"
                            style={{
                                background: current.header,
                                borderBottom: `1px solid ${current.border}`,
                            }}
                        >

                            {/* Left */}

                            <div className="flex items-center gap-4">

                                <div className="flex gap-2">

                                    <div className="h-3 w-3 rounded-full bg-red-500"></div>
                                    <div className="h-3 w-3 rounded-full bg-yellow-400"></div>
                                    <div className="h-3 w-3 rounded-full bg-green-500"></div>

                                </div>

                                <div
                                    className="flex items-center gap-2"
                                    style={{
                                        color: current.text,
                                    }}
                                >
                                    <FileJson size={16}/>

                                    <span className="text-sm font-semibold">
                {fileName}
            </span>

                                </div>

                            </div>

                            {/* Right */}

                            <div
                                className="hidden items-center gap-4 text-xs md:flex"
                                style={{
                                    color: current.text,
                                    opacity: .65,
                                }}
                            >

                                <span>JSON</span>

                                <span>UTF-8</span>

                            </div>

                        </div>

                        {/* ================= JSON ================= */}

                        <SyntaxHighlighter
                            language="json"
                            style={oneDark}
                            wrapLongLines
                            showLineNumbers
                            customStyle={{

                                margin: 0,
                                padding: "34px",
                                background: current.background,
                                color: current.text,
                                borderRadius: 0,
                                fontSize: "14px",
                                fontWeight:500,
                                fontFamily: "JetBrains Mono",
                                lineHeight: "1.9",
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