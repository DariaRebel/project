import { z } from 'zod';

export const validationSchema = z.object({
    username: z.string().min(4, 'Логин обязательно').max(20),
    email: z.string().email('Email обязательно'),
    password: z.string().min(6, 'Пароль меньше 6 символов'),
    confirmpassword: z.string().min(6, 'Пароль меньше 6 символов'),
    urls: z.array(z.object({ value: z.string().url('Ссылка некорректна') })).min(1, 'Добавьте хотя бы одну ссылку'),
}).refine((data) => data.password === data.confirmpassword, {
    message: "Passwords do not match",
    path: ["confirmpassword"],
  });
;
