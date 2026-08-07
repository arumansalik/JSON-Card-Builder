import html2canvas from "html2canvas";

export async function exportCard(previewRef, quality = 2) {

    if (!previewRef?.current) return;

    const canvas = await html2canvas(
        previewRef.current,
        {
            scale: quality,
            useCORS: true,
            backgroundColor: null,
        }
    );

    const link = document.createElement("a");

    link.download = "json-card.png";

    link.href = canvas.toDataURL("image/png");

    link.click();

}