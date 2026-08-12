export default function AspectRatioSelector({
                                                value,
                                                onChange,
                                            }) {

    const ratios = [
        "16:9",
        "1:1",
        "9:16",
        "4:5",
        "A4",
    ];

    return (
        <div className="w-full">

            <div className="grid grid-cols-5 gap-3">

                {ratios.map((ratio) => {

                    const active = value === ratio;

                    return (
                        <button
                            key={ratio}
                            type="button"
                            onClick={() => onChange(ratio)}
                            className={`
                                flex
                                min-h-[76px]
                                w-full
                                items-center
                                justify-center
                                rounded-2xl
                                border
                                px-3
                                py-4
                                text-sm
                                font-bold
                                transition-all
                                duration-200
                                ${
                                active
                                    ? "border-black bg-black text-white shadow-lg"
                                    : "border-gray-200 bg-white text-gray-900 hover:border-gray-400"
                            }
                            `}
                        >
                            <span className="whitespace-nowrap">
                                {ratio}
                            </span>
                        </button>
                    );

                })}

            </div>

        </div>
    );
}