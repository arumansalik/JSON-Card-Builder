import {
    Braces,
    ChevronRight,
    Code2,
    Download,
    FileJson,
    FolderTree,
    Image,
    Layers3,
    MousePointer2,
    Palette,
    Settings2,
    Sparkles,
} from "lucide-react";

export default function Docs() {

    const sections = [
        {
            id: "getting-started",
            title: "Getting Started",
        },
        {
            id: "json-builder",
            title: "JSON Builder",
        },
        {
            id: "nested-data",
            title: "Nested Data",
        },
        {
            id: "themes",
            title: "Themes",
        },
        {
            id: "export",
            title: "Export Studio",
        },
        {
            id: "tips",
            title: "Tips",
        },
    ];

    return (

        <div className="min-h-screen bg-[#f6f7fb] text-gray-950">

            {/* =====================================================
                NAVBAR
            ===================================================== */}

            <header
                className="
                    sticky
                    top-0
                    z-50
                    border-b
                    border-gray-200/70
                    bg-white/80
                    backdrop-blur-xl
                "
            >

                <div
                    className="
                        mx-auto
                        flex
                        h-16
                        max-w-[1400px]
                        items-center
                        justify-between
                        px-5
                        sm:px-8
                    "
                >

                    {/* BRAND */}

                    <div className="flex items-center gap-3">

                        <div
                            className="
                                flex
                                h-10
                                w-10
                                items-center
                                justify-center
                                rounded-xl
                                bg-black
                                text-white
                                shadow-lg
                            "
                        >
                            <Braces size={19} />
                        </div>

                        <div>

                            <p className="text-sm font-black">
                                JSON Card Studio
                            </p>

                            <p className="text-[10px] text-gray-400">
                                Visual JSON Workspace
                            </p>

                        </div>

                    </div>


                    {/* NAV */}

                    <nav
                        className="
                            hidden
                            items-center
                            gap-1
                            rounded-xl
                            bg-gray-100
                            p-1
                            md:flex
                        "
                    >

                        <a
                            href="/builder"
                            className="
                                rounded-lg
                                px-4
                                py-2
                                text-xs
                                font-semibold
                                text-gray-500
                                transition
                                hover:bg-white
                                hover:text-black
                            "
                        >
                            Builder
                        </a>

                        <a
                            href="/templates"
                            className="
                                rounded-lg
                                px-4
                                py-2
                                text-xs
                                font-semibold
                                text-gray-500
                                transition
                                hover:bg-white
                                hover:text-black
                            "
                        >
                            Templates
                        </a>

                        <a
                            href="/docs"
                            className="
                                rounded-lg
                                bg-white
                                px-4
                                py-2
                                text-xs
                                font-bold
                                text-black
                                shadow-sm
                            "
                        >
                            Docs
                        </a>

                    </nav>


                    {/* RIGHT */}

                    <a
                        href="/builder"
                        className="
                            flex
                            items-center
                            gap-2
                            rounded-xl
                            bg-black
                            px-4
                            py-2.5
                            text-xs
                            font-bold
                            text-white
                            shadow-lg
                            transition
                            hover:bg-neutral-800
                        "
                    >

                        Open Builder

                        <ChevronRight size={15} />

                    </a>

                </div>

            </header>


            {/* =====================================================
                PAGE
            ===================================================== */}

            <div
                className="
                    mx-auto
                    grid
                    max-w-[1400px]
                    grid-cols-1
                    gap-10
                    px-5
                    py-10
                    sm:px-8
                    lg:grid-cols-[250px_minmax(0,1fr)]
                    lg:py-14
                "
            >

                {/* =================================================
                    SIDEBAR
                ================================================= */}

                <aside className="lg:sticky lg:top-24 lg:h-fit">

                    <div
                        className="
                            rounded-3xl
                            border
                            border-gray-200
                            bg-white
                            p-5
                            shadow-sm
                        "
                    >

                        <p
                            className="
                                mb-4
                                text-[10px]
                                font-black
                                uppercase
                                tracking-[0.15em]
                                text-gray-400
                            "
                        >
                            Documentation
                        </p>

                        <nav className="space-y-1">

                            {sections.map((section, index) => (

                                <a
                                    key={section.id}
                                    href={`#${section.id}`}
                                    className={`
                                        flex
                                        items-center
                                        gap-3
                                        rounded-xl
                                        px-3
                                        py-2.5
                                        text-sm
                                        font-semibold
                                        transition
                                        ${
                                        index === 0
                                            ? "bg-black text-white"
                                            : "text-gray-500 hover:bg-gray-100 hover:text-black"
                                    }
                                    `}
                                >

                                    <span
                                        className="
                                            flex
                                            h-6
                                            w-6
                                            items-center
                                            justify-center
                                            rounded-lg
                                            bg-black/5
                                            text-[10px]
                                            font-black
                                        "
                                    >
                                        {index + 1}
                                    </span>

                                    {section.title}

                                </a>

                            ))}

                        </nav>

                    </div>

                </aside>


                {/* =================================================
                    CONTENT
                ================================================= */}

                <main className="min-w-0">

                    {/* =================================================
                        HERO
                    ================================================= */}

                    <section className="mb-16">

                        <div
                            className="
                                mb-5
                                inline-flex
                                items-center
                                gap-2
                                rounded-full
                                border
                                border-green-200
                                bg-green-50
                                px-3
                                py-1.5
                                text-xs
                                font-bold
                                text-green-700
                            "
                        >

                            <span
                                className="
                                    h-1.5
                                    w-1.5
                                    rounded-full
                                    bg-green-500
                                "
                            />

                            Documentation

                        </div>

                        <h1
                            className="
                                max-w-4xl
                                text-4xl
                                font-black
                                tracking-[-0.04em]
                                sm:text-5xl
                                lg:text-6xl
                            "
                        >
                            Build beautiful JSON cards
                            <span className="text-indigo-600">
                                {" "}visually.
                            </span>
                        </h1>

                        <p
                            className="
                                mt-6
                                max-w-3xl
                                text-lg
                                leading-8
                                text-gray-500
                            "
                        >
                            JSON Card Studio lets you create structured JSON
                            visually, build nested data, customize the
                            appearance of your card and export the result as
                            a high-quality PNG.
                        </p>

                    </section>


                    {/* =================================================
                        GETTING STARTED
                    ================================================= */}

                    <section
                        id="getting-started"
                        className="scroll-mt-28"
                    >

                        <SectionTitle
                            icon={<Sparkles size={20} />}
                            eyebrow="01"
                            title="Getting Started"
                            description="Create your first JSON card in a few simple steps."
                        />

                        <div className="grid gap-5 md:grid-cols-3">

                            <StepCard
                                number="01"
                                icon={<MousePointer2 />}
                                title="Add Properties"
                                text="Create properties such as Name, Age, Email, Location or any custom field."
                            />

                            <StepCard
                                number="02"
                                icon={<Palette />}
                                title="Customize"
                                text="Choose a visual theme and configure your card appearance."
                            />

                            <StepCard
                                number="03"
                                icon={<Download />}
                                title="Export"
                                text="Open Export Studio, configure the output and download your PNG."
                            />

                        </div>

                    </section>


                    {/* =================================================
                        JSON BUILDER
                    ================================================= */}

                    <section
                        id="json-builder"
                        className="mt-20 scroll-mt-28"
                    >

                        <SectionTitle
                            icon={<Code2 size={20} />}
                            eyebrow="02"
                            title="JSON Builder"
                            description="Build your JSON structure without manually writing JSON."
                        />

                        <div
                            className="
                                overflow-hidden
                                rounded-[28px]
                                border
                                border-gray-200
                                bg-white
                                shadow-sm
                            "
                        >

                            <div
                                className="
                                    border-b
                                    border-gray-200
                                    bg-gray-950
                                    px-6
                                    py-4
                                    text-white
                                "
                            >

                                <div className="flex items-center gap-3">

                                    <FileJson size={18} />

                                    <span className="text-sm font-bold">
                                        Example
                                    </span>

                                </div>

                            </div>

                            <pre
                                className="
                                    overflow-x-auto
                                    bg-gray-950
                                    p-6
                                    text-sm
                                    leading-7
                                    text-gray-300
                                "
                            >
{`{
  "Name": "Aruman Salik",
  "Age": 18,
  "Role": "Developer",
  "Skills": [
    "React",
    "JavaScript",
    "Tailwind CSS"
  ]
}`}
                            </pre>

                        </div>

                        <div
                            className="
                                mt-5
                                grid
                                gap-4
                                sm:grid-cols-2
                            "
                        >

                            <InfoCard
                                icon={<Braces />}
                                title="Key"
                                text="The property name used in your JSON object."
                            />

                            <InfoCard
                                icon={<Settings2 />}
                                title="Value"
                                text="The actual data stored inside the property."
                            />

                            <InfoCard
                                icon={<Layers3 />}
                                title="Type"
                                text="Choose whether the value is a string, number, boolean, object or array."
                            />

                            <InfoCard
                                icon={<FolderTree />}
                                title="Structure"
                                text="Use nested properties to create more complex JSON structures."
                            />

                        </div>

                    </section>


                    {/* =================================================
                        NESTED DATA
                    ================================================= */}

                    <section
                        id="nested-data"
                        className="mt-20 scroll-mt-28"
                    >

                        <SectionTitle
                            icon={<FolderTree size={20} />}
                            eyebrow="03"
                            title="Nested Data"
                            description="Create structured objects and arrays inside your JSON."
                        />

                        <div
                            className="
                                rounded-[28px]
                                border
                                border-gray-200
                                bg-white
                                p-6
                                shadow-sm
                                sm:p-8
                            "
                        >

                            <h3 className="text-xl font-black">
                                Example nested structure
                            </h3>

                            <p className="mt-2 text-sm leading-6 text-gray-500">
                                Nested properties allow you to represent
                                structured information such as profiles,
                                addresses, projects and collections.
                            </p>

                            <pre
                                className="
                                    mt-6
                                    overflow-x-auto
                                    rounded-2xl
                                    bg-gray-950
                                    p-6
                                    text-sm
                                    leading-7
                                    text-gray-300
                                "
                            >
{`{
  "Name": "Aruman Salik",
  "Contact": {
    "Email": "example@email.com",
    "Phone": "+91 XXXXX XXXXX"
  },
  "Skills": [
    "React",
    "Node.js",
    "MongoDB"
  ]
}`}
                            </pre>

                        </div>

                    </section>


                    {/* =================================================
                        THEMES
                    ================================================= */}

                    <section
                        id="themes"
                        className="mt-20 scroll-mt-28"
                    >

                        <SectionTitle
                            icon={<Palette size={20} />}
                            eyebrow="04"
                            title="Themes"
                            description="Change the visual style of your JSON card."
                        />

                        <div className="grid gap-5 sm:grid-cols-2">

                            <ThemeCard
                                title="Apple"
                                description="Clean macOS-inspired JSON window."
                            />

                            <ThemeCard
                                title="VS Code"
                                description="Developer-focused editor style."
                            />

                            <ThemeCard
                                title="GitHub"
                                description="GitHub-inspired code presentation."
                            />

                            <ThemeCard
                                title="Terminal"
                                description="Dark terminal-inspired interface."
                            />

                        </div>

                    </section>


                    {/* =================================================
                        EXPORT
                    ================================================= */}

                    <section
                        id="export"
                        className="mt-20 scroll-mt-28"
                    >

                        <SectionTitle
                            icon={<Download size={20} />}
                            eyebrow="05"
                            title="Export Studio"
                            description="Configure your final image before downloading."
                        />

                        <div className="grid gap-5 sm:grid-cols-2">

                            <InfoCard
                                icon={<Image />}
                                title="Aspect Ratio"
                                text="Choose the dimensions of your exported card."
                            />

                            <InfoCard
                                icon={<Palette />}
                                title="Background"
                                text="Choose the background style for the exported image."
                            />

                            <InfoCard
                                icon={<Layers3 />}
                                title="Padding"
                                text="Control the space around the JSON card."
                            />

                            <InfoCard
                                icon={<Settings2 />}
                                title="Quality"
                                text="Choose the PNG rendering quality and resolution."
                            />

                        </div>

                        <div
                            className="
                                mt-6
                                rounded-[28px]
                                bg-black
                                p-8
                                text-white
                                shadow-xl
                            "
                        >

                            <Download size={28} />

                            <h3 className="mt-5 text-2xl font-black">
                                Ready to export?
                            </h3>

                            <p
                                className="
                                    mt-2
                                    max-w-xl
                                    leading-7
                                    text-gray-400
                                "
                            >
                                Configure your export settings and click
                                Export PNG. Your current builder preview will
                                be rendered as an image.
                            </p>

                            <a
                                href="/builder"
                                className="
                                    mt-6
                                    inline-flex
                                    items-center
                                    gap-2
                                    rounded-xl
                                    bg-white
                                    px-5
                                    py-3
                                    text-sm
                                    font-bold
                                    text-black
                                    transition
                                    hover:bg-gray-100
                                "
                            >
                                Open Builder
                                <ChevronRight size={16} />
                            </a>

                        </div>

                    </section>


                    {/* =================================================
                        TIPS
                    ================================================= */}

                    <section
                        id="tips"
                        className="mt-20 scroll-mt-28"
                    >

                        <SectionTitle
                            icon={<Sparkles size={20} />}
                            eyebrow="06"
                            title="Tips"
                            description="A few simple practices for better JSON cards."
                        />

                        <div className="space-y-3">

                            <Tip
                                number="01"
                                text="Use clear and descriptive property names."
                            />

                            <Tip
                                number="02"
                                text="Use the correct data type for every property."
                            />

                            <Tip
                                number="03"
                                text="Use nested objects when your data belongs together."
                            />

                            <Tip
                                number="04"
                                text="Use arrays when you need to store multiple values."
                            />

                            <Tip
                                number="05"
                                text="Choose the export quality based on where the image will be used."
                            />

                        </div>

                    </section>


                    {/* =================================================
                        FOOTER
                    ================================================= */}

                    <footer
                        className="
                            mt-24
                            border-t
                            border-gray-200
                            pt-8
                        "
                    >

                        <div
                            className="
                                flex
                                flex-col
                                gap-4
                                sm:flex-row
                                sm:items-center
                                sm:justify-between
                            "
                        >

                            <div>

                                <p className="font-black">
                                    JSON Card Studio
                                </p>

                                <p className="mt-1 text-sm text-gray-400">
                                    Visual JSON Workspace
                                </p>

                            </div>

                            <a
                                href="/builder"
                                className="
                                    inline-flex
                                    items-center
                                    gap-2
                                    text-sm
                                    font-bold
                                    text-gray-500
                                    transition
                                    hover:text-black
                                "
                            >
                                Back to Builder
                                <ChevronRight size={15} />
                            </a>

                        </div>

                    </footer>

                </main>

            </div>

        </div>
    );
}


