(this.webpackJsonpreact_app=this.webpackJsonpreact_app||[]).push([[0],{10:function(e,t,n){e.exports=n(18)},15:function(e,t,n){},16:function(e,t,n){},18:function(e,t,n){"use strict";n.r(t);var r=n(0),a=n.n(r),o=n(7),c=n.n(o),s=(n(15),n(8)),u=n(9),i=n(1),l=n(2),m=n(4),p=n(3),b=n(5),f=function(e){return a.a.createElement("nav",{className:"navbar navbar-dark bg-primary"},a.a.createElement("a",{className:"navbar-brand",href:"#"},"Miami City College courses",a.a.createElement("br",null),"Total of Enrollments:",a.a.createElement("span",{className:"badge badge-success"},e.totalItems)))},d=function(e){function t(){return Object(i.a)(this,t),Object(m.a)(this,Object(p.a)(t).apply(this,arguments))}return Object(b.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){var e=this;return a.a.createElement("div",{class:"container-fluid",style:{marginTop:30,marginBottom:20}},a.a.createElement("h6",{style:{fontWeight:"bold"}},this.props.counter.name),a.a.createElement("span",{className:this.setBadgeClasses()},this.formatCt()),a.a.createElement("button",{onClick:function(){return e.props.onIncrement(e.props.counter)},className:"btn btn-success btn-sm"},"Add Enrollment"),a.a.createElement("button",{onClick:function(){return e.props.onDelete(e.props.counter.id)},className:"btn btn-warning btn-sm m-3"},"Cancel Event"))}},{key:"setBadgeClasses",value:function(){var e="badge m-3 ";return e+=0===this.props.counter.value?"badge-danger":"badge-success"}},{key:"formatCt",value:function(){var e=this.props.counter.value;return 0===e?"Zero":e}}]),t}(r.Component),h=function(e){function t(){return Object(i.a)(this,t),Object(m.a)(this,Object(p.a)(t).apply(this,arguments))}return Object(b.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){var e=this;return a.a.createElement("div",null,this.props.counters.map((function(t){return a.a.createElement(d,{key:t.id,counter:t,onDelete:e.props.onDelete,onIncrement:e.props.onIncrement})})),a.a.createElement("button",{className:"btn btn-primary btn-sm m-3",onClick:this.props.onClearCounters},"Clear Counters"))}}]),t}(r.Component);n(16);function v(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}var O=function(e){function t(){var e,n;Object(i.a)(this,t);for(var r=arguments.length,a=new Array(r),o=0;o<r;o++)a[o]=arguments[o];return(n=Object(m.a)(this,(e=Object(p.a)(t)).call.apply(e,[this].concat(a)))).state={counters:[{id:1,value:0,name:"React JS vs Angular"},{id:2,value:0,name:"ASP.NET Core or Node JS"},{id:3,value:0,name:"Lifecycle of React JS Components"},{id:4,value:0,name:"Comparing JavaScript Libraries/Frameworks"}]},n.handleAddButton=function(e){var t=Object(u.a)(n.state.counters),r=t.indexOf(e);t[r]=function(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?v(n,!0).forEach((function(t){Object(s.a)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):v(n).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}({},e),t[r].value++,n.setState({counters:t})},n.handleDeleteButton=function(e){var t=n.state.counters.filter((function(t){return t.id!==e}));n.setState({counters:t})},n.handleClearCounters=function(){var e=n.state.counters.map((function(e){return e.value=0,e}));n.setState({counters:e})},n}return Object(b.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){return a.a.createElement(a.a.Fragment,null,a.a.createElement(f,{totalItems:this.state.counters.map((function(e){return e.value})).reduce((function(e,t){return e+t}))}),a.a.createElement("main",{className:"container"},a.a.createElement(h,{counters:this.state.counters,onClearCounters:this.handleClearCounters,onDelete:this.handleDeleteButton,onIncrement:this.handleAddButton})))}}]),t}(r.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));n(17);c.a.render(a.a.createElement(O,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))}},[[10,1,2]]]);
//# sourceMappingURL=main.6c11e472.chunk.js.map