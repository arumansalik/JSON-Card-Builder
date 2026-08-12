export default function BackgroundSelector({
                                               value,
                                               onChange,
                                           }) {

    const backgrounds = [
        {
            id: "white",
            label: "White",
            preview: "#ffffff",
        },
        {
            id: "dark",
            label: "Dark",
            preview: "#111827",
        },
        {
            id: "gradient",
            label: "Gradient",
            preview:
                "linear-gradient(135deg,#4f46e5,#9333ea,#ec4899)",
        },
        {
            id: "glass",
            label: "Glass",
            preview:
                "linear-gradient(135deg,#ffffff,#dbeafe)",
        },
        {
            id: "transparent",
            label: "Transparent",
            preview:
                "repeating-conic-gradient(#ddd 0% 25%, #fff 0% 50%) 50% / 16px 16px",
        },
    ];

    return (
        <div className="w-full">

            <div className="grid grid-cols-5 gap-3">

                {backgrounds.map((item) => {

                    const active = value === item.id;

                    return (
                        <button
                            key={item.id}
                            type="button"
                            onClick={() => onChange(item.id)}
                            className={`
                                flex
                                min-h-[112px]
                                w-full
                                flex-col
                                items-center
                                justify-between
                                rounded-2xl
                                border
                                px-2
                                py-4
                                transition-all
                                duration-200
                                ${
                                active
                                    ? "border-black bg-white shadow-lg ring-1 ring-black"
                                    : "border-gray-200 bg-white hover:border-gray-400"
                            }
                            `}
                        >

                            {/* Preview */}

                            <div
                                className="
                                    h-12
                                    w-8
                                    shrink-0
                                    rounded-xl
                                    border
                                    border-gray-300
                                    shadow-sm
                                "
                                style={{
                                    background: item.preview,
                                }}
                            />

                            {/* Label */}

                            <span
                                className="
                                    mt-3
                                    block
                                    w-full
                                    text-center
                                    text-xs
                                    font-bold
                                    leading-4
                                    text-gray-900
                                "
                            >
                                {item.label}
                            </span>

                        </button>
                    );

                })}

            </div>

        </div>
    );
}