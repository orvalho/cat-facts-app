(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{29:function(t,e,n){t.exports=n(58)},38:function(t,e,n){},39:function(t,e,n){},57:function(t,e,n){},58:function(t,e,n){"use strict";n.r(e);var a=n(0),c=n.n(a),r=n(6),o=n.n(r),u=n(5),i=n(3),s=n(28),l=n(27),f=Object(i.c)({facts:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[],e=arguments.length>1?arguments[1]:void 0;switch(e.type){case"fetch_facts":var n=e.payload.data.map(function(t){return{text:t.text,_id:t._id}});return Object(l.a)(n);default:return t}}}),p=window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__||i.d,h=Object(i.e)(f,p(Object(i.a)(function(t){var e=t.dispatch;return function(t){return function(n){if(!n.payload||!n.payload.then)return t(n);n.payload.then(function(t){return e(Object(s.a)({},n,{payload:t}))})}}}))),d=(n(38),n(7)),m=n(8),b=n(10),O=n(9),y=n(11),j=(n(39),n(26)),v=n.n(j),E=function(t){function e(){var t,n;Object(d.a)(this,e);for(var a=arguments.length,c=new Array(a),r=0;r<a;r++)c[r]=arguments[r];return(n=Object(b.a)(this,(t=Object(O.a)(e)).call.apply(t,[this].concat(c)))).state={buttonText:"show me some facts about cats"},n.handleClick=function(){n.props.fetchFacts(),n.state.buttonText.includes("more")||n.setState({buttonText:"show me some more facts about cats"})},n}return Object(y.a)(e,t),Object(m.a)(e,[{key:"render",value:function(){return c.a.createElement("button",{className:"get-facts-button ui olive button",onClick:this.handleClick},this.state.buttonText)}}]),e}(a.Component),w=Object(u.b)(null,{fetchFacts:function(){return{type:"fetch_facts",payload:v.a.get("https://cors-anywhere.herokuapp.com/https://cat-fact.herokuapp.com/facts/random?animal_type=cat&amount=3")}}})(E),_=(n(57),function(t){function e(){var t,n;Object(d.a)(this,e);for(var a=arguments.length,r=new Array(a),o=0;o<a;o++)r[o]=arguments[o];return(n=Object(b.a)(this,(t=Object(O.a)(e)).call.apply(t,[this].concat(r)))).renderList=function(){return n.props.facts.map(function(t){return c.a.createElement("li",{className:"ui message",key:t._id},t.text)})},n}return Object(y.a)(e,t),Object(m.a)(e,[{key:"render",value:function(){return c.a.createElement("div",{className:"facts-list ui list"},c.a.createElement("ul",null,this.renderList()))}}]),e}(a.Component)),k=Object(u.b)(function(t){return{facts:t.facts}})(_);o.a.render(c.a.createElement(function(t){var e=t.children;return c.a.createElement(u.a,{store:h},e)},null,c.a.createElement(function(){return c.a.createElement("div",{className:"app"},c.a.createElement(w,null),c.a.createElement(k,null))},null)),document.querySelector("#root"))}},[[29,1,2]]]);
//# sourceMappingURL=main.6e2bd690.chunk.js.map