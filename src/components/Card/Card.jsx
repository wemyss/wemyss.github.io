import React from 'react';
import './Card.scss';

const Card = ({image, title, subtitle, content, date, url}) => (
   <div className="card">
      <div className="card-image">
         <a href={url}>
            <figure className="image is-4by3">
               <img src={require('../../assets/images/' + image)} alt="Main card image"/>
            </figure>
         </a>
      </div>
      <div className="card-content">
         <div className="media media-center">
            <div className="media-content">
               <p className="title is-5 quantico">{title}</p>
               <p className="subtitle is-6">{subtitle}</p>
            </div>
         </div>
         <div className="content">
            <p>{content}</p>
            <small>{date}</small>
         </div>
      </div>
   </div>
);
Card.propTypes = {
   image: React.PropTypes.string.isRequired,
   title: React.PropTypes.string.isRequired,
   subtitle: React.PropTypes.string.isRequired,
   content: React.PropTypes.string.isRequired,
   date: React.PropTypes.string.isRequired,
   url: React.PropTypes.string.isRequired
};

export default Card;
