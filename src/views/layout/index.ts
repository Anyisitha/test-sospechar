import { lazy } from "react";

const NoneLayout = lazy(() => import("./NoneLayout"));

const useLayouts = () => {
    return {
        NoneLayout,
    };
}

export default useLayouts;