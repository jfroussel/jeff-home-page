import React, { Component } from 'react';
import Header from './Header'
import Content from './Content'
import Footer from './Footer'

class Layout extends Component {
    constructor(props) {
        super(props)
        this.state = {
            brand: 'reactland'
        }
    }
    render() {
        return (
            <div>
               <Header  brand={this.state.brand}/>
               <Content />
               <Footer />
            </div>
        );
    }
}

export default Layout;
