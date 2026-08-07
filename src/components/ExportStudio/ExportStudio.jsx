import {
    Download,
    Image,
} from "lucide-react";

import { exportCard } from "../../utils/exportCard";
import AspectRatioSelector from "./AspectRatioSelector";
import useExportSettings from "../../hooks/useExportSettings";
import BackgroundSelector from "./BackgroundSelector";
import PaddingSelector from "./PaddingSelector";
import QualitySelector from "./QualitySelector";

export default function ExportStudio({

                                         previewRef,

                                         onClose,

                                     }) {

    const {
        settings,
        updateSetting,
    } = useExportSettings();

    return (

        <div className="space-y-8">

            <div className="rounded-2xl border border-gray-200 p-6">

                <div className="flex items-center gap-3">

                    <Image />

                    <h3 className="text-xl font-bold">

                        Export Image

                    </h3>

                </div>

                <p className="mt-2 text-gray-500">

                    Configure your image before exporting.

                </p>

            </div>

            <AspectRatioSelector
                value={settings.aspectRatio}
                onChange={(ratio) =>
                    updateSetting(
                        "aspectRatio",
                        ratio
                    )
                }
            />

            <BackgroundSelector
                value={settings.background}
                onChange={(background) =>
                    updateSetting(
                        "background",
                        background
                    )
                }
            />

            <PaddingSelector
                value={settings.padding}
                onChange={(padding) =>
                    updateSetting("padding", padding)
                }
            />

            <QualitySelector
                value={settings.quality}
                onChange={(quality) =>
                    updateSetting("quality", quality)
                }
            />

            <button
                onClick={() => {

                    exportCard(previewRef, settings.quality);

                    onClose();

                }}
                className="flex w-full items-center justify-center gap-3 rounded-2xl bg-black px-6 py-4 text-lg font-semibold text-white transition hover:bg-neutral-800"
            >

                <Download />

                Export PNG

            </button>

        </div>

    );

}