import {
    Laptop,
    Code2,
    Monitor,
    Terminal,
} from "lucide-react";

export default function ThemeSelector({
                                          theme,
                                          setTheme,
                                      }) {
    const themes = [
        {
            id: "apple",
            name: "Apple",
            icon: Monitor,
        },
        {
            id: "vscode",
            name: "VS Code",
            icon: Code2,
        },
        {
            id: "github",
            name: "GitHub",
            icon: Laptop,
        },
        {
            id: "terminal",
            name: "Terminal",
            icon: Terminal,
        },
    ];

    return (

        <div className="grid grid-cols-4 gap-3">

            {themes.map((item)=>{

                const Icon=item.icon;

                return(

                    <button

                        key={item.id}

                        onClick={()=>setTheme(item.id)}

                        className={`
rounded-2xl
border
p-4
transition-all
duration-300
${
                            theme===item.id

                                ? "bg-black text-white border-black shadow-xl"

                                : "bg-white hover:shadow-lg hover:-translate-y-1"
                        }
`}

                    >

                        <div className="flex flex-col items-center">

                            <Icon size={26}/>

                            <p className="mt-3 text-sm font-semibold">

                                {item.name}

                            </p>

                        </div>

                    </button>

                );

            })}

        </div>

    );
}