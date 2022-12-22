import DashboardLayout from "../../../Layouts/Dashboard";
import React, {Component} from 'react';
import LocationPicker from 'react-location-picker';


const defaultPosition = {
  lat: 40.051209,
  lng: 64.883849
};

class Example extends Component {
  constructor (props) {
    super(props);

    this.state = {
      position: {
        lat: 0,
        lng: 0
      }
    };
    this.handleLocationChange = this.handleLocationChange.bind(this);
  }

  handleLocationChange ({ position, address, places }) {
    console.log(position, address)
    this.setState({ position, address });
  }

  render() {
    return (
      <DashboardLayout>
        <div>
          <LocationPicker
            containerElement={ <div style={ {width: '400px'} } /> }
            mapElement={ <div style={ {height: '400px'} } /> }
            defaultPosition={defaultPosition}
            onChange={this.handleLocationChange}
          />
        </div>
      </DashboardLayout>
    );
  }
}

export default Example;