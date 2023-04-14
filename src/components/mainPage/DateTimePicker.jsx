import React, { useState } from 'react';
import Datetime from 'react-datetime';
import 'react-datetime/css/react-datetime.css';
import './DateTimePicker.css';

const DateTimePicker = () => {
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [selectedDate, setSelectedDate] = useState('');
    const [numPeople, setNumPeople] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(`First Name: ${firstName}, Last Name: ${lastName}, Selected Date: ${selectedDate}, Number of People: ${numPeople}`);
    };

    return (
        <div className={'datetime-location'}>


        <form onSubmit={handleSubmit} className="datetime-container">
            <div className="column">

                <label>
                    First Name:
                    <input type="text" value={firstName} onChange={(e) => setFirstName(e.target.value)} className="input-red" />
                </label>
                <br />
                <label>
                    Last Name:
                    <input type="text" value={lastName} onChange={(e) => setLastName(e.target.value)} className="input-red" />
                </label>
                <br />
                <label>
                    Number of People:
                    <input type="text" value={numPeople} onChange={(e) => setNumPeople(e.target.value)} className="input-red" />
                </label>
            </div>
            <div className="column2">
                <label>
                    Date and Time:
                    <Datetime value={selectedDate} onChange={(value) => setSelectedDate(value)} className="input-red" />
                </label>
                <br />
                <button type="submit" className="submit-button">Submit</button>
            </div>
        </form>
            <div><img className={'photo-filter'} width={450} src={'./image/outside2.jpg'}/></div>
        </div>
    );
};

export default DateTimePicker;