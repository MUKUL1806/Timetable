(this.webpackJsonptimetable=this.webpackJsonptimetable||[]).push([[0],{52:function(e,t,a){},53:function(e,t,a){},74:function(e,t,a){"use strict";a.r(t);var n=a(2),c=a(0),i=a.n(c),l=a(16),s=a.n(l),r=(a(52),a(53),a(90)),j=a(91),o=a(22),h=a(23),b=a(29),d=a(28),u=a(88),O=["Sunday","Monday","Wednesday","Thrusday","Friday","Saturday","Sunday"],M=function(e){Object(b.a)(a,e);var t=Object(d.a)(a);function a(e){var n;return Object(o.a)(this,a),(n=t.call(this,e)).state={date:new Date},n}return Object(h.a)(a,[{key:"componentDidMount",value:function(){var e=this;this.timer=setInterval((function(){return e.setState({date:new Date})}),1e3)}},{key:"componentWillUnmount",value:function(){clearInterval(this.timer)}},{key:"render",value:function(){return Object(n.jsxs)(u.a,{variant:"h6",align:"right",children:[this.state.date.toLocaleTimeString(),"\xa0",O[this.state.date.getDay()-1]]})}}]),a}(c.Component);function v(){return Object(n.jsx)("div",{children:Object(n.jsx)(r.a,{style:{height:"50px",weidth:"50px"},position:"static",children:Object(n.jsxs)(j.a,{children:[Object(n.jsx)("h2",{children:"Time table"}),Object(n.jsx)("span",{style:{paddingLeft:"1.2rem"},children:Object(n.jsx)(M,{})})]})})})}var x=a(13),g=a(17),m=a(92),p=a(94),P=a(98),C=a(97),A=a(93),y=a(95),f=a(96),S=a(75),D=Object(m.a)({table:{minWidth:650}});function T(e,t,a,n){return{subject:e,teacher:t,timing:a,link:n}}var E=[],k="Antenna & Wave Propagation",I="R.P.Yadav",L="#",w="Computer Architecture",B="Rakesh Bairathi",R="#",W="Wireless & Mobile Communication",N="ILA Sharma",F="#",V="Control System Engineering",G="Chitrakant Sahu",H="#",K="Embedded Systems",U="Lava Bhargava",J="#",Y="Analog Cmos IC",z="D.Boolchandani",Q="#";function q(){var e=D(),t=Object(c.useState)((new Date).getDay()),a=Object(g.a)(t,2),i=a[0],l=a[1];return setInterval((function(){l((new Date).getDay())}),1e3),1===i?E=[T(W,N,"9-9.45AM",F),T(w,B,"10-10.45AM",R),T(k,I,"11-11.45PM",L),T(Y,z,"12-12.45PM",Q)]:2===i?E=[T(w,B,"9-9.45AM",R),T(W,N,"10-10.45AM",F),T(V,G,"11-11.45PM",H),T(K,U,"12-12.45PM",J)]:3===i?E=[T(V,G,"9-9.45AM",H),T(w,B,"10-10.45AM",R),T(k,I,"11-11.45PM",L),T(Y,z,"12-12.45PM",Q)]:4===i?E=[T(k,I,"9-9.45AM",L),T(W,N,"10-10.45AM",F),T(V,G,"11-11.45PM",H),T(K,U,"12-12.45PM",J)]:5===i?E=[T(K,U,"9-9.45AM",J),T(w,B,"10-10.45AM",R),T(k,I,"11-11.45PM",L),T(Y,z,"12-12.45PM",Q)]:6===i?E=[T(Y,z,"9-9.45AM",Q),T(W,N,"10-10.45AM",F),T(V,G,"11-11.45PM",H),T(K,U,"12-12.45PM",J)]:T("Today is holisay so enjoy"),Object(n.jsx)(A.a,{component:S.a,children:Object(n.jsxs)(p.a,{className:e.table,"aria-label":"simple table",children:[Object(n.jsx)(y.a,{children:Object(n.jsxs)(f.a,{children:[Object(n.jsx)(C.a,{children:"Subject"}),Object(n.jsx)(C.a,{children:"Teacher"}),Object(n.jsx)(C.a,{children:"Timing\xa0"}),Object(n.jsx)(C.a,{children:"Links\xa0"})]})}),Object(n.jsx)(P.a,{children:E.map((function(e){return Object(n.jsxs)(f.a,{children:[Object(n.jsx)(C.a,{component:"th",scope:"row",children:e.subject}),Object(n.jsx)(C.a,{children:e.teacher}),Object(n.jsx)(C.a,{children:e.timing}),Object(n.jsx)(C.a,{children:e.link})]},e.name)}))})]})})}var X=Object(m.a)({table:{minWidth:650}});function Z(e,t,a,n){return{subject:e,teacher:t,timing:a,link:n}}var $=[],_="EDC",ee="AKV",te="#",ae="MCTDT",ne="VPS",ce="#",ie="DSP",le="HM",se="#",re="OCPS",je="KV",oe="#",he="PSRDE",be="RB",de="#";function ue(){var e=X(),t=Object(c.useState)((new Date).getDay()),a=Object(g.a)(t,2),i=a[0],l=a[1];return setInterval((function(){l((new Date).getDay())}),1e3),1===i?$=[Z(_,ee,"10-10.45AM",te),Z(ae,ne,"11-11.45PM",ce),Z(ie,le,"12-12.45PM",se)]:2===i?$=[Z(_,ee,"9-9.45AM",te),Z(re,je,"11-11.45PM",oe),Z(he,be,"12-12.45PM",de)]:3===i?$=[Z(re,je,"9-9.45AM",oe),Z(_,ee,"10-10.45AM",te),Z(ae,ne,"11-11.45PM",ce),Z(ie,le,"12-12.45PM",se)]:4===i?$=[Z(ae,ne,"9-9.45AM",ce),Z(re,je,"11-11.45PM",oe),Z(he,be,"12-12.45PM",de)]:5===i?$=[Z(he,be,"9-9.45AM",de),Z(_,ee,"10-10.45AM",te),Z(ae,ne,"11-11.45PM",ce),Z(ie,le,"12-12.45PM",se)]:6===i?$=[Z(ie,le,"9-9.45AM",se),Z(re,je,"11-11.45PM",oe),Z(he,be,"12-12.45PM",de)]:Z("Today is holisay so enjoy"),Object(n.jsx)(A.a,{component:S.a,children:Object(n.jsxs)(p.a,{className:e.table,"aria-label":"simple table",children:[Object(n.jsx)(y.a,{children:Object(n.jsxs)(f.a,{children:[Object(n.jsx)(C.a,{children:"Subject"}),Object(n.jsx)(C.a,{children:"Teacher"}),Object(n.jsx)(C.a,{children:"Timing\xa0"}),Object(n.jsx)(C.a,{children:"Links\xa0"})]})}),Object(n.jsx)(P.a,{children:$.map((function(e){return Object(n.jsxs)(f.a,{children:[Object(n.jsx)(C.a,{component:"th",scope:"row",children:e.subject}),Object(n.jsx)(C.a,{children:e.teacher}),Object(n.jsx)(C.a,{children:e.timing}),Object(n.jsx)(C.a,{children:e.link})]},e.name)}))})]})})}var Oe=Object(m.a)({table:{minWidth:650}});function Me(e,t,a,n){return{subject:e,teacher:t,timing:a,link:n}}var ve=[],xe="Optimization Methods in Engg. Design",ge="Gulab Pamnani",me="#",pe="Total Quality Management",Pe="GS Dangayach",Ce="#",Ae="Mechanical Vibrations",ye="TC Gupta",fe="#",Se="Computer Integrated Manufacturing",De="APC",Te="#",Ee="Refrigeration and Air Conditioning",ke="Manish Kumar",Ie="#",Le="Advanced Manufacturing",we="Harlal Singh Mali",Be="#",Re="Product Design & Development",We="Amit Singh",Ne="#";function Fe(){var e=Oe(),t=Object(c.useState)((new Date).getDay()),a=Object(g.a)(t,2),i=a[0],l=a[1];return setInterval((function(){l((new Date).getDay())}),1e3),1===i?ve=[Me(Se,De,"9-9.45AM",Te),Me(xe,ge,"10-10.45AM",me),Me(pe,Pe,"11-11.45PM",Ce),Me(Ae,ye,"12-12.45PM",fe),Me(Re,We,"1-1.45PM",Ne)]:2===i?ve=[Me(xe,ge,"9-9.45AM",me),Me(Se,De,"10-10.45AM",Te),Me(Ee,ke,"11-11.45PM",Ie),Me(Le,we,"12-12.45PM",Be),Me(Re,We,"1-1.45PM",Ne)]:3===i?ve=[Me(Ee,ke,"9-9.45AM",Ie),Me(xe,ge,"10-10.45AM",me),Me(pe,Pe,"11-11.45PM",Ce),Me(Ae,ye,"12-12.45PM",fe),Me(Re,We,"1-1.45PM",Ne)]:4===i?ve=[Me(pe,Pe,"9-9.45AM",Ce),Me(Se,De,"10-10.45AM",Te),Me(Ee,ke,"11-11.45PM",Ie),Me(Le,we,"12-12.45PM",Be)]:5===i?ve=[Me(Le,we,"9-9.45AM",Be),Me(xe,ge,"10-10.45AM",me),Me(pe,Pe,"11-11.45PM",Ce),Me(Ae,ye,"12-12.45PM",fe),Me(Re,We,"1-1.45PM",Ne)]:6===i?ve=[Me(Ae,ye,"9-9.45AM",fe),Me(Se,De,"10-10.45AM",Te),Me(Ee,ke,"11-11.45PM",Ie),Me(Le,we,"12-12.45PM",Be)]:Me("Today is holisay so enjoy"),Object(n.jsx)(A.a,{component:S.a,children:Object(n.jsxs)(p.a,{className:e.table,"aria-label":"simple table",children:[Object(n.jsx)(y.a,{children:Object(n.jsxs)(f.a,{children:[Object(n.jsx)(C.a,{children:"Subject"}),Object(n.jsx)(C.a,{children:"Teacher"}),Object(n.jsx)(C.a,{children:"Timing\xa0"}),Object(n.jsx)(C.a,{children:"Links\xa0"})]})}),Object(n.jsx)(P.a,{children:ve.map((function(e){return Object(n.jsxs)(f.a,{children:[Object(n.jsx)(C.a,{component:"th",scope:"row",children:e.subject}),Object(n.jsx)(C.a,{children:e.teacher}),Object(n.jsx)(C.a,{children:e.timing}),Object(n.jsx)(C.a,{children:e.link})]},e.name)}))})]})})}var Ve=[{value:"Cse",label:"COMPUTER SCIENCE"},{value:"Ece",label:"ELECTRONICS & COMM."},{value:"Ele",label:"ELECTRICAL"},{value:"Mec",label:"MECHANICAL"},{value:"Civ",label:"CIVIL"},{value:"Che",label:"CHEMICAL"},{value:"Met",label:"METALLURGY"}],Ge=function(e){Object(b.a)(a,e);var t=Object(d.a)(a);function a(){var e;Object(o.a)(this,a);for(var n=arguments.length,c=new Array(n),i=0;i<n;i++)c[i]=arguments[i];return(e=t.call.apply(t,[this].concat(c))).state={selectedOption:null},e.handleChange=function(t){e.setState({selectedOption:t}),console.log("Option selected:",t.value)},e}return Object(h.a)(a,[{key:"render",value:function(){var e=this.state.selectedOption;return e?"Cse"===e.value?(console.log(e.value),Object(n.jsxs)("div",{children:[Object(n.jsx)(x.a,{value:e,onChange:this.handleChange,options:Ve,placeholder:"--Select Branch--"}),";"]})):"Ece"===e.value?(console.log(e.value),Object(n.jsxs)("div",{children:[Object(n.jsx)(x.a,{value:e,onChange:this.handleChange,options:Ve,placeholder:"--Select Branch--"}),";",Object(n.jsx)(q,{})]})):"Ele"===e.value?(console.log(e.value),Object(n.jsxs)("div",{children:[Object(n.jsx)(x.a,{value:e,onChange:this.handleChange,options:Ve,placeholder:"--Select Branch--"}),";",Object(n.jsx)(ue,{})]})):"Mec"===e.value?(console.log(e.value),Object(n.jsxs)("div",{children:[Object(n.jsx)(x.a,{value:e,onChange:this.handleChange,options:Ve,placeholder:"--Select Branch--"}),";",Object(n.jsx)(Fe,{})]})):"Civ"===e.value||"Che"===e.value||"Met"===e.value?(console.log(e.value),Object(n.jsxs)("div",{children:[Object(n.jsx)(x.a,{value:e,onChange:this.handleChange,options:Ve,placeholder:"--Select Branch--"}),";"]})):void 0:Object(n.jsx)(x.a,{value:e,onChange:this.handleChange,options:Ve,placeholder:"--Select Branch--"})}}]),a}(i.a.Component);var He=function(){return Object(n.jsxs)("div",{children:[Object(n.jsx)(v,{}),Object(n.jsx)("br",{}),Object(n.jsx)("br",{}),Object(n.jsx)(Ge,{})]})},Ke=function(e){e&&e instanceof Function&&a.e(3).then(a.bind(null,100)).then((function(t){var a=t.getCLS,n=t.getFID,c=t.getFCP,i=t.getLCP,l=t.getTTFB;a(e),n(e),c(e),i(e),l(e)}))};s.a.render(Object(n.jsx)(i.a.StrictMode,{children:Object(n.jsx)(He,{})}),document.getElementById("root")),Ke()}},[[74,1,2]]]);
//# sourceMappingURL=main.0b596309.chunk.js.map