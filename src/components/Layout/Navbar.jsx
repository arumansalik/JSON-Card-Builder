export default function Navbar() {
    return (
        <header className="border-b bg-white">
            <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-6">
                <h1 className="text-2xl font-bold">
                    JSON Card Studio
                </h1>

                <button className="rounded-lg bg-black px-5 py-2 text-white">
                    Export
                </button>
            </div>
        </header>
    );
}