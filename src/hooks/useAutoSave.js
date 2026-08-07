import { useEffect } from "react";

export default function useAutoSave(key, value) {

    useEffect(() => {

        try {
            localStorage.setItem(
                key,
                JSON.stringify(value)
            );
        } catch (err) {
            console.error("Auto Save Error:", err);
        }

    }, [key, value]);

}