import html2canvas from "html2canvas";

export async function exportCard(cardRef) {
    if (!cardRef.current) return;

    const canvas = await html2canvas(cardRef.current, {
        scale: 3,
        backgroundColor: "#ffffff",
    });

    const link = document.createElement("a");

    link.download = "json-card.png";

    link.href = canvas.toDataURL("image/png");

    link.click();
}