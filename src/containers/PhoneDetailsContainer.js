import React, {PropTypes, Component} from 'react';
import { selectPhoneAction } from '../actions/phoneActions';
import { connect } from 'react-redux';
import PhoneDetails  from '../components/PhoneDetails';
import '../styles/app.css';

class PhoneDetailsContainer extends Component {
    componentDidMount() {
        this.props.dispatch(selectPhoneAction(this.props.match.params.phoneName));
    }
    render() {
        return(
            <PhoneDetails details={this.props.selectedPhone}/>
        );
    }
}

const mapStateToProps = ( {selectedPhone}) => {
    console.log(selectedPhone);
    return {selectedPhone: selectedPhone.selectedPhone}
};

export default connect(mapStateToProps)(PhoneDetailsContainer);
