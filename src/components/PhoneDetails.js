import React, {PropTypes, Component} from 'react';
import '../styles/app.css';

class PhoneDetails extends Component {
    constructor(props) {
        super(props);
        this.state = {
            currentImage : ''
        };
    }

    //https://github.com/uberVU/react-guide/blob/master/props-vs-state.md
    //remember
    changeCurrentImage = function(i) {
        //Use set state only otherwise render is not called again
        this.setState({
                currentImage: this.props.details.images[i]
        });
    };

    //remember
    static defaultProps = {
        details: {
            images: [],
            battery: {},
            storage: {},
            connectivity: {},
            android: {},
            sizeAndWeight: {},
            display: {},
            hardware: {},
            camera: {
                features: []
            },
            availability: []
        }
    };
    //https://stackoverflow.com/questions/32414308/updating-state-on-props-change-in-react-form
    componentWillReceiveProps = function(nextProps) {
        this.setState({
            currentImage: nextProps.details.images[0]
        });
    };
    render() {
        const { details} = this.props;

        //Remember
        //setState(...): Cannot update during an existing state transition
        //Don't change the props/state here, render should be pure function

        console.log(this.state.currentImage);

        let phoneImageList = [];
        for (var i=0; i < details.images.length; i++) {
            phoneImageList.push(<li key={details.images[i]}>
                {/* if you don't bind  this here, you will have to bind in constructor*/}
                <img src={'/' + details.images[i]} onClick={this.changeCurrentImage.bind(this, i)}/>
            </li>);
        }
        return(
            <div>
                <div className='phone-images'>
                    <img className="phone" src={'/'+ this.state.currentImage}/>
                </div>
                <h1>{details.name}</h1>
                <p>{details.description}</p>
                <ul className="phone-thumbs">
                    {phoneImageList}
                </ul>
                <ul className="specs">
                    <li>
                        <span>Availability and Networks</span>
                        <dl>
                            <dt>Availability</dt>
                            <dd>{details.availability}</dd>
                        </dl>
                    </li>
                    <li>
                        <span>Battery</span>
                        <dl>
                            <dt>Type</dt>
                            <dd>{details.battery.type}</dd>
                            <dt>Talk Time</dt>
                            <dd>{details.battery.talkTime}</dd>
                            <dt>Standby time (max)</dt>
                            <dd>{details.battery.standbyTime}</dd>
                        </dl>
                    </li>
                    <li>
                        <span>Storage and Memory</span>
                        <dl>
                            <dt>RAM</dt>
                            <dd>{details.storage.ram}</dd>
                            <dt>Internal Storage</dt>
                            <dd>{details.storage.flash}</dd>
                        </dl>
                    </li>
                    <li>
                        <span>Connectivity</span>
                        <dl>
                            <dt>Network Support</dt>
                            <dd>{details.connectivity.cell}</dd>
                            <dt>WiFi</dt>
                            <dd>{details.connectivity.wifi}</dd>
                            <dt>Bluetooth</dt>
                            <dd>{details.connectivity.bluetooth ? '\u2713' : '\u2718'}</dd>
                            <dt>Infrared</dt>
                            <dd>{details.connectivity.infrared ? '\u2713' : '\u2718' }</dd>
                            <dt>GPS</dt>
                            <dd>{details.connectivity.gps ? '\u2713' : '\u2718'}</dd>
                        </dl>
                    </li>
                    <li>
                        <span>Android</span>
                        <dl>
                            <dt>OS Version</dt>
                            <dd>{details.android.os}</dd>
                            <dt>UI</dt>
                            <dd>{details.android.ui}</dd>
                        </dl>
                    </li>
                    <li>
                        <span>Size and Weight</span>
                        <dl>
                            <dt>Dimensions</dt>
                            <dd>{details.dim}</dd>
                            <dt>Weight</dt>
                            <dd>{details.sizeAndWeight.weight}</dd>
                        </dl>
                    </li>
                    <li>
                        <span>Display</span>
                        <dl>
                            <dt>Screen size</dt>
                            <dd>{details.display.screenSize}</dd>
                            <dt>Screen resolution</dt>
                            <dd>{details.display.screenResolution}</dd>
                            <dt>details screen</dt>
                            <dd>{details.display.touchScreen ? '\u2713' : '\u2718'}</dd>
                        </dl>
                    </li>
                    <li>
                        <span>Hardware</span>
                        <dl>
                            <dt>CPU</dt>
                            <dd>{details.hardware.cpu}</dd>
                            <dt>USB</dt>
                            <dd>{details.hardware.usb}</dd>
                            <dt>Audio / headphone jack</dt>
                            <dd>{details.hardware.audioJack}</dd>
                            <dt>FM Radio</dt>
                            <dd>{details.hardware.fmRadio ? '\u2713' : '\u2718'}</dd>
                            <dt>Accelerometer</dt>
                            <dd>{details.hardware.accelerometer ? '\u2713' : '\u2718'}</dd>
                        </dl>
                    </li>
                    <li>
                        <span>Camera</span>
                        <dl>
                            <dt>Primary</dt>
                            <dd>{details.camera.primary}</dd>
                            <dt>Features</dt>
                            <dd>{details.camera.features.join(', ')}</dd>
                        </dl>
                    </li>
                    <li>
                        <span>Additional Features</span>
                        <dd>{details.additionalFeatures}</dd>
                    </li>
                </ul>
            </div>
        );
    }
}

PhoneDetails.propTypes = {
    details: PropTypes.object,
};

export default PhoneDetails;