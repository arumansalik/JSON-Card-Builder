import {
    Monitor,
    Braces,
    Terminal,
} from "lucide-react";

export default function ThemeSelector({
                                          theme,
                                          setTheme,
                                      }) {

    const themes = [
        {
            id: "apple",
            label: "Apple",
            icon: Monitor,
        },
        {
            id: "vscode",
            label: "VS Code",
            icon: Monitor,
        },
        {
            id: "github",
            label: "GitHub",
            icon: Braces,
        },
        {
            id: "terminal",
            label: "Terminal",
            icon: Terminal,
        },
    ];

    return (

        <div className="grid grid-cols-4 gap-3">

            {themes.map((item) => {

                const Icon = item.icon;

                return (

                    <button
                        key={item.id}
                        onClick={() => setTheme(item.id)}
                        className={`
                            flex
                            items-center
                            justify-center
                            gap-2
                            rounded-xl
                            border
                            px-4
                            py-3
                            transition-all
                            duration-200
                            min-w-[130px]

                            ${
                            theme === item.id
                                ? "bg-black text-white border-black shadow-lg"
                                : "bg-white text-black border-gray-300 hover:border-black hover:shadow"
                        }
                        `}
                    >

                        <Icon size={18} />

                        <span className="font-medium whitespace-nowrap">
                            {item.label}
                        </span>

                    </button>

                );

            })}

        </div>

    );

}