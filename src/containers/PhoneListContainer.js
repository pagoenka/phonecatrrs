import React, {PropTypes, Component} from 'react';
import FilterList from '../components/FilterList';
import PhoneList from '../components/PhoneList';
import { listPhoneAction, sortPhoneAction, searchPhoneAction } from '../actions/phoneActions';
import { connect } from 'react-redux';

class PhoneListContainer extends Component {

    constructor(props) {
        super(props);
        this.sortPhone = this.sortPhone.bind(this);
    }

    componentDidMount() {
        this.props.dispatch(listPhoneAction());
        this.searchPhone = this.searchPhone.bind(this);
    };

    searchPhone = function(event) {
        this.props.dispatch(searchPhoneAction({phones: this.props.phones, filterText: event.target.value}));
    };

    sortPhone = function(event) {
        this.props.dispatch(sortPhoneAction({phones: this.props.phones, sortBy: event.target.value}));
    };

    render() {
        const { phones } = this.props;
        return (
            <div className="row">
                <FilterList onSearchPhone={this.searchPhone} onSortPhone={this.sortPhone}/>
                <PhoneList phones={phones}/>
            </div>
        )
    };
}

PhoneListContainer.propTypes = {
    phones: PropTypes.array,
    sortBy: PropTypes.string,
    filterText: PropTypes.string,
    dispatch: PropTypes.func.isRequired
};


 function mapStateToProps(state) {
    const { phones, sortBy, filterText } = state;
    //If you dont pass the complete object then render is not trigerred
    return { phones : getPhoneList(phones, sortBy, filterText), sortBy, filterText };
}

function getPhoneList(phones, sortBy, filterText){

     if(undefined != filterText && '' != filterText) {
         let filteredPhones = [];
         phones.forEach(function(phone) {
             if (phone.name.toLowerCase().
                 indexOf(filterText.toLowerCase()) === -1) {
                 return;
             }
             filteredPhones.push(phone);
         });
         return filteredPhones;
     }

    if(sortBy === 'alphabetically'){
        phones.sort(function(fobj, sobj){
            if(fobj.name.toLowerCase() < sobj.name.toLowerCase()) return -1;
            if(fobj.name.toLowerCase() > sobj.name.toLowerCase()) return 1;
            return 0;
        });
    }
    if(sortBy === 'newest'){
        phones.sort(function(fobj, sobj){
            return fobj.age - sobj.age;
        });
    }
    return phones;
}

export default connect(mapStateToProps)(PhoneListContainer);