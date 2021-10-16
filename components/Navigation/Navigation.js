import React from 'react'
import { Container, Row } from 'reactstrap'
import NavBar from './Bar.js';

class Navigation extends React.Component {
  render() {
    return <Container id='navigation-container' fluid>
      <Row className='no-gutters'>
        <NavBar />
      </Row>
      <style global jsx>{`
        #navigation-container {
          padding: 0px;
          position: fixed;
          height: 100%;
          width: 100vw;
          top: 0;
          right: 0;
          left: 0;
          bottom: 0;
          z-index: 1000;
          transition: opacity 750ms ease-in-out;
          height: 0px;
          overflow: auto;
          margin: 0;
        }
        #navigation-container * {
          font-weight: 300 !important;
        }
      `}</style>
    </Container>
  }

  componentDidMount() {
    const navContainer = document.getElementById('navigation-container');
    // Reset navContainer
    navContainer.style.height = '0px';
    navContainer.style.opacity = 0;
    navContainer.addEventListener('webkitTransitionEnd', hideNavigationContainer);
    navContainer.addEventListener('mozTransitionEnd', hideNavigationContainer);
    navContainer.addEventListener('oTransitionEnd', hideNavigationContainer);
    navContainer.addEventListener('transitionend', hideNavigationContainer);
    navContainer.addEventListener('click', closeNavigation);

    const hamburger = document.getElementById('hamburger-button');
    const hamburgerClose = document.getElementById('hamburger-button-close');
    hamburger.addEventListener('click', toggleNavigation);
    hamburgerClose.addEventListener('click', toggleNavigation);
  }

  componentWillUnmount() {
    const navContainer = document.getElementById('navigation-container');
    navContainer.removeEventListener('webkitTransitionEnd', hideNavigationContainer);
    navContainer.removeEventListener('mozTransitionEnd', hideNavigationContainer);
    navContainer.removeEventListener('oTransitionEnd', hideNavigationContainer);
    navContainer.removeEventListener('transitionend', hideNavigationContainer);
    navContainer.removeEventListener('click', closeNavigation);

    const hamburger = document.getElementById('hamburger-button');
    const hamburgerClose = document.getElementById('hamburger-button-close');
    hamburger.removeEventListener('click', toggleNavigation);
    hamburgerClose.removeEventListener('click', toggleNavigation);
  }
}

function toggleNavigation() {
  const navContainer = document.getElementById('navigation-container');
  const body = document.getElementsByTagName('body')[0];
  if (navContainer.style.opacity == 0) {
    navContainer.style.height = '100vh';
    navContainer.style.opacity = 1;
    body.style.overflow = 'hidden';
  } else {
    navContainer.style.opacity = 0;
    body.style.overflow = 'auto';
  }
}

// If any space outside of the nav bar is clicked, close it
function closeNavigation(event) {
  const navBar = document.getElementById('navigation-bar');
  const isClickInside = navBar.contains(event.target);
  if (!isClickInside) {
    toggleNavigation();
  }
}

function hideNavigationContainer() {
  const navContainer = document.getElementById('navigation-container');
  if (navContainer.style.opacity == 0) {
    navContainer.style.height = '0px';
    // reset scroll
    navContainer.scrollTop = 0;
    // Close open dropdown menus
    const dropdownMenus = document.getElementsByClassName('dropdown-items');
    for (let index = 0; index < dropdownMenus.length; index++) {
      const element = dropdownMenus[index];
      element.style.maxHeight = `0`;
    }
  }
}

export default Navigation