import React from "react";

const SimpleCounter = (props) => {
    return (
        <div className="container-sm">
            <div className="row">
                <div className="container_icon col box">
                    <i className="fa fa-clock"></i>
                </div>
                <div className="box col">{props.six % 10}</div>
                <div className="box col">{props.five % 10}</div>
                <div className="box col">{props.four % 10}</div>
                <div className="box col">{props.three % 10}</div>
                <div className="box col">{props.two % 10}</div>
                <div className="box col">{props.one % 10}</div>
            </div>
        </div>
    );
};

export default SimpleCounter;