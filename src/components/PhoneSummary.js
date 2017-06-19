import React, {PropTypes, Component} from 'react';
import '../styles/app.css';
import {Link } from 'react-router-dom';

class PhoneSummary extends Component {
    render() {
        return(
            <div className="row">
                {/*Remember*/}
                {(this.props.phones || []).map((phone, i) => (
                    <div className="row jumbotron" key={phone.id}> {/*remember*/}
                        <div className="col-sm-2 col-md-2 col-lg-2 noPadding">
                            <img src={phone.imageUrl}  className="imgThumbnail"/>
                        </div>
                        <div className="col-sm-10 col-md-10 col-lg-10">
                            <div className="text-left">
                                <Link to={'/phoneDetails/' + phone.id}>{phone.name}</Link>
                            </div>
                            <div className="text-left">
                                {phone.snippet}
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        );
    }
}

export default PhoneSummary;