/* =============================================================
   SECTION TITLE
============================================================= */

function SectionTitle({
                          icon,
                          eyebrow,
                          title,
                          description,
                      }) {

    return (

        <div className="mb-7">

            <div
                className="
                    mb-3
                    flex
                    items-center
                    gap-3
                "
            >

                <div
                    className="
                        flex
                        h-10
                        w-10
                        items-center
                        justify-center
                        rounded-xl
                        bg-black
                        text-white
                    "
                >
                    {icon}
                </div>

                <span
                    className="
                        text-xs
                        font-black
                        uppercase
                        tracking-[0.15em]
                        text-gray-400
                    "
                >
                    {eyebrow}
                </span>

            </div>

            <h2
                className="
                    text-3xl
                    font-black
                    tracking-tight
                    sm:text-4xl
                "
            >
                {title}
            </h2>

            <p
                className="
                    mt-2
                    max-w-2xl
                    text-base
                    leading-7
                    text-gray-500
                "
            >
                {description}
            </p>

        </div>
    );
}


/* =============================================================
   STEP CARD
============================================================= */

function StepCard({
                      number,
                      icon,
                      title,
                      text,
                  }) {

    return (

        <div
            className="
                group
                rounded-[26px]
                border
                border-gray-200
                bg-white
                p-6
                shadow-sm
                transition-all
                duration-300
                hover:-translate-y-1
                hover:shadow-xl
            "
        >

            <div
                className="
                    flex
                    items-center
                    justify-between
                "
            >

                <div
                    className="
                        flex
                        h-11
                        w-11
                        items-center
                        justify-center
                        rounded-xl
                        bg-black
                        text-white
                    "
                >
                    {icon}
                </div>

                <span
                    className="
                        text-xs
                        font-black
                        text-gray-300
                    "
                >
                    {number}
                </span>

            </div>

            <h3 className="mt-6 text-lg font-black">
                {title}
            </h3>

            <p className="mt-2 text-sm leading-6 text-gray-500">
                {text}
            </p>

        </div>
    );
}


