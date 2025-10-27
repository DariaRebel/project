import { useAuthContext } from 'shared/lib/authContext';
import { useEffect, type FC } from 'react';
import { useNavigate } from 'react-router';

export const SignOut: FC = () => {
    const { logout } = useAuthContext();

    const navigate = useNavigate();

    useEffect(() => {
        logout();
        navigate('/');
    }, [logout, navigate]);

    return null;
};
