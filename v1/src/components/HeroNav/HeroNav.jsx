import React from 'react';
import NavBar from '../NavBar/NavBar';

class HeroNav extends React.Component {
   constructor() {
      super();
      this.render = this.render.bind(this);
   }

   render() {
      const styles = {
         hero: {
            backgroundImage: 'url(' + require('../../assets/images/hill.jpg') + ')',
            backgroundSize: 'cover'
         }
      };
      return (
         <section className="hero is-dark is-fullheight" style={styles.hero}>
            <div className="hero-head">
               <NavBar urls={this.props.urls}/>
            </div>
            <div className="hero-body">
               <div className="container has-text-centered">
                  <h1 className="title quantico">
                     {this.props.title}
                  </h1>
                  <h2 className="subtitle">
                     {this.props.subtitle}
                  </h2>
               </div>
            </div>
         </section>
      );
   }
}

HeroNav.propTypes = {
   urls: React.PropTypes.objectOf(React.PropTypes.string).isRequired,
   title: React.PropTypes.string,
   subtitle: React.PropTypes.string
};

export default HeroNav;