/* =============================================================
   INFO CARD
============================================================= */

function InfoCard({
                      icon,
                      title,
                      text,
                  }) {

    return (

        <div
            className="
                rounded-[24px]
                border
                border-gray-200
                bg-white
                p-6
                shadow-sm
            "
        >

            <div
                className="
                    flex
                    h-10
                    w-10
                    items-center
                    justify-center
                    rounded-xl
                    bg-gray-100
                    text-black
                "
            >
                {icon}
            </div>

            <h3 className="mt-5 font-black">
                {title}
            </h3>

            <p className="mt-2 text-sm leading-6 text-gray-500">
                {text}
            </p>

        </div>
    );
}


/* =============================================================
   THEME CARD
============================================================= */

function ThemeCard({
                       title,
                       description,
                   }) {

    return (

        <div
            className="
                group
                overflow-hidden
                rounded-[26px]
                border
                border-gray-200
                bg-white
                shadow-sm
                transition-all
                duration-300
                hover:-translate-y-1
                hover:shadow-xl
            "
        >

            <div className="bg-gray-950 p-5">

                <div className="flex gap-1.5">

                    <span className="h-2.5 w-2.5 rounded-full bg-red-500" />
                    <span className="h-2.5 w-2.5 rounded-full bg-yellow-400" />
                    <span className="h-2.5 w-2.5 rounded-full bg-green-500" />

                </div>

                <div className="mt-5 space-y-2">

                    <div className="h-2 w-3/4 rounded bg-gray-700" />
                    <div className="h-2 w-1/2 rounded bg-gray-800" />
                    <div className="h-2 w-2/3 rounded bg-gray-800" />

                </div>

            </div>

            <div className="p-5">

                <h3 className="font-black">
                    {title}
                </h3>

                <p className="mt-2 text-sm leading-6 text-gray-500">
                    {description}
                </p>

            </div>

        </div>
    );
}


/* =============================================================
   TIP
============================================================= */

function Tip({
                 number,
                 text,
             }) {

    return (

        <div
            className="
                flex
                items-center
                gap-4
                rounded-2xl
                border
                border-gray-200
                bg-white
                p-4
            "
        >

            <div
                className="
                    flex
                    h-9
                    w-9
                    shrink-0
                    items-center
                    justify-center
                    rounded-lg
                    bg-black
                    text-xs
                    font-black
                    text-white
                "
            >
                {number}
            </div>

            <p className="text-sm font-medium text-gray-600">
                {text}
            </p>

        </div>
    );
}