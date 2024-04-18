import styles from "./../css/UpComingEvent.css"
import React from "react";
import moment from "moment"
import avt from "./../img/avt4.jpg"
import avtb from "./../img/imageblue.png"
import avtw from "./../img/imagewhite.png"

const UpComingEvent = ({handleView, todos}) => {
    return (
        <div className="UC-event__contents">
            <dir className="UC-event__header">
                <h2>Upcoming Event</h2>
                {/* <button onClick={() => handleView("agenda")}>View All</button> */}
            </dir>
            <h3 style={{ paddingLeft: "20px", color: "rgb(180, 180, 180)" }}>Today, {moment(new Date()).format("DD MMM")}</h3>
            <div className="list-event">
                {
                    todos.sort((a,b) => {
                        if(a.start < b.start)
                            return -1;
                        if(a.start > b.start)
                            return 1;
                        return 0;
                    }).filter((item) => {
                        const day = new Date()
                        return item.start > day
                    }
                ).slice(0, 4).map((item, index) => {
                        return (
                            <div className={`item ${item.color}`} key={index}>
                                <div className="left">
                                    <h3>{item.title}</h3>
                                    <span>{moment(item.start).format("HH:mm A")} - {moment(item.end).format("HH:mm A")}</span>
                                    {
                                        item.resouce ? (
                                            <div className="profile">
                                                <img src={avt} />
                                                <a href={item.resouce}>View Client ProFile</a>
                                            </div>
                                        ) : null
                                    }
                                </div>
                                {
                                    item.resouce ? (
                                        <div className="right">
                                            <div className="icon__wrap">
                                                <img src={item.color === 'blue' ? avtb : avtw} />
                                            </div>
                                        </div>
                                    ) : null
                                }
                            </div>
                        )
                    })
                }
            </div>
        </div >
    );
}

export default UpComingEvent;
