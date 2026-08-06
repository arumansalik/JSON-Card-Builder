import { FaPlus } from "react-icons/fa";

export default function AddFieldButton({ addField }) {
    return (
        <button
            onClick={addField}
            className="mt-5 flex items-center gap-2 rounded-lg bg-black px-5 py-3 text-white transition hover:bg-gray-800"
        >
            <FaPlus />
            Add Property
        </button>
    );
}