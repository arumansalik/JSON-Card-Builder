export function validateFields(fields){

    const errors = {};

    const keys = [];

    fields.forEach(field=>{

        if(field.key.trim()===""){
            errors[field.id]="Key is required";
        }

        if(keys.includes(field.key)){
            errors[field.id]="Duplicate Key";
        }

        keys.push(field.key);

    });

    return errors;

}