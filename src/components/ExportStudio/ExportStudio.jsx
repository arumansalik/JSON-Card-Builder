import {
    Download,
    Image,
    FileImage,
    Sparkles,
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
        <div className="w-full">

            {/* =====================================================
                MAIN EXPORT SETTINGS CONTAINER
            ===================================================== */}

            <div
                className="
                    w-full
                    rounded-[32px]
                    border
                    border-gray-200/80
                    bg-white
                    p-5
                    shadow-[0_25px_80px_rgba(0,0,0,0.06)]
                    sm:p-7
                    lg:p-9
                "
            >

                {/* =================================================
                    HEADER
                ================================================= */}

                <div
                    className="
                        flex
                        flex-col
                        gap-5
                        border-b
                        border-gray-100
                        pb-7
                        lg:flex-row
                        lg:items-center
                        lg:justify-between
                    "
                >

                    {/* LEFT HEADER */}

                    <div className="flex items-center gap-4">

                        <div
                            className="
                                flex
                                h-14
                                w-14
                                shrink-0
                                items-center
                                justify-center
                                rounded-2xl
                                bg-black
                                text-white
                                shadow-lg
                            "
                        >
                            <Image size={25} />
                        </div>

                        <div>

                            <h2
                                className="
                                    text-3xl
                                    font-black
                                    tracking-tight
                                    text-gray-950
                                    sm:text-4xl
                                "
                            >
                                Export Settings
                            </h2>

                            <p
                                className="
                                    mt-1.5
                                    text-sm
                                    text-gray-500
                                    sm:text-base
                                "
                            >
                                Customize every detail of your exported
                                JSON card before downloading it.
                            </p>

                        </div>

                    </div>

                    {/* STATUS */}

                    <div
                        className="
                            inline-flex
                            w-fit
                            shrink-0
                            items-center
                            gap-2
                            rounded-full
                            border
                            border-green-200
                            bg-green-50
                            px-4
                            py-2
                            text-sm
                            font-semibold
                            text-green-700
                        "
                    >

                        <span
                            className="
                                h-2
                                w-2
                                rounded-full
                                bg-green-500
                            "
                        />

                        Ready to export

                    </div>

                </div>


                {/* =================================================
                    SETTINGS GRID
                ================================================= */}

                <div
                    className="
                        mt-7
                        grid
                        grid-cols-1
                        gap-5
                        lg:grid-cols-2
                        xl:grid-cols-[1fr_1.2fr_1fr_1fr]
                    "
                >

                    {/* =================================================
                        ASPECT RATIO
                    ================================================= */}

                    <div
                        className="
                            min-w-0
                            rounded-[26px]
                            border
                            border-gray-200
                            bg-gray-50/70
                            p-5
                            transition-all
                            duration-300
                            hover:border-gray-300
                            hover:bg-white
                            hover:shadow-lg
                        "
                    >

                        <AspectRatioSelector
                            value={aspectRatio}
                            onChange={setAspectRatio}
                        />

                    </div>


                    {/* =================================================
                        BACKGROUND
                    ================================================= */}

                    <div
                        className="
                            min-w-0
                            rounded-[26px]
                            border
                            border-gray-200
                            bg-gray-50/70
                            p-5
                            transition-all
                            duration-300
                            hover:border-gray-300
                            hover:bg-white
                            hover:shadow-lg
                        "
                    >

                        <BackgroundSelector
                            value={background}
                            onChange={setBackground}
                        />

                    </div>


                    {/* =================================================
                        PADDING
                    ================================================= */}

                    <div
                        className="
                            min-w-0
                            rounded-[26px]
                            border
                            border-gray-200
                            bg-gray-50/70
                            p-5
                            transition-all
                            duration-300
                            hover:border-gray-300
                            hover:bg-white
                            hover:shadow-lg
                        "
                    >

                        <PaddingSelector
                            value={padding}
                            onChange={setPadding}
                        />

                    </div>


                    {/* =================================================
                        QUALITY
                    ================================================= */}

                    <div
                        className="
                            min-w-0
                            rounded-[26px]
                            border
                            border-gray-200
                            bg-gray-50/70
                            p-5
                            transition-all
                            duration-300
                            hover:border-gray-300
                            hover:bg-white
                            hover:shadow-lg
                        "
                    >

                        <QualitySelector
                            value={quality}
                            onChange={setQuality}
                        />

                    </div>

                </div>


                {/* =====================================================
                    FILE NAME
                ===================================================== */}

                <div
                    className="
                        mt-5
                        rounded-[26px]
                        border
                        border-gray-200
                        bg-gray-50/70
                        p-5
                        transition-all
                        duration-300
                        hover:border-gray-300
                        hover:bg-white
                        hover:shadow-lg
                    "
                >

                    <div
                        className="
                            flex
                            flex-col
                            gap-5
                            lg:flex-row
                            lg:items-center
                            lg:justify-between
                        "
                    >

                        {/* FILE INFO */}

                        <div className="flex items-center gap-3">

                            <div
                                className="
                                    flex
                                    h-11
                                    w-11
                                    shrink-0
                                    items-center
                                    justify-center
                                    rounded-xl
                                    bg-black
                                    text-white
                                "
                            >
                                <FileImage size={19} />
                            </div>

                            <div>

                                <h3
                                    className="
                                        text-lg
                                        font-black
                                        text-gray-950
                                    "
                                >
                                    File Name
                                </h3>

                                <p
                                    className="
                                        mt-0.5
                                        text-sm
                                        text-gray-500
                                    "
                                >
                                    Choose the name of your downloaded PNG.
                                </p>

                            </div>

                        </div>


                        {/* INPUT */}

                        <div className="w-full lg:max-w-xl">

                            <div
                                className="
                                    flex
                                    items-center
                                    rounded-2xl
                                    border
                                    border-gray-200
                                    bg-white
                                    p-1.5
                                    shadow-sm
                                    transition-all
                                    focus-within:border-black
                                    focus-within:ring-2
                                    focus-within:ring-black/5
                                "
                            >

                                <input
                                    type="text"
                                    value={fileName}
                                    onChange={(event) =>
                                        setFileName(event.target.value)
                                    }
                                    placeholder="Business Card"
                                    className="
                                        min-w-0
                                        flex-1
                                        bg-transparent
                                        px-4
                                        py-3
                                        text-sm
                                        font-semibold
                                        text-gray-900
                                        outline-none
                                    "
                                />

                                <span
                                    className="
                                        shrink-0
                                        rounded-xl
                                        bg-gray-100
                                        px-3
                                        py-2
                                        text-xs
                                        font-bold
                                        text-gray-500
                                    "
                                >
                                    .png
                                </span>

                            </div>

                        </div>

                    </div>

                </div>


                {/* =====================================================
                    EXPORT INFORMATION
                ===================================================== */}

                <div
                    className="
                        mt-5
                        grid
                        grid-cols-1
                        gap-4
                        sm:grid-cols-3
                    "
                >

                    {/* FORMAT */}

                    <div
                        className="
                            rounded-2xl
                            border
                            border-gray-100
                            bg-gray-50
                            p-5
                        "
                    >

                        <p
                            className="
                                text-[10px]
                                font-bold
                                uppercase
                                tracking-wider
                                text-gray-400
                            "
                        >
                            Format
                        </p>

                        <p
                            className="
                                mt-1
                                text-lg
                                font-black
                                text-gray-950
                            "
                        >
                            PNG
                        </p>

                    </div>


                    {/* QUALITY */}

                    <div
                        className="
                            rounded-2xl
                            border
                            border-gray-100
                            bg-gray-50
                            p-5
                        "
                    >

                        <p
                            className="
                                text-[10px]
                                font-bold
                                uppercase
                                tracking-wider
                                text-gray-400
                            "
                        >
                            Quality
                        </p>

                        <p
                            className="
                                mt-1
                                text-lg
                                font-black
                                text-gray-950
                            "
                        >
                            {quality}x
                        </p>

                    </div>


                    {/* RATIO */}

                    <div
                        className="
                            rounded-2xl
                            border
                            border-gray-100
                            bg-gray-50
                            p-5
                        "
                    >

                        <p
                            className="
                                text-[10px]
                                font-bold
                                uppercase
                                tracking-wider
                                text-gray-400
                            "
                        >
                            Ratio
                        </p>

                        <p
                            className="
                                mt-1
                                text-lg
                                font-black
                                text-gray-950
                            "
                        >
                            {aspectRatio}
                        </p>

                    </div>

                </div>


                {/* =====================================================
                    EXPORT BUTTON
                ===================================================== */}

                <div
                    className="
                        mt-6
                        rounded-[28px]
                        bg-black
                        p-2
                        shadow-[0_25px_70px_rgba(0,0,0,0.20)]
                    "
                >

                    <button
                        type="button"
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
                            min-h-[72px]
                            w-full
                            items-center
                            justify-center
                            gap-4
                            rounded-[22px]
                            bg-white
                            px-6
                            text-lg
                            font-black
                            text-black
                            transition-all
                            duration-300
                            hover:bg-gray-100
                            active:scale-[0.99]
                            sm:text-xl
                        "
                    >

                        <div
                            className="
                                flex
                                h-11
                                w-11
                                shrink-0
                                items-center
                                justify-center
                                rounded-xl
                                bg-black
                                text-white
                            "
                        >
                            <Download size={22} />
                        </div>

                        <span>
                            Export PNG
                        </span>

                        <Sparkles
                            size={18}
                            className="text-gray-400"
                        />

                    </button>

                </div>


                {/* =====================================================
                    FOOTER NOTE
                ===================================================== */}

                <p
                    className="
                        mt-4
                        text-center
                        text-xs
                        leading-5
                        text-gray-400
                    "
                >
                    Your current Builder preview will be exported exactly
                    as configured above.
                </p>

            </div>

        </div>
    );
}