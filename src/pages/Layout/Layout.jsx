import React from 'react';
import HeroNav from '../../components/HeroNav/HeroNav';
import Home from '../Home/Home';
import Footer from '../../components/Footer/Footer';
import ContactBar from '../../components/ContactBar/ContactBar';

export default class Layout extends React.Component {
   constructor() {
      super();
      // this.routes = {
      //    home: {
      //       title: 'Sam Wemyss',
      //       subtitle: 'Software Engineer'
      //    },
      //    about: {
      //       title: 'About Me',
      //       subtitle: 'Who, what, where, why?'
      //    },
      //    blog: {
      //       title: 'My Blog',
      //       subtitle: 'Cool things and useful resources!'
      //    }
      // };
   }
   render() {
      // const route = this.routes[this.props.routes[1].component.name.toLowerCase()];
      const route = {
         title: 'Sam Wemyss',
         subtitle: 'Software Engineer'
      };
      return (
         <div>
            <HeroNav title={route.title} subtitle={route.subtitle}/>
            <Home/>
            <ContactBar/>
            <Footer/>
         </div>
      );
   }
}
