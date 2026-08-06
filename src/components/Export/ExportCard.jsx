import { forwardRef } from "react";

const ExportCard = forwardRef(({ fields }, ref) => {
    return (
        <div
            ref={ref}
            className="w-[700px] rounded-3xl bg-white p-10 shadow-xl"
        >
            <div className="mb-8 border-b pb-6">
                <h1 className="text-4xl font-bold">
                    JSON Card
                </h1>

                <p className="mt-2 text-gray-500">
                    Generated using JSON Card Studio
                </p>
            </div>

            <div className="space-y-5">
                {fields.map((field) => {
                    if (!field.key) return null;

                    return (
                        <div
                            key={field.id}
                            className="flex justify-between border-b pb-3"
                        >
              <span className="font-semibold capitalize">
                {field.key}
              </span>

                            <span>
                {Array.isArray(field.value)
                    ? field.value.join(", ")
                    : String(field.value)}
              </span>
                        </div>
                    );
                })}
            </div>

            <div className="mt-10 text-center text-gray-400">
                jsoncardstudio.com
            </div>
        </div>
    );
});

export default ExportCard;