import React from 'react';
import {Link} from 'react-router';

const Footer = () => (
   <section className="hero is-dark">
      <div className="hero-body">
         <div className="container is-vh-centered">
            <p>
               Built with <span className="icon is-small red-text"><i className="fa fa-heart is-danger"></i></span>, made with <a href="http://bulma.io">Bulma</a> and <a href="https://facebook.github.io/react/">React</a>.
            </p>
         </div>
      </div>
   </section>
);
export default Footer;
