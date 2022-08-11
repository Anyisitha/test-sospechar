import { map } from "lodash";
import { FC } from "react";
import { BrowserRouter, Routes } from "react-router-dom";
import useAnonymousRoutes from "./Anonymous";

/**
 * @class useRoutes
 * @return {JSX.Element} - returning all routes of the application.
 */
const useRouter = (): JSX.Element => {
    /** Routes' Array */
    const resultRoutes = [...useAnonymousRoutes()];

    return (
        <BrowserRouter>
            <Routes>
                {map(resultRoutes)}
            </Routes>
        </BrowserRouter>
    )
}

export default useRouter;