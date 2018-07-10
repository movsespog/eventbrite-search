import moment from 'moment';

import {
    GET_CATEGORIES,
    SET_CATEGORY,
    SET_LOCATION,
    SET_PRICE,
    SET_TYPE,
    SET_TEXT,
    SET_TODAY,
    SET_TOMORROW,
    SET_THIS_FRIDAY,
    SET_THIS_WEEK,
    SET_THIS_WEEKEND,
    SET_NEXT_WEEK,
    SET_THIS_MONTH,
    REMOVE_FILTER
} from '../actions/types';

/**
 * Particular dates for setting event filters on front-end
 */
const today = moment().format('YYYY-MM-DD HH:mm:ss');
const tomorrow = moment().add(1, 'day').startOf('day').format('YYYY-MM-DD HH:mm:ss');
const friday   = moment().day(5).format('YYYY-MM-DD HH:mm:ss');
const thisWeekendStart = moment().endOf('isoWeek').subtract(1, 'day').format('YYYY-MM-DD HH:mm:ss');
const thisWeekendEnd = moment().endOf('isoWeek').format('YYYY-MM-DD HH:mm:ss');
const nextWeekStart = moment().add(1, 'week').startOf('isoWeek').format('YYYY-MM-DD HH:mm:ss');
const nextWeekEnd = moment().add(1, 'week').endOf('isoWeek').format('YYYY-MM-DD HH:mm:ss');
const thisMonthEnd = moment().endOf('month').format('YYYY-MM-DD HH:mm:ss');
const defaultStart = moment().format('YYYY-MM-DD HH:mm:ss');


export const filtersReducerDefaultState = {
    allCategories : [],
    location      : '',
    category      : '',
    categoryName  : '',
    typeOfE       : '',
    price         : '',
    textFilter    : '',
    dateRangeText : '',
    startRange    : defaultStart,
    endRange      : '',
};

export default (state=filtersReducerDefaultState, action) => {
    switch (action.type) {
        case GET_CATEGORIES:
            return {...state, allCategories : action.categories};
        case SET_LOCATION:
            return {...state, location: action.location};
        case SET_CATEGORY:
            return {
                ...state,
                category     : action.category.id,
                categoryName : action.category.name,
            };
        case SET_TYPE:
            return {...state, typeOfE : action.typeOfE};
        case SET_PRICE:
            return {...state, price : action.price};
        case SET_TEXT:
            return {...state, textFilter  : action.text};
        case REMOVE_FILTER:
            const filterName = action.filter.filter;
            const newState = {...state};
            newState[filterName] = '';
            if (filterName === 'dateRangeText') {
                newState['startRange'] = defaultStart;
                newState['endRange']   = '';
            } else if (filterName === 'categoryName') {
                newState['category'] = '';
            }
            return newState;
        case SET_TODAY:
            return {
                ...state,
                dateRangeText : 'today',
                startRange : today,
                endRange   : today
            };
        case SET_TOMORROW:
            return {
                ...state,
                dateRangeText : 'tomorrow',
                startRange : tomorrow,
                endRange   : tomorrow
            };
        case SET_THIS_WEEK:
            return {
                ...state,
                dateRangeText : 'this week',
                startRange : today,
                endRange   : thisWeekendEnd
            };
        case SET_THIS_FRIDAY:
            return {
                ...state,
                dateRangeText : 'this friday',
                startRange : friday,
                endRange   : friday
            };
        case SET_THIS_WEEKEND:
            return {
                ...state,
                dateRangeText : 'this weekend',
                startRange : thisWeekendStart,
                endRange   : thisWeekendEnd
            };
        case SET_NEXT_WEEK:
            return {
                ...state,
                dateRangeText : 'next week',
                startRange : nextWeekStart,
                endRange   : nextWeekEnd
            };
        case SET_THIS_MONTH:
            return {
                ...state,
                dateRangeText : 'this month',
                startRange : today,
                endRange   : thisMonthEnd
            };
        default:
            return state;

    }
}