import { useState } from "react";

export default function useHistory(initialState) {

    const [past, setPast] = useState([]);
    const [present, setPresent] = useState(initialState);
    const [future, setFuture] = useState([]);

    function set(valueOrUpdater) {

        const nextState =
            typeof valueOrUpdater === "function"
                ? valueOrUpdater(present)
                : valueOrUpdater;

        // Prevent duplicate history entries
        if (JSON.stringify(nextState) === JSON.stringify(present)) {
            return;
        }

        setPast((prev) => [...prev, present]);

        setPresent(nextState);

        setFuture([]);
    }

    function undo() {

        if (past.length === 0) return;

        const previous = past[past.length - 1];

        setPast((prev) => prev.slice(0, -1));

        setFuture((prev) => [present, ...prev]);

        setPresent(previous);
    }

    function redo() {

        if (future.length === 0) return;

        const next = future[0];

        setPast((prev) => [...prev, present]);

        setFuture((prev) => prev.slice(1));

        setPresent(next);
    }

    return {

        state: present,

        set,

        undo,

        redo,

        canUndo: past.length > 0,

        canRedo: future.length > 0,

    };
}