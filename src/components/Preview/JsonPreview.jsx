import { generateJSON } from "../../utils/jsonHelpers";
import { Prism as SyntaxHighlighter }
    from "react-syntax-highlighter";
import { oneDark }
    from "react-syntax-highlighter/dist/esm/styles/prism";

export default function JsonPreview({ fields }) {
    const json = generateJSON(fields);

    fields.forEach((field) => {
        if (field.key.trim() !== "") {
            json[field.key] = field.value;
        }
    });

    return (
        <div className="rounded-xl bg-gray-900 p-6 text-green-400 shadow-lg">
            <SyntaxHighlighter
                language="json"
                style={oneDark}
                customStyle={{
                    borderRadius:"12px",
                    fontSize:"15px"
                }}
            >
                {JSON.stringify(json,null,2)}
            </SyntaxHighlighter>
        </div>
    );
}