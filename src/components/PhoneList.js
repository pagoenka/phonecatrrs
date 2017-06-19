import React, {PropTypes, Component} from 'react';
import { listPhoneAction } from '../actions/phoneActions';
import { connect } from 'react-redux';
import PhoneSummary from './PhoneSummary';

class PhoneList extends Component {

    constructor() {
        super();
    }

    componentDidMount() {
        this.props.dispatch(listPhoneAction());
    }
    render() {
        const { phones } = this.props;
        return (
            <div className="col-sm-9 col-md-9 col-lg-9">
                <PhoneSummary phones={phones}/>
            </div>
        )
    };

}

PhoneList.propTypes = {
    phones: PropTypes.array,
    dispatch: PropTypes.func.isRequired
};

    const mapStateToProps = ( {phones}) => ({
        phones: phones[0]
    });

export default connect(mapStateToProps)(PhoneList);