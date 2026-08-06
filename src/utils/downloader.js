import { saveAs } from "file-saver";

export function downloadJSON(json) {
    const blob = new Blob(
        [JSON.stringify(json, null, 2)],
        {
            type: "application/json",
        }
    );

    saveAs(blob, "business-card.json");
}