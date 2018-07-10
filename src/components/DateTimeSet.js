import React from 'react';
import {DatePicker, TimePicker} from 'antd';
import moment from 'moment';

const DateTimeSet = props => {
    const {defaultDate, defaultTime, context, onChange} = props;
    return (
        <div className="date-time-set">
            <DatePicker onChange={onChange} defaultValue={defaultDate} disabledDate={(current, cont) => disabledDate(current, context)}/>
            <TimePicker onChange={onChange} defaultValue={defaultTime} format="HH:mm"/>
        </div>
    )
};

/*DateTimeSet.propTypes = {
    defaultDate  : PropTypes.instanceOf(moment).isRequired,
    defaultTime  : PropTypes.instanceOf(moment).isRequired,
    context      : PropTypes.string.isRequired,
};*/

const disabledDate = (current, context) => {
    const comparison = (context === 'today') ? moment() : moment().add(1, 'day');
    return current.isBefore(comparison, 'day')
};


export default DateTimeSet;