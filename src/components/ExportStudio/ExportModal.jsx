import { useEffect } from "react";
import { createPortal } from "react-dom";
import { X } from "lucide-react";

export default function ExportModal({
                                        open,
                                        onClose,
                                        children,
                                    }) {

    /* =========================================================
       LOCK BODY SCROLL WHEN MODAL IS OPEN
    ========================================================= */

    useEffect(() => {

        if (!open) {
            return;
        }

        const originalOverflow = document.body.style.overflow;

        document.body.style.overflow = "hidden";

        return () => {
            document.body.style.overflow = originalOverflow;
        };

    }, [open]);

    /* =========================================================
       DON'T RENDER WHEN CLOSED
    ========================================================= */

    if (!open) {
        return null;
    }

    /* =========================================================
       MODAL CONTENT

       IMPORTANT:
       createPortal() moves the modal OUT of Toolbar/Builder
       and directly into document.body.
    ========================================================= */

    const modal = (

        <div
            className="
                fixed
                inset-0
                z-[99999]
                flex
                items-center
                justify-center
                bg-black/60
                p-3
                backdrop-blur-md
                sm:p-5
                lg:p-8
            "
            onMouseDown={(event) => {

                if (event.target === event.currentTarget) {
                    onClose();
                }

            }}
        >

            {/* =================================================
                MODAL CONTAINER
            ================================================= */}

            <div
                className="
                    relative
                    z-[100000]
                    flex
                    w-full
                    max-w-[1600px]
                    max-h-[94vh]
                    flex-col
                    overflow-hidden
                    rounded-[32px]
                    border
                    border-white/80
                    bg-[#f7f8fa]
                    shadow-[0_40px_140px_rgba(0,0,0,0.35)]
                "
                onMouseDown={(event) => {
                    event.stopPropagation();
                }}
            >

                {/* =================================================
                    HEADER
                ================================================= */}

                <div
                    className="
                        flex
                        shrink-0
                        items-center
                        justify-between
                        border-b
                        border-gray-200
                        bg-white
                        px-5
                        py-4
                        sm:px-7
                        sm:py-5
                    "
                >

                    {/* LEFT */}

                    <div className="flex items-center gap-4">

                        <div
                            className="
                                flex
                                h-11
                                w-11
                                items-center
                                justify-center
                                rounded-2xl
                                bg-black
                                text-white
                                shadow-lg
                            "
                        >
                            <span className="text-lg font-black">
                                ↗
                            </span>
                        </div>

                        <div>

                            <h2
                                className="
                                    text-xl
                                    font-black
                                    tracking-tight
                                    text-gray-950
                                    sm:text-2xl
                                "
                            >
                                Export Studio
                            </h2>

                            <p
                                className="
                                    mt-0.5
                                    text-xs
                                    text-gray-400
                                    sm:text-sm
                                "
                            >
                                Customize and export your JSON card
                            </p>

                        </div>

                    </div>

                    {/* CLOSE */}

                    <button
                        type="button"
                        onClick={onClose}
                        aria-label="Close Export Studio"
                        className="
                            flex
                            h-11
                            w-11
                            shrink-0
                            items-center
                            justify-center
                            rounded-xl
                            border
                            border-gray-200
                            bg-white
                            text-gray-500
                            transition-all
                            duration-200
                            hover:bg-gray-100
                            hover:text-black
                            hover:rotate-90
                        "
                    >

                        <X size={21} />

                    </button>

                </div>

                {/* =================================================
                    BODY
                ================================================= */}

                <div
                    className="
                        min-h-0
                        flex-1
                        overflow-y-auto
                        overscroll-contain
                        p-4
                        sm:p-6
                        lg:p-8
                    "
                >

                    {children}

                </div>

            </div>

        </div>

    );

    /* =========================================================
       PORTAL

       THIS IS THE IMPORTANT PART.

       The modal is no longer rendered inside Toolbar.
    ========================================================= */

    return createPortal(
        modal,
        document.body
    );
}