import React from 'react';
import ReactDOM from 'react-dom';
import SeasonDisplay from './SeasonDisplay';

class App extends React.Component{
  // constructor (props){
  //   super(props);
  //
  //   this.state = { lat: null, errorMessage: ''}
  //
  // }




  state = { lat: null, errorMessage: ''}


  componentDidMount(){

    window.navigator.geolocation.getCurrentPosition(
      position => this.setState({ lat: position.coords.latitude}),
      err => this.setState({errorMessage:err.message})
    )
  }

  render() {
      if (this.state.errorMessage && !this.state.lat){
        return <div> Error - location request denied. </div>
        }
      if (!this.state.errorMessage && this.state.lat){
        // return <div> Latitude: {this.state.lat}</div>
        return <SeasonDisplay lat={this.state.lat}/>
      } else {

        return (

        <div class="ui segment">
          <div class="ui active inverted dimmer">
            <div class="ui text loader">Loading</div>
          </div>
        </div>
      )
    }
  }
}
ReactDOM.render(<App />, document.getElementById('root'));
