import React from 'react';
import './ContactBar.scss';

const ContactBar = ({urls}) => (
   <section className="hero is-primary is-bold is-medium">
      <div className="hero-body">
         <div className="container is-vh-centered icon-bar">
            <a href={ 'mailto:' + 'samuel.wemyss' + '@' + 'gmail.com' }>
            <span className="icon is-large has-hover-warning">
               <i className="fa fa-envelope"></i>
            </span>
            </a>
            <a href={urls.github}>
               <span className="icon is-large has-hover-danger">
                  <i className="fa fa-github"></i>
               </span>
            </a>
            <a href={urls.linkedin}>
               <span className="icon is-large has-hover-info">
                  <i className="fa fa-linkedin"></i>
               </span>
            </a>
         </div>
      </div>
   </section>
);

ContactBar.propTypes = {
   urls: React.PropTypes.objectOf(React.PropTypes.string).isRequired
};

export default ContactBar;
