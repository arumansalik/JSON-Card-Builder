import toast from "react-hot-toast";
import { Copy, Download, Trash2 } from "lucide-react";

import { generateJSON } from "../../utils/jsonHelpers";
import { downloadJSON } from "../../utils/downloader";

export default function Toolbar({
                                    fields,
                                    setFields,
                                }) {
    const json = generateJSON(fields);

    const copyJSON = async () => {
        await navigator.clipboard.writeText(
            JSON.stringify(json, null, 2)
        );

        toast.success("JSON Copied");
    };

    const clearBuilder = () => {
        setFields([]);

        toast.success("Builder Cleared");
    };

    return (
        <div className="mb-8 flex items-center justify-end gap-3">

            <button
                onClick={copyJSON}
                className="flex items-center gap-2 rounded-lg bg-black px-5 py-2.5 text-white transition hover:bg-neutral-800"
            >
                <Copy size={18} />
                Copy
            </button>

            <button
                onClick={() => downloadJSON(json)}
                className="flex items-center gap-2 rounded-lg bg-black px-5 py-2.5 text-white transition hover:bg-neutral-800"
            >
                <Download size={18} />
                Download
            </button>

            <button
                onClick={clearBuilder}
                className="flex items-center gap-2 rounded-lg bg-black px-5 py-2.5 text-white transition hover:bg-neutral-800"
            >
                <Trash2 size={18} />
                Clear
            </button>

        </div>
    );
}