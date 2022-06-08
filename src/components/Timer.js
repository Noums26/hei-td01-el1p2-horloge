import React, { useEffect, useState } from 'react';
import { padStartDigit } from './Horloge';

const Timer = ({views}) => {
    const [hour, setHour] = useState();
    const [minutes, setMinutes] = useState();
    const [secondes, setSecondes] = useState();
    const [play, setPlay] = useState(false);

    const [view, setView] = useState(true);
    const [btn, setBtn] = useState(true);
    
    const handleStart = (event) => {
        if (isNaN(hour*3600 + minutes*60) !== true && minutes >= 0 && minutes <= 59 && hour >=0) {
            setSecondes(hour*3600 + minutes*60)
            setPlay(true)
            setView(false)
            setBtn(false)
        } else {
            alert('Input incorrect !')
        }
    }
    
    const handleStop = () => {
        setHour()
        setMinutes()
        setSecondes()
        setPlay(false)
        setView(true)
        setBtn(true)
    }

    useEffect(() => {
        const timerId = setInterval(() => {
            if (secondes === 0){
                return () => clearInterval(timerId)
            }

            setSecondes(s => s-1)
        }, 1000);

        if (secondes === 0 && play) {
            setPlay(false)
            alert("Temp ecouler !")
        }

        return () => {clearInterval(timerId)};
    });
    

    return (
        <div className={views}>
            {view ? (
        <div>
            <input type="text" placeholder='00' className='timerInput' onChange={e => setHour(parseInt(e.target.value))} />:
            <input type="text" placeholder='00' className='timerInput' onChange={e => setMinutes(parseInt(e.target.value))} />
        </div>)
        : (
        <div>
            <span>{padStartDigit(Math.floor(secondes/3600))}:</span>
            <span>{padStartDigit(Math.floor((secondes%3600)/60))}:</span>
            <span>{padStartDigit(secondes%60)}</span>
        </div>)}
            {btn ? (
            <div><a href="#" className='btn btn-success btn-lg w-100' onClick={handleStart}>Start</a></div>):
            (<div><a href="#" className='btn btn-danger btn-lg w-100' onClick={handleStop}>Stop</a></div>)}

        </div>
    );
};

export default Timer;