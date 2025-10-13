import type { FormValues } from './types';

export const createInitialsValues = (values?: FormValues): FormValues => ({
    username: values?.username ?? '',
    email: values?.email ?? '',
    password: values?.password ?? '',
    confirmpassword: values?.confirmpassword ?? '',
    urls: values?.urls ?? [{ value: '' }],
});
