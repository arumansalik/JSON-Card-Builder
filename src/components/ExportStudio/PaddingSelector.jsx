import { MoveHorizontal } from "lucide-react";

export default function PaddingSelector({
                                            value,
                                            onChange,
                                        }) {

    return (

        <div className="space-y-5">

            <div className="flex items-center gap-3">

                <MoveHorizontal size={20} />

                <div>

                    <h3 className="font-bold">

                        Padding

                    </h3>

                    <p className="text-sm text-gray-500">

                        Space around your card

                    </p>

                </div>

            </div>

            <input
                type="range"
                min={0}
                max={100}
                step={4}
                value={value}
                onChange={(e) =>
                    onChange(Number(e.target.value))
                }
                className="w-full accent-black"
            />

            <div className="flex justify-between text-sm text-gray-500">

                <span>0 px</span>

                <span className="font-semibold text-black">

                    {value}px

                </span>

                <span>100 px</span>

            </div>

        </div>

    );

}