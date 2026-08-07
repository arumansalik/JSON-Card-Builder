import { toPng } from "html-to-image";
import toast from "react-hot-toast";

export async function exportCard(
    previewRef,
    quality = 2,
    fileName = "Business Card"
) {
    console.group("📸 Export PNG");

    console.log("previewRef:", previewRef);
    console.log("previewRef.current:", previewRef?.current);

    if (!previewRef) {
        console.error("previewRef is undefined.");
        toast.error("Preview ref is undefined.");
        console.groupEnd();
        return;
    }

    if (!previewRef.current) {
        console.error("previewRef.current is null.");
        toast.error("Preview not found.");
        console.groupEnd();
        return;
    }

    const node = previewRef.current;

    try {

        // Wait until the DOM has finished rendering
        await new Promise((resolve) =>
            requestAnimationFrame(resolve)
        );

        const original = {
            transform: node.style.transform,
            transition: node.style.transition,
            overflow: node.style.overflow,
        };

        node.style.transform = "none";
        node.style.transition = "none";
        node.style.overflow = "visible";

        const dataUrl = await toPng(node, {
            cacheBust: true,

            pixelRatio: quality,

            backgroundColor: "#ffffff",

            skipFonts: false,

            style: {
                margin: "0",
                transform: "none",
                transition: "none",
            },
        });

        node.style.transform = original.transform;
        node.style.transition = original.transition;
        node.style.overflow = original.overflow;

        const link = document.createElement("a");

        link.download = `${fileName.trim() || "Business Card"}.png`;

        link.href = dataUrl;

        document.body.appendChild(link);

        link.click();

        document.body.removeChild(link);

        toast.success("Image exported successfully.");

    } catch (error) {

        console.error("Export Error:", error);

        toast.error("Failed to export image.");

    }

    console.groupEnd();
}