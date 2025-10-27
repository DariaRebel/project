import { createBrowserRouter } from 'react-router';
import { HomePage } from 'pages/home/ui/HomePage';
import { SignInPage } from 'pages/SignIn';
import { SignOutPage } from 'pages/SignOut';
import { ProfilePage } from 'pages/Profile';
import { SignUpPage } from 'pages/SignUp';

import { App } from '../App';
import { useContextAuthStrategy } from 'shared/lib/useContextAuthStrategy';
import { ProtectionWrapper } from 'shared/lib/ui/ProtectionWrapper';

export const router = createBrowserRouter([
    {
        path: '/',
        element: <App />,
        children: [
            {
                index: true,
                element: <HomePage />,
            },
            {
                path: 'profile',
                element: (
                    <ProtectionWrapper useAuthStrategy={useContextAuthStrategy}>
                        <ProfilePage />
                    </ProtectionWrapper>
                ),
            },
            {
                path: 'signUp',
                element: <SignUpPage />,
            },
            {
                path: 'signIn',
                element: <SignInPage />,
            },
            {
                path: 'signOut',
                element: <SignOutPage />,
            },
        ],
    },
]);
