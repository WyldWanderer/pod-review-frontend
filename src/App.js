import React, {Component} from 'react';
import Navigation from './components/Navigation/Navigation.js';
import FaceRecognition from './components/FaceRecognition/FaceRecognition.js';
import Logo from './components/Logo/Logo.js';
import ImageLinkForm from './components/ImageLinkForm/ImageLinkForm.js';
import Rank from './components/Rank/Rank.js';
import './App.css';
import 'tachyons';
import Particles from 'react-particles-js';
import SignIn from './components/SignIn/SignIn.js';
import Register from './components/Register/Register.js';
import LandingPage from './components/LandingPage/LandingPage.js';

const particlesOptions = {
  particles: {
    number: {
      value: 100
    },
    interactivity: {
      events: {
        onhover: {
          enable: true,
          mode: 'repulse'
        }
      }
    },
    line_linked: {
      shadow: {
        enable: true,
        color: "#4093D3",
        blur: 1
      }
    }
  }
}

const initialState = {
    route: 'home',
    isSignedIn: false,
    searchField: '',
    user : {
      id: '',
      name: '',
      email: '',
      entries: 0,
      joined: ''
    }
  }

class App extends Component {
  constructor() {
    super();
    this.state = initialState;
    
  }

  loadUser = (data) => {
    this.setState({user: {
      id: data.id,
      name: data.name,
      email: data.email,
      entries: data.entries,
      joined: data.joined
    }})
  }

  onInputChange = (event) => {
    this.setState({input: event.target.value});
  }

  onRouteChange = (route) => {
    if (route === 'signout') {
      this.setState(initialState)
    } else if (route === 'home') {
      this.setState({isSignedIn: true})
    }
    this.setState({route: route})
  }

  onSearchChange = (event) => {
    this.setState({ searchField: event.target.value })
  }

  render() { 
    const { isSignedIn, route } = this.state;
    return (
      <div className="App">
        <Particles className='particles'
              params={particlesOptions}
        />
        <Navigation isSignedIn={isSignedIn} onRouteChange={this.onRouteChange}/>
        { route === 'home' 
          ? <div> 
            {/*<Logo />*/}
            <LandingPage searchChange={this.onSearchChange} />
          </div>
         : (
           route === "signin"
           ? <SignIn loadUser={this.loadUser} onRouteChange={this.onRouteChange}/>
           : <Register loadUser={this.loadUser} onRouteChange={this.onRouteChange}/>
          )  
        }
      </div>
    );
  }
}

 

export default App;
