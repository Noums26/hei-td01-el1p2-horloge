import React, { useEffect, useState } from 'react';

export const padStartDigit = (digit) => {
    return digit.toString().padStart(2, 0)
}

const Horloge = ({views}) => {
    const [date, setDate] = useState(new Date());
    let timerId;


    useEffect(() => {
        timerId = setInterval(() => {
            setDate(new Date());
        }, 1000);

        return () => clearInterval(timerId)
    }, []);

    return (
        <div className={views}>
            <span>{padStartDigit(date.getHours())}:</span>
            <span>{padStartDigit(date.getMinutes())}:</span>
            <span>{padStartDigit(date.getSeconds())}</span>
        </div>
    );
};

export default Horloge;