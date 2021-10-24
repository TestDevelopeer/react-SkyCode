import CountUp from "react-countup";
import React from "react";

const CounUpCounter = (props) => {
    const {start, end, text, postText} = props.counterInfo;
    const easingFn = (t, b, c, d) => {
        const ts = (t /= d) * t;
        const tc = ts * t;
        return b + c * (tc + -3 * ts + 3 * t);
    };
    const formattingFn = (value) => {
        if (value < 10) {
            return '0' + value;
        } else {
            return value;
        }
    };
    return (
        <div className="dia-fun-fact-item dia-headline pera-content text-center">
            <span className="fun-fact-tag text-uppercase">{text}</span>
            <div className="fun-fact-number d-flex">
                {
                    props.isVisible ?
                        <CountUp separator={' '} duration={2} easingFn={easingFn} formattingFn={formattingFn} start={start}
                                 end={end} delay={0}>
                            {({countUpRef}) => (
                                <><h3 ref={countUpRef} className="odometer">00</h3><span>{postText}</span> <span className={'counter-icon'}>+</span></>
                            )}
                        </CountUp> : <><h3 className="odometer">00</h3><span>+</span></>
                }
            </div>
        </div>
    );
}

export default CounUpCounter;