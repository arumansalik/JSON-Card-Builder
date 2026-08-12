import { Image } from "lucide-react";

export default function QualitySelector({
                                            value,
                                            onChange,
                                        }) {

    const qualities = [
        {
            value: 1,
            title: "1x",
            subtitle: "Fast",
        },
        {
            value: 2,
            title: "2x",
            subtitle: "Recommended",
        },
        {
            value: 4,
            title: "4x",
            subtitle: "Ultra HD",
        },
    ];

    return (
        <div className="w-full">

            <div className="mb-5 flex items-center gap-3">

                <div
                    className="
                        flex
                        h-10
                        w-10
                        shrink-0
                        items-center
                        justify-center
                        rounded-xl
                        bg-gray-100
                    "
                >
                    <Image size={18} />
                </div>

                <div>

                    <h3 className="text-base font-black">
                        Export Quality
                    </h3>

                    <p className="text-sm text-gray-500">
                        Higher quality creates larger images.
                    </p>

                </div>

            </div>

            <div className="grid grid-cols-3 gap-3">

                {qualities.map((item) => {

                    const active = value === item.value;

                    return (
                        <button
                            key={item.value}
                            type="button"
                            onClick={() => onChange(item.value)}
                            className={`
                                flex
                                min-h-[110px]
                                w-full
                                flex-col
                                items-center
                                justify-center
                                rounded-2xl
                                border
                                px-3
                                py-4
                                transition-all
                                duration-200
                                ${
                                active
                                    ? "border-black bg-black text-white shadow-lg"
                                    : "border-gray-200 bg-white text-gray-900 hover:border-gray-400"
                            }
                            `}
                        >

                            <span
                                className="
                                    text-2xl
                                    font-black
                                "
                            >
                                {item.title}
                            </span>

                            <span
                                className={`
                                    mt-2
                                    text-xs
                                    font-medium
                                    leading-4
                                    text-center
                                    ${
                                    active
                                        ? "text-gray-300"
                                        : "text-gray-500"
                                }
                                `}
                            >
                                {item.subtitle}
                            </span>

                        </button>
                    );

                })}

            </div>

        </div>
    );
}