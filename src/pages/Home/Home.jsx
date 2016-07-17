import React from 'react';
import {Link} from 'react-router';
import Card from '../../components/Card/Card';
import './Home.scss';

const HeroHeadTitle = ({title}) => (
   <div className="hero-head has-text-centered">
      <h2 className="title is-1 quantico"><br/>{title}</h2>
   </div>
);

const Projects = () => (
   <section className="hero is-light is-medium">
      <HeroHeadTitle title="Projects" />
      <div className="hero-body">
         <div className="container">
            <div className="columns is-desktop">
               <div className="column">
                  <Card title="Sunswift" subtitle="Javascript, full-stack" content="I am creating a rich, versatile and responsive website for Sunswift who build and race record-breaking solar cars in the World Solar Challenge." date="1 Mar 2016 - Present"/>
               </div>
               <div className="column">
                  <Card title="TEDxUNSW" subtitle="Javascript, full-stack" content="Developed with a friend a creative and interesting website for the first ever TEDx event at USNW - The Human Spectrum." date="20 Nov 2015 - Present"/>
               </div>
               <div className="column">
                  <Card title="Sunswift" subtitle="Javascript, full-stack" content="I am creating a rich, versatile and responsive website for Sunswift who build and race record-breaking solar cars in the World Solar Challenge." date="1 Mar 2016 - Present"/>
               </div>
            </div>
         </div>
      </div>
   </section>
);

class Skills extends React.Component {
   constructor() {
      super();
      this.render = this.render.bind(this);
   }

