import { FC, Fragment } from "react";

/**
 * @class NoneLayout
 * @return {JSX.Element} - returning the layout element that was created from display the component.
 */
const NoneLayout: FC<{children: any}> = ({children}): JSX.Element => {
    return <Fragment>{children}</Fragment>;
}

export default NoneLayout;