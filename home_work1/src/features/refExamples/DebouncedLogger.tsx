import { Box, TextField, Typography } from '@mui/material';
import { useEffect, useRef, useState, type FC } from 'react';

export const DebouncedLogger: FC = () => {

    const [value, setValue] = useState('');
      const timerRef = useRef<NodeJS.Timeout | null>(null);

      useEffect(() => {
        timerRef.current = setTimeout(() => {
          console.log(`Значение: ${value}`);
        }, 1000);

        return () => {
          if (timerRef.current !== null) {
            clearTimeout(timerRef.current);
          }
        };
      }, [value]);

    return (
        <Box>
            <Typography variant="h3" align="center" sx={{ mb: 6 }}>
                DebouncedLogger
            </Typography>

            <Box sx={{ display: 'flex', justifyContent: 'center' }}>
                <TextField
                    sx={{ mb: 4 }}
                    id="outlined-basic"
                    label="Текст"
                    variant="outlined"
                    value={value}
                    onChange={(e) => setValue(e.target.value)}
                />
            </Box>
        </Box>
    );
};
