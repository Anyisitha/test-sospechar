import { lazy } from "react";

const Home = lazy(() => import("./Home"));
const Cover = lazy(() => import("./Cover"));
const Instructions = lazy(() => import("./Instructions"));
const Questions = lazy(() => import("./Questions"));
const Success = lazy(() => import("./success"));
const Error = lazy(() => import("./Error"));
const Final = lazy(() => import("./Final"));

const useScreens = () => {
    return {
        Home,
        Cover,
        Instructions,
        Questions,
        Success,
        Error,
        Final
    };
}

export default useScreens;