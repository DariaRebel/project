import { useAuthContext } from 'shared/lib/authContext';
import { AppBar, Box, Link, Toolbar, Typography } from '@mui/material';
import type { FC } from 'react';

export const Header: FC = () => {
    const { accessToken } = useAuthContext();

    return (
        <AppBar
            position="static"
            color="default"
            elevation={0}
            sx={{ borderBottom: (theme) => `1px solid ${theme.palette.divider}` }}
        >
            <Toolbar>
                <Link href={'/'} variant="button">
                    <Typography variant="h6" component="h6">
                        Home
                    </Typography>
                </Link>

                <Box component="nav" sx={{ ml: 'auto' }}>
                    <Link href="/profile" sx={{ mx: 1 }}>
                        Профиль
                    </Link>

                    {!accessToken && (
                        <Link href="/signUp" sx={{ mx: 1 }}>
                            SignUp
                        </Link>
                    )}

                    {!accessToken && (
                        <Link href="/signIn" sx={{ mx: 1 }}>
                            SignIn
                        </Link>
                    )}

                    {accessToken && (
                        <Link href="/signOut" sx={{ mx: 1 }}>
                            SignOut
                        </Link>
                    )}
                </Box>
            </Toolbar>
        </AppBar>
    );
};
