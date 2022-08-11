import { FC } from "react";
/** Interfaces */
import { IAnonymousRouteProps } from "models/interfaces/routes.interfaces";
import useViews from "views";

/**
 * @class AnonymousRoute
 * @return {JSX.Element} - return formated route object.
 */
const AnonymousRoute: FC<IAnonymousRouteProps> = ({
    layout,
    Component
}): JSX.Element => {
    /** Views */
    const {useLayouts} = useViews();
    const {NoneLayout} = useLayouts();

    /** Layout */
    const Layout = layout || NoneLayout;

    return (
        <Layout>
            <Component/>
        </Layout>
    );
}

export default AnonymousRoute;