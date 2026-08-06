import { useContext }
    from "react";

import {
    BuilderContext
}
    from "../context/BuilderContext";

export default function useBuilder(){

    return useContext(

        BuilderContext

    );

}