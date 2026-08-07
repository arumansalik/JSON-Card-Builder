import { useEffect } from "react";

export default function useAutoSave(key, value) {

    useEffect(() => {

        localStorage.setItem(
            key,
            JSON.stringify(value)
        );

    }, [key, value]);

}