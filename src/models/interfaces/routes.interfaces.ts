import { ComponentType } from "react";

export interface IAnonymousRouteProps {
    layout?: ComponentType<any>,
    Component: ComponentType<any>
}

export interface IUseAnonymousRoute extends IAnonymousRouteProps {
    path: string;
}