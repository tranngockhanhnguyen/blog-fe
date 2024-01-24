import { Link } from "react-router-dom";

export default function Sidebar() {
  return (
    <div id='layoutSidenav_nav'>
      <nav
        className='sb-sidenav accordion sb-sidenav-dark'
        id='sidenavAccordion'
      >
        <div className='sb-sidenav-menu'>
          <div className='nav'>
            <div className='sb-sidenav-menu-heading'>Core</div>
            <Link className='nav-link' to='/'>
              <div className='sb-nav-link-icon'>
                <i className='fas fa-tachometer-alt'></i>
              </div>
              Dashboard
            </Link>
            <div className='sb-sidenav-menu-heading'>Interface</div>
            <a
              className='nav-link collapsed'
              href='#'
              data-bs-toggle='collapse'
              data-bs-target='#collapseLayouts'
              aria-expanded='false'
              aria-controls='collapseLayouts'
            >
              <div className='sb-nav-link-icon'>
                <i className='fas fa-user'></i>
              </div>
              Users
              <div className='sb-sidenav-collapse-arrow'>
                <i className='fas fa-angle-down'></i>
              </div>
            </a>
            <div
              className='collapse'
              id='collapseLayouts'
              aria-labelledby='headingOne'
              data-bs-parent='#sidenavAccordion'
            >
              <nav className='sb-sidenav-menu-nested nav'>
                <Link className='nav-link' to='/users'>
                  User List
                </Link>
                <Link className='nav-link' to='/users/create'>
                  Add
                </Link>
              </nav>
            </div>
            <a
              className='nav-link collapsed'
              href='#'
              data-bs-toggle='collapse'
              data-bs-target='#collapsePages'
              aria-expanded='false'
              aria-controls='collapsePages'
            >
              <div className='sb-nav-link-icon'>
                <i className='fas fa-book-open'></i>
              </div>
              Posts
              <div className='sb-sidenav-collapse-arrow'>
                <i className='fas fa-angle-down'></i>
              </div>
            </a>
            <div
              className='collapse'
              id='collapsePages'
              aria-labelledby='headingTwo'
              data-bs-parent='#sidenavAccordion'
            >
              <nav
                className='sb-sidenav-menu-nested nav accordion'
                id='sidenavAccordionPages'
              >
                <a
                  className='nav-link collapsed'
                  href='#'
                  data-bs-toggle='collapse'
                  data-bs-target='#pagesCollapseAuth'
                  aria-expanded='false'
                  aria-controls='pagesCollapseAuth'
                >
                  Post List
                </a>
                <a
                  className='nav-link collapsed'
                  href='#'
                  data-bs-toggle='collapse'
                  data-bs-target='#pagesCollapseError'
                  aria-expanded='false'
                  aria-controls='pagesCollapseError'
                >
                  Add
                </a>
              </nav>
            </div>
          </div>
        </div>
        <div className='sb-sidenav-footer'>
          <div className='small'>Logged in as:</div>
          Start Bootstrap
        </div>
      </nav>
    </div>
  );
}
