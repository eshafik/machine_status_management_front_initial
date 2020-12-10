import React, {useRef} from 'react';
import IdleTimer from "react-idle-timer";


const IdleTimerContainer = (props) => {
    const idleTimerRef = useRef(null);
    const onIdle = () => {
        console.log("User Idle");
    }
    return(
        <div>
            <IdleTimer
                ref={idleTimerRef}
                timeout={5*1000}
                onIdle={onIdle}
            />
        </div>
    );
};

export default IdleTimerContainer;