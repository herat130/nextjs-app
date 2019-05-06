import React from 'react';
import Header from './Header';
import Footer from './Footer';
export default class Layout extends React.Component {
  render() {
    return (
      <React.Fragment>
        <Header />
        <span>Default Layout Component</span>
        {this.props.children}
        <Footer />
      </React.Fragment>
    );
  }
}