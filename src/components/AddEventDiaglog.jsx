import styles from "./../css/AddEventDiaglog.css"
import React, { useState } from "react";
import moment from "moment"
const AddEventDiaglog = ({ showDialog, setShowDialog, event, setEvent, handleTodo }) => {
    const [check, setCheck] = useState(false);

    const handleDialog = () => {
        setShowDialog(prev => !prev)
    }
    const handleCheck = () => {
        setCheck(prev => !prev)
    }
    const handleTitle = (e) => {
        setEvent({ ...event, title: e.target.value })
    }
    const handleColor = (e) => {
        setEvent({ ...event, color: e.target.value })
    }
    const handleResouce = (e) => {
        setEvent({ ...event, resouce: e.target.value })
    }
    const handleStart = (e) => {
        const time = moment(e.target.value).toDate();
        setEvent({...event, start: time })
    }
    const handleEnd = (e) => {
        const time = moment(e.target.value).toDate();
        setEvent({...event, end: time })
    }

    const handleSubmit = () => {
        if (event.title === '')
            alert('Please enter the title')
        else if (!event.start)
            alert('Please enter the start')
        else if (!event.end)
            alert('Please enter the end')
        else {
            handleTodo(event);
            setEvent({
                start: "",
                end: "",
                title: "",
                color: "blue",
                resouce: ""
            });
            handleDialog();
        }

    }
    return (
        <React.Fragment>
            {showDialog ? (
                <div className="dialog__wrap">
                    <div className="dialog__content">
                        <div className="dialog__header">
                            <h3>Add Event Dialog</h3>
                        </div>
                        <div className="dialog__body">
                            <li className="col">
                                <h4>Title</h4>
                                <input type="text" placeholder="Enter Title" aria-required="true" onChange={handleTitle} />
                                <span>Do not exceed 20 characters when entering the title.</span>
                            </li>
                            <li className="row">
                                <li className="col half">
                                    <h4>Start</h4>
                                    <input type="datetime-local" aria-required="true" onChange={handleStart} defaultValue={moment(event.start).format('YYYY-MM-DD HH:mm')} />
                                </li>
                                <li className="col half">
                                    <h4>End</h4>
                                    <input type="datetime-local" aria-required="true" onChange={handleEnd} defaultValue={moment(event.end).format('YYYY-MM-DD HH:mm')} />
                                </li>
                            </li>
                            <li className="col">
                                <h4>Color</h4>
                                <div className="item">
                                    <input type="radio" id="color__blue" name="color" value='blue' onChange={handleColor} defaultChecked />
                                    <label for="color__blue">Blue</label>
                                </div>
                                <div className="item">
                                    <input type="radio" id="color__orange-light" value='orange-light' onChange={handleColor} name="color" />
                                    <label for="color__orange-light">Orange light</label>
                                </div>
                                <div className="item">
                                    <input type="radio" id="color__orange-dark" value='orange-dark' onChange={handleColor} name="color" />
                                    <label for="color__orange-dark">Orange dark</label>
                                </div>
                            </li>
                            <li className="col">
                                <h4>Type Event</h4>
                                <div className="item">
                                    <input type="checkbox" onClick={handleCheck} />
                                    <label for="manage-category__deny">Meetting</label>
                                </div>
                            </li>
                                {
                                    check ? (
                                        <li className="col" style={{height: "65px"}}>
                                        <h4>Url</h4>
                                            <input type="text" placeholder="Enter Url" aria-required="true" onChange={handleResouce} />
                                        </li>
                                    ) : <div className="padding"></div>
                                }
                            <li className="row">
                                <li className="col half">
                                    <button className="secondary-btn" onClick={handleDialog}>Cancle</button>
                                </li>
                                <li className="col half">
                                    <button className="primary-btn" onClick={handleSubmit}>Save</button>
                                </li>
                            </li>
                        </div>
                    </div>
                </div>
            ) : null}
        </React.Fragment>
    );
}

export default AddEventDiaglog;
