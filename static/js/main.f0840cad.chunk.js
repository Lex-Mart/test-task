(this.webpackJsonptest=this.webpackJsonptest||[]).push([[0],{51:function(e,t,n){},81:function(e,t,n){"use strict";n.r(t);var c=n(1),r=n(0),s=n.n(r),a=n(18),i=n(13),o=n(8),u=n(39),l=(n(51),n(12)),d=n(3),j=n(9),b=n(11),O=n.n(b),f=n(16),h="ADD_CATEGORIES",p="ADD_NEWS",v="UPDATE_PAGE_INFO",m="ADD_DETAILS",x=n(40),g=n.n(x),w=function(){var e=Object(f.a)(O.a.mark((function e(t,n){return O.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,g.a.get(t);case 2:return e.t0=n,e.abrupt("return",e.sent.data[e.t0]);case 4:case"end":return e.stop()}}),e)})));return function(t,n){return e.apply(this,arguments)}}(),E=function(e){return function(){var t=Object(f.a)(O.a.mark((function t(n,c){var r,s,a,i,o,u,l;return O.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(a=c(),i=null===(r=a.news.currentPages[e])||void 0===r?void 0:r.currentPage,o=(i=void 0===i?-1:i)+1,(null===(s=a.news.currentPages[e])||void 0===s?void 0:s.isLastPage)||!1){t.next=11;break}return u="https://testtask.sebbia.com/v1/news/categories/".concat(e,"/news?page=").concat(o),t.next=9,w(u,"list");case 9:(l=t.sent).length?(n(y(o,e,!l.length)),n({type:p,news:l.map((function(t){return Object(j.a)(Object(j.a)({},t),{},{categoryId:e})}))})):n(y(i,e,!l.length));case 11:case"end":return t.stop()}}),t)})));return function(e,n){return t.apply(this,arguments)}}()},y=function(e,t,n){return{type:v,pageInfo:{currentPage:e,categoryId:t,isLastPage:n}}},D=function(e){return Object(c.jsx)(l.b,{to:{pathname:"/".concat(e.newsId,"/news")},className:"collection-item",children:e.name})},_=function(e){return Object(c.jsxs)("header",{children:[Object(c.jsx)("h1",{children:e.title}),Object(c.jsx)("hr",{})]})},I=function(){var e=Object(o.b)(),t=Object(o.c)((function(e){return e.categories}));return Object(r.useEffect)((function(){t.length||e(function(){var e=Object(f.a)(O.a.mark((function e(t){var n;return O.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,w("https://testtask.sebbia.com/v1/news/categories","list");case 2:n=e.sent,t({type:h,categories:n});case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}())}),[t.length,e]),Object(c.jsxs)(c.Fragment,{children:[Object(c.jsx)(_,{title:"\u0421\u043f\u0438\u0441\u043e\u043a \u043a\u0430\u0442\u0435\u0433\u043e\u0440\u0438\u0439"}),Object(c.jsx)("div",{className:"collection",children:t.map((function(e){var t=e.name,n=e.id;return Object(c.jsx)(D,{name:t,newsId:n},n)}))})]})},k=function(e){return Object(c.jsx)("div",{className:"card darken-1",children:Object(c.jsxs)("div",{className:"card-content black-text",children:[Object(c.jsx)(l.b,{to:{pathname:"/details/".concat(e.descr.id)},children:Object(c.jsx)("span",{className:"card-title blue-text",children:e.descr.title})}),Object(c.jsx)("span",{className:"grey-text",children:function(e){var t=new Date(e);return Intl.DateTimeFormat("ru",{weekday:"long",hour:"numeric",minute:"numeric",second:"numeric",day:"numeric",month:"numeric",year:"numeric"}).format(t)}(e.descr.date)}),Object(c.jsx)("hr",{}),Object(c.jsx)("p",{children:e.descr.shortDescription})]})})},N=n(41),L=n.n(N),P=function(){var e=Object(d.f)().id,t=Object(o.b)(),n=Object(o.c)((function(t){return t.news.newsList.filter((function(t){return t.categoryId===e}))})),s=Object(r.useCallback)((function(n){n.target.documentElement.scrollHeight-(n.target.documentElement.scrollTop+window.innerHeight)<200&&t(E(e))}),[e,t]);return s=L()(s,250),Object(r.useEffect)((function(){return document.addEventListener("scroll",s),function(){return document.removeEventListener("scroll",s)}}),[s]),Object(r.useEffect)((function(){n.length||t(E(e))}),[e,t,n.length]),Object(c.jsxs)(c.Fragment,{children:[Object(c.jsx)(_,{title:"\u041d\u043e\u0432\u043e\u0441\u0442\u0438"}),n.map((function(e,t){return Object(c.jsx)(k,{descr:e},t)}))]})},T=function(){var e=Object(o.b)(),t=Object(d.f)().id,n=Object(o.c)((function(e){return e.news.newsList.find((function(e){return e.id===+t}))})),s=Object(o.c)((function(e){return e.newsDetails.find((function(e){return e.id===+t}))}));return Object(r.useEffect)((function(){var n;s||e((n=t,function(){var e=Object(f.a)(O.a.mark((function e(t){var c;return O.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,w("https://testtask.sebbia.com/v1/news/details?id=".concat(n),"news");case 2:c=e.sent,t({type:m,details:c});case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()))}),[e,s,t]),Object(c.jsxs)("div",{children:[Object(c.jsx)(_,{title:(null===n||void 0===n?void 0:n.title)||(null===s||void 0===s?void 0:s.title)}),Object(c.jsx)("span",{className:"grey-text",children:(null===n||void 0===n?void 0:n.shortDescription)||(null===s||void 0===s?void 0:s.shortDescription)}),Object(c.jsx)("p",{className:"flow-text",dangerouslySetInnerHTML:{__html:null===s||void 0===s?void 0:s.fullDescription}}),void 0]})},S=function(){return Object(c.jsx)("div",{className:"container",children:Object(c.jsx)(l.a,{basename:"/test-task",children:Object(c.jsxs)(d.c,{children:[Object(c.jsx)(d.a,{exact:!0,path:"/",children:Object(c.jsx)(I,{})}),Object(c.jsx)(d.a,{path:"/:id/news",children:Object(c.jsx)(P,{})}),Object(c.jsx)(d.a,{path:"/details/:id",children:Object(c.jsx)(T,{})})]})})})},A=n(20),F=n(17),X={newsList:[],currentPages:{}},H=Object(i.c)({categories:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[],t=arguments.length>1?arguments[1]:void 0,n=t.type,c=t.categories;switch(n){case h:return Object(F.a)(c);default:return e}},news:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:X,t=arguments.length>1?arguments[1]:void 0,n=t.type,c=t.news,r=t.pageInfo;switch(n){case p:return Object(j.a)(Object(j.a)({},e),{},{newsList:[].concat(Object(F.a)(e.newsList),Object(F.a)(c))});case v:return Object(j.a)(Object(j.a)({},e),{},{currentPages:Object(j.a)(Object(j.a)({},e.currentPages),{},Object(A.a)({},r.categoryId,Object(j.a)({},r)))});default:return e}},newsDetails:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[],t=arguments.length>1?arguments[1]:void 0,n=t.type,c=t.details;switch(n){case m:return[].concat(Object(F.a)(e),[Object(j.a)({},c)]);default:return e}}}),R=Object(i.e)(H,Object(i.d)(Object(i.a)(u.a),window.__REDUX_DEVTOOLS_EXTENSION__&&window.__REDUX_DEVTOOLS_EXTENSION__())),U=Object(c.jsx)(o.a,{store:R,children:Object(c.jsx)(S,{})});Object(a.render)(Object(c.jsx)(s.a.StrictMode,{children:U}),document.getElementById("root"))}},[[81,1,2]]]);
//# sourceMappingURL=main.f0840cad.chunk.js.map