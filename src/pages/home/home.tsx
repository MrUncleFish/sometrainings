import React, {useEffect} from 'react';
import IPage from '../../interfaces/page';
import logging from '../../config/logging';

const HomePage: React.FunctionComponent<IPage> = props => {
    useEffect(() => {
        logging.info(`Loading ${props.name}`);
    }, []);

    return <div>Home page!</div>
}

export default HomePage;