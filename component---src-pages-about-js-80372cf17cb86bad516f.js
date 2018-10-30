(window.webpackJsonp=window.webpackJsonp||[]).push([[4],{137:function(e,a,t){"use strict";t.r(a);var n=t(0),r=t.n(n),i=t(146),s=t(152),c=(t(181),function(){return r.a.createElement("section",{className:"hero is-light"},r.a.createElement("div",{className:"hero-body"},r.a.createElement("div",{className:"columns is-vcentered"},r.a.createElement("div",{className:"column is-4 has-text-centered"},r.a.createElement("img",{className:"avatar image-floating",src:t(182),alt:"Sam Wemyss"})),r.a.createElement("div",{className:"column is-7"},r.a.createElement("p",{className:"subtitle is-4 lh-about"},"Hi, I'm Sam! I am a final year Software Engineering student at UNSW who loves solving complex problems and exploring the world around me.")))))}),l=function(){return r.a.createElement("section",{className:"hero"},r.a.createElement("div",{className:"hero-body"},r.a.createElement("div",{className:"columns is-vcentered section"},r.a.createElement("div",{className:"column is-4 is-offset-1"},r.a.createElement("p",{className:"subtitle lh-about"},"Growing up on a farm I've always been a bit more connected to the environment than most, which is why I dream to build software that can help tackle one of the biggest problems of our time - climate change.")),r.a.createElement("div",{className:"column is-5 is-offset-1"},r.a.createElement("img",{src:t(183),alt:"Me running up four tree hill",className:"image-floating"})))))},o=function(){return r.a.createElement("section",{className:"hero is-primary is-bold"},r.a.createElement("div",{className:"hero-body has-text-centered"},r.a.createElement("div",{className:"columns"},r.a.createElement("div",{className:"column is-6 is-offset-3"},r.a.createElement("div",{className:"section"},r.a.createElement("p",{className:"subtitle is-4 lh-about"},"Day to day I like to hack away at side projects to pick up new skills, try out an idea, or even just have some fun..."))))))},m=function(){return r.a.createElement("section",{className:"hero is-light"},r.a.createElement("div",{className:"hero-body"},r.a.createElement("div",{className:"columns is-vcentered section"},r.a.createElement("div",{className:"column is-5 is-offset-1"},r.a.createElement("img",{src:t(184),alt:"The Red Tarn at Mt Cook, New Zealand, 2018",className:"image-floating"})),r.a.createElement("div",{className:"column is-4 is-offset-1"},r.a.createElement("p",{className:"subtitle lh-about"},"In my spare time I like going on hikes in the mountains, play video games and do something other than uni work 😊. Other random things I enjoy include archery, snowboarding and gardening.")))))},u=function(){return r.a.createElement("section",{className:"hero is-primary is-bold"},r.a.createElement("div",{className:"hero-body has-text-centered"},r.a.createElement("div",{className:"columns"},r.a.createElement("div",{className:"column is-8 is-offset-2"},r.a.createElement("p",{className:"subtitle is-4 lh-about"},"If you want to get in touch - just click on one of the links below. 👍",r.a.createElement("br",null),"Otherwise have a great day!")))))};a.default=function(){return r.a.createElement(i.a,null,r.a.createElement("section",{className:"hero is-primary is-bold is-medium"},r.a.createElement("div",{className:"hero-body has-text-centered"},r.a.createElement("h1",{className:"title is-2"},"About me"))),r.a.createElement(c,null),r.a.createElement(l,null),r.a.createElement(o,null),r.a.createElement(m,null),r.a.createElement(u,null),r.a.createElement(s.b,null))}},142:function(e,a,t){var n;e.exports=(n=t(143))&&n.default||n},143:function(e,a,t){"use strict";t.r(a);t(34);var n=t(0),r=t.n(n),i=t(4),s=t.n(i),c=t(49),l=t(2),o=function(e){var a=e.location,t=l.default.getResourcesForPathnameSync(a.pathname);return r.a.createElement(c.a,Object.assign({location:a,pageResources:t},t.json))};o.propTypes={location:s.a.shape({pathname:s.a.string.isRequired}).isRequired},a.default=o},144:function(e,a,t){},145:function(e,a,t){},146:function(e,a,t){"use strict";t(76),t(48),t(75),t(147);var n=t(0),r=t.n(n),i=t(148),s=t.n(i),c=t(13),l=t(141),o=t.n(l),m=t(4),u=(t(144),function(e){var a=e.icon,t=e.title,n=e.to;return r.a.createElement(o.a,{to:n,className:"navbar-item"},a&&r.a.createElement("span",{className:"icon has-text-white"},r.a.createElement("i",{className:a})),r.a.createElement("h2",null,t))});u.propTypes={icon:m.string,title:m.string.isRequired,to:m.string.isRequired};var d=function(e){e.title;return r.a.createElement("nav",{className:"navbar is-dark has-shadow"},r.a.createElement("div",{className:"navbar-start navbar-end navbar-brand"},r.a.createElement(u,{to:"/",title:"Home"}),r.a.createElement(u,{to:"/about",title:"About"}),r.a.createElement(u,{to:"/blog",title:"Blog"})))};d.propTypes={title:m.string};var f=d,h=(t(150),t(151),t(145),new Set(["/","/404/"]));a.a=function(e){var a=e.children;return r.a.createElement(c.Location,null,function(e){var t=e.location;return r.a.createElement("main",null,r.a.createElement(s.a,{title:"Sam Wemyss",meta:[{name:"description",content:"Personal website for Sam Wemyss"},{name:"keywords",content:"software developer, student, javascript, programming"}]}),h.has(t.pathname)?"":r.a.createElement(f,{title:t.pathname}),a)})}},149:function(e,a,t){"use strict";t.r(a),t.d(a,"graphql",function(){return h}),t.d(a,"StaticQueryContext",function(){return d}),t.d(a,"StaticQuery",function(){return f});var n=t(0),r=t.n(n),i=t(4),s=t.n(i),c=t(141),l=t.n(c);t.d(a,"Link",function(){return l.a}),t.d(a,"withPrefix",function(){return c.withPrefix}),t.d(a,"navigate",function(){return c.navigate}),t.d(a,"push",function(){return c.push}),t.d(a,"replace",function(){return c.replace}),t.d(a,"navigateTo",function(){return c.navigateTo});var o=t(142),m=t.n(o);t.d(a,"PageRenderer",function(){return m.a});var u=t(33);t.d(a,"parsePath",function(){return u.a});var d=r.a.createContext({}),f=function(e){return r.a.createElement(d.Consumer,null,function(a){return e.data||a[e.query]&&a[e.query].data?(e.render||e.children)(e.data?e.data.data:a[e.query].data):r.a.createElement("div",null,"Loading (StaticQuery)")})};function h(){throw new Error("It appears like Gatsby is misconfigured. Gatsby related `graphql` calls are supposed to only be evaluated at compile time, and then compiled away,. Unfortunately, something went wrong and the query was left in the compiled code.\n\n.Unless your site has a complex or custom babel/Gatsby configuration this is likely a bug in Gatsby.")}f.propTypes={data:s.a.object,query:s.a.string.isRequired,render:s.a.func,children:s.a.func}},152:function(e,a,t){"use strict";t.d(a,"a",function(){return m});t(160),t(50);var n=t(0),r=t.n(n),i=t(161),s=t(153),c=t(162),l=t(163);t(154);s.b.add(c.a,l.a,l.b);var o=[{href:"//au.linkedin.com/in/samwemyss",title:"Check out my LinkedIn",icon:["fab","linkedin"]},{href:"//github.com/wemyss",title:"Follow me on GitHub",icon:["fab","github"]},{href:"mailto:samuel.wemyss@gmail.com",title:"Send me an email",icon:["far","envelope"]}],m=function(e){var a=e.className;return o.map(function(e,t){var n=e.href,s=e.title,c=e.icon;return r.a.createElement("a",{href:n,key:t},r.a.createElement("span",{className:("icon is-large "+a).trim()},r.a.createElement(i.a,{icon:c,size:"2x",title:s})))})};a.b=function(){return r.a.createElement("footer",{className:"hero is-dark"},r.a.createElement("div",{className:"hero-body"},r.a.createElement("div",{className:"has-text-centered"},r.a.createElement("div",{className:"container is-vh-centered icon-bar"},r.a.createElement(m,null)))))}},154:function(e,a,t){},181:function(e,a,t){},182:function(e,a,t){e.exports=t.p+"static/samW-aff12064ecbb2fcca2ba1346cce5bddc.jpg"},183:function(e,a,t){e.exports=t.p+"static/hill-a4bd9e2b88ef1ff48ff53ec83002caed.jpg"},184:function(e,a,t){e.exports=t.p+"static/redtarn-mtcook-22c2f5f7252232f03ddf4af40a0632d2.jpg"}}]);
//# sourceMappingURL=component---src-pages-about-js-80372cf17cb86bad516f.js.map