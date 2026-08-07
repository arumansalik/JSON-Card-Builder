export default function isContainer(type) {

    return (
        type === "object" ||
        type === "array"
    );

}