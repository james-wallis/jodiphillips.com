import Link from 'next/link'

class DropdownNavigation extends React.Component {
  render() {
    return <div className='dropdown-container' onClick={this.toggleDropdown}>
      <p className='dropdown-button'>
        {this.props.name}
      </p>
      <div className='dropdown-items'>
        {/* Add the links into the page. If there are no links then use props.children. */}
        {(this.props.links) ? this.props.links.map((currentLink, index) => 
            <Link href={currentLink.href || '/'} key={index}><a>{currentLink.name}</a></Link>) : this.props.children }
      </div>
      <style jsx>{`
        .dropdown-container {
          border-bottom: solid 1px rgba(177,172,164,1);
          padding: 10px 15%;
          display: block;
        }
        .dropdown-button {
          display: block;
          font-size: 18px;
          color: white;
          margin: 0;
          text-transform: capitalize;
          cursor: pointer;
        }
        .dropdown-items {
          display: block;
          padding: 10px 15%;
          font-size: 18px;
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
          padding-bottom: 4px;
          font-size: 14px;
          color: white;
        }
        .dropdown-items>a:last-child {
          padding-bottom: 0;
        }
        @media (min-width: 768px) {
          .dropdown-container {
            padding: 15px 15%;
          }
          .dropdown-button {
           font-size: 22px;
          }
          .dropdown-items {
            font-size: 22px;
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
      const element = (e.target.classList.contains('dropdown-container')) ? e.target : e.target.parentNode;
      console.log(element);
      const dropdownMenu = element.getElementsByClassName('dropdown-items')[0];
      // If the height of the dropdown menu is 0, show the dropdown menu.
      // Else hide the dropdown menu
      if (parseInt(dropdownMenu.style.maxHeight) <= 0 || !dropdownMenu.style.maxHeight) {
        // Close any other dropdown menus
        const otherDropdownMenus = document.getElementsByClassName('dropdown-items');
        for (let index = 0; index < otherDropdownMenus.length; index++) {
          const element = otherDropdownMenus[index];
          element.style.maxHeight = `0`;
        }
        const dropdownItems = dropdownMenu.childNodes;
        // Offset for maxHeight
        let totalHeight = 2;
        for (let index = 0; index < dropdownItems.length; index++) {
          const item = dropdownItems[index];
          totalHeight += item.offsetHeight;
        }
        dropdownMenu.style.maxHeight = `${totalHeight}px`;
      } else {
        dropdownMenu.style.maxHeight = `0`;
      }
    }
  }
}

export default DropdownNavigation