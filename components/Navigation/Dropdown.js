import React from 'react'
import Link from 'next/link'

class DropdownNavigation extends React.Component {
  render() {
    return <div className='dropdown-container' onClick={this.toggleDropdown}>
      <div className='dropdown-button'>
        <p>{this.props.name}</p>
        <img className='dropdown-icon' src={require(`../../images/icons/downarrow.png`)} alt='Drop down menu icon' />
      </div>
      <div className='dropdown-items'>
        {/* Add the links into the page. If there are no links then use props.children. */}
        {(this.props.links) ? this.props.links.map((currentLink, index) => 
            <Link href={currentLink.href || '/'} key={index}><a>{currentLink.name}</a></Link>) : this.props.children }
      </div>
      <style jsx>{`
        .dropdown-container {
          border-bottom: solid 1px rgba(177,172,164,1);
          padding: 8px 15%;
          display: block;
        }
        .dropdown-button {
          display: flex;
          align-items: center;
        }
        .dropdown-button p {
          display: inline-block;
          font-size: 20px;
          color: white;
          margin: 0;
          text-transform: capitalize;
          cursor: pointer;
        }
        .dropdown-button img {
          display: inline-block;
          height: 17px;
          float: right;
          margin-left: auto;
          transition: transform 0.5s ease;
        }
        .dropdown-items {
          display: block;
          padding: 10px 15%;
          font-size: 15px;
          color: white;
          transition: max-height 0.5s ease;
          max-height: 0;
          overflow: hidden;
        }
        a:hover {
          text-decoration: none;
          color: white;
        }
        .dropdown-items {
          text-align: right;
          padding: 0;
        }
        .dropdown-items>a {
          display: block;
          padding: 0;
          font-size: 15px;
          color: white;
          letter-spacing: 0.3px;
        }
        .dropdown-items>a:last-child {
          padding-bottom: 0;
        }
        @media (min-width: 768px) {
          .dropdown-container {
            padding: 10px 15%;
          }
          .dropdown-button p {
           font-size: 20px;
          }
          .dropdown-items {
            font-size: 20px;
          }
          .dropdown-items>a {
            font-size: 17px;
          }

        }
      `}</style>
    </div>
  }

  toggleDropdown(e) {
    // Only toggle dropdown if its not a link to another page
    if ((e.target.nodeName).toLowerCase() !== 'a') {
      let element = undefined;
      if (e.target.classList.contains('dropdown-container')) {
        element = e.target;
      } else if ((e.target.nodeName).toLowerCase() === 'p' || (e.target.nodeName).toLowerCase() === 'img') {
        element = (e.target.parentNode).parentNode;
      } else {
        element = e.target.parentNode;
      }
      const dropdownIcon = element.getElementsByClassName('dropdown-icon')[0];
      const dropdownMenu = element.getElementsByClassName('dropdown-items')[0];
      // If the height of the dropdown menu is 0, show the dropdown menu.
      // Else hide the dropdown menu
      if (parseInt(dropdownMenu.style.maxHeight) <= 0 || !dropdownMenu.style.maxHeight) {
        // Close any other dropdown menus
        const otherDropdownMenus = document.getElementsByClassName('dropdown-items');
        const otherDropdownIcons = document.getElementsByClassName('dropdown-icon');
        // as many icons as dropdowns = only one for loop
        for (let index = 0; index < otherDropdownMenus.length; index++) {
          const el = otherDropdownMenus[index];
          const icon = otherDropdownIcons[index];
          el.style.maxHeight = `0`;
          icon.style.transform = 'rotate(0deg)';
        }
        const dropdownItems = dropdownMenu.childNodes;
        // Offset for maxHeight
        let totalHeight = 2;
        for (let index = 0; index < dropdownItems.length; index++) {
          const item = dropdownItems[index];
          totalHeight += item.offsetHeight;
        }
        dropdownMenu.style.maxHeight = `${totalHeight}px`;
        dropdownIcon.style.transform = 'rotate(180deg)';
      } else {
        dropdownMenu.style.maxHeight = `0`;
        dropdownIcon.style.transform = 'rotate(0deg)';
      }
    }
  }
}

export default DropdownNavigation
