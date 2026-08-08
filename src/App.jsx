import { useState } from "react";
import { Toaster } from "react-hot-toast";

import Landing from "./components/Landing/Landing";
import Builder from "./components/Builder/Builder";

export default function App() {
    const [page, setPage] = useState("landing");

    return (
        <>
            <Toaster position="top-right" />

            <div className="min-h-screen bg-[#f7f8fa]">
                {page === "landing" ? (
                    <Landing
                        onStart={() => setPage("builder")}
                    />
                ) : (
                    <Builder />
                )}
            </div>
        </>
    );
}