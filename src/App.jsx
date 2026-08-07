import Layout from "./components/Layout/Layout";
import Builder from "./components/Builder/Builder";
import { Toaster } from "react-hot-toast";

export default function App() {
    return (
        <>
            <Layout>
                <div className="mx-auto max-w-[1700px] px-8 py-10">
                    <Builder/>
                </div>
            </Layout>
            <Toaster position="top-right" reverseOrder={false} />
        </>

    );
}