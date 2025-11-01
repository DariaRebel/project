import { compose } from 'shared/lib/compose';
import { withTheme } from './MUI';
import { withToastify } from './Toastify';
import { withTanStackQuery } from './TanStackQuery';
import { withAuthProvider } from './Auth';

export const withProviders = compose(withAuthProvider, withTheme, withToastify, withTanStackQuery);
