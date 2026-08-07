const ratios = [
    {
        id: "1:1",
        icon: "□",
    },
    {
        id: "16:9",
        icon: "▭",
    },
    {
        id: "9:16",
        icon: "▯",
    },
    {
        id: "4:5",
        icon: "▣",
    },
    {
        id: "3:4",
        icon: "▤",
    },
    {
        id: "A4",
        icon: "📄",
    },
];

export default function AspectRatioSelector({
                                                aspectRatio,
                                                setAspectRatio,
                                            }) {
    return (
        <div className="grid grid-cols-2 gap-3">

            {ratios.map((ratio) => (

                <button
                    key={ratio.id}
                    onClick={() => setAspectRatio(ratio.id)}
                    className={`
                        rounded-xl
                        border
                        p-4
                        transition-all
                        duration-300
                        ${
                        aspectRatio === ratio.id
                            ? "bg-black text-white border-black"
                            : "bg-white hover:bg-gray-100"
                    }
                    `}
                >

                    <div className="flex flex-col items-center gap-2">

                        <span className="text-2xl">
                            {ratio.icon}
                        </span>

                        <span className="text-sm font-semibold">
                            {ratio.id}
                        </span>

                    </div>

                </button>

            ))}

        </div>
    );
}