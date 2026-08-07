import { useState } from "react";
import toast from "react-hot-toast";
import {
    Copy,
    ImageDown,
    Trash2,
    Undo2,
    Redo2,
} from "lucide-react";

import ExportModal from "../ExportStudio/ExportModal";
import ExportStudio from "../ExportStudio/ExportStudio";
import { generateJSON } from "../../utils/jsonHelpers";

export default function Toolbar({
                                    fields,

                                    clearFields,

                                    previewRef,

                                    undo,
                                    redo,

                                    canUndo,
                                    canRedo,

                                    // Export Settings
                                    theme,

                                    aspectRatio,
                                    setAspectRatio,

                                    background,
                                    setBackground,

                                    padding,
                                    setPadding,

                                    quality,
                                    setQuality,

                                    shadow,
                                    setShadow,

                                    fileName,
                                    setFileName,
                                }) {
    const [openExport, setOpenExport] = useState(false);

    const json = generateJSON(fields);

    async function copyJSON() {
        try {
            await navigator.clipboard.writeText(
                JSON.stringify(json, null, 2)
            );

            toast.success("JSON copied successfully.");
        } catch (errors) {
            toast.error("Failed to copy JSON.");
        }
    }

    function clearBuilder() {
        clearFields?.();

        localStorage.removeItem("json-card-builder");

        toast.success("Builder cleared.");
    }

    return (
        <>
            <div className="flex flex-wrap items-center justify-end gap-3">

                {/* Undo */}
                <button
                    onClick={undo}
                    disabled={!canUndo}
                    className={`
                        flex items-center gap-2 rounded-xl px-5 py-3
                        font-semibold transition-all
                        ${
                        canUndo
                            ? "bg-black text-white hover:bg-neutral-800"
                            : "cursor-not-allowed bg-gray-200 text-gray-400"
                    }
                    `}
                >
                    <Undo2 size={18} />
                    Undo
                </button>

                {/* Redo */}
                <button
                    onClick={redo}
                    disabled={!canRedo}
                    className={`
                        flex items-center gap-2 rounded-xl px-5 py-3
                        font-semibold transition-all
                        ${
                        canRedo
                            ? "bg-black text-white hover:bg-neutral-800"
                            : "cursor-not-allowed bg-gray-200 text-gray-400"
                    }
                    `}
                >
                    <Redo2 size={18} />
                    Redo
                </button>

                {/* Copy */}
                <button
                    onClick={copyJSON}
                    className="flex items-center gap-2 rounded-xl bg-black px-5 py-3 font-semibold text-white transition hover:bg-neutral-800"
                >
                    <Copy size={18} />
                    Copy
                </button>

                {/* Export */}
                <button
                    onClick={() => setOpenExport(true)}
                    className="flex items-center gap-2 rounded-xl bg-blue-600 px-5 py-3 font-semibold text-white transition hover:bg-blue-700"
                >
                    <ImageDown size={18} />
                    Export Studio
                </button>

                {/* Clear */}
                <button
                    onClick={clearBuilder}
                    className="flex items-center gap-2 rounded-xl bg-red-600 px-5 py-3 font-semibold text-white transition hover:bg-red-700"
                >
                    <Trash2 size={18} />
                    Clear
                </button>
            </div>

            <ExportModal
                open={openExport}
                onClose={() => setOpenExport(false)}
            >
                <ExportStudio
                    previewRef={previewRef}
                    fields={fields}
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
                    onClose={() => setOpenExport(false)}
                />
            </ExportModal>
        </>
    );
}