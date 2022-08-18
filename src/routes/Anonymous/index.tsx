import {map} from "lodash";
import { Route } from "react-router-dom";
/** Interfaces */
import { IUseAnonymousRoute } from "models/interfaces/routes.interfaces";
/** Modules */
import useViews from "views";
import AnonymousRoute from "./AnonymousRoute";

const useAnonymousRoutes = () => {
    /** Views */
    const {useScreens} = useViews();
    const {Home, Cover, Instructions, Questions, Success, Error, Final} = useScreens(); 
    /** Routes */
    const routes: Array<IUseAnonymousRoute> = [
        {
            path: "/",
            Component: Home 
        },
        {
            path: "/cover",
            Component: Cover
        },
        {
            path: "/instructions",
            Component: Instructions
        },
        {
            path: "/questions",
            Component: Questions
        },
        {
            path: "/success",
            Component: Success
        },
        {
            path: "/no-heart",
            Component: Error
        },
        {
            path: "/final",
            Component: Final
        }
    ];

    return map(routes, (route: IUseAnonymousRoute, index: number) => (
        <Route
            key={index}
            path={route.path}
            element={
                <AnonymousRoute Component={route.Component}/>
            }
        />
    ))
}   

export default useAnonymousRoutes;