import React from 'react';
import './ContactBar.scss';

const ContactBar = () => (
   <section className="hero is-info is-bold is-medium">
      <div className="hero-body">
         <div className="container is-vh-centered icon-bar">
            <a href="mailto:samuel.wemyss@gmail.com">
            <span className="icon is-large">
               <i className="fa fa-envelope"></i>
            </span>
            </a>
            <a href="https://github.com/wemyss">
               <span className="icon is-large">
                  <i className="fa fa-github"></i>
               </span>
            </a>
            <a href="https://au.linkedin.com/in/samwemyss">
               <span className="icon is-large">
                  <i className="fa fa-linkedin"></i>
               </span>
            </a>
         </div>
      </div>
   </section>
);
export default ContactBar;
