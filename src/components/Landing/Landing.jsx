import {
    ArrowRight,
    Check,
    ChevronDown,
    Code2,
    Copy,
    Download,
    FileJson,
    Layers3,
    MousePointer2,
    Palette,
    Play,
    RefreshCcw,
    ShieldCheck,
    Sparkles,
    Wand2,
    Zap,
    Braces,
    Move,
    Boxes,
    ImageDown,
    Terminal,

    Monitor,
} from "lucide-react";

export default function Landing({ onStart }) {
    const startBuilder = () => {
        if (onStart) {
            onStart();
            return;
        }

        window.location.hash = "builder";
    };

    const features = [
        {
            icon: Braces,
            title: "Visual JSON Builder",
            description:
                "Create structured JSON visually without manually writing every bracket and comma.",
            size: "large",
        },
        {
            icon: Move,
            title: "Drag & Drop",
            description:
                "Reorder properties naturally with smooth drag-and-drop interactions.",
        },
        {
            icon: Boxes,
            title: "Nested Objects",
            description:
                "Build deeply nested objects and arrays with a recursive structure.",
        },
        {
            icon: RefreshCcw,
            title: "Auto Save",
            description:
                "Keep your work safe automatically while you build.",
        },
        {
            icon: RefreshCcw,
            title: "Undo & Redo",
            description:
                "Experiment freely and move backwards or forwards through your changes.",
        },
        {
            icon: ImageDown,
            title: "Powerful Export",
            description:
                "Customize your card and export it as a high-quality PNG.",
            size: "large",
        },
    ];

    const themes = [
        {
            name: "Apple",
            icon: Monitor,
            className: "apple-theme",
            code: `{
  "name": "Aruman",
  "role": "Developer"
}`,
        },
        {
            name: "VS Code",
            icon: Code2,
            className: "vscode-theme",
            code: `{
  "framework": "React",
  "version": "19"
}`,
        },
        {
            name: "GitHub",
            icon: Terminal,
            className: "github-theme",
            code: `{
  "project": "JSON Card",
  "status": "active"
}`,
        },
        {
            name: "Terminal",
            icon: Terminal,
            className: "terminal-theme",
            code: `{
  "build": "success",
  "ready": true
}`,
        },
    ];

    const useCases = [
        {
            number: "01",
            title: "Developers",
            description:
                "Present API responses, configuration objects and data structures in a cleaner visual format.",
        },
        {
            number: "02",
            title: "Documentation",
            description:
                "Create beautiful JSON examples for technical documentation and README files.",
        },
        {
            number: "03",
            title: "Technical Content",
            description:
                "Turn structured data into polished visuals for blogs, tutorials and social posts.",
        },
        {
            number: "04",
            title: "Portfolios",
            description:
                "Showcase your projects and technical information with a distinctive visual style.",
        },
    ];

    return (
        <div className="landing-page overflow-hidden bg-[#f7f8fa] text-[#0b0b0d]">

            {/* ========================================================= */}
            {/* BACKGROUND */}
            {/* ========================================================= */}

            <div className="pointer-events-none fixed inset-0 -z-10 overflow-hidden">

                <div className="absolute left-[-15%] top-[5%] h-[500px] w-[500px] rounded-full bg-blue-400/10 blur-[120px] animate-float-slow" />

                <div className="absolute right-[-10%] top-[25%] h-[500px] w-[500px] rounded-full bg-purple-400/10 blur-[120px] animate-float-reverse" />

                <div className="absolute bottom-[10%] left-[35%] h-[450px] w-[450px] rounded-full bg-cyan-400/10 blur-[120px]" />

            </div>

            {/* ========================================================= */}
            {/* NAVBAR */}
            {/* ========================================================= */}

            <nav className="fixed left-1/2 top-5 z-50 w-[calc(100%-32px)] max-w-6xl -translate-x-1/2">

                <div className="glass-navbar flex h-14 items-center justify-between rounded-full px-4">

                    <button
                        onClick={startBuilder}
                        className="flex items-center gap-3"
                    >

                        <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-black text-sm font-black text-white shadow-lg">
                            J
                        </div>

                        <span className="hidden text-sm font-bold sm:block">
                            JSON Card Studio
                        </span>

                    </button>

                    <div className="hidden items-center gap-7 text-sm font-medium text-gray-500 md:flex">

                        <a href="#features" className="transition hover:text-black">
                            Features
                        </a>

                        <a href="#themes" className="transition hover:text-black">
                            Themes
                        </a>

                        <a href="#workflow" className="transition hover:text-black">
                            How it works
                        </a>

                    </div>

                    <button
                        onClick={startBuilder}
                        className="flex items-center gap-2 rounded-full bg-black px-4 py-2 text-sm font-bold text-white transition hover:-translate-y-0.5 hover:bg-neutral-800"
                    >
                        Start Building
                        <ArrowRight size={15} />
                    </button>

                </div>

            </nav>

            {/* ========================================================= */}
            {/* HERO */}
            {/* ========================================================= */}

            <section className="relative px-6 pb-24 pt-40 md:pt-48">

                <div className="mx-auto max-w-6xl text-center">

                    <div className="animate-fade-up inline-flex items-center gap-2 rounded-full border border-black/10 bg-white/70 px-4 py-2 text-sm font-medium shadow-sm backdrop-blur-xl">

                        <Sparkles size={15} />

                        A visual workspace for JSON

                    </div>

                    <h1 className="animate-fade-up-delay-1 mx-auto mt-8 max-w-5xl text-5xl font-black tracking-[-0.055em] sm:text-6xl md:text-7xl lg:text-[88px] lg:leading-[0.98]">

                        Build JSON.

                        <br />

                        <span className="hero-gradient">
                            Style it. Export it.
                        </span>

                    </h1>

                    <p className="animate-fade-up-delay-2 mx-auto mt-8 max-w-2xl text-lg leading-8 text-gray-500 md:text-xl">

                        Create structured JSON visually, build nested objects
                        and arrays, customize developer-inspired themes,
                        and turn your data into beautiful shareable cards.

                    </p>

                    <div className="animate-fade-up-delay-3 mt-9 flex flex-col items-center justify-center gap-3 sm:flex-row">

                        <button
                            onClick={startBuilder}
                            className="group flex h-14 items-center gap-3 rounded-2xl bg-black px-7 text-base font-bold text-white shadow-[0_15px_40px_rgba(0,0,0,.18)] transition duration-300 hover:-translate-y-1 hover:shadow-[0_20px_50px_rgba(0,0,0,.25)]"
                        >
                            Start Building

                            <ArrowRight
                                size={18}
                                className="transition-transform group-hover:translate-x-1"
                            />

                        </button>

                        <a
                            href="#features"
                            className="flex h-14 items-center gap-2 rounded-2xl border border-gray-200 bg-white px-7 text-base font-bold shadow-sm transition hover:-translate-y-1 hover:shadow-md"
                        >
                            Explore Features
                            <ChevronDown size={17} />
                        </a>

                    </div>

                    <div className="mt-6 flex justify-center gap-5 text-xs font-medium text-gray-400">

                        <span>✓ No signup required</span>
                        <span>✓ Browser based</span>
                        <span>✓ PNG export</span>

                    </div>

                </div>

            </section>

            {/* ========================================================= */}
            {/* PRODUCT SHOWCASE */}
            {/* ========================================================= */}

            <section className="px-6 pb-32">

                <div className="mx-auto max-w-6xl">

                    <div className="product-glow relative">

                        <div className="glass-window overflow-hidden rounded-[30px] border border-white/80 bg-white/75 shadow-[0_40px_120px_rgba(0,0,0,.12)] backdrop-blur-2xl">

                            {/* Window top */}

                            <div className="flex items-center justify-between border-b border-gray-200/70 px-5 py-4">

                                <div className="flex items-center gap-2">

                                    <span className="h-3 w-3 rounded-full bg-red-400" />
                                    <span className="h-3 w-3 rounded-full bg-yellow-400" />
                                    <span className="h-3 w-3 rounded-full bg-green-400" />

                                </div>

                                <div className="rounded-full bg-gray-100 px-4 py-1.5 text-xs font-semibold text-gray-500">
                                    JSON Card Studio
                                </div>

                                <div className="w-16" />

                            </div>

                            {/* App */}

                            <div className="grid min-h-[520px] grid-cols-1 lg:grid-cols-[0.9fr_1.1fr]">

                                {/* Builder */}

                                <div className="border-b border-gray-200 p-6 lg:border-b-0 lg:border-r">

                                    <div className="mb-6 flex items-center justify-between">

                                        <div>
                                            <p className="text-xl font-black">
                                                JSON Builder
                                            </p>

                                            <p className="mt-1 text-sm text-gray-400">
                                                Build visually
                                            </p>
                                        </div>

                                        <span className="rounded-full bg-black px-3 py-1 text-xs font-bold text-white">
                                            4 Properties
                                        </span>

                                    </div>

                                    <div className="space-y-3">

                                        {[
                                            ["Role", "Software Developer", "String"],
                                            ["Name", "Aruman Salik", "String"],
                                            ["Age", "22", "Number"],
                                            ["Skills", "React, Java", "Array"],
                                        ].map(([key, value, type], index) => (

                                            <div
                                                key={key}
                                                className="group flex items-center gap-3 rounded-2xl border border-gray-200 bg-white p-3 shadow-sm transition hover:-translate-y-0.5 hover:shadow-md"
                                            >

                                                <div className="cursor-grab text-gray-300">
                                                    <Move size={17} />
                                                </div>

                                                <div className="min-w-0 flex-1">

                                                    <p className="truncate text-sm font-bold">
                                                        {key}
                                                    </p>

                                                    <p className="truncate text-xs text-gray-400">
                                                        {value}
                                                    </p>

                                                </div>

                                                <span className="rounded-lg bg-gray-100 px-2 py-1 text-[10px] font-bold text-gray-500">
                                                    {type}
                                                </span>

                                            </div>

                                        ))}

                                    </div>

                                    <button className="mt-5 flex w-full items-center justify-center gap-2 rounded-2xl border border-dashed border-gray-300 bg-white py-4 text-sm font-bold text-gray-600 transition hover:border-black hover:text-black">

                                        <span className="text-lg">+</span>
                                        Add Property

                                    </button>

                                </div>

                                {/* Preview */}

                                <div className="bg-[#f7f8fa] p-6 md:p-10">

                                    <div className="mb-5 flex items-center justify-between">

                                        <div>
                                            <p className="text-xl font-black">
                                                Live Preview
                                            </p>

                                            <p className="mt-1 text-sm text-gray-400">
                                                See your JSON as you build
                                            </p>
                                        </div>

                                        <span className="rounded-xl bg-black px-3 py-2 text-xs font-bold text-white">
                                            Apple
                                        </span>

                                    </div>

                                    <div className="flex h-[370px] items-center justify-center">

                                        <div className="w-full max-w-[620px] overflow-hidden rounded-[25px] bg-[#202020] shadow-[0_25px_70px_rgba(0,0,0,.25)]">

                                            <div className="flex items-center justify-between border-b border-white/10 bg-[#2b2b2b] px-5 py-4">

                                                <div className="flex items-center gap-2">

                                                    <div className="flex gap-1.5">

                                                        <span className="h-3 w-3 rounded-full bg-red-400" />
                                                        <span className="h-3 w-3 rounded-full bg-yellow-400" />
                                                        <span className="h-3 w-3 rounded-full bg-green-400" />

                                                    </div>

                                                    <div className="ml-3 flex items-center gap-2 text-sm font-semibold text-white">
                                                        <FileJson size={15} />
                                                        Business Card.json
                                                    </div>

                                                </div>

                                                <span className="text-xs text-white/40">
                                                    JSON
                                                </span>

                                            </div>

                                            <pre className="p-7 text-left font-mono text-sm leading-7 text-gray-300">

                                                <span className="text-gray-500">1</span>{"   "}
                                                <span className="text-white">{"{"}</span>{"\n"}
                                                <span className="text-gray-500">2</span>{"   "}
                                                <span className="text-blue-300">"role"</span>
                                                <span className="text-white">: </span>
                                                <span className="text-green-300">"Software Developer"</span>
                                                <span className="text-white">,</span>{"\n"}
                                                <span className="text-gray-500">3</span>{"   "}
                                                <span className="text-blue-300">"name"</span>
                                                <span className="text-white">: </span>
                                                <span className="text-green-300">"Aruman Salik"</span>
                                                <span className="text-white">,</span>{"\n"}
                                                <span className="text-gray-500">4</span>{"   "}
                                                <span className="text-blue-300">"age"</span>
                                                <span className="text-white">: </span>
                                                <span className="text-orange-300">22</span>
                                                {"\n"}
                                                <span className="text-gray-500">5</span>{"   "}
                                                <span className="text-white">{"}"}</span>

                                            </pre>

                                        </div>

                                    </div>

                                </div>

                            </div>

                        </div>

                    </div>

                </div>

            </section>

            {/* ========================================================= */}
            {/* MINI STATS */}
            {/* ========================================================= */}

            <section className="px-6 pb-28">

                <div className="mx-auto grid max-w-5xl grid-cols-2 overflow-hidden rounded-[28px] border border-gray-200 bg-white shadow-sm md:grid-cols-4">

                    {[
                        ["5+", "Core builder tools"],
                        ["4", "Developer themes"],
                        ["6", "Export ratios"],
                        ["∞", "JSON structures"],
                    ].map(([number, label]) => (

                        <div
                            key={label}
                            className="border-b border-gray-100 p-7 text-center transition hover:bg-gray-50 md:border-b-0 md:border-r last:border-r-0"
                        >

                            <p className="text-3xl font-black">
                                {number}
                            </p>

                            <p className="mt-1 text-sm text-gray-500">
                                {label}
                            </p>

                        </div>

                    ))}

                </div>

            </section>

            {/* ========================================================= */}
            {/* WHY */}
            {/* ========================================================= */}

            <section className="px-6 py-28">

                <div className="mx-auto max-w-6xl">

                    <div className="max-w-3xl">

                        <span className="text-sm font-bold uppercase tracking-[0.2em] text-gray-400">
                            Why JSON Card Studio
                        </span>

                        <h2 className="mt-5 text-4xl font-black tracking-tight md:text-6xl">
                            JSON doesn't have to
                            <span className="text-gray-400"> look boring.</span>
                        </h2>

                        <p className="mt-6 max-w-2xl text-lg leading-8 text-gray-500">
                            Raw JSON is useful. Presenting raw JSON isn't always beautiful.
                            JSON Card Studio brings structured data and visual presentation together.
                        </p>

                    </div>

                    <div className="mt-16 grid gap-6 md:grid-cols-3">

                        {[
                            {
                                icon: Wand2,
                                title: "Build",
                                text: "Create structured JSON with an intuitive visual builder.",
                            },
                            {
                                icon: Palette,
                                title: "Style",
                                text: "Choose a theme and customize the visual presentation.",
                            },
                            {
                                icon: Download,
                                title: "Export",
                                text: "Turn your JSON into a polished, shareable PNG.",
                            },
                        ].map((item) => {

                            const Icon = item.icon;

                            return (
                                <div
                                    key={item.title}
                                    className="feature-card group rounded-[28px] border border-gray-200 bg-white p-8 shadow-sm"
                                >

                                    <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-black text-white transition group-hover:scale-110">
                                        <Icon size={24} />
                                    </div>

                                    <h3 className="mt-8 text-2xl font-black">
                                        {item.title}
                                    </h3>

                                    <p className="mt-3 leading-7 text-gray-500">
                                        {item.text}
                                    </p>

                                    <ArrowRight
                                        size={20}
                                        className="mt-8 text-gray-300 transition group-hover:translate-x-2 group-hover:text-black"
                                    />

                                </div>
                            );
                        })}

                    </div>

                </div>

            </section>

            {/* ========================================================= */}
            {/* FEATURES BENTO */}
            {/* ========================================================= */}

            <section
                id="features"
                className="bg-[#0a0a0b] px-6 py-32 text-white"
            >

                <div className="mx-auto max-w-6xl">

                    <div className="max-w-3xl">

                        <span className="text-sm font-bold uppercase tracking-[0.2em] text-white/40">
                            Everything you need
                        </span>

                        <h2 className="mt-5 text-4xl font-black tracking-tight md:text-6xl">
                            Powerful features.
                            <br />
                            <span className="text-white/35">
                                Simple workflow.
                            </span>
                        </h2>

                    </div>

                    <div className="mt-16 grid gap-5 md:grid-cols-2 lg:grid-cols-3">

                        {features.map((feature, index) => {

                            const Icon = feature.icon;

                            return (
                                <div
                                    key={feature.title}
                                    className={`
                                        group
                                        rounded-[30px]
                                        border
                                        border-white/10
                                        bg-white/[0.045]
                                        p-8
                                        backdrop-blur-xl
                                        transition
                                        duration-500
                                        hover:-translate-y-2
                                        hover:border-white/20
                                        hover:bg-white/[0.07]
                                        ${feature.size === "large"
                                        ? "lg:col-span-2"
                                        : ""
                                    }
                                    `}
                                >

                                    <div className="flex items-center justify-between">

                                        <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-white text-black transition duration-500 group-hover:rotate-6 group-hover:scale-110">
                                            <Icon size={24} />
                                        </div>

                                        <span className="text-xs font-mono text-white/20">
                                            0{index + 1}
                                        </span>

                                    </div>

                                    <h3 className="mt-10 text-2xl font-black">
                                        {feature.title}
                                    </h3>

                                    <p className="mt-3 max-w-lg leading-7 text-white/45">
                                        {feature.description}
                                    </p>

                                    <div className="mt-8 h-px w-0 bg-white/30 transition-all duration-500 group-hover:w-full" />

                                </div>
                            );
                        })}

                    </div>

                </div>

            </section>

            {/* ========================================================= */}
            {/* INTERACTION SHOWCASE */}
            {/* ========================================================= */}

            <section className="px-6 py-32">

                <div className="mx-auto grid max-w-6xl items-center gap-16 lg:grid-cols-2">

                    <div>

                        <span className="text-sm font-bold uppercase tracking-[0.2em] text-gray-400">
                            Built for structure
                        </span>

                        <h2 className="mt-5 text-4xl font-black tracking-tight md:text-6xl">
                            Build complex JSON
                            <span className="text-gray-400">
                                {" "}without complexity.
                            </span>
                        </h2>

                        <p className="mt-6 text-lg leading-8 text-gray-500">
                            Create objects inside objects, arrays inside objects,
                            and structured data without losing control of your hierarchy.
                        </p>

                        <div className="mt-9 space-y-4">

                            {[
                                "Nested objects and arrays",
                                "Typed values",
                                "Drag & drop ordering",
                                "Recursive structures",
                            ].map((item) => (

                                <div
                                    key={item}
                                    className="flex items-center gap-3"
                                >

                                    <div className="flex h-7 w-7 items-center justify-center rounded-full bg-black text-white">
                                        <Check size={14} />
                                    </div>

                                    <span className="font-semibold text-gray-700">
                                        {item}
                                    </span>

                                </div>

                            ))}

                        </div>

                    </div>

                    <div className="relative">

                        <div className="absolute inset-0 rounded-[40px] bg-gradient-to-br from-blue-400/20 via-purple-400/10 to-transparent blur-3xl" />

                        <div className="glass-card relative rounded-[32px] p-6">

                            <div className="rounded-[24px] bg-white p-5 shadow-xl">

                                <div className="flex items-center gap-3">

                                    <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-black text-white">
                                        <Boxes size={19} />
                                    </div>

                                    <div>
                                        <p className="font-bold">
                                            profile
                                        </p>
                                        <p className="text-xs text-gray-400">
                                            Object
                                        </p>
                                    </div>

                                </div>

                                <div className="ml-5 mt-5 border-l-2 border-gray-100 pl-5 space-y-3">

                                    <div className="rounded-xl bg-gray-50 p-4">

                                        <div className="flex justify-between">

                                            <span className="font-semibold">
                                                name
                                            </span>

                                            <span className="text-xs text-gray-400">
                                                String
                                            </span>

                                        </div>

                                        <p className="mt-2 text-sm text-gray-500">
                                            Aruman Salik
                                        </p>

                                    </div>

                                    <div className="rounded-xl bg-gray-50 p-4">

                                        <div className="flex justify-between">

                                            <span className="font-semibold">
                                                skills
                                            </span>

                                            <span className="text-xs text-gray-400">
                                                Array
                                            </span>

                                        </div>

                                        <div className="mt-3 flex flex-wrap gap-2">

                                            {["React", "Java", "Next.js"].map((skill) => (
                                                <span
                                                    key={skill}
                                                    className="rounded-lg bg-white px-3 py-1.5 text-xs font-semibold shadow-sm"
                                                >
                                                    {skill}
                                                </span>
                                            ))}

                                        </div>

                                    </div>

                                </div>

                            </div>

                        </div>

                    </div>

                </div>

            </section>

            {/* ========================================================= */}
            {/* THEMES */}
            {/* ========================================================= */}

            <section
                id="themes"
                className="bg-[#f0f1f3] px-6 py-32"
            >

                <div className="mx-auto max-w-6xl">

                    <div className="text-center">

                        <span className="text-sm font-bold uppercase tracking-[0.2em] text-gray-400">
                            Your JSON. Your style.
                        </span>

                        <h2 className="mt-5 text-4xl font-black tracking-tight md:text-6xl">
                            Four beautiful themes.
                        </h2>

                        <p className="mx-auto mt-5 max-w-2xl text-lg leading-8 text-gray-500">
                            Switch between developer-inspired visual styles
                            depending on where you want to share your JSON.
                        </p>

                    </div>

                    <div className="mt-16 grid gap-5 md:grid-cols-2">

                        {themes.map((theme) => {

                            const Icon = theme.icon;

                            return (
                                <div
                                    key={theme.name}
                                    className="group overflow-hidden rounded-[30px] border border-gray-200 bg-white p-4 shadow-sm transition duration-500 hover:-translate-y-2 hover:shadow-xl"
                                >

                                    <div className={`theme-preview ${theme.className}`}>

                                        <div className="flex items-center justify-between border-b border-white/10 px-5 py-4">

                                            <div className="flex items-center gap-3">

                                                <div className="flex gap-1.5">
                                                    <span className="h-2.5 w-2.5 rounded-full bg-red-400" />
                                                    <span className="h-2.5 w-2.5 rounded-full bg-yellow-400" />
                                                    <span className="h-2.5 w-2.5 rounded-full bg-green-400" />
                                                </div>

                                                <Icon size={15} />

                                            </div>

                                            <span className="text-[10px] opacity-50">
                                                JSON
                                            </span>

                                        </div>

                                        <pre className="min-h-[180px] p-6 text-xs leading-6">
                                            {theme.code}
                                        </pre>

                                    </div>

                                    <div className="flex items-center justify-between px-2 pb-1 pt-5">

                                        <div>
                                            <h3 className="text-xl font-black">
                                                {theme.name}
                                            </h3>

                                            <p className="mt-1 text-sm text-gray-400">
                                                Developer-inspired theme
                                            </p>
                                        </div>

                                        <ArrowRight
                                            size={20}
                                            className="text-gray-300 transition group-hover:translate-x-1 group-hover:text-black"
                                        />

                                    </div>

                                </div>
                            );
                        })}

                    </div>

                </div>

            </section>

            {/* ========================================================= */}
            {/* WORKFLOW */}
            {/* ========================================================= */}

            <section
                id="workflow"
                className="px-6 py-32"
            >

                <div className="mx-auto max-w-6xl">

                    <div className="text-center">

                        <span className="text-sm font-bold uppercase tracking-[0.2em] text-gray-400">
                            Simple workflow
                        </span>

                        <h2 className="mt-5 text-4xl font-black tracking-tight md:text-6xl">
                            Three steps.
                            <br />
                            <span className="text-gray-400">
                                One beautiful result.
                            </span>
                        </h2>

                    </div>

                    <div className="relative mt-20 grid gap-10 md:grid-cols-3">

                        <div className="absolute left-[16%] right-[16%] top-10 hidden h-px bg-gray-200 md:block" />

                        {[
                            {
                                number: "01",
                                icon: MousePointer2,
                                title: "Build",
                                text: "Add properties, choose types and create nested structures.",
                            },
                            {
                                number: "02",
                                icon: Palette,
                                title: "Customize",
                                text: "Choose your theme, background, padding and export settings.",
                            },
                            {
                                number: "03",
                                icon: Download,
                                title: "Export",
                                text: "Download a polished PNG ready to share anywhere.",
                            },
                        ].map((step) => {

                            const Icon = step.icon;

                            return (
                                <div
                                    key={step.number}
                                    className="relative text-center"
                                >

                                    <div className="mx-auto flex h-20 w-20 items-center justify-center rounded-3xl border border-gray-200 bg-white shadow-lg">
                                        <Icon size={26} />
                                    </div>

                                    <span className="mt-7 block text-xs font-black tracking-[0.2em] text-gray-300">
                                        {step.number}
                                    </span>

                                    <h3 className="mt-3 text-2xl font-black">
                                        {step.title}
                                    </h3>

                                    <p className="mx-auto mt-3 max-w-xs leading-7 text-gray-500">
                                        {step.text}
                                    </p>

                                </div>
                            );
                        })}

                    </div>

                </div>

            </section>

            {/* ========================================================= */}
            {/* EXPORT */}
            {/* ========================================================= */}

            <section className="px-6 py-20">

                <div className="mx-auto max-w-6xl overflow-hidden rounded-[40px] bg-black px-7 py-12 text-white md:px-14 md:py-16">

                    <div className="grid items-center gap-12 lg:grid-cols-2">

                        <div>

                            <span className="text-sm font-bold uppercase tracking-[0.2em] text-white/40">
                                Export Studio
                            </span>

                            <h2 className="mt-5 text-4xl font-black tracking-tight md:text-6xl">
                                Your JSON.
                                <br />
                                <span className="text-white/35">
                                    Ready to share.
                                </span>
                            </h2>

                            <p className="mt-6 max-w-lg text-lg leading-8 text-white/50">
                                Choose your aspect ratio, background, padding,
                                quality and filename before exporting a polished PNG.
                            </p>

                            <button
                                onClick={startBuilder}
                                className="mt-9 flex items-center gap-3 rounded-2xl bg-white px-6 py-4 font-bold text-black transition hover:-translate-y-1"
                            >
                                Open Export Studio
                                <ArrowRight size={18} />
                            </button>

                        </div>

                        <div className="glass-dark rounded-[30px] p-5">

                            <div className="rounded-[24px] bg-white p-5 text-black">

                                <div className="flex items-center gap-3 border-b border-gray-100 pb-5">

                                    <ImageDown size={20} />

                                    <div>
                                        <p className="font-black">
                                            Export Settings
                                        </p>
                                        <p className="text-xs text-gray-400">
                                            Customize your image
                                        </p>
                                    </div>

                                </div>

                                <div className="mt-5 space-y-3">

                                    {[
                                        ["Aspect Ratio", "16:9"],
                                        ["Background", "White"],
                                        ["Padding", "32px"],
                                        ["Quality", "2×"],
                                    ].map(([label, value]) => (

                                        <div
                                            key={label}
                                            className="flex items-center justify-between rounded-xl bg-gray-50 px-4 py-3"
                                        >

                                            <span className="text-sm font-semibold text-gray-500">
                                                {label}
                                            </span>

                                            <span className="text-sm font-bold">
                                                {value}
                                            </span>

                                        </div>

                                    ))}

                                </div>

                                <button className="mt-5 flex w-full items-center justify-center gap-2 rounded-xl bg-black py-3 font-bold text-white">
                                    <Download size={17} />
                                    Export PNG
                                </button>

                            </div>

                        </div>

                    </div>

                </div>

            </section>

            {/* ========================================================= */}
            {/* USE CASES */}
            {/* ========================================================= */}

            <section className="px-6 py-32">

                <div className="mx-auto max-w-6xl">

                    <div className="grid gap-12 lg:grid-cols-[0.7fr_1.3fr]">

                        <div>

                            <span className="text-sm font-bold uppercase tracking-[0.2em] text-gray-400">
                                Built for creators
                            </span>

                            <h2 className="mt-5 text-4xl font-black tracking-tight md:text-6xl">
                                More than
                                <span className="text-gray-400">
                                    {" "}just JSON.
                                </span>
                            </h2>

                        </div>

                        <div className="divide-y divide-gray-200">

                            {useCases.map((item) => (

                                <div
                                    key={item.number}
                                    className="group grid gap-5 py-8 md:grid-cols-[80px_220px_1fr]"
                                >

                                    <span className="font-mono text-sm text-gray-300">
                                        {item.number}
                                    </span>

                                    <h3 className="text-xl font-black">
                                        {item.title}
                                    </h3>

                                    <p className="leading-7 text-gray-500">
                                        {item.description}
                                    </p>

                                </div>

                            ))}

                        </div>

                    </div>

                </div>

            </section>

            {/* ========================================================= */}
            {/* TECH */}
            {/* ========================================================= */}

            <section className="px-6 pb-32">

                <div className="mx-auto max-w-5xl text-center">

                    <span className="text-sm font-bold uppercase tracking-[0.2em] text-gray-400">
                        Built with modern web technology
                    </span>

                    <h2 className="mt-5 text-3xl font-black md:text-5xl">
                        Fast. Flexible. Developer-first.
                    </h2>

                    <div className="mt-12 flex flex-wrap justify-center gap-3">

                        {[
                            "React",
                            "Vite",
                            "Tailwind CSS",
                            "JavaScript",
                            "@dnd-kit",
                            "Lucide",
                            "html-to-image",
                            "Syntax Highlighting",
                            "LocalStorage",
                        ].map((tech) => (

                            <div
                                key={tech}
                                className="rounded-full border border-gray-200 bg-white px-5 py-3 text-sm font-bold text-gray-600 shadow-sm transition hover:-translate-y-1 hover:border-black hover:text-black"
                            >
                                {tech}
                            </div>

                        ))}

                    </div>

                </div>

            </section>

            {/* ========================================================= */}
            {/* FINAL CTA */}
            {/* ========================================================= */}

            <section className="px-6 pb-10">

                <div className="relative mx-auto max-w-6xl overflow-hidden rounded-[40px] bg-[#0a0a0b] px-7 py-20 text-center text-white md:px-16">

                    <div className="absolute left-1/2 top-[-200px] h-[450px] w-[450px] -translate-x-1/2 rounded-full bg-blue-500/20 blur-[100px]" />

                    <div className="relative">

                        <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-2xl bg-white text-black shadow-xl">
                            <Sparkles size={27} />
                        </div>

                        <h2 className="mx-auto mt-8 max-w-3xl text-4xl font-black tracking-tight md:text-6xl">
                            Ready to make your JSON beautiful?
                        </h2>

                        <p className="mx-auto mt-5 max-w-xl text-lg leading-8 text-white/45">
                            Build your first JSON card, customize it,
                            and export it in seconds.
                        </p>

                        <button
                            onClick={startBuilder}
                            className="group mt-9 inline-flex h-14 items-center gap-3 rounded-2xl bg-white px-7 font-bold text-black transition hover:-translate-y-1 hover:shadow-2xl"
                        >
                            Start Building

                            <ArrowRight
                                size={18}
                                className="transition group-hover:translate-x-1"
                            />

                        </button>

                    </div>

                </div>

            </section>

            {/* ========================================================= */}
            {/* FOOTER */}
            {/* ========================================================= */}

            <footer className="px-6 py-10">

                <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-5 border-t border-gray-200 pt-8 text-sm text-gray-400 md:flex-row">

                    <div className="flex items-center gap-3">

                        <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-black text-xs font-black text-white">
                            J
                        </div>

                        <span className="font-semibold">
                            JSON Card Studio
                        </span>

                    </div>

                    <p>
                        Build JSON. Style it. Export it.
                    </p>

                    <p>
                        <a href="https://github.com/arumansalik" target="_blank" rel="noopener">© Aruman Salik</a>
                    </p>

                </div>

            </footer>

        </div>
    );
}