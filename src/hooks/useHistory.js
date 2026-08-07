import { useState } from "react";

export default function useHistory(initialState) {

    const [past, setPast] = useState([]);

    const [present, setPresent] = useState(initialState);

    const [future, setFuture] = useState([]);

    const set = (newPresent) => {

        setPast((prev) => [...prev, present]);

        setPresent(newPresent);

        setFuture([]);

    };

    const undo = () => {

        if (past.length === 0) return;

        const previous = past[past.length - 1];

        const newPast = past.slice(0, past.length - 1);

        setPast(newPast);

        setFuture((prev) => [present, ...prev]);

        setPresent(previous);

    };

    const redo = () => {

        if (future.length === 0) return;

        const next = future[0];

        const newFuture = future.slice(1);

        setPast((prev) => [...prev, present]);

        setFuture(newFuture);

        setPresent(next);

    };

    return {

        state: present,

        set,

        undo,

        redo,

        canUndo: past.length > 0,

        canRedo: future.length > 0,

    };

}