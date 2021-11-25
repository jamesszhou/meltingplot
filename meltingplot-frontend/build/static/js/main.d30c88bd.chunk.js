(this.webpackJsonpconfusion=this.webpackJsonpconfusion||[]).push([[0],{288:function(e,t,a){"use strict";a.r(t);var n=a(1),l=a.n(n),r=a(12),c=a.n(r),o=a(22),i=a(15),u=a(6),m=(a(11),a(2));var s=function(e){var t=l.a.useState(e.title),a=Object(u.a)(t,2),n=a[0],r=a[1];return l.a.createElement(l.a.Fragment,null,l.a.createElement(m.r,{isOpen:e.titleModal,toggle:e.toggleTitleModal},l.a.createElement(m.u,null,"Edit Project Title"),l.a.createElement(m.s,null,l.a.createElement(m.n,{value:n,onInput:function(e){return r(e.target.value)}})),l.a.createElement(m.t,null,l.a.createElement(m.a,{color:"primary",onClick:function(){e.toggleTitleModal(),e.setTitle(n)}},"Update"),l.a.createElement(m.a,{onClick:e.toggleTitleModal},"Cancel"))))};var E=function(e){var t=Object(n.createRef)(),a=l.a.useState(!1),r=Object(u.a)(a,2),c=r[0],o=r[1];return l.a.createElement(m.r,{isOpen:e.fileModal,toggle:e.toggleFileModal},l.a.createElement(m.u,null,"Upload CSV Data"),l.a.createElement(m.s,null,l.a.createElement(m.k,{onSubmit:function(t){t.preventDefault();var a=new FormData;a.append("file",t.target.elements.fileInput.files[0]),fetch("".concat(window.location.origin,"/api/csv/?project_id=1"),{method:"POST",body:a}).then((function(t){t.ok?(alert("Upload success"),e.toggleFileModal()):alert("Could not upload csv")}))}},l.a.createElement(m.m,null,l.a.createElement(m.n,{ref:t,name:"fileInput",type:"file",accept:".csv",onChange:function(e){var t=e.target.files[0].name,a=t.substring(t.lastIndexOf("."));o(".csv"===a)}})),l.a.createElement(m.a,{type:"submit",color:"primary",disabled:!c},"Upload"))),l.a.createElement(m.t,null,l.a.createElement(m.a,{onClick:e.toggleFileModal},"Cancel")))};var p=function(e){var t=l.a.useState(!1),a=Object(u.a)(t,2),n=a[0],r=a[1],c=l.a.useState(!1),o=Object(u.a)(c,2),i=o[0],p=o[1],f=function(){r(!n)},d=function(){p(!i)};return l.a.createElement(l.a.Fragment,null,l.a.createElement(m.x,null,l.a.createElement(m.f,null,l.a.createElement(m.v,null,l.a.createElement(m.y,{"data-placement":"bottom",title:"Title"},e.title),l.a.createElement(m.a,{color:"light",onClick:f},"Edit Title")),l.a.createElement(m.v,null,l.a.createElement(m.w,null,l.a.createElement(m.a,null,"Save Project")),l.a.createElement(m.w,null,l.a.createElement(m.a,{color:"primary",onClick:d},"+ Upload CSV"))),l.a.createElement(s,{title:e.title,setTitle:e.setTitle,titleModal:n,toggleTitleModal:f}),l.a.createElement(E,{fileModal:i,toggleFileModal:d}))),l.a.createElement(m.x,null,l.a.createElement(m.f,null,l.a.createElement("div",{className:"w-50"},l.a.createElement(m.k,null,l.a.createElement(m.m,null,l.a.createElement(m.q,null,"Description (",Math.max(0,120-e.description.length)," characters left)"),l.a.createElement(m.n,{type:"textarea",invalid:e.description.length>120,onInput:function(t){return e.setDescription(t.target.value)}}),l.a.createElement(m.l,{hidden:e.description.length<=120},"Too many characters.")))))))};var f=function(e){var t=l.a.useState(!1),a=Object(u.a)(t,2),n=a[0],r=a[1],c=function(t){e.setGraphType({target:{name:"GraphType",value:t}})};return l.a.createElement(l.a.Fragment,null,l.a.createElement("div",null,l.a.createElement("script",{type:"text/javascript"},'props.setGraphType("None selected");'),l.a.createElement(m.f,null,l.a.createElement(m.g,{toggle:function(){r(!n)},isOpen:n},l.a.createElement(m.j,{caret:!0},"Graph/Line Type: ",e.graphType),l.a.createElement(m.i,{container:"body"},l.a.createElement(m.h,{onClick:function(){return c("Bar")}},"Bar Graph"),l.a.createElement(m.h,{onClick:function(){return c("Line")}},"Line Graph"),l.a.createElement(m.h,{onClick:function(){return c("Scatter")}},"Scatterplot"))))),l.a.createElement("br",null))};var d=function(e){var t=l.a.useState(!1),a=Object(u.a)(t,2),n=a[0],r=a[1],c=function(t){e.setGraphColor({target:{name:"Color",value:t}})};return l.a.createElement(l.a.Fragment,null,l.a.createElement("div",null,l.a.createElement("script",{type:"text/javascript"},'props.setGraphColor("None selected");'),l.a.createElement(m.f,null,l.a.createElement(m.g,{toggle:function(){r(!n)},isOpen:n},l.a.createElement(m.j,{caret:!0},"Graph Color: ",e.graphColor),l.a.createElement(m.i,{container:"body"},l.a.createElement(m.h,{onClick:function(){return c("Red")}},"Red"),l.a.createElement(m.h,{onClick:function(){return c("Green")}},"Green"),l.a.createElement(m.h,{onClick:function(){return c("Blue")}},"Blue"),l.a.createElement(m.h,{onClick:function(){return c("Yellow")}},"Yellow"))))),l.a.createElement("br",null))};var g=function(e){return l.a.createElement(m.f,null,l.a.createElement("div",null,"X-axis Label:"),l.a.createElement(m.o,null,l.a.createElement(m.n,{onInput:function(t){return a=t.target.value,void e.setXLabel(a);var a},placeholder:"input name of X axis here"})),l.a.createElement("br",null),l.a.createElement("div",null,"Y-axis Label:"),l.a.createElement(m.o,null,l.a.createElement(m.n,{onInput:function(t){return a=t.target.value,void e.setYLabel(a);var a},placeholder:"input name of Y axis here"})),l.a.createElement("br",null))};var h=function(e){return l.a.createElement(m.f,null,l.a.createElement(m.o,null,l.a.createElement(m.p,null,"Legend Desired?"),l.a.createElement(m.n,{type:"checkbox",addon:!0,onChange:function(t){return e.setLegend(t.target.checked)}})),l.a.createElement("br",null))},b=a(39),v=a.n(b);var y=function(e){var t=l.a.useState(!1),a=Object(u.a)(t,2),n=a[0],r=a[1],c=l.a.useState(null),o=Object(u.a)(c,2),i=o[0],m=o[1],s=l.a.useState(null),E=Object(u.a)(s,2),p=E[0],f=E[1],d=function(){fetch("".concat(window.location.origin,"/api/graph?config=").concat(JSON.stringify(e.config)),{method:"GET"}).then((function(e){if(200===e.status)return e.blob();e.json().then((function(e){throw new Error(e.message)})).catch((function(e){r(!0),m(e.message)}))})).then((function(e){var t=URL.createObjectURL(e);r(!0),f(t)})).catch((function(e){r(!0),m(e.message)}))};return null!=i?l.a.createElement(l.a.Fragment,null,l.a.createElement("div",null,'Click "Generate" to display your graph!',l.a.createElement("button",{onClick:d},"Generate")),l.a.createElement("div",null,"Error: ",i)):p?n?l.a.createElement("div",null,l.a.createElement("img",{src:p,alt:""}),l.a.createElement("button",{onClick:d},"Generate")):l.a.createElement("div",null,l.a.createElement("img",{src:v.a,alt:""})):l.a.createElement("div",null,'Click "Generate" to display your graph!',l.a.createElement("button",{onClick:d},"Generate"))};var C=function(){return l.a.createElement("footer",{className:"footer footer-black footer-white"},l.a.createElement(m.f,null,l.a.createElement(m.z,null,l.a.createElement("div",{className:"credits ml-auto"},l.a.createElement("span",{className:"copyright"},"\xa9 ",(new Date).getFullYear()," MeltingPlot")))))},L=(a(66),a(292)),j=a(291),O=function(e,t){switch(e){case"Color":return", color='".concat(t,"'");case"XData":case"YData":return"";case"Label":return", label='".concat(t,"'");case"LineStyle":return", linestyle='".concat(t,"'");default:return""}},D=function(e,t){switch(e){case"Title":return'\nplt.title("'.concat(t,'")');case"XLabel":return'\nplt.xlabel("'.concat(t,'")');case"YLabel":return'\nplt.ylabel("'.concat(t,'")');default:return"\nplt.legend()"}};var G=function(e){return l.a.createElement("div",{className:"display-linebreak"},l.a.createElement(L.a,{language:"python",style:j.a},function(e){var t=e,a="import matplotlib\nimport matplotlib.pyplot as plt\nimport numpy as np";t.Lines.forEach((function(e){for(var t=e.GraphData.XData,n=e.GraphData.YData,l="".concat(t,",").concat(n),r=0,c=Object.entries(e.GraphData);r<c.length;r++){var o=Object(u.a)(c[r],2),i=o[0],m=o[1];null!=m&&O(i,m)&&""!==O(i,m)&&(l+=O(i,m))}a+=function(e,t){switch(e){case"Scatter":return"\nplt.scatter(".concat(t,")");case"Bar":return"\nplt.bar(".concat(t,")");default:return"\nplt.plot(".concat(t,")")}}(e.GraphType,l)}));for(var n=0,l=Object.entries(t.Attributes);n<l.length;n++){var r=Object(u.a)(l[n],2),c=r[0],o=r[1];o&&(a+=D(c,o))}return a}(e.config)))};var k=function(){var e=l.a.useState("Project title"),t=Object(u.a)(e,2),a=t[0],n=t[1],r=l.a.useState(""),c=Object(u.a)(r,2),o=c[0],s=c[1],E=l.a.useState(!1),b=Object(u.a)(E,2),v=b[0],L=b[1],j=l.a.useState(!1),O=Object(u.a)(j,2),D=O[0],k=O[1],T=l.a.useState(!1),S=Object(u.a)(T,2),x=S[0],w=S[1],Y=l.a.useState([]),M=Object(u.a)(Y,2),X=M[0],N=M[1],F=function(e,t){var a=e.target,n=a.name,l=a.value,r=Object(i.a)(X);r[t].GraphData[n]=l,N(r)};return l.a.createElement(l.a.Fragment,null,l.a.createElement(p,{title:a,setTitle:n,description:o,setDescription:s}),l.a.createElement(m.a,{onClick:function(){N([].concat(Object(i.a)(X),[{GraphType:null,GraphData:{Color:null,XData:null,YData:null,Label:null}}]))}},"Add Line"),X.map((function(e,t){return l.a.createElement(m.f,null,l.a.createElement(m.b,null,l.a.createElement(m.d,null,"Title:",l.a.createElement(m.z,null,l.a.createElement(m.e,null,l.a.createElement(m.n,{className:"ml10",name:"Label",placeholder:"Line title",value:e.GraphData.Label,onChange:function(e){return F(e,t)}})),l.a.createElement(m.e,{md:{size:2,offset:4}},l.a.createElement("div",{className:"btn-box"},0!==X.length&&l.a.createElement(m.a,{className:"mr10",onClick:function(){return function(e){var t=Object(i.a)(X);t.splice(e,1),N(t)}(t)}},"Remove Line"))))),l.a.createElement(m.c,null,l.a.createElement(m.z,null,l.a.createElement(f,{graphType:e.GraphType,setGraphType:function(e){return function(e,t){var a=e.target,n=a.name,l=a.value,r=Object(i.a)(X);r[t][n]=l,N(r)}(e,t)}}),l.a.createElement(d,{graphColor:e.GraphData.Color,setGraphColor:function(e){return F(e,t)}})),l.a.createElement(m.z,null,l.a.createElement(m.e,null,l.a.createElement("div",null,"X Data:"),l.a.createElement(m.n,{name:"XData",placeholder:"X Axis Data",value:e.GraphData.XData,onChange:function(e){return F(e,t)}})),l.a.createElement(m.e,null,l.a.createElement("div",null,"Y Data:"),l.a.createElement(m.n,{className:"ml10",name:"YData",placeholder:"Y Axis Data",value:e.GraphData.YData,onChange:function(e){return F(e,t)}}))))))})),l.a.createElement("div",null,JSON.stringify(X)),l.a.createElement(g,{xLabel:v,setXLabel:L,yLabel:D,setYLabel:k}),l.a.createElement(h,{legend:x,setLegend:w}),l.a.createElement(m.z,null,l.a.createElement(m.e,null),l.a.createElement(m.e,null,l.a.createElement(G,{config:{Lines:X,Attributes:{Title:a,XLabel:v,YLabel:D,Legend:x}}})),l.a.createElement(m.e,null,l.a.createElement(y,{config:{Lines:X,Attributes:{Title:a,XLabel:v,YLabel:D,Legend:x}}})),l.a.createElement(m.e,null)),l.a.createElement(C,null))};c.a.render(l.a.createElement(o.a,null,l.a.createElement(o.c,null,l.a.createElement(o.b,{path:"/index",render:function(e){return l.a.createElement(k,e)}}))),document.getElementById("root"))},39:function(e,t,a){e.exports=a.p+"static/media/LoadingCircle.a41438ad.gif"},44:function(e,t,a){e.exports=a(288)},66:function(e,t,a){}},[[44,1,2]]]);
//# sourceMappingURL=main.d30c88bd.chunk.js.map