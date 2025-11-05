import { SignInForm } from 'features/SignIn';
import { Box } from '@mui/material';
import type { FC } from 'react';

const SignIn: FC = () => {
    return (
        <Box>
            <SignInForm />
        </Box>
    );
};

export default SignIn;