   render() {
      const fstSkills = [
         {
            'name': 'Python',
            'img': 'python.svg'
         }, {
            'name': 'Java',
            'img': 'java.svg'
         }, {
            'name': 'HTML, Javascript and CSS',
            'img': 'htmlJsCss.svg'
         }, {
            'name': 'React',
            'img': 'react.svg'
         }, {
            'name': 'Meteor',
            'img': 'meteor.svg'
         }, {
            'name': 'Angular 1.x',
            'img': 'angular.svg'
         }, {
            'name': 'Gulp',
            'img': 'gulp.svg'
         }, {
            'name': 'Perl',
            'img': 'perl.svg'
         }, {
            'name': 'Bash',
            'img': 'bash.svg'
         }
      ];
      const sndSkills = [
         {
            'name': 'Haskell',
            'img': 'haskell.svg'
         }, {
            'name': 'Django',
            'img': 'django.svg'
         }, {
            'name': 'Jasmine',
            'img': 'jasmine.svg'
         }, {
            'name': 'C',
            'img': 'c.svg'
         }, {
            'name': 'Postgresql',
            'img': 'postgresql.svg'
         }, {
            'name': 'Groovy',
            'img': 'groovy.svg'
         }, {
            'name': 'NodeJS',
            'img': 'nodejs.svg'
         }, {
            'name': 'C#',
            'img': 'csharp.svg'
         }, {
            'name': 'Webpack',
            'img': 'webpack.svg'
         }, {
            'name': 'Grunt',
            'img': 'grunt.svg'
         }
      ];
      return (
         <section className="hero is-medium">
            <HeroHeadTitle title="Skills" />
            <div className="hero-body">
               <div className="container">
                  <h3 className="subtitle">Languages I am experienced in</h3>
                  <div className="columns is-multiline is-mobile">
                     {fstSkills.map(function(language) {
                        return (
                           <div key={language.name} className="column is-4-mobile is-3-tablet is-2-desktop is-vh-centered">
                              <img className="lang-logo" src={require('../../assets/images/logos/' + language.img)} alt={language.name} title={language.name}/>
                           </div>
                        );
                     })}
                  </div>
                  <br/>
                  <br/>
                  <br/>
                  <br/>
                  <h3 className="subtitle">Languages I am confident in</h3>
                  <div className="columns is-multiline is-mobile">
                     {sndSkills.map(function(language) {
                        return (
                           <div key={language.name} className="column is-4-mobile is-3-tablet is-2-desktop is-vh-centered">
                              <img className="lang-logo" src={require('../../assets/images/logos/' + language.img)} alt={language.name} title={language.name}/>
                           </div>
                        );
                     })}
                  </div>
               </div>
            </div>
         </section>
      );
   }
}
const Hobbies = () => (
   <section className="hero is-light is-medium">
      <HeroHeadTitle title="Hobbies"/>
      <div className="hero-body">
         <div className="container">
            <div className="tile is-ancestor">
               <div className="tile is-vertical">
                  <div className="tile">
                     <div className="tile is-parent">
                        <article className="tile is-child notification box">
                           <img className="hobby-icon" src={require('../../assets/images/icons/game.svg')}/>
                           <p className="title quantico">Gaming</p>
                           <p className="subtitle">I enjoy unwinding by playing quality games such as The Legend of Zelda and Last of Us (slowly becoming a naughty dog fan...).</p>
                        </article>
                     </div>
                     <div className="tile is-parent">
                        <article className="tile is-child notification box">
                           <img className="hobby-icon" src={require('../../assets/images/icons/mountainBike.svg')}/>
                           <p className="title quantico">Adventuring</p>
                           <p className="subtitle">Whether it be mountain bike riding, bushwalking or simply camping I love the outdoors and exploring what's over the next hill.</p>
                        </article>
                     </div>
                  </div>
                  <div className="tile is-parent">
                     <article className="tile is-child notification box">
                        <div className="columns">
                           <div className="column is-4-tablet is-3-desktop">
                              <img className="hobby-icon" src={require('../../assets/images/icons/bow.svg')}/>
                           </div>
                           <div className="column is-8-tablet is-9-desktop">
                              <p className="title quantico">Archery</p>
                              <p className="subtitle">Wanting to be Legolas as a kid, I picked up a bow and haven't put it down since. Whenever I go home I like to get outdoors and have a shot.</p>
                           </div>
                        </div>
                     </article>
                  </div>
               </div>
               <div className="tile is-parent is-vertical">
                  <article className="tile is-child notification box">
                     <img className="hobby-icon" src={require('../../assets/images/icons/plant.svg')}/>
                     <p className="title quantico">Gardening</p>
                     <p className="subtitle">Does this make me sound old..? I grew up surrounded by Mum's garden, and have developed a bit of a green thumb for gardening since moving to Sydney.</p>
                  </article>
                  <article className="tile is-child notification box">
                     <img className="hobby-icon" src={require('../../assets/images/icons/snowboard.svg')}/>
                     <p className="title quantico">Snowboarding</p>
                     <p className="subtitle">Expensive, but loads of fun. I try to make at least one trip to the snow per season to do my annual faceplant while attempting tricks and jumps.</p>
                  </article>
               </div>
            </div>
         </div>
      </div>
   </section>
);

export default class Home extends React.Component {
   constructor() {
      super();
      this.render = this.render.bind(this);
   }

   render() {

      const styles = {
         avatar: {
            width: '220px',
            borderRadius: '50%',
            marginRight: '20px',
            boxShadow: '0 5px 11px 0 rgba(0, 0, 0, 0.18), 0 4px 15px 0 rgba(0, 0, 0, 0.15)'
         },
         avatarInfo: {
            lineHeight: '1.5'
         }
      };

      return (
         <main>
            <section className="section is-medium">
               <div className="container">
                  <div className="columns is-vcentered">
                     <div className="column is-narrow has-text-centered">
                        <img style={styles.avatar} src={require('../../assets/images/samW.jpg')} alt="A picture of me!"/>
                     </div>
                     <div className="column">
                        <h2 className="title is-4" style={styles.avatarInfo}>
                           Hey there! I am a Software Engineer studying at <strong className="blue-text">UNSW</strong>. Originally from a cattle farm in south-western NSW, I moved to Sydney to pursue what I enjoy the most - <strong className="blue-text">Problem Solving</strong>.
                           <br/>
                           <br/>
                           I love building, breaking and fixing things - which is programming in a nutshell really, and there's always new and different problems to solve which is awesome!
                        </h2>
                     </div>
                  </div>
               </div>
            </section>
            <Projects/>
            <Skills/>
            <Hobbies/>
         </main>
      );
   }
}
