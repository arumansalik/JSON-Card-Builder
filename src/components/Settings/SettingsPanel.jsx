import ThemeSelector from "../ThemeSelector";
import AspectRatioSelector from "./AspectRatioSelector";
import BackgroundSelector from "./BackgroundSelector";

export default function SettingsPanel({
                                          theme,
                                          setTheme,
                                          aspectRatio,
                                          setAspectRatio,
                                          background,
                                          setBackground,
                                      }) {
    return (
        <div className="space-y-6">

            {/* ================= Appearance ================= */}

            <div className="rounded-3xl border border-gray-200 bg-white p-6 shadow-lg">

                <h2 className="text-2xl font-bold">
                    Appearance
                </h2>

                <p className="mt-2 text-sm text-gray-500">
                    Customize your JSON card.
                </p>

                <div className="mt-6">

                    <ThemeSelector
                        theme={theme}
                        setTheme={setTheme}
                    />

                </div>

            </div>

            {/* ================= Aspect Ratio ================= */}

            <div className="rounded-3xl border border-gray-200 bg-white p-6 shadow-lg">

                <h2 className="text-2xl font-bold">
                    Aspect Ratio
                </h2>

                <p className="mt-2 text-sm text-gray-500">
                    Select export size.
                </p>

                <div className="mt-6">

                    <AspectRatioSelector
                        aspectRatio={aspectRatio}
                        setAspectRatio={setAspectRatio}
                    />

                </div>

            </div>

            <div className="rounded-3xl border border-gray-200 bg-white p-6 shadow-lg">

                <h2 className="text-xl font-bold">
                    Background
                </h2>

                <p className="mt-2 text-sm text-gray-500">
                    Select the background used for your exported card.
                </p>

                <div className="mt-6">

                    <BackgroundSelector
                        background={background}
                        setBackground={setBackground}
                    />

                </div>

            </div>

            {/* ================= Export ================= */}

            <div className="rounded-3xl border border-gray-200 bg-white p-6 shadow-lg">

                <h2 className="text-2xl font-bold">
                    Export
                </h2>

                <p className="mt-2 text-sm text-gray-500">
                    Export settings will be added here.
                </p>

                <button
                    className="mt-6 w-full rounded-xl bg-black py-3 font-semibold text-white transition hover:bg-neutral-800"
                >
                    Export PNG
                </button>

            </div>

        </div>
    );
}