import React, {Component} from 'react';
import FilterList from '../components/FilterList';
import PhoneList from '../components/PhoneList';

export default class PhoneListContainer extends Component {
    render() {
        return (
            <div className="row">
                <FilterList/>
                <PhoneList/>
            </div>
        )
    };
}