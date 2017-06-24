import React, {PropTypes, Component} from 'react';
import PhoneSummary from './PhoneSummary';

export default class PhoneList extends Component {

    constructor() {
        super();
    }
    render() {
        const { phones} = this.props;
        return (
            <div className="col-sm-9 col-md-9 col-lg-9">
                <PhoneSummary phones={phones}/>
            </div>
        )
    };
}
