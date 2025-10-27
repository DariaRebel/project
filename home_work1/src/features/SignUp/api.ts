import { signUpRequest, type SignUpRequest } from 'shared/api';
import { useMutation } from '@tanstack/react-query';

export const useSignUpApi = () => {
    const { mutateAsync, isPending } = useMutation({
        mutationFn: (params: SignUpRequest) => signUpRequest(params),
    });

    return { mutateAsync, isPending };
};
