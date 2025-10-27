import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Layout } from './Layout';
import { HomePage } from 'pages/home/ui/HomePage';
import { SignInPage } from 'pages/SignIn';
import { SignOutPage } from 'pages/SignOut';
import { ProfilePage } from 'pages/Profile';
import { SignUpPage } from 'pages/SignUp';
import { ProtectionWrapper } from 'shared/lib/ui/ProtectionWrapper';
import { useContextAuthStrategy } from 'shared/lib/useContextAuthStrategy';


export const RouterConfig = () => {

  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Layout />} >
            <Route path='SignUp' element={<SignUpPage />} />

            <Route path='SignIn' element={<SignInPage />} />

            <Route path='SignOut' element={<SignOutPage />} />

            <ProtectionWrapper useAuthStrategy={useContextAuthStrategy}>
                <ProfilePage />
            </ProtectionWrapper>

          <Route index element={<HomePage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};
