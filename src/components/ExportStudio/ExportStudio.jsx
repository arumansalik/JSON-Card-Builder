import {
    Download,
    Image,
    FileImage,
} from "lucide-react";

import JsonPreview from "../Preview/JsonPreview";

import { exportCard } from "../../utils/exportCard";

import AspectRatioSelector from "./AspectRatioSelector";
import BackgroundSelector from "./BackgroundSelector";
import PaddingSelector from "./PaddingSelector";
import QualitySelector from "./QualitySelector";

export default function ExportStudio({

                                         previewRef,

                                         fields,

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

                                         onClose,

                                     }) {

    return (

        <div className="grid gap-10 xl:grid-cols-[420px_1fr]">

            {/* ====================================== */}
            {/* LEFT PANEL */}
            {/* ====================================== */}

            <div className="space-y-8">

                {/* Header */}

                <div className="rounded-3xl border border-gray-200 bg-white p-6 shadow-sm">

                    <div className="flex items-center gap-3">

                        <Image size={22} />

                        <h3 className="text-2xl font-bold">

                            Export Settings

                        </h3>

                    </div>

                    <p className="mt-2 text-gray-500">

                        Customize your exported image.

                    </p>

                </div>

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

                {/* Filename */}

                <div className="rounded-3xl border bg-white p-6">

                    <div className="mb-3 flex items-center gap-2">

                        <FileImage size={18} />

                        <h3 className="font-bold">

                            File Name

                        </h3>

                    </div>

                    <input
                        value={fileName}
                        onChange={(e) =>
                            setFileName(e.target.value)
                        }
                        className="
                            w-full
                            rounded-xl
                            border
                            p-3
                            outline-none
                            focus:border-black
                        "
                        placeholder="Business Card"
                    />

                </div>

                {/* Export */}

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
                        flex
                        w-full
                        items-center
                        justify-center
                        gap-3
                        rounded-2xl
                        bg-black
                        px-6
                        py-4
                        text-lg
                        font-bold
                        text-white
                        transition-all
                        hover:scale-[1.02]
                        hover:bg-neutral-800
                    "
                >

                    <Download size={22} />

                    Export PNG

                </button>

            </div>

            {/* ====================================== */}
            {/* RIGHT PANEL */}
            {/* ====================================== */}

            <div className="rounded-[32px] border border-gray-200 bg-white p-8 shadow-sm">

                <div className="mb-6 flex items-center justify-between">

                    <div>

                        <h3 className="text-2xl font-bold">

                            Live Preview

                        </h3>

                        <p className="text-gray-500">

                            This is exactly what will be exported.

                        </p>

                    </div>

                </div>

                <div className="flex justify-center">

                    <div className="w-full max-w-4xl">

                        <JsonPreview

                            ref={previewRef}

                            fields={fields}

                            theme={theme}

                            aspectRatio={aspectRatio}

                            background={background}

                            padding={padding}

                            shadow={shadow}

                        />

                    </div>

                </div>

            </div>

        </div>

    );

}