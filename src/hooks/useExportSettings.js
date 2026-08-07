import { useState } from "react";

export default function useExportSettings() {

    const [settings, setSettings] = useState({

        aspectRatio: "16:9",

        background: "white",

        padding: 32,

        quality: 2,

        shadow: true,

        fileName: "Business Card",

    });

    function updateSetting(key, value) {

        setSettings(prev => ({
            ...prev,
            [key]: value,
        }));

    }

    return {

        settings,

        updateSetting,

    };

}