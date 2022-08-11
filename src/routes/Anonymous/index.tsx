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
    const {Home} = useScreens(); 
    /** Routes */
    const routes: Array<IUseAnonymousRoute> = [
        {
            path: "/",
            Component: Home 
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