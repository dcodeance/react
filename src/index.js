import React from 'react';
import ReactDOM from 'react-dom';
import SeasdonDisplay from './SeasonDisplay';
import Spinner from './Spinner';

/* const App = () => {
    window.navigator.geolocation.getCurrentPosition(
        (position) => {
            console.log(position)
        },
        (err) => {
            console.log(err);
        }
    );
    return (
        <div>Hi there</div>
    );
};
 */

class App extends React.Component {
    constructor(props) {
        super(props);
        console.log(props);
        this.state = { lat: null, lan: null, errorMsg: ''};
    }

    componentDidMount() {
        window.navigator.geolocation.getCurrentPosition(
            (position) => {
                console.log(position);
                this.setState({ lat: position.coords.latitude, lan: position.coords.longitude})
            },
            (err) => {
                this.setState({errorMsg: err.message});
                console.log(err);
            }
        );
    }

    
    renderContent() {
        if(this.state.errorMsg && !this.state.lat) {
            return <div>Error: {this.state.errorMsg}</div>
        }
        if(!this.state.errorMsg && this.state.lat) {
            return <SeasdonDisplay lat={this.state.lat}/>
        }
        return <Spinner message="Please accept location request"/>;
    }
    // React says we have to define render!!
    render() {
        return (
            <div className="border red">
                {this.renderContent()}
            </div>
        )
        /* return (
            <div>
                Latitude: {this.state.lat}
                <br/>
                Error: {this.state.errorMsg}
            </div>
        ); */
    }
}
ReactDOM.render(
    <App/>,
    document.getElementById('root')
);