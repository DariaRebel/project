import { Box, Button, Typography } from '@mui/material';
import { FC, useEffect, useRef } from 'react';

    interface ClickData {
        startTime: number | null ;
        clickCount: number;
    }

export const ClickTimer: FC = () => {

    const metaInfo = useRef<ClickData>({
        startTime: null,
        clickCount: 0,
    });

    const clickHandler = () => {
        metaInfo.current.clickCount += 1;
        if (metaInfo.current.startTime != null) {
            const difference = Date.now() - metaInfo.current.startTime;
            console.log(difference);
        } else {
            metaInfo.current.startTime = Date.now();
        }
        console.log(metaInfo.current.clickCount);
    };

    useEffect(() => {
        console.log(metaInfo.current.clickCount);
    }, [metaInfo]);

    return (
        <Box>
            <Typography variant="h3" align="center" sx={{ mb: 6 }}>
                Работа с DOM
            </Typography>
            <Button  onClick={clickHandler} variant="contained">Click</Button>
        </Box>
    );
};
