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

            aspectRatio = "16:9",

            background = "white",

            padding = 32,

            shadow = true,
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

        const aspectRatioStyle = {
            "16:9": {
                width: "1200px",
                aspectRatio: "16 / 9",
            },

            "1:1": {
                width: "1000px",
                aspectRatio: "1 / 1",
            },

            "9:16": {
                width: "700px",
                aspectRatio: "9 / 16",
            },

            "4:5": {
                width: "900px",
                aspectRatio: "4 / 5",
            },

            "3:4": {
                width: "900px",
                aspectRatio: "3 / 4",
            },

            "A4": {
                width: "900px",
                aspectRatio: "210 / 297",
            },
        };

        const backgrounds = {

            white: "#ffffff",

            dark: "#111827",

            blue: "#2563eb",

            purple: "#7c3aed",

            orange: "#ea580c",

            gradient:
                "linear-gradient(135deg,#4f46e5,#9333ea,#ec4899)",

            transparent: "transparent",
        };

        const nameField = fields.find(
            field =>
                field.key?.trim().toLowerCase() === "name"
        );

        const fileName = nameField?.value
            ? `${nameField.value}'s Business Card.json`
            : "Business Card.json";

        return (

            <div
                style={{
                    ...aspectRatioStyle[aspectRatio],
                    maxWidth: "100%",
                }}
            >

                {/* Export Canvas */}

                <div
                    ref={ref}
                    className="
                    flex
                    h-full
                    w-full
                    items-center
                    justify-center
                    rounded-3xl
                    transition-all
                    duration-300
                "
                    style={{
                        padding: `${padding}px`,
                        background:
                            backgrounds[background] ?? "#ffffff",
                    }}
                >

                    {/* macOS Window */}

                    <div
                        className={`
                        
                        overflow-hidden
                        rounded-3xl
                        transition-all
                        duration-300
                        
                    `}
                        style={{
                            width: "100%",
                            height: "100%",
                            background:
                            current.background,

                            border: `1px solid ${current.border}`,
                            boxShadow: shadow
                                ? "0 25px 70px rgba(0,0,0,.18)"
                                : "none",
                        }}
                    >

                        {/* Header */}

                        <div
                            className="
                            flex
                            items-center
                            justify-between
                            px-6
                            py-4
                        "
                            style={{
                                background:
                                current.header,

                                borderBottom:
                                    `1px solid ${current.border}`,
                            }}
                        >

                            <div className="flex items-center gap-4">

                                <div className="flex gap-2">

                                    <div className="h-3 w-3 rounded-full bg-red-500"/>

                                    <div className="h-3 w-3 rounded-full bg-yellow-400"/>

                                    <div className="h-3 w-3 rounded-full bg-green-500"/>

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

                            <div
                                className="hidden md:flex items-center gap-4 text-xs"
                                style={{
                                    color: current.text,
                                    opacity: .7,
                                }}
                            >

                                <span>JSON</span>

                                <span>UTF-8</span>

                            </div>

                        </div>

                        {/* JSON */}

                        <SyntaxHighlighter
                            language="json"
                            style={oneDark}
                            showLineNumbers
                            wrapLongLines
                            customStyle={{

                                margin: 0,
                                width: "100%",

                                padding: "36px",

                                background:
                                current.background,

                                color:
                                current.text,

                                borderRadius: 0,

                                fontSize: "14px",

                                fontWeight: 500,

                                lineHeight: "1.9",

                                fontFamily:
                                    "JetBrains Mono",

                                overflow: "visible",

                            }}
                        >

                            {JSON.stringify(
                                json,
                                null,
                                2
                            )}

                        </SyntaxHighlighter>

                    </div>

                </div>

            </div>

        );

    });

export default JsonPreview;