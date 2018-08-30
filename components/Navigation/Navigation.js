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
        }
      `}</style>
    </Container>
  }

  componentDidMount() {
    const navContainer = document.getElementById('navigation-container');
    const navBar = document.getElementById('navigation-bar');
    const body = document.getElementsByTagName('body')[0];
    // Reset navContainer
    navContainer.style.height = '0px';
    navContainer.style.opacity = 0;

    function toggleNavigation() {
      if (navContainer.style.opacity == 0) {
        navContainer.style.height = '100vh';
        navContainer.style.opacity = 1;
        body.style.overflow = 'hidden';
      } else {
        navContainer.style.opacity = 0;
        body.style.overflow = 'auto';
      }
    }
    
    window.onload = function () { 
      const hamburger = document.getElementById('hamburger-button');
      hamburger.addEventListener('click', toggleNavigation);
    }

    // If any space outside of the nav bar is clicked, close it
    navContainer.addEventListener('click', function (event) {
      const isClickInside = navBar.contains(event.target);
      if (!isClickInside) {
        toggleNavigation();
      }
    });

    function hideNavigationContainer() {
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
    navContainer.addEventListener('webkitTransitionEnd', hideNavigationContainer); 
    navContainer.addEventListener('mozTransitionEnd', hideNavigationContainer);
    navContainer.addEventListener('oTransitionEnd', hideNavigationContainer); 
    navContainer.addEventListener('transitionend', hideNavigationContainer);
  }
}

export default Navigation