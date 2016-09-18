import React from 'react';
import './Card.scss';

export default class Card extends React.Component {
   constructor() {
      super();
      this.render = this.render.bind(this);
   }

   render() {
      return (
         <div className="card">
            <div className="card-image">
               <figure className="image is-4by3">
                  <img src={require('../../assets/images/' + this.props.image)} alt="Main card image"/>
               </figure>
            </div>
            <div className="card-content">
               <div className="media media-center">
                  <div className="media-content">
                     <p className="title is-5 quantico">{this.props.title}</p>
                     <p className="subtitle is-6">{this.props.subtitle}</p>
                  </div>
               </div>
               <div className="content">
                  <p>{this.props.content}</p>
                  <small>{this.props.date}</small>
               </div>
            </div>
         </div>
      );
   }
}
