import { useEffect, useContext } from 'react';
import { Context as AuthContext } from '../contexts/AuthContext';
import { LoadingView } from '../components/StyleGuide';

const LunchScreen = () => {
    const { tryLocalSignin } = useContext(AuthContext);

    useEffect(() => {
        tryLocalSignin();
    }, []);
    
    return (<LoadingView />);
};

export default LunchScreen;