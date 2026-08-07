import toast from "react-hot-toast";
import {
    Copy,
    ImageDown,
    Trash2,
    Undo2,
    Redo2,
} from "lucide-react";

import { exportCard } from "../../utils/exportCard";
import { generateJSON } from "../../utils/jsonHelpers";

export default function Toolbar({
                                    fields,
                                    setFields,
                                    previewRef,

                                    undo,
                                    redo,

                                    canUndo,
                                    canRedo,
                                }) {

    const json = generateJSON(fields);

    const copyJSON = async () => {

        await navigator.clipboard.writeText(
            JSON.stringify(json, null, 2)
        );

        toast.success("JSON copied successfully.");

    };

    const clearBuilder = () => {

        setFields([]);

        toast.success("Builder cleared.");

    };

    return (

        <div className="flex flex-wrap items-center justify-end gap-3">

            {/* Undo */}

            <button
                onClick={undo}
                disabled={!canUndo}
                className={`
                    flex items-center gap-2 rounded-xl px-5 py-3
                    font-semibold transition-all duration-300
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
                    font-semibold transition-all duration-300
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
                onClick={() => exportCard(previewRef)}
                className="flex items-center gap-2 rounded-xl bg-black px-5 py-3 font-semibold text-white transition hover:bg-neutral-800"
            >

                <ImageDown size={18} />

                Export PNG

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

    );

}