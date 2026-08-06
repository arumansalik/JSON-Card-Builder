import FieldRow from "./FieldRow";
import ObjectEditor from "./ObjectEditor";
import ArrayEditor from "./ArrayEditor";

export default function RecursiveField(props) {
    const { field } = props;

    return (
        <div>

            <FieldRow {...props} />

            {field.type === "array" && (
                <ArrayEditor
                    field={field}
                    updateField={props.updateField}
                />
            )}

            {field.type === "object" && (
                <ObjectEditor {...props} />
            )}

        </div>
    );
}