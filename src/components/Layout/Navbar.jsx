import {
    Braces,
    ChevronDown,
    CircleHelp,
    Download,
    Settings,
    Sparkles,
} from "lucide-react";

export default function Navbar() {
    return (
        <header className="builder-navbar fixed left-1/2 top-4 z-50 w-[calc(100%-32px)] max-w-[1400px] -translate-x-1/2">

            <div className="flex h-16 items-center justify-between rounded-2xl px-4 sm:px-6">

                {/* Brand */}

                <div className="flex items-center gap-3">

                    <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-black text-white shadow-lg">
                        <Braces size={20} />
                    </div>

                    <div className="hidden sm:block">

                        <p className="text-sm font-black tracking-tight">
                            JSON Card Studio
                        </p>

                        <p className="text-[10px] font-medium text-gray-400">
                            Visual JSON Workspace
                        </p>

                    </div>

                </div>

                {/* Navigation */}

                <nav className="hidden items-center gap-1 rounded-xl bg-black/[0.035] p-1 md:flex">

                    <button className="rounded-lg bg-white px-4 py-2 text-xs font-bold text-black shadow-sm">
                        Builder
                    </button>

                    <button className="rounded-lg px-4 py-2 text-xs font-semibold text-gray-500 transition hover:bg-white hover:text-black">
                        Templates
                    </button>

                    <button className="rounded-lg px-4 py-2 text-xs font-semibold text-gray-500 transition hover:bg-white hover:text-black">
                        Docs
                    </button>

                </nav>

                {/* Actions */}

                <div className="flex items-center gap-2">

                    <button
                        title="Help"
                        className="hidden h-10 w-10 items-center justify-center rounded-xl text-gray-500 transition hover:bg-black/5 hover:text-black sm:flex"
                    >
                        <CircleHelp size={18} />
                    </button>

                    <button
                        title="Settings"
                        className="hidden h-10 w-10 items-center justify-center rounded-xl text-gray-500 transition hover:bg-black/5 hover:text-black sm:flex"
                    >
                        <Settings size={18} />
                    </button>

                    <button className="group flex h-10 items-center gap-2 rounded-xl bg-black px-4 text-xs font-bold text-white shadow-lg transition hover:-translate-y-0.5 hover:shadow-xl">

                        <Sparkles
                            size={15}
                            className="transition group-hover:rotate-12"
                        />

                        <span className="hidden sm:block">
                            Pro Export
                        </span>

                        <ChevronDown size={13} />

                    </button>

                </div>

            </div>

        </header>
    );
}