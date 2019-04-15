import React, { Component } from 'react';
import './App.css';
import Brands from './brands'



const style = {
  contact: {
    width: '6rem'
  }
}
class App extends Component {
  render() {
    return (
      <div className="container pt-5 text-center">

        <h1 className="font-weight-lighter">Jean-françois Roussel</h1>
        <h4 className="font-weight-lighter">Developpeur Front-end</h4>
        <p className="pt-2">
          <div>
            <a href="https://www.linkedin.com/in/jfroussel/"  className="badge badge-secondary text-wrap" style={style.contact}>Me contacter via Linkedin</a>
          </div>
        </p>
        <p>
          <Brands />
        </p>
      </div>
    );
  }
}

export default App;
