import {useEffect, useState} from "react";

function Timer(){
    const [timer, setTimer] = useState(10)

    useEffect(() => {
        const countdown = setInterval(() => {
            setTimer((prevTimer) => {
                if (prevTimer === 1) {
                    alert("Time’s up");
                    return 0;
                }
                return prevTimer > 0 ? prevTimer - 1 : 0;
            });
        }, 1000);

        return () => clearInterval(countdown);
    }, []);

    return(
        <div>
            <h1>Timer: {timer}</h1>
        </div>
    )
}

export default Timer;