(this.webpackJsonpconfusion=this.webpackJsonpconfusion||[]).push([[0],{30:function(e,t,a){e.exports=a(52)},52:function(e,t,a){"use strict";a.r(t);var n=a(1),l=a.n(n),r=a(9),c=a.n(r),o=a(12),u=a(6),i=(a(10),a(4));var m=function(e){var t=l.a.useState(!1),a=Object(u.a)(t,2),n=a[0],r=a[1],c=l.a.useState(e.title),o=Object(u.a)(c,2),m=o[0],E=o[1],s=function(){E(e.title),r(!n)};return l.a.createElement(l.a.Fragment,null,l.a.createElement(i.s,null,l.a.createElement(i.b,null,l.a.createElement(i.q,null,l.a.createElement(i.t,{"data-placement":"bottom",title:"Title"},e.title),l.a.createElement(i.a,{color:"light",onClick:s},"Edit Title")),l.a.createElement(i.q,null,l.a.createElement(i.r,null,l.a.createElement(i.a,null,"Save Project")),l.a.createElement(i.r,null,l.a.createElement(i.a,{color:"primary"},"+ Upload CSV"))),l.a.createElement(i.m,{isOpen:n,toggle:s},l.a.createElement(i.p,null,"Edit Project Title"),l.a.createElement(i.n,null,l.a.createElement(i.i,{value:m,onInput:function(e){return E(e.target.value)}})),l.a.createElement(i.o,null,l.a.createElement(i.a,{color:"primary",onClick:function(){r(!1),e.setTitle(m)}},"Update"),l.a.createElement(i.a,{onClick:s},"Cancel"))))),l.a.createElement(i.s,null,l.a.createElement(i.b,null,l.a.createElement("div",{className:"w-50"},l.a.createElement(i.g,null,l.a.createElement(i.h,null,l.a.createElement(i.l,{hidden:e.description.length<=120},"WARNING: Too many characters."),l.a.createElement(i.l,{hidden:e.description.length>120},"Description (",Math.max(0,120-e.description.length)," characters left)."),l.a.createElement(i.i,{type:"textarea",value:e.description,onInput:function(t){return e.setDescription(t.target.value)}})))))))};var E=function(e){var t=l.a.useState(!1),a=Object(u.a)(t,2),n=a[0],r=a[1],c=function(t){e.setGraphType(t)};return l.a.createElement(l.a.Fragment,null,l.a.createElement("div",null,l.a.createElement("script",{type:"text/javascript"},'props.setGraphType("None selected");'),l.a.createElement(i.b,null,l.a.createElement(i.c,{toggle:function(){r(!n)},isOpen:n},l.a.createElement(i.f,{caret:!0},"Graph Type: ",e.graphType),l.a.createElement(i.e,{container:"body"},l.a.createElement(i.d,{onClick:function(){return c("Bar Graph")}},"Bar Graph"),l.a.createElement(i.d,{onClick:function(){return c("Line Graph")}},"Line Graph"),l.a.createElement(i.d,{onClick:function(){return c("Scatterplot")}},"Scatterplot"),l.a.createElement(i.d,{onClick:function(){return c("Boxplot")}},"Boxplot"),l.a.createElement(i.d,{onClick:function(){return c("Histogram")}},"Histogram"))))),l.a.createElement("br",null))};var s=function(e){var t=l.a.useState(!1),a=Object(u.a)(t,2),n=a[0],r=a[1],c=function(t){e.setGraphColor(t)};return l.a.createElement(l.a.Fragment,null,l.a.createElement("div",null,l.a.createElement("script",{type:"text/javascript"},'props.setGraphColor("None selected");'),l.a.createElement(i.b,null,l.a.createElement(i.c,{toggle:function(){r(!n)},isOpen:n},l.a.createElement(i.f,{caret:!0},"Graph Color: ",e.graphColor),l.a.createElement(i.e,{container:"body"},l.a.createElement(i.d,{onClick:function(){return c("Red")}},"Red"),l.a.createElement(i.d,{onClick:function(){return c("Green")}},"Green"),l.a.createElement(i.d,{onClick:function(){return c("Blue")}},"Blue"),l.a.createElement(i.d,{onClick:function(){return c("Yellow")}},"Yellow"))))),l.a.createElement("br",null))};var p=function(e){var t=l.a.useState(!1),a=Object(u.a)(t,2),n=a[0],r=a[1],c=l.a.useState(!1),o=Object(u.a)(c,2),m=o[0],E=o[1];return l.a.createElement(i.b,null,l.a.createElement(i.j,null,l.a.createElement(i.i,{onInput:function(e){return r(e.target.value)},placeholder:"input name of X axis here"}),l.a.createElement(i.a,{onClick:function(){e.setXLabel(n)}},"Enter")),l.a.createElement("br",null),l.a.createElement(i.j,null,l.a.createElement(i.i,{onInput:function(e){return E(e.target.value)},placeholder:"input name of Y axis here"}),l.a.createElement(i.a,{onClick:function(){e.setYLabel(m)}},"Enter")),l.a.createElement("br",null))};var d=function(e){return l.a.createElement(i.b,null,l.a.createElement(i.j,null,l.a.createElement(i.k,null,"Legend Desired?"),l.a.createElement(i.i,{type:"checkbox",addon:!0,onChange:function(t){return e.setLegend(t.target.checked)}})),l.a.createElement("br",null))};var f=function(){var e=l.a.useState("None selected"),t=Object(u.a)(e,2),a=t[0],n=t[1],r=l.a.useState("Blue"),c=Object(u.a)(r,2),o=c[0],i=c[1],f=l.a.useState("Project title"),b=Object(u.a)(f,2),h=b[0],g=b[1],v=l.a.useState(""),C=Object(u.a)(v,2),j=C[0],k=C[1],y=l.a.useState(!1),S=Object(u.a)(y,2),O=S[0],G=S[1],x=l.a.useState(!1),T=Object(u.a)(x,2),L=T[0],N=T[1],B=l.a.useState(!1),w=Object(u.a)(B,2),F=w[0],I=w[1];return l.a.createElement(l.a.Fragment,null,l.a.createElement(m,{title:h,setTitle:g,description:j,setDescription:k}),l.a.createElement(E,{graphType:a,setGraphType:n}),l.a.createElement(s,{graphColor:o,setGraphColor:i}),l.a.createElement(p,{xLabel:O,setXLabel:G,yLabel:L,setYLabel:N}),l.a.createElement(d,{legend:F,setLegend:I}))};var b=function(){return l.a.createElement("footer",{className:"footer footer-black footer-white"},l.a.createElement(i.b,null,l.a.createElement(i.u,null,l.a.createElement("div",{className:"credits ml-auto"},l.a.createElement("span",{className:"copyright"},"\xa9 ",(new Date).getFullYear()," MeltingPlot")))))};var h=function(){return l.a.createElement(l.a.Fragment,null,l.a.createElement(f,null),l.a.createElement(b,null))};c.a.render(l.a.createElement(o.a,null,l.a.createElement(o.d,null,l.a.createElement(o.c,{path:"/index",render:function(e){return l.a.createElement(h,e)}}),l.a.createElement(o.b,{to:"/index"}))),document.getElementById("root"))}},[[30,1,2]]]);
//# sourceMappingURL=main.50b8a911.chunk.js.map