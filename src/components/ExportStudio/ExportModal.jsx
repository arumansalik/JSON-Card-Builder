import { X } from "lucide-react";

export default function ExportModal({
                                        open,
                                        onClose,
                                        children,
                                    }) {

    if (!open) return null;

    return (

        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-sm">

            <div className="relative w-full max-w-3xl rounded-[32px] bg-white shadow-2xl">

                {/* Header */}

                <div className="flex items-center justify-between border-b border-gray-200 px-8 py-6">

                    <div>

                        <h2 className="text-3xl font-bold">
                            Export Studio
                        </h2>

                        <p className="mt-1 text-gray-500">
                            Customize your exported JSON Card.
                        </p>

                    </div>

                    <button
                        onClick={onClose}
                        className="rounded-xl p-2 transition hover:bg-gray-100"
                    >
                        <X size={24} />
                    </button>

                </div>

                {/* Body */}

                <div className="p-8">

                    {children}

                </div>

            </div>

        </div>

    );

}