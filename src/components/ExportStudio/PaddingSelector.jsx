import { MoveHorizontal } from "lucide-react";

export default function PaddingSelector({
                                            value,
                                            onChange,
                                        }) {

    return (
        <div className="w-full">

            <div className="flex items-center gap-3">

                <div
                    className="
                        flex
                        h-10
                        w-10
                        shrink-0
                        items-center
                        justify-center
                        rounded-xl
                        bg-black
                        text-white
                    "
                >
                    <MoveHorizontal size={18} />
                </div>

                <div>

                    <h3 className="text-base font-black">
                        Padding
                    </h3>

                    <p className="text-sm text-gray-500">
                        Space around your card
                    </p>

                </div>

                <span
                    className="
                        ml-auto
                        rounded-lg
                        bg-gray-100
                        px-3
                        py-1.5
                        text-xs
                        font-bold
                        text-gray-700
                    "
                >
                    {value}px
                </span>

            </div>

            <div className="mt-6">

                <input
                    type="range"
                    min="0"
                    max="100"
                    value={value}
                    onChange={(event) =>
                        onChange(Number(event.target.value))
                    }
                    className="
                        h-2
                        w-full
                        cursor-pointer
                        appearance-none
                        rounded-full
                        bg-gray-200
                        accent-black
                    "
                />

                <div
                    className="
                        mt-3
                        flex
                        items-center
                        justify-between
                        text-xs
                        text-gray-500
                    "
                >

                    <span>0 px</span>

                    <span className="font-bold text-gray-900">
                        {value}px
                    </span>

                    <span>100 px</span>

                </div>

            </div>

        </div>
    );
}