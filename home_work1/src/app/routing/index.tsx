import { createBrowserRouter } from 'react-router';
import { ProfilePage } from 'pages/Profile';
import { SignUpPage } from 'pages/SignUp';
import { App } from '../App';
import { SignOutPage } from 'pages/SignOut';
import { useContextAuthStrategy } from 'shared/lib/useContextAuthStrategy';
//import { ProtectionWrapper } from 'shared/ui/ProtectionWrapper';
import { SignInPage } from 'pages/SignIn';
import { HomePage } from 'pages/home/ui/HomePage';
import { withProtection } from 'shared/lib/withProtection';

const ProfilePageWithProtection = withProtection(ProfilePage, useContextAuthStrategy);

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
                element: <ProfilePageWithProtection />,
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
