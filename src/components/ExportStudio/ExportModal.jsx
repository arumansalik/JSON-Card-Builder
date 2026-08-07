import { X, Download } from "lucide-react";

export default function ExportModal({
                                        open,
                                        onClose,
                                        children,
                                    }) {

    if (!open) return null;

    return (

        <div
            className="
                fixed
                inset-0
                z-[999]
                flex
                items-center
                justify-center
                bg-black/70
                backdrop-blur-md
                p-6
            "
            onClick={onClose}
        >

            {/* Modal */}

            <div
                onClick={(e) => e.stopPropagation()}
                className="
                    relative
                    flex
                    h-[92vh]
                    w-full
                    max-w-[1500px]
                    flex-col
                    overflow-hidden
                    rounded-[36px]
                    bg-white
                    shadow-[0_30px_120px_rgba(0,0,0,.25)]
                    animate-in
                    fade-in
                    zoom-in-95
                    duration-300
                "
            >

                {/* ================================= Header ================================= */}

                <div
                    className="
                        flex
                        items-center
                        justify-between
                        border-b
                        border-gray-200
                        bg-gradient-to-r
                        from-slate-50
                        to-white
                        px-10
                        py-7
                    "
                >

                    {/* Left */}

                    <div className="flex items-center gap-5">

                        <div
                            className="
                                flex
                                h-14
                                w-14
                                items-center
                                justify-center
                                rounded-2xl
                                bg-black
                                text-white
                            "
                        >

                            <Download size={26} />

                        </div>

                        <div>

                            <h2 className="text-4xl font-black">

                                Export Studio

                            </h2>

                            <p className="mt-2 text-gray-500">

                                Customize your JSON Card before exporting.

                            </p>

                        </div>

                    </div>

                    {/* Right */}

                    <button
                        onClick={onClose}
                        className="
                            rounded-2xl
                            p-3
                            transition-all
                            hover:bg-gray-100
                        "
                    >

                        <X size={26} />

                    </button>

                </div>

                {/* ================================= Body ================================= */}

                <div
                    className="
                        flex-1
                        overflow-y-auto
                        bg-slate-50
                        p-10
                    "
                >

                    {children}

                </div>

            </div>

        </div>

    );

}