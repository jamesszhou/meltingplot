(this.webpackJsonpconfusion=this.webpackJsonpconfusion||[]).push([[0],{285:function(e,t,a){"use strict";a.r(t);var n=a(1),l=a.n(n),r=a(11),c=a.n(r),o=a(21),u=a(14),i=a(6),m=(a(9),a(2));var s=function(e){var t=l.a.useState(e.title),a=Object(i.a)(t,2),n=a[0],r=a[1];return l.a.createElement(l.a.Fragment,null,l.a.createElement(m.r,{isOpen:e.titleModal,toggle:e.toggleTitleModal},l.a.createElement(m.u,null,"Edit Project Title"),l.a.createElement(m.s,null,l.a.createElement(m.n,{value:n,onInput:function(e){return r(e.target.value)}})),l.a.createElement(m.t,null,l.a.createElement(m.a,{color:"primary",onClick:function(){e.toggleTitleModal(),e.setTitle(n)}},"Update"),l.a.createElement(m.a,{onClick:e.toggleTitleModal},"Cancel"))))};var E=function(e){var t=Object(n.createRef)(),a=l.a.useState(!1),r=Object(i.a)(a,2),c=r[0],o=r[1];return l.a.createElement(m.r,{isOpen:e.fileModal,toggle:e.toggleFileModal},l.a.createElement(m.u,null,"Upload CSV Data"),l.a.createElement(m.s,null,l.a.createElement(m.k,{onSubmit:function(t){t.preventDefault();var a=new FormData;a.append("file",t.target.elements.fileInput.files[0]),fetch("".concat(window.location.origin,"/api/csv/?project_id=1"),{method:"POST",body:a}).then((function(t){t.ok?(alert("Upload success"),e.toggleFileModal()):alert("Could not upload csv")}))}},l.a.createElement(m.m,null,l.a.createElement(m.n,{ref:t,name:"fileInput",type:"file",accept:".csv",onChange:function(e){var t=e.target.files[0].name,a=t.substring(t.lastIndexOf("."));o(".csv"===a)}})),l.a.createElement(m.a,{type:"submit",color:"primary",disabled:!c},"Upload"))),l.a.createElement(m.t,null,l.a.createElement(m.a,{onClick:e.toggleFileModal},"Cancel")))};var p=function(e){var t=l.a.useState(!1),a=Object(i.a)(t,2),n=a[0],r=a[1],c=l.a.useState(!1),o=Object(i.a)(c,2),u=o[0],p=o[1],f=function(){r(!n)},g=function(){p(!u)};return l.a.createElement(l.a.Fragment,null,l.a.createElement(m.x,null,l.a.createElement(m.f,null,l.a.createElement(m.v,null,l.a.createElement(m.y,{"data-placement":"bottom",title:"Title"},e.title),l.a.createElement(m.a,{color:"light",onClick:f},"Edit Title")),l.a.createElement(m.v,null,l.a.createElement(m.w,null,l.a.createElement(m.a,null,"Save Project")),l.a.createElement(m.w,null,l.a.createElement(m.a,{color:"primary",onClick:g},"+ Upload CSV"))),l.a.createElement(s,{title:e.title,setTitle:e.setTitle,titleModal:n,toggleTitleModal:f}),l.a.createElement(E,{fileModal:u,toggleFileModal:g}))),l.a.createElement(m.x,null,l.a.createElement(m.f,null,l.a.createElement("div",{className:"w-50"},l.a.createElement(m.k,null,l.a.createElement(m.m,null,l.a.createElement(m.q,null,"Description (",Math.max(0,120-e.description.length)," characters left)"),l.a.createElement(m.n,{type:"textarea",invalid:e.description.length>120,onInput:function(t){return e.setDescription(t.target.value)}}),l.a.createElement(m.l,{hidden:e.description.length<=120},"Too many characters.")))))))};var f=function(e){var t=l.a.useState(!1),a=Object(i.a)(t,2),n=a[0],r=a[1],c=function(t){e.setGraphType({target:{name:"GraphType",value:t}})};return l.a.createElement(l.a.Fragment,null,l.a.createElement("div",null,l.a.createElement("script",{type:"text/javascript"},'props.setGraphType("None selected");'),l.a.createElement(m.f,null,l.a.createElement(m.g,{toggle:function(){r(!n)},isOpen:n},l.a.createElement(m.j,{caret:!0},"Graph/Line Type: ",e.graphType),l.a.createElement(m.i,{container:"body"},l.a.createElement(m.h,{onClick:function(){return c("Bar")}},"Bar Graph"),l.a.createElement(m.h,{onClick:function(){return c("Line")}},"Line Graph"),l.a.createElement(m.h,{onClick:function(){return c("Scatter")}},"Scatterplot"))))),l.a.createElement("br",null))};var g=function(e){var t=l.a.useState(!1),a=Object(i.a)(t,2),n=a[0],r=a[1],c=function(t){e.setGraphColor({target:{name:"Color",value:t}})};return l.a.createElement(l.a.Fragment,null,l.a.createElement("div",null,l.a.createElement("script",{type:"text/javascript"},'props.setGraphColor("None selected");'),l.a.createElement(m.f,null,l.a.createElement(m.g,{toggle:function(){r(!n)},isOpen:n},l.a.createElement(m.j,{caret:!0},"Graph Color: ",e.graphColor),l.a.createElement(m.i,{container:"body"},l.a.createElement(m.h,{onClick:function(){return c("Red")}},"Red"),l.a.createElement(m.h,{onClick:function(){return c("Green")}},"Green"),l.a.createElement(m.h,{onClick:function(){return c("Blue")}},"Blue"),l.a.createElement(m.h,{onClick:function(){return c("Yellow")}},"Yellow"))))),l.a.createElement("br",null))};var d=function(e){return l.a.createElement(m.f,null,l.a.createElement("div",null,"X-axis Label:"),l.a.createElement(m.o,null,l.a.createElement(m.n,{onInput:function(t){return a=t.target.value,void e.setXLabel(a);var a},placeholder:"input name of X axis here"})),l.a.createElement("br",null),l.a.createElement("div",null,"Y-axis Label:"),l.a.createElement(m.o,null,l.a.createElement(m.n,{onInput:function(t){return a=t.target.value,void e.setYLabel(a);var a},placeholder:"input name of Y axis here"})),l.a.createElement("br",null))};var h=function(e){return l.a.createElement(m.f,null,l.a.createElement(m.o,null,l.a.createElement(m.p,null,"Legend Desired?"),l.a.createElement(m.n,{type:"checkbox",addon:!0,onChange:function(t){return e.setLegend(t.target.checked)}})),l.a.createElement("br",null))},b=a(38),v=a.n(b);var y=function(e){var t=l.a.useState(!1),a=Object(i.a)(t,2),n=a[0],r=a[1],c=l.a.useState(null),o=Object(i.a)(c,2),u=o[0],m=o[1],s=l.a.useState(null),E=Object(i.a)(s,2),p=E[0],f=E[1],g=function(){fetch("".concat(window.location.origin,"/api/graph?config=").concat(JSON.stringify(e.config)),{method:"GET"}).then((function(e){if(200==e.status)return e.blob();e.json().then((function(e){throw new Error(e.message)})).catch((function(e){console.log(e.message),r(!0),m(e.message)}))})).then((function(e){var t=URL.createObjectURL(e);r(!0),f(t)})).catch((function(e){console.log(e.message),r(!0),m(e.message)}))};return null!=u?l.a.createElement(l.a.Fragment,null,l.a.createElement("div",null,'Click "Generate" to display your graph!',l.a.createElement("button",{onClick:g},"Generate")),l.a.createElement("div",null,"Error: ",u)):p?n?l.a.createElement("div",null,l.a.createElement("img",{src:p,alt:""}),l.a.createElement("button",{onClick:g},"Generate")):l.a.createElement("div",null,l.a.createElement("img",{src:v.a,alt:""})):l.a.createElement("div",null,'Click "Generate" to display your graph!',l.a.createElement("button",{onClick:g},"Generate"))};var C=function(){return l.a.createElement("footer",{className:"footer footer-black footer-white"},l.a.createElement(m.f,null,l.a.createElement(m.z,null,l.a.createElement("div",{className:"credits ml-auto"},l.a.createElement("span",{className:"copyright"},"\xa9 ",(new Date).getFullYear()," MeltingPlot")))))},j=(a(65),a(289)),L=a(288),O=function(e,t){switch(e){case"Color":return", color='".concat(t,"'");case"XData":case"YData":return"";case"Label":return", label='".concat(t,"'");case"LineStyle":return", linestyle='".concat(t,"'");default:return""}},D=function(e,t){switch(e){case"Title":return'\nplt.title("'.concat(t,'")');case"XLabel":return'\nplt.xlabel("'.concat(t,'")');case"YLabel":return'\nplt.ylabel("'.concat(t,'")');default:return"\nplt.legend()"}};var G=function(e){return l.a.createElement("div",{className:"display-linebreak"},l.a.createElement(j.a,{language:"python",style:L.a},function(e){var t=e,a="import matplotlib\nimport matplotlib.pyplot as plt\nimport numpy as np";t.Lines.forEach((function(e){for(var t=e.GraphData.XData,n=e.GraphData.YData,l="".concat(t,",").concat(n),r=0,c=Object.entries(e.GraphData);r<c.length;r++){var o=Object(i.a)(c[r],2),u=o[0],m=o[1];null!=m&&O(u,m)&&""!==O(u,m)&&(l+=O(u,m))}a+=function(e,t){switch(e){case"Scatter":return"\nplt.scatter(".concat(t,")");case"Bar":return"\nplt.bar(".concat(t,")");default:return"\nplt.plot(".concat(t,")")}}(e.GraphType,l)}));for(var n=0,l=Object.entries(t.Attributes);n<l.length;n++){var r=Object(i.a)(l[n],2),c=r[0],o=r[1];o&&(a+=D(c,o))}return a}(e.config)))};var k=function(){var e=l.a.useState("None selected"),t=Object(i.a)(e,2),a=(t[0],t[1],l.a.useState("Blue")),n=Object(i.a)(a,2),r=(n[0],n[1],l.a.useState("Project title")),c=Object(i.a)(r,2),o=c[0],s=c[1],E=l.a.useState(""),b=Object(i.a)(E,2),v=b[0],j=b[1],L=l.a.useState(!1),O=Object(i.a)(L,2),D=O[0],k=O[1],S=l.a.useState(!1),T=Object(i.a)(S,2),x=T[0],w=T[1],Y=l.a.useState(!1),M=Object(i.a)(Y,2),N=M[0],X=M[1],F=l.a.useState([]),I=Object(i.a)(F,2),B=I[0],U=I[1],z=function(e,t){var a=e.target,n=a.name,l=a.value,r=Object(u.a)(B);r[t].GraphData[n]=l,U(r)};return l.a.createElement(l.a.Fragment,null,l.a.createElement(p,{title:o,setTitle:s,description:v,setDescription:j}),l.a.createElement(m.a,{onClick:function(){U([].concat(Object(u.a)(B),[{GraphType:null,GraphData:{Color:null,XData:null,YData:null,Label:null}}]))}},"Add Line"),B.map((function(e,t){return l.a.createElement(m.f,null,l.a.createElement(m.b,null,l.a.createElement(m.d,null,"Title:",l.a.createElement(m.z,null,l.a.createElement(m.e,null,l.a.createElement(m.n,{className:"ml10",name:"Label",placeholder:"Line title",value:e.GraphData.Label,onChange:function(e){return z(e,t)}})),l.a.createElement(m.e,{md:{size:2,offset:4}},l.a.createElement("div",{className:"btn-box"},0!==B.length&&l.a.createElement(m.a,{className:"mr10",onClick:function(){return function(e){var t=Object(u.a)(B);t.splice(e,1),U(t)}(t)}},"Remove Line"))))),l.a.createElement(m.c,null,l.a.createElement(m.z,null,l.a.createElement(f,{graphType:e.GraphType,setGraphType:function(e){return function(e,t){var a=e.target,n=a.name,l=a.value;console.log(e.target),console.log(n),console.log(l);var r=Object(u.a)(B);r[t][n]=l,U(r)}(e,t)}}),l.a.createElement(g,{graphColor:e.GraphData.Color,setGraphColor:function(e){return z(e,t)}})),l.a.createElement(m.z,null,l.a.createElement(m.e,null,l.a.createElement("div",null,"X Data:"),l.a.createElement(m.n,{name:"XData",placeholder:"X Axis Data",value:e.GraphData.XData,onChange:function(e){return z(e,t)}})),l.a.createElement(m.e,null,l.a.createElement("div",null,"Y Data:"),l.a.createElement(m.n,{className:"ml10",name:"YData",placeholder:"Y Axis Data",value:e.GraphData.YData,onChange:function(e){return z(e,t)}}))))))})),l.a.createElement("div",null,JSON.stringify(B)),l.a.createElement(d,{xLabel:D,setXLabel:k,yLabel:x,setYLabel:w}),l.a.createElement(h,{legend:N,setLegend:X}),l.a.createElement(m.z,null,l.a.createElement(m.e,null),l.a.createElement(m.e,null,l.a.createElement(G,{config:{Lines:B,Attributes:{Title:o,XLabel:D,YLabel:x,Legend:N}}})),l.a.createElement(m.e,null,l.a.createElement(y,{config:{Lines:B,Attributes:{Title:o,XLabel:D,YLabel:x,Legend:N}}})),l.a.createElement(m.e,null)),l.a.createElement(C,null))};c.a.render(l.a.createElement(o.a,null,l.a.createElement(o.c,null,l.a.createElement(o.b,{path:"/index",render:function(e){return l.a.createElement(k,e)}}))),document.getElementById("root"))},38:function(e,t,a){e.exports=a.p+"static/media/LoadingCircle.a41438ad.gif"},43:function(e,t,a){e.exports=a(285)},65:function(e,t,a){}},[[43,1,2]]]);
//# sourceMappingURL=main.66b02d1d.chunk.js.map