import React, { useState } from 'react';
import { Row, Col, Input, DatePicker, Button } from 'antd';
import moment from 'moment';
import 'moment/locale/ru';
import './DateTimePicker.css';

const { RangePicker } = DatePicker;

const DateTimePicker = () => {
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [selectedDate, setSelectedDate] = useState(null);
    const [numPeople, setNumPeople] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(`First Name: ${firstName}, Last Name: ${lastName}, Selected Date: ${selectedDate}, Number of People: ${numPeople}`);
    };

    const disabledDate = (current) => {
        return current && current < moment().endOf('day');
    };

    return (
        <div className="datetime-location">
            <form onSubmit={handleSubmit} className="datetime-container">
                <Row gutter={16}>
                    <Col span={24} sm={12}>
                        <Input
                            placeholder="First Name"
                            value={firstName}
                            onChange={(e) => setFirstName(e.target.value)}
                            className="input-red"
                            required
                        />
                    </Col>
                    <Col span={24} sm={12}>
                        <Input
                            placeholder="Last Name"
                            value={lastName}
                            onChange={(e) => setLastName(e.target.value)}
                            className="input-red"
                            required
                        />
                    </Col>
                    <Col span={24} sm={12}>
                        <Input
                            placeholder="Number of People"
                            value={numPeople}
                            onChange={(e) => setNumPeople(e.target.value)}
                            className="input-red"
                            required
                        />
                    </Col>
                    <Col span={24} sm={12}>
                        <RangePicker
                            showTime={{ format: 'HH:mm' }}
                            format="DD.MM.YYYY HH:mm"
                            placeholder={['Select start time', 'Select end time']}
                            value={selectedDate}
                            onChange={(dates) => setSelectedDate(dates)}
                            disabledDate={disabledDate}
                            className="input-red"
                            required
                        />
                    </Col>
                    <Col span={24}>
                        <Button type="primary" htmlType="submit" className="submit-button">
                            Submit
                        </Button>
                    </Col>
                </Row>
            </form>
            <div>
                <img className="photo-filter" style={{ maxWidth: '100%' }} width={450} src="./image/outside2.jpg" alt="outside" />
            </div>
        </div>
    );
};

export default DateTimePicker;