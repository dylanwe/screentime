(this.webpackJsonpscreentime=this.webpackJsonpscreentime||[]).push([[0],{30:function(e,t,a){e.exports=a(68)},35:function(e,t,a){},36:function(e,t,a){},37:function(e,t,a){},42:function(e,t,a){},60:function(e,t,a){},61:function(e,t,a){},63:function(e,t,a){},64:function(e,t,a){},65:function(e,t,a){},66:function(e,t,a){},67:function(e,t,a){},68:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),c=a(27),l=a.n(c),o=a(11),i=a(1),m=(a(35),a(3)),s=a(4),u=a(6),d=a(5),p=(a(36),a(37),function(e){Object(u.a)(a,e);var t=Object(d.a)(a);function a(){var e;Object(m.a)(this,a);for(var n=arguments.length,r=new Array(n),c=0;c<n;c++)r[c]=arguments[c];return(e=t.call.apply(t,[this].concat(r))).handleKeyPress=function(e){if("Enter"===e.key){var t=document.querySelector("#search_query");""!==t.value.trim()&&(window.location.href="../screentime/#/search/".concat(t.value.trim()),window.location.reload()),t.value=""}},e}return Object(s.a)(a,[{key:"render",value:function(){return r.a.createElement("div",{id:"searchbar"},r.a.createElement("input",{type:"search",placeholder:"Movies & shows",id:"search_query",onKeyUp:this.handleKeyPress}),r.a.createElement("button",{onClick:function(){var e=document.querySelector("#search_query");""!==e.value.trim()&&(window.location.href="../screentime/#/search/".concat(e.value.trim()),window.location.reload()),e.value=""}},"Search"))}}]),a}(r.a.Component)),v=function(e){Object(u.a)(a,e);var t=Object(d.a)(a);function a(){return Object(m.a)(this,a),t.apply(this,arguments)}return Object(s.a)(a,[{key:"render",value:function(){return r.a.createElement("nav",{id:"Navbar"},r.a.createElement("div",{className:"add_pad"},r.a.createElement("ul",null,r.a.createElement(o.b,{to:"/"},r.a.createElement("li",null,r.a.createElement("strong",null,"Screen-Time"))),r.a.createElement(o.b,{to:"/about"},r.a.createElement("li",null,"About"))),r.a.createElement(p,null),r.a.createElement("div",{id:"hamburger",onClick:function(){document.querySelector("#Navbar").classList.toggle("active_menu")}},r.a.createElement("svg",{viewBox:"0 0 100 55",width:"30",height:"20",fill:"#fff"},r.a.createElement("rect",{width:"100",height:"10"}),r.a.createElement("rect",{y:"25",width:"100",height:"10"}),r.a.createElement("rect",{y:"50",width:"100",height:"10"})))))}}]),a}(r.a.Component),h=(a(42),a(43),a(44),a(29)),g=a.n(h),b=a(18),E=function(e){Object(u.a)(a,e);var t=Object(d.a)(a);function a(){var e;return Object(m.a)(this,a),(e=t.call(this)).state={movies:[]},e}return Object(s.a)(a,[{key:"componentDidMount",value:function(){var e=this;b(this.props.url).then((function(e){return e.json()})).then((function(t){return e.setState({movies:t.results})}))}},{key:"render",value:function(){var e={dots:!1,infinite:!1,speed:500,slidesToShow:5,slidesToScroll:3,arrows:!1,responsive:[{breakpoint:1e3,settings:{slidesToShow:3,slidesToScroll:3}},{breakpoint:600,settings:{slidesToShow:2,slidesToScroll:2}}]},t=this.props.media_form;return 0!==this.state.movies.length?r.a.createElement("div",null,r.a.createElement("h2",{className:"slick_header"},this.props.title),r.a.createElement(g.a,e,this.state.movies.map((function(e){return r.a.createElement("div",{key:e.id},r.a.createElement("a",{onClick:function(){var a,n;a=t,n=e.id,console.log("".concat(n," was clicked")),window.location.href="movie"===a?"../screentime/#/movie/".concat(n):"../screentime/#/tv/".concat(n),window.location.reload()}},r.a.createElement("div",{className:"custom_slick",style:{backgroundImage:"linear-gradient(to bottom, rgba(0, 0, 0, 0) 50%, rgb(20, 20, 20, 0.8) 100%), url(https://image.tmdb.org/t/p/w342/".concat(e.poster_path,")")}},r.a.createElement("p",{className:"custom_slick_title"},"movie"===t?e.title:"tv"===t?e.name:null))))})))):r.a.createElement(r.a.Fragment,null)}}]),a}(r.a.Component),f=(a(60),a(61),a(18)),_=function(e){Object(u.a)(a,e);var t=Object(d.a)(a);function a(){var e;return Object(m.a)(this,a),(e=t.call(this)).state={movies:[]},e}return Object(s.a)(a,[{key:"componentDidMount",value:function(){var e=this;f(this.props.url).then((function(e){return e.json()})).then((function(t){return e.setState({movies:t.results})}))}},{key:"render",value:function(){return this.state.movies.length?r.a.createElement("header",{style:{backgroundImage:"linear-gradient(to bottom, rgba(0, 0, 0, 0) 50%, rgb(20, 20, 20) 100%), url(https://image.tmdb.org/t/p/original/".concat(this.state.movies[0].backdrop_path,")")}},r.a.createElement("div",{className:"header_content"},r.a.createElement("h2",null,this.state.movies[0].title),r.a.createElement(o.b,{to:"./movie/".concat(this.state.movies[0].id)}," ","View details"," "))):r.a.createElement("header",null)}}]),a}(r.a.Component),y=function(e){Object(u.a)(a,e);var t=Object(d.a)(a);function a(){return Object(m.a)(this,a),t.apply(this,arguments)}return Object(s.a)(a,[{key:"render",value:function(){var e="601afad9072abecf3270711c574913eb";return r.a.createElement("div",{id:"Home"},r.a.createElement(_,{title:"test",url:"https://api.themoviedb.org/3/movie/now_playing?api_key=".concat(e,"&language=en-US&page=1")}),r.a.createElement("main",null,r.a.createElement(E,{title:"Now playing movies",media_form:"movie",url:"https://api.themoviedb.org/3/movie/now_playing?api_key=".concat(e,"&language=en-US&page=1")}),r.a.createElement(E,{title:"Popular Shows",media_form:"tv",url:"https://api.themoviedb.org/3/tv/popular?api_key=".concat(e,"&language=en-US&page=1")}),r.a.createElement(E,{title:"Popular movies",media_form:"movie",url:"https://api.themoviedb.org/3/movie/popular?api_key=".concat(e,"&language=en-US&page=1")}),r.a.createElement(E,{title:"Top rated movies",media_form:"movie",url:"https://api.themoviedb.org/3/movie/top_rated?api_key=".concat(e,"&language=en-US&page=1")}),r.a.createElement(E,{title:"Upcoming movies",media_form:"movie",url:"https://api.themoviedb.org/3/movie/upcoming?api_key=".concat(e,"&language=en-US&page=1")})))}}]),a}(r.a.Component),w=a(10),k=a.n(w),j=a(14),O=a(15),S=(a(63),a(16)),N=a.n(S),C=a(18);var I=function(e){var t=e.match,a="601afad9072abecf3270711c574913eb";Object(n.useEffect)((function(){m()}),[]);var c=Object(n.useState)({}),l=Object(O.a)(c,2),o=l[0],i=l[1],m=function(){var e=Object(j.a)(k.a.mark((function e(){var n,r;return k.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,C("https://api.themoviedb.org/3/movie/".concat(t.params.id,"?api_key=").concat(a,"&language=en-US"));case 2:return n=e.sent,e.next=5,n.json();case 5:r=e.sent,i(r);case 7:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return 0!==Object.entries(o).length&&(document.getElementById("Movie").style.opacity="1"),r.a.createElement("div",{id:"Movie",className:"load"},r.a.createElement("header",null,r.a.createElement("div",{id:"header_container"},r.a.createElement("div",{id:"poster"},r.a.createElement("img",{src:"https://image.tmdb.org/t/p/w185/".concat(o.poster_path),alt:o.title})),r.a.createElement("div",{id:"header_content"},r.a.createElement("main",{id:"header_content_wrapper",className:"add_pad"},r.a.createElement("h1",null,o.title),r.a.createElement(N.a,{name:"star_rating",editing:!1,renderStarIcon:function(){return r.a.createElement("span",null,"\u2605")},starCount:5,value:o.vote_average/2,emptyStarColor:"rgb(238 238 238 / 60%)"}),r.a.createElement("p",null,o.overview),r.a.createElement("br",null),r.a.createElement("small",null,"Release date: ",o.release_date),r.a.createElement("br",null)))),r.a.createElement("div",{id:"header_background",style:{backgroundImage:"url(https://image.tmdb.org/t/p/w780/".concat(o.backdrop_path,")")}})),r.a.createElement("main",{id:"mobile_content",className:"add_pad"},r.a.createElement("h1",null,o.title),r.a.createElement(N.a,{name:"star_rating",editing:!1,renderStarIcon:function(){return r.a.createElement("span",null,"\u2605")},starCount:5,value:o.vote_average/2,emptyStarColor:"rgb(238 238 238 / 60%)"}),r.a.createElement("p",null,o.overview),r.a.createElement("br",null),r.a.createElement("small",null,"Release date: ",o.release_date),r.a.createElement("br",null)),r.a.createElement("div",{className:"add_pad"},r.a.createElement(E,{title:"Recommended movies",media_form:"movie",url:"https://api.themoviedb.org/3/movie/".concat(t.params.id,"/recommendations?api_key=").concat(a,"&language=en-US&page=1")})))},x=(a(64),a(18));var T=function(e){var t=e.match,a="601afad9072abecf3270711c574913eb";Object(n.useEffect)((function(){m()}),[]);var c=Object(n.useState)({}),l=Object(O.a)(c,2),o=l[0],i=l[1],m=function(){var e=Object(j.a)(k.a.mark((function e(){var n,r;return k.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,x("https://api.themoviedb.org/3/tv/".concat(t.params.id,"?api_key=").concat(a,"&language=en-US"));case 2:return n=e.sent,e.next=5,n.json();case 5:r=e.sent,i(r);case 7:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return 0!==Object.entries(o).length&&(document.getElementById("Tv").style.opacity="1"),r.a.createElement("div",{id:"Tv",className:"load"},r.a.createElement("header",null,r.a.createElement("div",{id:"header_container"},console.log(o),r.a.createElement("div",{id:"poster"},r.a.createElement("img",{src:"https://image.tmdb.org/t/p/w185/".concat(o.poster_path),alt:o.name})),r.a.createElement("div",{id:"header_content"},r.a.createElement("main",{id:"header_content_wrapper",className:"add_pad"},r.a.createElement("h1",null,o.name),r.a.createElement(N.a,{name:"star_rating",editing:!1,renderStarIcon:function(){return r.a.createElement("span",null,"\u2605")},starCount:5,value:o.vote_average/2,emptyStarColor:"rgb(238 238 238 / 60%)"}),r.a.createElement("p",null,o.overview),r.a.createElement("br",null),r.a.createElement("small",null,"Runtime: ","".concat(o.first_air_date," - ").concat(o.last_air_date)),r.a.createElement("br",null)))),r.a.createElement("div",{id:"header_background",style:{backgroundImage:"url(https://image.tmdb.org/t/p/w780/".concat(o.backdrop_path,")")}})),r.a.createElement("main",{id:"mobile_content",className:"add_pad"},r.a.createElement("h1",null,o.name),r.a.createElement(N.a,{name:"star_rating",editing:!1,renderStarIcon:function(){return r.a.createElement("span",null,"\u2605")},starCount:5,value:o.vote_average/2,emptyStarColor:"rgb(238 238 238 / 60%)"}),r.a.createElement("p",null,o.overview),r.a.createElement("br",null),r.a.createElement("small",null,"Runtime: ","".concat(o.first_air_date," - ").concat(o.last_air_date)),r.a.createElement("br",null)),r.a.createElement("div",{className:"add_pad"},r.a.createElement(E,{title:"Recommended shows",media_form:"tv",url:"https://api.themoviedb.org/3/tv/".concat(t.params.id,"/recommendations?api_key=").concat(a,"&language=en-US&page=1")})))},U=(a(65),a(18));var q=function(e){var t=e.match;Object(n.useEffect)((function(){i()}),[]);var a=Object(n.useState)({}),c=Object(O.a)(a,2),l=c[0],o=c[1],i=function(){var e=Object(j.a)(k.a.mark((function e(){var a,n;return k.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,U("https://api.themoviedb.org/3/search/multi?api_key=".concat("601afad9072abecf3270711c574913eb","&language=en-US&query=").concat(t.params.query,"&page=1&include_adult=false"));case 2:return a=e.sent,e.next=5,a.json();case 5:n=e.sent,o(n);case 7:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return 0!==Object.entries(l).length&&0!==l.results.length&&(document.getElementById("Search").style.opacity="1"),0!==Object.entries(l).length&&0!==l.results.length?r.a.createElement("div",{id:"Search",className:"load"},r.a.createElement("main",{className:"add_pad"},r.a.createElement("h1",null,"Results for: ",t.params.query),l.results.map((function(e){if("person"!==e.media_type)return r.a.createElement("div",{className:"media_container"},r.a.createElement("a",{href:"movie"===e.media_type?"../screentime/#/movie/".concat(e.id):"tv"===e.media_type?"../screentime/#/tv/".concat(e.id):null},r.a.createElement("div",{className:"media_wrapper",style:{backgroundImage:"linear-gradient(to bottom, rgba(0, 0, 0, 0) 50%, rgb(20, 20, 20, 0.8) 100%), url(https://image.tmdb.org/t/p/w342/".concat(e.poster_path,")")},key:e.id},r.a.createElement("p",{className:"media_title"},"movie"===e.media_type?e.title:"tv"===e.media_type?e.name:null))))})))):r.a.createElement("div",{id:"Search",className:"load"})},R=(a(66),function(e){Object(u.a)(a,e);var t=Object(d.a)(a);function a(){return Object(m.a)(this,a),t.apply(this,arguments)}return Object(s.a)(a,[{key:"render",value:function(){return r.a.createElement("div",{id:"About"},r.a.createElement("h1",null,"Hello ",r.a.createElement("span",null,"\ud83d\ude4b\u200d\u2642\ufe0f")),r.a.createElement("p",null,"Welcome to my site. This an update from an older project. I improved a couple of things and redone the design. This site is made with React and it's my first ever React site."),r.a.createElement("br",null),r.a.createElement("p",null,"If you want to have a look at my older version made with HTML, CSS, PHP and JavaScript click here: ",r.a.createElement("a",{target:"_blank",href:"http://dylanwe.com/webroot/screentime/index.php"},"Older version.")))}}]),a}(r.a.Component)),M=(a(67),function(e){Object(u.a)(a,e);var t=Object(d.a)(a);function a(){return Object(m.a)(this,a),t.apply(this,arguments)}return Object(s.a)(a,[{key:"render",value:function(){return r.a.createElement("footer",{id:"Footer"},r.a.createElement("h2",null,"Made by: Dylan Weijgertze"))}}]),a}(r.a.Component));Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));l.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(o.a,null,r.a.createElement(v,null),r.a.createElement(i.c,null,r.a.createElement(i.a,{path:"/",exact:!0,component:y}),r.a.createElement(i.a,{path:"/about",component:R}),r.a.createElement(i.a,{path:"/movie/:id",component:I}),r.a.createElement(i.a,{path:"/tv/:id",component:T}),r.a.createElement(i.a,{path:"/search/:query",exact:!0,component:q})),r.a.createElement(M,null))),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[30,1,2]]]);
//# sourceMappingURL=main.3086518b.chunk.js.map