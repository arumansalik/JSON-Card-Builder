import {
    Download,
    Image,
    FileImage,
} from "lucide-react";


import { exportCard } from "../../utils/exportCard";

import AspectRatioSelector from "./AspectRatioSelector";
import BackgroundSelector from "./BackgroundSelector";
import PaddingSelector from "./PaddingSelector";
import QualitySelector from "./QualitySelector";

export default function ExportStudio({

                                         previewRef,

                                         aspectRatio,
                                         setAspectRatio,

                                         background,
                                         setBackground,

                                         padding,
                                         setPadding,

                                         quality,
                                         setQuality,

                                         fileName,
                                         setFileName,

                                         onClose,

                                     }) {

    return (

        <div
            className="
        grid
        h-full
        gap-10
        xl:grid-cols-[430px_1fr]
    "
        >

            {/* ====================================== */}
            {/* LEFT SETTINGS */}
            {/* ====================================== */}

            <div
                className="
        flex
        min-h-[780px]
        flex-col
        rounded-[36px]
                border
                border-gray-200
                bg-white
                p-8
                shadow-sm
            "
            >

                <div>

                    <div className="flex items-center gap-3">

                        <Image size={24}/>

                        <h2 className="text-3xl font-black">

                            Export Settings

                        </h2>

                    </div>

                    <p className="mt-2 text-gray-500">

                        Customize your exported image.

                    </p>

                </div>

                <div className="mt-8 space-y-8 overflow-y-auto pr-2">

                    <AspectRatioSelector
                        value={aspectRatio}
                        onChange={setAspectRatio}
                    />

                    <BackgroundSelector
                        value={background}
                        onChange={setBackground}
                    />

                    <PaddingSelector
                        value={padding}
                        onChange={setPadding}
                    />

                    <QualitySelector
                        value={quality}
                        onChange={setQuality}
                    />

                    <div className="rounded-2xl border p-5">

                        <div className="mb-3 flex items-center gap-2">

                            <FileImage size={18}/>

                            <h3 className="font-bold">

                                File Name

                            </h3>

                        </div>

                        <input
                            value={fileName}
                            onChange={(e) => setFileName(e.target.value)}
                            placeholder="Business Card"
                            className="
                            w-full
                            rounded-xl
                            border
                            p-3
                            outline-none
                            focus:border-black
                        "
                        />

                    </div>

                </div>

            </div>

            {/* ====================================== */}
            {/* RIGHT */}
            {/* ====================================== */}

            <div
                className="
                flex
                h-full
                flex-col
                rounded-[32px]
                border
                border-gray-200
                bg-white
                p-8
                shadow-sm
            "
            >

                {/* Preview Header */}

                <div className="mb-8 border-b border-gray-200 pb-6">

                    <h2 className="text-3xl font-black">

                        Live Preview

                    </h2>

                    <p className="mt-2 text-gray-500">

                        Preview exactly what will be exported.

                    </p>

                </div>

                <div
                    className="
        flex-1
        flex
        items-center
        justify-center
        rounded-3xl
        border-2
        border-dashed
        border-gray-300
        bg-gray-50
    "
                >

                    <div className="text-center">

                        <h3 className="text-2xl font-bold">

                            Live Preview

                        </h3>

                        <p className="mt-3 text-gray-500">

                            The preview is shown on the main Builder page.

                            Export Studio only changes the export settings.

                        </p>

                    </div>

                </div>

                {/* Export Button */}

                <button
                    onClick={() => {

                        exportCard(
                            previewRef,
                            quality,
                            fileName
                        );

                        onClose();

                    }}
                    className="
                    mt-8
                    flex
                    h-16
                    w-full
                    items-center
                    justify-center
                    gap-3
                    rounded-2xl
                    bg-black
                    text-xl
                    font-bold
                    text-white
                    transition-all
                    duration-300
                    hover:scale-[1.01]
                    hover:bg-neutral-800
                "
                >

                    <Download size={24}/>

                    Export PNG

                </button>

            </div>

        </div>

    );

}