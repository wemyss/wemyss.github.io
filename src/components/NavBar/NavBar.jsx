import './NavBar.scss';
import React from 'react';

const NavBar = ({urls}) => (
   <header className="nav">
      <nav className="container">
         <div className="nav-left">
            <div className="nav-item">
               <h1 className="brand-logo title is-4 quantico">Sam Wemyss</h1>
            </div>
         </div>

         <div className="nav-center">
            <a className="nav-item" href={urls.github}>
               <span className="icon">
                  <i className="fa fa-github"></i>
               </span>
            </a>
            <a className="nav-item" href={urls.linkedin}>
               <span className="icon">
                  <i className="fa fa-linkedin"></i>
               </span>
            </a>
         </div>
      </nav>
   </header>
);

NavBar.propTypes = {
   urls: React.PropTypes.objectOf(React.PropTypes.string).isRequired
};

export default NavBar;
