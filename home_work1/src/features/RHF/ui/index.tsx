import {
    Box,
    Button,
    Container,
    Divider,
    IconButton,
    TextField,
    Typography,
} from '@mui/material';
import { useMemo, type FC } from 'react';
import AddIcon from '@mui/icons-material/Add';
import DeleteIcon from '@mui/icons-material/Delete';

import { createInitialsValues, validationSchema, type FormValues } from '../model';

import { Controller, FormProvider, useFieldArray, useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';

export const ReactHookForm: FC = () => {

    const initialValues = useMemo(() => createInitialsValues(), []);

    const form = useForm<FormValues>({
        defaultValues: initialValues,
        mode: 'onChange',
        resolver: zodResolver(validationSchema),
    });

    const {
        reset,
        handleSubmit,
        getValues,
        control,
        formState: { errors, isValid, isSubmitting },
    } = form;



    const {
        fields: urlValues,
        append: urlAppend,
        remove: urlRemove,
    } = useFieldArray({
        control,
        name: 'urls',
    });


    const submitHandler = (formValues: FormValues) => {
        setTimeout(() => {
            alert('Форма успешно отправлена');;
          }, 2000);
        console.log(JSON.stringify(formValues));
        reset();
    };

    return (
        <FormProvider {...form}>
            <Box
                sx={{
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                    flexFlow: 'column',
                }}
                component="form"
                onSubmit={handleSubmit(submitHandler)}
            >
                <Typography variant="h4" sx={{ mb: 4 }}>
                    Форма ReactHook
                </Typography>
                <Container maxWidth="sm">
                    <Controller
                        name="username"
                        control={control}
                        render={({ field, fieldState }) => (
                            <TextField
                                required
                                {...field}
                                sx={{ mb: 3 }}
                                fullWidth
                                label="Login"
                                variant="outlined"
                                error={!!fieldState.error}
                                helperText={fieldState.error?.message}
                            />
                        )}
                    />
                    <Controller
                        name="email"
                        control={control}
                        render={({ field, fieldState }) => (
                            <TextField
                                required
                                {...field}
                                sx={{ mb: 3 }}
                                fullWidth
                                label="Email"
                                variant="outlined"
                                error={!!fieldState.error}
                                helperText={fieldState.error?.message}
                            />
                        )}
                    />
                    <Controller
                        name="password"
                        control={control}
                        render={({ field, fieldState }) => (
                            <TextField
                                required
                                {...field}
                                sx={{ mb: 3 }}
                                fullWidth
                                type="password"
                                label="Пароль"
                                variant="outlined"
                                error={!!fieldState.error}
                                helperText={fieldState.error?.message}
                            />
                        )}
                    />
                    <Controller
                        name="confirmpassword"
                        control={control}
                        rules={{
                            validate: (field) => {
                                console.log(field)
                              const password = getValues("password");
                              console.log(password)
                              return password === field || "Passwords must match";
                            },
                          }}
                  
                        render={({ field, fieldState }) => (
                            <TextField
                                required
                                {...field}
                                sx={{ mb: 2 }}
                                fullWidth
                                type="password"
                                label="Подтвердите пароль"
                                variant="outlined"
                                error={!!fieldState.error}
                                helperText={fieldState.error?.message}
                            />
                        )}
                    />
                    <Divider variant="middle" sx={{ mb: 4 }} />
                    {urlValues.map((url, index) => (
                        <Box key={url.id} sx={{ display: 'flex', mb: 2, alignItems: 'flex-start' }}>
                            <Controller
                                name={`urls.${index}.value` as const}
                                control={control}
                                render={({ field, fieldState }) => (
                                    <TextField
                                        required
                                        {...field}
                                        sx={{ mb: 2 }}
                                        fullWidth
                                        label={`Встатьте ссылку ${index + 1}`}
                                        variant="outlined"
                                        error={!!fieldState.error}
                                        helperText={fieldState.error?.message}
                                    />
                                )}
                            />

                            {!!index && (
                                <IconButton
                                    onClick={() => urlRemove(index)}
                                    sx={{ ml: 2, mt: '12px' }}
                                    color="error"
                                    size="small"
                                >
                                    <DeleteIcon />
                                </IconButton>
                            )}
                        </Box>
                    ))}

                    <Button
                        onClick={() => urlAppend({ value: '' })}
                        color="primary"
                        sx={{ mb: 4 }}
                        startIcon={<AddIcon />}
                        disabled={Array.isArray(errors.urls) && !!errors.urls.length}
                    >
                        Добавить информацию о себе
                    </Button>

                    <Box sx={{ display: 'flex', justifyContent: 'center' }}>
                        <Button
                            sx={{ mb: 2 }}
                            disabled={!isValid}
                            loading={isSubmitting}
                            variant="contained"
                            type="submit"
                        >
                            Отправить
                        </Button>
                    </Box>
                </Container>
            </Box>
        </FormProvider>
    );
};
