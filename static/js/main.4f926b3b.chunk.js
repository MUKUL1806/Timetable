(this.webpackJsonptimetable=this.webpackJsonptimetable||[]).push([[0],{52:function(e,t,a){},53:function(e,t,a){},74:function(e,t,a){"use strict";a.r(t);var n=a(2),c=a(0),i=a.n(c),l=a(16),r=a.n(l),s=(a(52),a(53),a(90)),j=a(91),h=a(88),o=a(22),b=a(23),d=a(29),u=a(28),O=["Sunday","Monday","Wednesday","Thrusday","Friday","Saturday","Sunday"],M=function(e){Object(d.a)(a,e);var t=Object(u.a)(a);function a(e){var n;return Object(o.a)(this,a),(n=t.call(this,e)).state={date:new Date},n}return Object(b.a)(a,[{key:"componentDidMount",value:function(){var e=this;this.timer=setInterval((function(){return e.setState({date:new Date})}),1e3)}},{key:"componentWillUnmount",value:function(){clearInterval(this.timer)}},{key:"render",value:function(){return Object(n.jsxs)(h.a,{variant:"h6",align:"left",children:[this.state.date.toLocaleTimeString(),"\xa0",O[this.state.date.getDay()-1]]})}}]),a}(c.Component);function x(){return Object(n.jsx)("div",{children:Object(n.jsx)(s.a,{style:{height:"50px",weidth:"50px"},position:"static",children:Object(n.jsxs)(j.a,{children:[Object(n.jsx)(h.a,{variant:"h6",children:Object(n.jsx)("img",{style:{height:"50px",width:"50px",borderRadius:"0.5rem",marginTop:".8rem"},src:"https://upload.wikimedia.org/wikipedia/en/b/b7/Mnit_logo.png",alt:"logo"})}),Object(n.jsx)("span",{style:{paddingLeft:"1.2rem"},children:Object(n.jsx)(M,{})})]})})})}var g=a(13),v=a(17),m=a(92),p=a(94),P=a(98),C=a(97),A=a(93),f=a(95),y=a(96),S=a(75),k=Object(m.a)({table:{minWidth:650}});function D(e,t,a,n){return{subject:e,teacher:t,timing:a,link:n}}var L=[],T="Antenna & Wave Propagation",E="R.P.Yadav",w="https://meet.google.com/ikj-aohn-jbp?hs=224",I="Computer Architecture",B="Rakesh Bairathi",R="https://meet.google.com/ikj-aohn-jbp?hs=224",W="Wireless & Mobile Communication",N="ILA Sharma",F="https://meet.google.com/ikj-aohn-jbp?hs=224",V="Control System Engineering",G="Chitrakant Sahu",H="#",K="Embedded Systems",U="Lava Bhargava",J="#",Y="Analog Cmos IC",z="D.Boolchandani",Q="#";function _(){var e=k(),t=Object(c.useState)((new Date).getDay()),a=Object(v.a)(t,2),i=a[0],l=a[1];return setInterval((function(){l((new Date).getDay())}),1e3),1===i?L=[D(W,N,"9-9.45AM",F),D(I,B,"10-10.45AM",R),D(T,E,"11-11.45PM",w),D(Y,z,"12-12.45PM",Q)]:2===i?L=[D(I,B,"9-9.45AM",R),D(W,N,"10-10.45AM",F),D(V,G,"11-11.45PM",H),D(K,U,"12-12.45PM",J)]:3===i?L=[D(V,G,"9-9.45AM",H),D(I,B,"10-10.45AM",R),D(T,E,"11-11.45PM",w),D(Y,z,"12-12.45PM",Q)]:4===i?L=[D(T,E,"9-9.45AM",w),D(W,N,"10-10.45AM",F),D(V,G,"11-11.45PM",H),D(K,U,"12-12.45PM",J)]:5===i?L=[D(K,U,"9-9.45AM",J),D(I,B,"10-10.45AM",R),D(T,E,"11-11.45PM",w),D(Y,z,"12-12.45PM",Q)]:6===i?L=[D(Y,z,"9-9.45AM",Q),D(W,N,"10-10.45AM",F),D(V,G,"11-11.45PM",H),D(K,U,"12-12.45PM",J)]:D("Today is holisay so enjoy"),Object(n.jsx)(A.a,{component:S.a,children:Object(n.jsxs)(p.a,{className:e.table,"aria-label":"simple table",children:[Object(n.jsx)(f.a,{children:Object(n.jsxs)(y.a,{children:[Object(n.jsx)(C.a,{children:"Subject"}),Object(n.jsx)(C.a,{children:"Teacher"}),Object(n.jsx)(C.a,{children:"Timing\xa0"}),Object(n.jsx)(C.a,{children:"Link\xa0"})]})}),Object(n.jsx)(P.a,{children:L.map((function(e){return Object(n.jsxs)(y.a,{children:[Object(n.jsx)(C.a,{component:"th",scope:"row",children:Object(n.jsx)("a",{href:e.link,children:e.subject})}),Object(n.jsx)(C.a,{children:e.teacher}),Object(n.jsx)(C.a,{children:e.timing}),Object(n.jsx)(C.a,{children:Object(n.jsx)("a",{href:e.link,children:"Lecture Link"})})]},e.name)}))})]})})}var q=Object(m.a)({table:{minWidth:650}});function X(e,t,a,n){return{subject:e,teacher:t,timing:a,link:n}}var Z=[],$="EDC",ee="AKV",te="#",ae="MCTDT",ne="VPS",ce="#",ie="DSP",le="HM",re="#",se="OCPS",je="KV",he="#",oe="PSRDE",be="RB",de="#";function ue(){var e=q(),t=Object(c.useState)((new Date).getDay()),a=Object(v.a)(t,2),i=a[0],l=a[1];return setInterval((function(){l((new Date).getDay())}),1e3),1===i?Z=[X($,ee,"10-10.45AM",te),X(ae,ne,"11-11.45PM",ce),X(ie,le,"12-12.45PM",re)]:2===i?Z=[X($,ee,"9-9.45AM",te),X(se,je,"11-11.45PM",he),X(oe,be,"12-12.45PM",de)]:3===i?Z=[X(se,je,"9-9.45AM",he),X($,ee,"10-10.45AM",te),X(ae,ne,"11-11.45PM",ce),X(ie,le,"12-12.45PM",re)]:4===i?Z=[X(ae,ne,"9-9.45AM",ce),X(se,je,"11-11.45PM",he),X(oe,be,"12-12.45PM",de)]:5===i?Z=[X(oe,be,"9-9.45AM",de),X($,ee,"10-10.45AM",te),X(ae,ne,"11-11.45PM",ce),X(ie,le,"12-12.45PM",re)]:6===i?Z=[X(ie,le,"9-9.45AM",re),X(se,je,"11-11.45PM",he),X(oe,be,"12-12.45PM",de)]:X("Today is holisay so enjoy"),Object(n.jsx)(A.a,{component:S.a,children:Object(n.jsxs)(p.a,{className:e.table,"aria-label":"simple table",children:[Object(n.jsx)(f.a,{children:Object(n.jsxs)(y.a,{children:[Object(n.jsx)(C.a,{children:"Subject"}),Object(n.jsx)(C.a,{children:"Teacher"}),Object(n.jsx)(C.a,{children:"Timing\xa0"}),Object(n.jsx)(C.a,{children:"Links\xa0"})]})}),Object(n.jsx)(P.a,{children:Z.map((function(e){return Object(n.jsxs)(y.a,{children:[Object(n.jsx)(C.a,{component:"th",scope:"row",children:Object(n.jsx)("a",{href:e.link,children:e.subject})}),Object(n.jsx)(C.a,{children:e.teacher}),Object(n.jsx)(C.a,{children:e.timing}),Object(n.jsx)(C.a,{children:Object(n.jsx)("a",{href:e.link,children:"Lecture Link"})})]},e.name)}))})]})})}var Oe=Object(m.a)({table:{minWidth:650}});function Me(e,t,a,n){return{subject:e,teacher:t,timing:a,link:n}}var xe=[],ge="Optimization Methods in Engg. Design",ve="Gulab Pamnani",me="#",pe="Total Quality Management",Pe="GS Dangayach",Ce="#",Ae="Mechanical Vibrations",fe="TC Gupta",ye="#",Se="Computer Integrated Manufacturing",ke="APC",De="#",Le="Refrigeration and Air Conditioning",Te="Manish Kumar",Ee="#",we="Advanced Manufacturing",Ie="Harlal Singh Mali",Be="#",Re="Product Design & Development",We="Amit Singh",Ne="#";function Fe(){var e=Oe(),t=Object(c.useState)((new Date).getDay()),a=Object(v.a)(t,2),i=a[0],l=a[1];return setInterval((function(){l((new Date).getDay())}),1e3),1===i?xe=[Me(Se,ke,"9-9.45AM",De),Me(ge,ve,"10-10.45AM",me),Me(pe,Pe,"11-11.45PM",Ce),Me(Ae,fe,"12-12.45PM",ye),Me(Re,We,"1-1.45PM",Ne)]:2===i?xe=[Me(ge,ve,"9-9.45AM",me),Me(Se,ke,"10-10.45AM",De),Me(Le,Te,"11-11.45PM",Ee),Me(we,Ie,"12-12.45PM",Be),Me(Re,We,"1-1.45PM",Ne)]:3===i?xe=[Me(Le,Te,"9-9.45AM",Ee),Me(ge,ve,"10-10.45AM",me),Me(pe,Pe,"11-11.45PM",Ce),Me(Ae,fe,"12-12.45PM",ye),Me(Re,We,"1-1.45PM",Ne)]:4===i?xe=[Me(pe,Pe,"9-9.45AM",Ce),Me(Se,ke,"10-10.45AM",De),Me(Le,Te,"11-11.45PM",Ee),Me(we,Ie,"12-12.45PM",Be)]:5===i?xe=[Me(we,Ie,"9-9.45AM",Be),Me(ge,ve,"10-10.45AM",me),Me(pe,Pe,"11-11.45PM",Ce),Me(Ae,fe,"12-12.45PM",ye),Me(Re,We,"1-1.45PM",Ne)]:6===i?xe=[Me(Ae,fe,"9-9.45AM",ye),Me(Se,ke,"10-10.45AM",De),Me(Le,Te,"11-11.45PM",Ee),Me(we,Ie,"12-12.45PM",Be)]:Me("Today is holisay so enjoy"),Object(n.jsx)(A.a,{component:S.a,children:Object(n.jsxs)(p.a,{className:e.table,"aria-label":"simple table",children:[Object(n.jsx)(f.a,{children:Object(n.jsxs)(y.a,{children:[Object(n.jsx)(C.a,{children:"Subject"}),Object(n.jsx)(C.a,{children:"Teacher"}),Object(n.jsx)(C.a,{children:"Timing\xa0"}),Object(n.jsx)(C.a,{children:"Links\xa0"})]})}),Object(n.jsx)(P.a,{children:xe.map((function(e){return Object(n.jsxs)(y.a,{children:[Object(n.jsx)(C.a,{component:"th",scope:"row",children:Object(n.jsx)("a",{href:e.link,children:e.subject})}),Object(n.jsx)(C.a,{children:e.teacher}),Object(n.jsx)(C.a,{children:e.timing}),Object(n.jsx)(C.a,{children:Object(n.jsx)("a",{href:e.link,children:"Lecture link"})})]},e.name)}))})]})})}var Ve=[{value:"Cse",label:"COMPUTER SCIENCE"},{value:"Ece",label:"ELECTRONICS & COMM."},{value:"Ele",label:"ELECTRICAL"},{value:"Mec",label:"MECHANICAL"},{value:"Civ",label:"CIVIL"},{value:"Che",label:"CHEMICAL"},{value:"Met",label:"METALLURGY"}],Ge=function(e){Object(d.a)(a,e);var t=Object(u.a)(a);function a(){var e;Object(o.a)(this,a);for(var n=arguments.length,c=new Array(n),i=0;i<n;i++)c[i]=arguments[i];return(e=t.call.apply(t,[this].concat(c))).state={selectedOption:null},e.handleChange=function(t){e.setState({selectedOption:t}),console.log("Option selected:",t.value)},e}return Object(b.a)(a,[{key:"render",value:function(){var e=this.state.selectedOption;return e?"Cse"===e.value?(console.log(e.value),Object(n.jsxs)("div",{children:[Object(n.jsx)(g.a,{value:e,onChange:this.handleChange,options:Ve,placeholder:"--Select Branch--"}),";"]})):"Ece"===e.value?(console.log(e.value),Object(n.jsxs)("div",{children:[Object(n.jsx)(g.a,{value:e,onChange:this.handleChange,options:Ve,placeholder:"--Select Branch--"}),";",Object(n.jsx)(_,{})]})):"Ele"===e.value?(console.log(e.value),Object(n.jsxs)("div",{children:[Object(n.jsx)(g.a,{value:e,onChange:this.handleChange,options:Ve,placeholder:"--Select Branch--"}),";",Object(n.jsx)(ue,{})]})):"Mec"===e.value?(console.log(e.value),Object(n.jsxs)("div",{children:[Object(n.jsx)(g.a,{value:e,onChange:this.handleChange,options:Ve,placeholder:"--Select Branch--"}),";",Object(n.jsx)(Fe,{})]})):"Civ"===e.value||"Che"===e.value||"Met"===e.value?(console.log(e.value),Object(n.jsxs)("div",{children:[Object(n.jsx)(g.a,{value:e,onChange:this.handleChange,options:Ve,placeholder:"--Select Branch--"}),";"]})):void 0:Object(n.jsx)(g.a,{value:e,onChange:this.handleChange,options:Ve,placeholder:"--Select Branch--"})}}]),a}(i.a.Component);var He=function(){return Object(n.jsxs)("div",{children:[Object(n.jsx)(x,{}),Object(n.jsx)("br",{}),Object(n.jsx)("br",{}),Object(n.jsx)(Ge,{})]})},Ke=function(e){e&&e instanceof Function&&a.e(3).then(a.bind(null,100)).then((function(t){var a=t.getCLS,n=t.getFID,c=t.getFCP,i=t.getLCP,l=t.getTTFB;a(e),n(e),c(e),i(e),l(e)}))};r.a.render(Object(n.jsx)(i.a.StrictMode,{children:Object(n.jsx)(He,{})}),document.getElementById("root")),Ke()}},[[74,1,2]]]);
//# sourceMappingURL=main.4f926b3b.chunk.js.map