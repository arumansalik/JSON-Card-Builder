import { useRef } from "react";
import { X } from "lucide-react";

import ExportCard from "./ExportCard";
import { exportCard } from "../../utils/exportCard";

export default function ExportPreview({
                                          fields,
                                          open,
                                          onClose,
                                      }) {
    const cardRef = useRef(null);

    if (!open) return null;

    return (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60">

            <div className="rounded-2xl bg-white p-6">

                <div className="mb-5 flex justify-between">

                    <h2 className="text-2xl font-bold">
                        Export Card
                    </h2>

                    <button onClick={onClose}>
                        <X />
                    </button>

                </div>

                <ExportCard
                    ref={cardRef}
                    fields={fields}
                />

                <button
                    onClick={() =>
                        exportCard(cardRef)
                    }
                    className="mt-5 w-full rounded-xl bg-black py-3 text-white"
                >
                    Download PNG
                </button>

            </div>

        </div>
    );
}