const backgrounds = [
    {
        id: "white",
        name: "White",
        color: "#ffffff",
    },
    {
        id: "dark",
        name: "Dark",
        color: "#111827",
    },
    {
        id: "gradient",
        name: "Gradient",
        gradient:
            "linear-gradient(135deg,#6366f1,#8b5cf6,#ec4899)",
    },
    {
        id: "glass",
        name: "Glass",
        gradient:
            "linear-gradient(135deg,#ffffff,#dbeafe)",
    },
    {
        id: "transparent",
        name: "Transparent",
        transparent: true,
    },
];

export default function BackgroundSelector({
                                               value,
                                               onChange,
                                           }) {

    return (

        <div className="space-y-4">

            <div>

                <h3 className="text-lg font-bold">

                    Background

                </h3>

                <p className="text-sm text-gray-500">

                    Choose your export background.

                </p>

            </div>

            <div className="grid grid-cols-5 gap-4">

                {backgrounds.map((bg) => (

                    <button
                        key={bg.id}
                        onClick={() => onChange(bg.id)}
                        className={`
                            rounded-2xl
                            border
                            p-3
                            transition-all
                            ${
                            value === bg.id
                                ? "border-black ring-2 ring-black"
                                : "border-gray-300"
                        }
                        `}
                    >

                        <div
                            className="mx-auto h-14 w-full rounded-xl border"
                            style={{
                                background:
                                    bg.transparent
                                        ? "repeating-conic-gradient(#ddd 0% 25%, white 0% 50%) 50% / 18px 18px"
                                        : bg.gradient
                                            ? bg.gradient
                                            : bg.color,
                            }}
                        />

                        <p className="mt-3 text-sm font-semibold">

                            {bg.name}

                        </p>

                    </button>

                ))}

            </div>

        </div>

    );

}