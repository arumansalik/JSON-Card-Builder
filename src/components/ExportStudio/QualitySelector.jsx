import { ImageIcon } from "lucide-react";

const qualities = [
    {
        label: "1x",
        value: 1,
        desc: "Fast",
    },
    {
        label: "2x",
        value: 2,
        desc: "Recommended",
    },
    {
        label: "4x",
        value: 4,
        desc: "Ultra HD",
    },
];

export default function QualitySelector({
                                            value,
                                            onChange,
                                        }) {

    return (

        <div className="space-y-5">

            <div className="flex items-center gap-3">

                <ImageIcon size={20} />

                <div>

                    <h3 className="font-bold">
                        Export Quality
                    </h3>

                    <p className="text-sm text-gray-500">
                        Higher quality creates larger images.
                    </p>

                </div>

            </div>

            <div className="grid grid-cols-3 gap-4">

                {qualities.map((item) => (

                    <button
                        key={item.value}
                        onClick={() => onChange(item.value)}
                        className={`
                            rounded-2xl
                            border
                            p-5
                            transition-all
                            duration-200

                            ${
                            value === item.value
                                ? "bg-black text-white border-black shadow-xl"
                                : "bg-white border-gray-300 hover:border-black"
                        }
                        `}
                    >

                        <div className="text-2xl font-bold">

                            {item.label}

                        </div>

                        <div
                            className={`
                                mt-2
                                text-sm

                                ${
                                value === item.value
                                    ? "text-gray-300"
                                    : "text-gray-500"
                            }
                            `}
                        >

                            {item.desc}

                        </div>

                    </button>

                ))}

            </div>

        </div>

    );

}