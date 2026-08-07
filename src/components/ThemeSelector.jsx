import {
    MonitorSmartphone,
    Braces,
    Terminal,
    Laptop,
} from "lucide-react";

const themes = [
    {
        id: "apple",
        name: "Apple",
        icon: MonitorSmartphone,
    },
    {
        id: "vscode",
        name: "VS Code",
        icon: Laptop,
    },
    {
        id: "github",
        name: "GitHub",
        icon: Braces,
    },
    {
        id: "terminal",
        name: "Terminal",
        icon: Terminal,
    },
];

export default function ThemeSelector({
                                          theme,
                                          setTheme,
                                      }) {
    return (
        <div className="flex flex-wrap gap-3">

            {themes.map((item) => {

                const Icon = item.icon;

                const active = theme === item.id;

                return (

                    <button
                        key={item.id}
                        onClick={() => setTheme(item.id)}
                        className={`
                            group
                            flex
                            items-center
                            gap-3
                            rounded-xl
                            border
                            px-4
                            py-3
                            transition-all
                            duration-300
                            ${
                            active
                                ? "border-black bg-black text-white shadow-lg"
                                : "border-gray-200 bg-white hover:-translate-y-0.5 hover:border-gray-300 hover:shadow-md"
                        }
                        `}
                    >

                        <Icon size={18} />

                        <span className="text-sm font-semibold">
                            {item.name}
                        </span>

                    </button>

                );

            })}

        </div>
    );
}