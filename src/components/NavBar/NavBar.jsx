import './NavBar.scss';
import React from 'react';

export default class NavBar extends React.Component {
   constructor() {
      super();
      // this.state = {
      //    isActive: ''
      // };
      // this.openMenu = this.openMenu.bind(this);
      this.render = this.render.bind(this);
   }

   // openMenu() {
   //    if (this.state.isActive === '') {
   //       this.setState({
   //          isActive: ' is-active'
   //       });
   //    } else {
   //       this.setState({
   //          isActive: ''
   //       });
   //    }
   // }

   render() {
      return (
         <header className="nav">
            <nav className="container">
               <div className="nav-left">
                  <div className="nav-item">
                     <h1 className="brand-logo title is-4 quantico">Sam Wemyss</h1>
                  </div>
               </div>

               <div className="nav-center">
                  <a className="nav-item" href={this.props.urls.github}>
                     <span className="icon">
                        <i className="fa fa-github"></i>
                     </span>
                  </a>
                  <a className="nav-item" href={this.props.urls.linkedin}>
                     <span className="icon">
                        <i className="fa fa-linkedin"></i>
                     </span>
                  </a>
               </div>
            </nav>
         </header>
      );
   }
}
