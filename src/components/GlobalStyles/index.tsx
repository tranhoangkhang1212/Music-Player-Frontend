import './GlobalStyles.scss';

import { FC, ReactElement } from 'react';

interface IProps {
    children: ReactElement | ReactElement[];
}

const GlobalStyles: FC<IProps> = ({ children }) => {
    return <>{children}</>;
};

export default GlobalStyles;
