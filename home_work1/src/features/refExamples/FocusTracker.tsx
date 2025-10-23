import { useRef, type FC } from 'react';

export const FocusTracker: FC = () => {

    const firstRef = useRef<HTMLInputElement>(null);
    const secondRef = useRef<HTMLInputElement>(null);
    const focusCountRef = useRef(0);
    
    const handleButtonClick = () => {
        console.log("focus");
        if (firstRef.current) firstRef.current.focus();
     };

    const handleFocusChange = () => {
        focusCountRef.current += 1;
        console.log(`Фокус менялся ${focusCountRef.current} раз`);
    };

    // useEffect(() => {
    //     console.log(`Фокус менялся ${focusCountRef.current} раз`);
    // }, [focusCountRef]);

    return (
        <div>
            <h1>
                FocusTracker
            </h1>
            <div style={{ display: 'flex', margin: '10px', justifyContent: 'center'}}>
                <input placeholder="input 1" id="1-input" type="text" ref={firstRef} onFocusCapture={handleFocusChange} />
            </div>
            <div style={{ display: 'flex', margin: '10px', justifyContent: 'center'}}>
                <input placeholder="input 2" id="2-input" type="text" ref={secondRef} onFocusCapture={handleFocusChange} />
            </div>
            <button  onClick={handleButtonClick}>Focus on first</button>
        </div>
    );
};
