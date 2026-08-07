import { useEffect } from "react";

export default function useKeyboardShortcuts({
                                                 undo,
                                                 redo,
                                                 copy,
                                                 exportPNG,
                                             }) {

    useEffect(() => {

        function handleKeyDown(e) {

            const key = e.key.toLowerCase();

            // Ignore when typing in an input or textarea
            const tag = document.activeElement?.tagName;

            if (
                tag === "INPUT" ||
                tag === "TEXTAREA"
            ) {
                return;
            }

            // Ctrl + Z
            if (e.ctrlKey && !e.shiftKey && key === "z") {
                e.preventDefault();
                undo?.();
            }

            // Ctrl + Shift + Z
            if (e.ctrlKey && e.shiftKey && key === "z") {
                e.preventDefault();
                redo?.();
            }

            // Ctrl + Y
            if (e.ctrlKey && key === "y") {
                e.preventDefault();
                redo?.();
            }

            // Ctrl + Shift + C
            if (e.ctrlKey && e.shiftKey && key === "c") {
                e.preventDefault();
                copy?.();
            }

            // Ctrl + Shift + E
            if (e.ctrlKey && e.shiftKey && key === "e") {
                e.preventDefault();
                exportPNG?.();
            }

        }

        window.addEventListener("keydown", handleKeyDown);

        return () =>
            window.removeEventListener(
                "keydown",
                handleKeyDown
            );

    }, [undo, redo, copy, exportPNG]);

}