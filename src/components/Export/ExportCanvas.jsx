import JsonPreview from "../Preview/JsonPreview";

export default function ExportCanvas({
                                         previewRef,
                                         fields,
                                         theme,
                                         aspectRatio,
                                         background = "#f5f5f5",
                                         padding = 40,
                                     }) {

    const ratios = {
        "1:1": "aspect-square",
        "16:9": "aspect-video",
        "9:16": "aspect-[9/16]",
        "4:5": "aspect-[4/5]",
        "3:4": "aspect-[3/4]",
        "A4": "aspect-[210/297]",
    };

    return (

        <div
            ref={previewRef}
            className={`
                ${ratios[aspectRatio]}
                w-full
            `}
            style={{
                background,
                padding,
            }}
        >

            <JsonPreview
                fields={fields}
                theme={theme}
                background={background}
            />

        </div>

    );
}