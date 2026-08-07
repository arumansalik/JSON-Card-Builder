import { toPng } from "html-to-image";

export async function exportCard(ref) {
    if (!ref.current) return;

    try {
        const dataUrl = await toPng(ref.current, {
            pixelRatio: 3,
            cacheBust: true,
        });

        const link = document.createElement("a");
        link.download = "Business-Card.png";
        link.href = dataUrl;
        link.click();
    } catch (error) {
        console.error(error);
    }
}