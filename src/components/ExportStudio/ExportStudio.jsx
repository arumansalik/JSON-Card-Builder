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
        xl:grid-cols-[500px_1fr]
    "
        >

            {/* ====================================== */}
            {/* LEFT SETTINGS */}
            {/* ====================================== */}

            <div
                className="
        flex
flex-col
rounded-[36px]
border
border-gray-200
bg-white
p-10
shadow-xl
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

                <div className="mt-10 flex flex-1 flex-col gap-7">
                    <div className="rounded-3xl border border-gray-200 bg-gray-50 p-7 shadow-sm">
                        <AspectRatioSelector
                            value={aspectRatio}
                            onChange={setAspectRatio}
                        />
                    </div>


                    <div className="rounded-3xl border border-gray-200 bg-gray-50 p-7 shadow-sm">
                        <BackgroundSelector
                            value={background}
                            onChange={setBackground}
                        />
                    </div>


                    <div className="rounded-3xl border border-gray-200 bg-gray-50 p-7 shadow-sm">
                        <PaddingSelector
                            value={padding}
                            onChange={setPadding}
                        />
                    </div>



                    <div className="rounded-3xl border border-gray-200 bg-gray-50 p-7 shadow-sm">
                        <QualitySelector
                            value={quality}
                            onChange={setQuality}
                        />
                    </div>

                    <div className="rounded-3xl border border-gray-200 bg-gray-50 p-7 shadow-sm">

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
        mt-3
        w-full
        rounded-xl
        border
        border-gray-300
        bg-white
        px-4
        py-3
        text-base
        outline-none
        transition
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
        min-h-[780px]
        flex-col
        rounded-[36px]
        border
        border-gray-200
        bg-gradient-to-br
        from-slate-50
        via-white
        to-slate-100
        p-10
        shadow-sm
    "
            >

                {/* Hero */}

                <div
                    className="mx-auto flex h-24 w-24 items-center justify-center rounded-3xl bg-black text-white shadow-xl">

                    <Download size={40}/>

                </div>

                <div className="mt-8 text-center">

                    <h2 className="text-4xl font-black tracking-tight text-gray-900">

                        Ready to Export

                    </h2>

                    <p className="mx-auto mt-4 max-w-xl text-lg leading-8 text-gray-500">

                        Your JSON Card is ready.

                        Configure the export settings on the left and click
                        <span className="font-semibold text-black"> Export PNG </span>
                        to download a beautiful high-quality image.

                    </p>

                </div>

                {/* Features */}

                <div className="mt-12 grid grid-cols-2 gap-5">

                    <div className="rounded-2xl border border-gray-200 bg-white p-5 shadow-sm">

                        <h3 className="font-bold text-gray-900">

                            High Resolution

                        </h3>

                        <p className="mt-2 text-sm leading-6 text-gray-500">

                            Export crisp PNG images with multiple quality options.

                        </p>

                    </div>

                    <div className="rounded-2xl border border-gray-200 bg-white p-5 shadow-sm">

                        <h3 className="font-bold text-gray-900">

                            Custom Layout

                        </h3>

                        <p className="mt-2 text-sm leading-6 text-gray-500">

                            Adjust padding, aspect ratio and background before exporting.

                        </p>

                    </div>

                    <div className="rounded-2xl border border-gray-200 bg-white p-5 shadow-sm">

                        <h3 className="font-bold text-gray-900">

                            Professional Themes

                        </h3>

                        <p className="mt-2 text-sm leading-6 text-gray-500">

                            Every selected theme is exported exactly as shown.

                        </p>

                    </div>

                    <div className="rounded-2xl border border-gray-200 bg-white p-5 shadow-sm">

                        <h3 className="font-bold text-gray-900">

                            Instant Download

                        </h3>

                        <p className="mt-2 text-sm leading-6 text-gray-500">

                            One click is all it takes to generate your JSON card.

                        </p>

                    </div>

                </div>

                {/* Export Button */}

                <div className="mt-auto pt-10">

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
                shadow-xl
                transition-all
                duration-300
                hover:-translate-y-1
                hover:bg-neutral-800
            "
                    >

                        <Download size={24}/>

                        Export PNG

                    </button>

                </div>

            </div>

        </div>

    );

}