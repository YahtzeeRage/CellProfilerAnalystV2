(self.webpackChunkgatsby_test=self.webpackChunkgatsby_test||[]).push([[8720],{70567:function(e,t,n){"use strict";n.r(t);var r=n(92137),o=n(87757),a=n.n(o),l=n(67294),c=n(49995),i=n(20638),u=n(76544),s=n(80838),m=n(80453);t.default=function(){var e=l.useState(!0),t=e[0],n=e[1],o=l.useState(!0),p=o[0],f=o[1],h=function(){var e=(0,r.Z)(a().mark((function e(t){var n,r,o,l,c;return a().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(void 0!==(n=t.target.files[0])){e.next=3;break}return e.abrupt("return");case 3:console.log("file found:",n),r=n.stream().getReader(),o=0,l=[],c=performance.now(),r.read().then((function e(t){var n=t.done,a=t.value;if(n){console.log("stream complete with "+l.length+" lines");var i=performance.now();console.log("Newline parsing took "+(i-c)+" milliseconds."),console.log(l);for(var u=new Array(l.length-1).fill(0),s=0;s<l.length-1;s++)u[s]=l[s]-l[s+1];return console.log(u),l}for(s=0;s<a.length;s++)10===a[s]&&l.push(o),o++;return r.read().then(e)})).then((function(e){var t=Math.floor(e.length/2),r=performance.now();Promise.all(new Array(100).fill().map((function(r,o){return function(t){var r=n.slice(e[t],e[t+1]);return p?r.text().then((function(e){return e.trim("\n").split(",").map((function(e,t){return 0==t?e:Number(e)}))})):r.text().then((function(e){return e.trim("\n").split(",").map((function(e,t){return Number(e)}))}))}(t+o)}))).then((function(e){var t=performance.now();console.log("line extracting took "+(t-r)+" milliseconds."),console.log(e)}))}));case 9:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),d=(0,i.Z)((function(e){return{root:{width:28,height:16,padding:0,display:"flex"},switchBase:{padding:2,color:e.palette.grey[500],"&$checked":{transform:"translateX(12px)",color:e.palette.common.white,"& + $track":{opacity:1,backgroundColor:e.palette.primary.main,borderColor:e.palette.primary.main}}},thumb:{width:12,height:12,boxShadow:"none"},track:{border:"1px solid "+e.palette.grey[500],borderRadius:8,opacity:1,backgroundColor:e.palette.common.white},checked:{}}}))(u.Z);return l.createElement("div",null,l.createElement(c.Z,{"aria-label":"save",color:"primary",component:"label"},"upload csv",l.createElement("input",{type:"file",hidden:!0,onChange:h})),l.createElement(m.Z,{component:"div"},l.createElement(s.Z,{component:"label",container:!0,alignItems:"center",spacing:1},l.createElement(s.Z,{item:!0},"use per_object"),l.createElement(s.Z,{item:!0},l.createElement(d,{checked:t,onChange:function(){n(!t),f(!p),console.log(!t)},name:"checkedC"})),l.createElement(s.Z,{item:!0},"use giga data"))))}}}]);
//# sourceMappingURL=component---src-pages-count-newlines-demo-js-33e2b511e5c7e5c900de.js.map