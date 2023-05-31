import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import { Items } from './Items';
import './DashPage.css'; // CSS 파일 import


import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css'; // css import


function getGender(ssn) {
    const genderCode = ssn.charAt(7);
    if (genderCode === '1' || genderCode === '3') {
        return '남성';
    } else if (genderCode === '2' || genderCode === '4') {
        return '여성';
    }
    return '성별 정보 없음';
}

function DashPage() {
    const { index } = useParams();
    const item = Items[index];

    const gender = getGender(item.socialSecurityNumber);

    const [value, onChange] = useState(new Date());

    return (
        <div className="dash-container">
            <div className="dash-items-basic">
                <h1 className="dash-items-basic-info">{item.name}({gender})</h1>
                <p className="dash-items-basic-info">생년월일: {item.socialSecurityNumber.substr(0, 6)}</p>
                <p className="dash-items-basic-info">교정시간: **(시간)</p>
            </div>

            <div>
                <Calendar
                    onChange={onChange}
                    value={value}
                />
            </div>

            <p>Success Period: {item.successPeriod}</p>
            <p>Total Period: {item.totalPeriod}</p>
        </div>
    );
}

export default DashPage;
