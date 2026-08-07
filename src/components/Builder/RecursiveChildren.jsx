import FieldRow from "./FieldRow";

export default function RecursiveChildren({
                                              childrenFields,
                                              updateField,
                                              deleteField,
                                              addChildField,
                                              errors,
                                          }) {

    if (!childrenFields?.length) return null;

    return (

        <div className="mt-4 ml-8 border-l-2 border-gray-200 pl-6 space-y-4">

            {childrenFields.map((child) => (

                <FieldRow
                    key={child.id}
                    field={child}
                    updateField={updateField}
                    deleteField={deleteField}
                    addChildField={addChildField}
                    errors={errors}
                />

            ))}

        </div>

    );

}