import React from 'react';
import NavBar from '../NavBar/NavBar';


// class HeroNavFooter extends React.Component {
//    constructor() {
//       super();
//    }
//    render() {
//       return (
//          <div className="hero-foot">
//             <nav className="tabs">
//                <div className="container">
//                   <ul>
//                      <li className="is-active">
//                         <a>Introduction</a>
//                      </li>
//                      <li>
//                         <a>Projects</a>
//                      </li>
//                      <li>
//                         <a>Work Experience</a>
//                      </li>
//                      <li>
//                         <a>Resume</a>
//                      </li>
//                   </ul>
//                </div>
//             </nav>
//          </div>
//       );
//    }
// }

export default class HeroNav extends React.Component {
   constructor() {
      super();
      this.render = this.render.bind(this);
   }

   render() {
      const styles = {
         hero: {
            backgroundImage: 'url(' + require('../../assets/images/sea.jpg') + ')',
            backgroundSize: 'cover'
         }
      };
      return (
         <section className="hero is-dark is-fullheight" style={styles.hero}>
            <div className="hero-head">
               <NavBar/>
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
