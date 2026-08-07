const ratios = [
    {
        id: "16:9",
        label: "16:9",
    },
    {
        id: "1:1",
        label: "1:1",
    },
    {
        id: "9:16",
        label: "9:16",
    },
    {
        id: "4:5",
        label: "4:5",
    },
    {
        id: "A4",
        label: "A4",
    },
];

export default function AspectRatioSelector({
                                                value,
                                                onChange,
                                            }) {

    return (

        <div className="space-y-4">

            <div>

                <h3 className="text-lg font-bold">

                    Aspect Ratio

                </h3>

                <p className="text-sm text-gray-500">

                    Choose the export size.

                </p>

            </div>

            <div className="grid grid-cols-5 gap-3">

                {ratios.map((ratio) => (

                    <button
                        key={ratio.id}
                        onClick={() => onChange(ratio.id)}
                        className={`
                            rounded-2xl
                            border
                            px-4
                            py-5
                            font-semibold
                            transition-all
                            duration-200

                            ${
                            value === ratio.id
                                ? "border-black bg-black text-white shadow-xl"
                                : "border-gray-300 bg-white hover:border-black"
                        }
                        `}
                    >

                        {ratio.label}

                    </button>

                ))}

            </div>

        </div>

    );

}