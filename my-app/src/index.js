import React from 'react';
import ReactDOM from 'react-dom';
import './style.css';
import 'semantic-ui-css/semantic.min.css';
import { Container, Header, Grid, Icon, Image, Menu, Dropdown } from 'semantic-ui-react';



class TopMenu extends React.Component {
  render() {
    return (
        <Menu borderless={true} className="topmenu">
          <Container>
            <Menu.Item><Image src='http://murphyshawaii.com/media/2014/04/murphyshawaii.png'/></Menu.Item>
            <Menu.Item position='right'>Home</Menu.Item>
            <Menu.Item>About Us</Menu.Item>
            <Menu.Item>St. Patrick's Day</Menu.Item>
            <Menu.Item>Menu</Menu.Item>
            <Menu.Item>Bar</Menu.Item>
            <Menu.Item><Icon name="search" /></Menu.Item>

          </Container>
        </Menu>
    )
  }
}

class MiddleMenu extends React.Component {
  render() {
    return (
        <Header as="h1">MiddleMenu</Header>
    )
  }
}

class FullWidthImage extends React.Component {
  render() {
    return (
        <Header as="h1">FullWidthImage</Header>
    )
  }
}

class FooterMenu extends React.Component {
  render() {
    return (
        <Header as="h1">FooterMenu</Header>
    )
  }
}

class Murphys extends React.Component {

  render() {
    return (
        <div>
          <TopMenu/>
          <MiddleMenu/>
          <FullWidthImage/>
          <FooterMenu/>
        </div>
    );
  }
}

ReactDOM.render(<Murphys/>, document.getElementById('root'));