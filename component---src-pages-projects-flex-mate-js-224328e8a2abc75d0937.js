(window.webpackJsonp=window.webpackJsonp||[]).push([[6],{142:function(e,t,a){"use strict";a.r(t);var n=a(0),o=a.n(n),i=a(150),r=a(151),l=a(171),s=a.n(l),c=a(172),A=a.n(c),u=a(173),m=a.n(u),d=a(174),E=a.n(d),h=a(175),I=a.n(h),g=a(149),p=a.n(g),C=function(e){var t=e.children;return o.a.createElement("div",{className:p.a.container},t)},f=function(e){return o.a.createElement("div",{className:p.a.primaryRhythm},o.a.createElement("h1",{className:p.a.projectH1},e.title),o.a.createElement("h2",{className:p.a.projectH2,style:{color:e.color}},e.subtitle))},Q=function(e){return o.a.createElement("ul",{className:p.a.techOverview},o.a.createElement("li",{className:p.a.techListHeading,style:{color:e.color}},e.heading),o.a.createElement("li",{className:p.a.techListItem},e.listitem1),o.a.createElement("li",{className:p.a.techListItem},e.listitem2))},B=function(e){return o.a.createElement("div",{className:[p.a.descriptionContainer,p.a.primaryRhythm].join(" ")},o.a.createElement("h1",{className:[p.a.techListHeading,p.a.secondaryRhythm].join(" ")},e.heading),o.a.createElement("p",{className:p.a.projectCopy},e.body))},v=a(7),y=a.n(v),w=function(e){return o.a.createElement("li",null,e.feature)},R=function(e){function t(){return e.apply(this,arguments)||this}return y()(t,e),t.prototype.render=function(){return o.a.createElement("ul",{className:[p.a.featureList,p.a.primaryRhythm].join(" ")},this.props.features.map(function(e){return o.a.createElement(w,{feature:e.feature,key:e.id})}))},t}(o.a.Component),L=function(e){return o.a.createElement("h2",{className:[p.a.projectH2,p.a.secondaryRhythm].join(" ")},e.title)},k=function(e){return o.a.createElement("div",null,o.a.createElement("ul",{className:[p.a.metricsList,p.a.primaryRhythm].join(" ")},o.a.createElement("li",{className:p.a.metric},o.a.createElement("img",{src:e.baselineimg,alt:"not loaded"}),e.baseline),o.a.createElement("li",{className:p.a.metric},o.a.createElement("img",{src:e.gutterimg,alt:"not loaded"}),e.gutter),o.a.createElement("li",{className:p.a.metric},o.a.createElement("img",{src:e.rhythmimg,alt:"not loaded"}),e.rhythm)))},b=function(e){return o.a.createElement("li",{className:p.a.colorListItem},o.a.createElement("div",{className:p.a.colorBlock,style:{background:e.hexcode,color:e.labelcolor}},o.a.createElement("p",null,e.hexcode),o.a.createElement("p",null,e.label)))},S=function(e){function t(){return e.apply(this,arguments)||this}return y()(t,e),t.prototype.render=function(){return o.a.createElement("div",{className:p.a.colorContainer},o.a.createElement("ul",{className:[p.a.colorList,p.a.primaryRhythm].join(" ")},this.props.colors.map(function(e){return o.a.createElement(b,{label:e.label,labelcolor:e.labelcolor,hexcode:e.hexcode})})))},t}(o.a.Component),U=function(e){return o.a.createElement("img",{src:e.image,alt:"not loaded",className:[p.a.primaryRhythm,p.a.subsectionImage].join(" ")})},N=[{feature:"Fuel Cost Estimation",id:1},{feature:"Show Real-Time Travel/Traffic Estimations",id:2},{feature:"Show Job Types By Station",id:3},{feature:"Coverage for as many Flex Regions as possible",id:4}],O=[{label:"Primary",labelcolor:"black",hexcode:"#FE8B10"},{label:"Danger",labelcolor:"black",hexcode:"#FF0000"},{label:"Text/BG",labelcolor:"black",hexcode:"#FFFFFF"},{label:"Text/BG",labelcolor:"white",hexcode:"#000000"}];t.default=function(){return o.a.createElement("div",null,o.a.createElement(i.a,null),o.a.createElement(r.a,null),o.a.createElement(C,null,o.a.createElement(f,{title:"FLEX MATE APP",subtitle:"November 2018 - Present",color:"#FE8B10"}),o.a.createElement(Q,{heading:"SCOPE",listitem1:"UX/UI",listitem2:"Web Dev",color:"#FE8B10"}),o.a.createElement(Q,{heading:"APPS USED",listitem1:"Adobe XD",listitem2:"Visual Studio Code",color:"#FE8B10"}),o.a.createElement(Q,{heading:"CORE TECH",listitem1:"JavaScript ES6",listitem2:"Google Distance Matrix API",color:"#FE8B10"}),o.a.createElement("hr",{className:[p.a.primaryRhythm,p.a.projectLineBreak].join(" ")}),o.a.createElement(B,{heading:"Problem",body:"Amazon flex, a gig delivery app created by Amazon Logistics Inc. Does not have any way to show users an accurate fuel cost and travel estimate to each of the warehouses which is a significant amount of common un-accounted for expenses that delivery partners incur while making their deliveries."}),o.a.createElement(B,{heading:"Solution",body:"Create an app that uses Distance Matrix data to estimate fuel cost for travel to each delivery station based on the user provided average cost per gallon (cpg) as well as their vehicle average miles per gallon (mpg)."}),o.a.createElement(f,{title:"Features",subtitle:"Flex Mate App",color:"#FE8B10"}),o.a.createElement(R,{features:N}),o.a.createElement(f,{title:"Shared Styles",subtitle:"Design System",color:"#FE8B10"}),o.a.createElement(L,{title:"/Metrics"}),o.a.createElement(k,{baseline:"8px baseline grid",baselineimg:s.a,gutter:"16px gutter/spacing",gutterimg:A.a,rhythm:"48px vertical rhythm",rhythmimg:m.a}),o.a.createElement(L,{title:"/Color"}),o.a.createElement(S,{colors:O}),o.a.createElement(L,{title:"/Typography"}),o.a.createElement(U,{image:E.a}),o.a.createElement(f,{title:"User Flows",subtitle:"Main Functionality",color:"#FE8B10"}),o.a.createElement(U,{image:I.a})))}},145:function(e,t,a){"use strict";var n=a(8);t.__esModule=!0,t.withPrefix=d,t.navigateTo=t.replace=t.push=t.navigate=t.default=void 0;var o=n(a(152)),i=n(a(153)),r=n(a(7)),l=n(a(51)),s=n(a(52)),c=n(a(4)),A=n(a(0)),u=a(17),m=a(146);function d(e){return function(e){return e.replace(/\/+/g,"/")}("/"+e)}var E={activeClassName:c.default.string,activeStyle:c.default.object},h=function(e){function t(t){var a;a=e.call(this)||this,(0,s.default)((0,l.default)((0,l.default)(a)),"defaultGetProps",function(e){return e.isCurrent?{className:[a.props.className,a.props.activeClassName].filter(Boolean).join(" "),style:(0,i.default)({},a.props.style,a.props.activeStyle)}:null});var n=!1;return"undefined"!=typeof window&&window.IntersectionObserver&&(n=!0),a.state={IOSupported:n},a.handleRef=a.handleRef.bind((0,l.default)((0,l.default)(a))),a}(0,r.default)(t,e);var a=t.prototype;return a.componentDidUpdate=function(e,t){this.props.to===e.to||this.state.IOSupported||___loader.enqueue((0,m.parsePath)(this.props.to).pathname)},a.componentDidMount=function(){this.state.IOSupported||___loader.enqueue((0,m.parsePath)(this.props.to).pathname)},a.handleRef=function(e){var t,a,n,o=this;this.props.innerRef&&this.props.innerRef(e),this.state.IOSupported&&e&&(t=e,a=function(){___loader.enqueue((0,m.parsePath)(o.props.to).pathname)},(n=new window.IntersectionObserver(function(e){e.forEach(function(e){t===e.target&&(e.isIntersecting||e.intersectionRatio>0)&&(n.unobserve(t),n.disconnect(),a())})})).observe(t))},a.render=function(){var e=this,t=this.props,a=t.to,n=t.getProps,r=void 0===n?this.defaultGetProps:n,l=t.onClick,s=t.onMouseEnter,c=(t.activeClassName,t.activeStyle,t.ref,t.innerRef,t.state),E=t.replace,h=(0,o.default)(t,["to","getProps","onClick","onMouseEnter","activeClassName","activeStyle","ref","innerRef","state","replace"]),I=d(a);return A.default.createElement(u.Link,(0,i.default)({to:I,state:c,getProps:r,innerRef:this.handleRef,onMouseEnter:function(e){s&&s(e),___loader.hovering((0,m.parsePath)(a).pathname)},onClick:function(t){return l&&l(t),0!==t.button||e.props.target||t.defaultPrevented||t.metaKey||t.altKey||t.ctrlKey||t.shiftKey||(t.preventDefault(),g(a,{state:c,replace:E})),!0}},h))},t}(A.default.Component);h.propTypes=(0,i.default)({},E,{innerRef:c.default.func,onClick:c.default.func,to:c.default.string.isRequired,replace:c.default.bool});var I=h;t.default=I;var g=function(e,t){window.___navigate(d(e),t)};t.navigate=g;var p=function(e){console.warn('The "push" method is now deprecated and will be removed in Gatsby v3. Please use "navigate" instead.'),window.___push(d(e))};t.push=p;t.replace=function(e){console.warn('The "replace" method is now deprecated and will be removed in Gatsby v3. Please use "navigate" instead.'),window.___replace(d(e))};t.navigateTo=function(e){return console.warn('The "navigateTo" method is now deprecated and will be removed in Gatsby v3. Please use "navigate" instead.'),p(e)}},146:function(e,t,a){"use strict";a.r(t),a.d(t,"graphql",function(){return E}),a.d(t,"StaticQueryContext",function(){return m}),a.d(t,"StaticQuery",function(){return d});var n=a(0),o=a.n(n),i=a(4),r=a.n(i),l=a(145),s=a.n(l);a.d(t,"Link",function(){return s.a}),a.d(t,"withPrefix",function(){return l.withPrefix}),a.d(t,"navigate",function(){return l.navigate}),a.d(t,"push",function(){return l.push}),a.d(t,"replace",function(){return l.replace}),a.d(t,"navigateTo",function(){return l.navigateTo});var c=a(147),A=a.n(c);a.d(t,"PageRenderer",function(){return A.a});var u=a(32);a.d(t,"parsePath",function(){return u.a});var m=o.a.createContext({}),d=function(e){return o.a.createElement(m.Consumer,null,function(t){return e.data||t[e.query]&&t[e.query].data?(e.render||e.children)(e.data?e.data.data:t[e.query].data):o.a.createElement("div",null,"Loading (StaticQuery)")})};function E(){throw new Error("It appears like Gatsby is misconfigured. Gatsby related `graphql` calls are supposed to only be evaluated at compile time, and then compiled away,. Unfortunately, something went wrong and the query was left in the compiled code.\n\n.Unless your site has a complex or custom babel/Gatsby configuration this is likely a bug in Gatsby.")}d.propTypes={data:r.a.object,query:r.a.string.isRequired,render:r.a.func,children:r.a.func}},147:function(e,t,a){var n;e.exports=(n=a(154))&&n.default||n},148:function(e,t,a){e.exports={headercontainer:"header-css-module-module--headercontainer--1w_p0",headerListItem:"header-css-module-module--headerListItem--17ift",headerLink:"header-css-module-module--headerLink--266zk",headerContainerResponsive:"header-css-module-module--headerContainerResponsive--2mUaw",underline:"header-css-module-module--underline--3ullg",activeLink:"header-css-module-module--activeLink--8hAuI",headerListItemResponsive:"header-css-module-module--headerListItemResponsive--3ESB6",headerIconResponsive:"header-css-module-module--headerIconResponsive---HE0Q",mikeIconAlt:"header-css-module-module--mikeIconAlt--1Euu6"}},149:function(e,t,a){e.exports={container:"layout-css-module-module--container--2wdM9",projectH1:"layout-css-module-module--projectH1--3CsIW",projectH2:"layout-css-module-module--projectH2--edezI",primaryRhythm:"layout-css-module-module--primaryRhythm--cwtqi",techOverview:"layout-css-module-module--techOverview--2v7I9",techListHeading:"layout-css-module-module--techListHeading--1HBdO",techListItem:"layout-css-module-module--techListItem--10YDo",descriptionContainer:"layout-css-module-module--descriptionContainer--1t1gW",secondaryRhythm:"layout-css-module-module--secondaryRhythm--1782F",projectCopy:"layout-css-module-module--projectCopy--1ZYQX",featureList:"layout-css-module-module--featureList--3nXmc",metricsList:"layout-css-module-module--metricsList--3jVy_",metric:"layout-css-module-module--metric--1Zv2s",colorList:"layout-css-module-module--colorList--1gmgZ",colorListItem:"layout-css-module-module--colorListItem--1IdX8",colorBlock:"layout-css-module-module--colorBlock--1dMTQ",subsectionImage:"layout-css-module-module--subsectionImage--3eBun",projectLineBreak:"layout-css-module-module--projectLineBreak--3Gpzx",colorContainer:"layout-css-module-module--colorContainer--2FaIk"}},150:function(e,t,a){"use strict";var n=a(0),o=a.n(n),i=a(146),r=a(148),l=a.n(r),s=a(155),c=a.n(s);t.a=function(){return o.a.createElement("div",{className:l.a.headercontainer},o.a.createElement("ul",null,o.a.createElement("li",{className:l.a.headerListItem},o.a.createElement(i.Link,{to:"/",className:l.a.headerLink},o.a.createElement("img",{src:c.a,alt:"not loaded"}))),o.a.createElement("li",{className:l.a.headerListItem},o.a.createElement(i.Link,{to:"/contact",className:l.a.headerLink,activeClassName:l.a.activeLink},"Contact")),o.a.createElement("li",{className:l.a.headerListItem},o.a.createElement(i.Link,{to:"/blog",className:l.a.headerLink,activeClassName:l.a.activeLink},"Blog")),o.a.createElement("li",{className:l.a.headerListItem},o.a.createElement(i.Link,{to:"/about",className:l.a.headerLink,activeClassName:l.a.activeLink},"About"))))}},151:function(e,t,a){"use strict";var n=a(0),o=a.n(n),i=a(146),r=a(148),l=a.n(r),s=a(156),c=a.n(s);t.a=function(){return o.a.createElement("div",{className:l.a.headerContainerResponsive,style:{marginBottom:"40px"}},o.a.createElement(i.Link,{to:"/"},o.a.createElement("img",{className:[l.a.mikeIconAlt,l.a.headerIconResponsive].join(" "),src:c.a,alt:"not loaded"})),o.a.createElement("ul",null,o.a.createElement("li",{className:l.a.headerListItemResponsive},o.a.createElement(i.Link,{to:"/",className:l.a.headerLink,activeClassName:l.a.activeLink},"HOME")),o.a.createElement("li",{className:l.a.headerListItemResponsive},o.a.createElement(i.Link,{to:"/about",className:l.a.headerLink,activeClassName:l.a.activeLink},"ABOUT")),o.a.createElement("li",{className:l.a.headerListItemResponsive},o.a.createElement(i.Link,{to:"/blog",className:l.a.headerLink,activeClassName:l.a.activeLink},"BLOG")),o.a.createElement("li",{className:l.a.headerListItemResponsive},o.a.createElement(i.Link,{to:"/contact",className:l.a.headerLink,activeClassName:l.a.activeLink},"CONTACT"))))}},152:function(e,t){e.exports=function(e,t){if(null==e)return{};var a,n,o={},i=Object.keys(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||(o[a]=e[a]);return o}},153:function(e,t){function a(){return e.exports=a=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var n in a)Object.prototype.hasOwnProperty.call(a,n)&&(e[n]=a[n])}return e},a.apply(this,arguments)}e.exports=a},154:function(e,t,a){"use strict";a.r(t);a(33);var n=a(0),o=a.n(n),i=a(4),r=a.n(i),l=a(53),s=a(2),c=function(e){var t=e.location,a=s.default.getResourcesForPathnameSync(t.pathname);return o.a.createElement(l.a,Object.assign({location:t,pageResources:a},a.json))};c.propTypes={location:r.a.shape({pathname:r.a.string.isRequired}).isRequired},t.default=c},155:function(e,t){e.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAC0AAAAnCAYAAACbgcH8AAAAAXNSR0IArs4c6QAAA31JREFUWAntV92LTVEUHxrDIEYymlJumZLEIMnHqPvAyItRQr6aqXmXVw/+A/8AikRJHjwoSiKSfCXzIPmImaKhGOP7s8bvd5x1+82efT6uc47xcFf97l5r7bXX+d111t773rq64mQIqUtFpB9fRNIw53SMpSLyF0m6CL5BziJJ9+MJfUUwH5dz0hLyzY3IeTXCP+bufWAw7AE3ZW6StdJNYNL2F2x6sSbXL1INh80I9lU2ydddzUPc2KyV1nxlGCQbJ2NaYR8xvu5CK+x7aB6+FiTZGCZi6zQBC4GVoe+/HLrA6nHIjFUvA0eAo0Bukvfl8gHMZjrsmmG/c3yZzLxJk9wMhxHt944vk1kEaZ5I04RVI/QvYmdWiyBNUlrtCbB/ZmYqCf4V6R/yzMxqPTJMBTolE/vyvNgl6GvEvg69X2xVP8LgqaGVboCdttIs4g5AZQDGZXVQbwX0UuADZnEilMMYdX67TUSMn+HfEK4pY+wDuoA0sgJB+izqr4ARN7evPVh9+7YToW8FqpHJCP4uC6rp6Q5ZZ+psKIvN4OgjTf8efkA2AbzV0goJUr79GSq6+cXtVdeL96vo6h9F2iq0HAsWAEbe/JLHq04KvRrvO7t9i7m3Vsn6gxIUS/o0Au2B+6Hb74jjkiBOZTtRLAd1kk7ztsqIszdyA7oeBmthW0FGVZpH0zmAwiqzv58B94E0Yom1PQaxMA1prSZPi7sATyMKL6j2QMOH29NT4Dthk+F4EiM3VxppCYNeSHDaSrukfyHHNclTmXdJk9wF4K0EV0N6EdY9B/QyeQp7nuTzqXPg5B6ifALuBNrI87lysrik2ZM8p9nblFvAE8B6lb444dH0wAm4B3uZ43PNShUx8RLYBuwCtK3aYAf3h0sa/kCsRWw0f9LISvtI8w22xixW0vMRx7dLHJA1vGDW0Y4ifRNzDwGrOGOThJtwNeCSHoKPLbMU8EmFjG/S8QUtUu841eyG8UYdCfoWzDcAlzxxPL44f8YztwS+4LWHczsxsq9NeqB0hkZQ6TjSt21VynE34i4CA554/t3i/uCV/NqZ19Z4hLlTzjzfoJEONmxUezjrEs1mRPDhxyIiuRnZNns980p61K85xF8BhmVdR16kS0g6CJyV5PyLxX42OQTF/VfeCF+7BWAkQVfYor3i1C8p7ppaq0CtArUKJFXgN9Piqv9kqMMSAAAAAElFTkSuQmCC"},156:function(e,t){e.exports="data:image/png;base64,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"},171:function(e,t){e.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADEAAAAxCAYAAABznEEcAAAAAXNSR0IArs4c6QAAAUBJREFUaAXtWkEKgzAQ1DYHDz7BnvUV3lTwKYI+x6d40JsfaUEfISjYePLSrYXdpjaMIEgGN+xMNsNG3SiKxiRJFoe4uq4LND4SsNO2bZCmKYkfvX+EfxD/6pRl+VjfXFVVzW/g9QT4/UIx/E/jSOIsakEJKCHIgBuG4ZJl2UrF1Pu00j5A+sgJcBc+Qalnehy7k2nGqfmgBMWM6XErlGD7RF3XyvM80kemaVJFUZC4gM/wfcL3/Vkvn80sX94b/uV+BP2E6fol57OisJEEqa9hwAol2D7RNI2K45j0gb7vVZ7nJH4Kn8C5k1DtWFETSEJoNbDDQAk2hUIB2D4hsM9zz7X4/QR8Qmg5obCFiGSHgRJsCoUCWKEEfGI7T4JPoCZ2BqwobCSxC/rbJyuUcPX/TsPBd+qbxgeKa91P/BpXT+6E5VW+lOqBAAAAAElFTkSuQmCC"},172:function(e,t){e.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADEAAAAxCAYAAABznEEcAAAAAXNSR0IArs4c6QAAAWNJREFUaAXtWkGKhDAQ1N0cFHzC7Flf4U0FnyLoYzz4FA968yO7MPMHhRlwe06eygidjW7ogBBSdJp0dXeh0U+S5JFl2csDYxzHG+EPAHvDMNzyPIe4zl6HH9j/06vr+mfdGU3TPHfg9QL49weK8H9al0NchS1hQpgwGAE/juNXURQr2pP6tCIdgDpyAdwXnUDs2V6X7mQ74sifMIEiY3vdCSbYOtF1nQqCAOrIPM8qDEOIL8uiqqqC+AEd4utEFEVPSp+3WKJnF3/bM99X5H3Cdv1Cf04UthwC8msZcIIJtk60baso8LDPE6bF6bMPtBedsJzWLHdO1IQcgpUDBo2FCYPBZG3F1om+71WaprDPT9OkxcuyhPZWdELuJ1hJtBlLYW+xOHcmTJwb/827E0ywdeJAH//r+w3+dyfRiS2tWTMnakIOwcoBg8bChMFgsrby6X+nu+ae+ovwO/JCOnE2rn4B/cKbtGceEhgAAAAASUVORK5CYII="},173:function(e,t){e.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADEAAAAxCAYAAABznEEcAAAAAXNSR0IArs4c6QAAAOVJREFUaAXtlVEKwkAMRFvtMRTvfyoLegsFzUB+069hV8ML5KezTTczSWddluUZ+Y6s4hKAzlQxGz/rYnvk5yBfB5jem43fT3GJvw+a+BUJUQIljAysUUseoV9lFVsARz4yG191ARnZreogG9C5KtTgTHxnsStpRj9HidGMV99DiYqZ0c/xiWQcn3CMHovtYNFRAyUcLDpqtFACn8hRwCfYiWSgxWLThGOeHTVaKIFP5CjgE+xEMtBisWnCMc+OGi2UwCdyFPAJdiIZaLHYNOGYZ0eNFkrIJx6R+k1WcQ1AZ6qYjW9fIWGEAcK+UvgAAAAASUVORK5CYII="},174:function(e,t,a){e.exports=a.p+"static/typography-system-4882b9e06362dc0e9001523fc86f8765.png"},175:function(e,t,a){e.exports=a.p+"static/flow-chart-8e978985ab8faf57f938936876d77346.png"}}]);
//# sourceMappingURL=component---src-pages-projects-flex-mate-js-224328e8a2abc75d0937.js.map