(this["webpackJsonpreact-health-dashboard-example"]=this["webpackJsonpreact-health-dashboard-example"]||[]).push([[0],{198:function(e,t,a){e.exports=a(432)},199:function(e,t,a){},212:function(e,t,a){},432:function(e,t,a){"use strict";a.r(t);a(199);var n=a(0),l=a.n(n),m=a(10),i=a.n(m),r=a(468),s=a(466),p=a(467),o=a(465),u=a(6),c=a(194),v=a(451),d=a(453),h=a(454),g=a(455),x=a(456),b=a(457),f=a(458),y=a(459),E=a(52),S=a(460),k=a(461),C=a(462),T=a(463),w=a(464),z=a(187),F=a.n(z),H=a(188),A=a.n(H),W=a(186),B=a.n(W),D=a(189),M=a.n(D),O="#FFFFFF",j={black:"#000000",white:O,primary:{contrastText:O,dark:u.a.indigo[900],main:u.a.indigo[500],light:u.a.indigo[100]},secondary:{contrastText:O,dark:u.a.blue[900],main:u.a.blue.A400,light:u.a.blue.A400},success:{contrastText:O,dark:u.a.green[900],main:u.a.green[600],light:u.a.green[400]},info:{contrastText:O,dark:u.a.blue[900],main:u.a.blue[600],light:u.a.blue[400]},warning:{contrastText:O,dark:u.a.orange[900],main:u.a.orange[600],light:u.a.orange[400]},error:{contrastText:O,dark:u.a.red[900],main:u.a.red[600],light:u.a.red[400]},text:{primary:u.a.blueGrey[900],secondary:u.a.blueGrey[600],link:u.a.blue[600]},background:{default:"#F4F6F8",paper:O},icon:{primary:"#006066",secondary:"#00e676"},divider:u.a.grey[200]},I={h1:{color:j.text.primary,fontWeight:500,fontSize:"35px",letterSpacing:"-0.24px",lineHeight:"40px"},h2:{color:j.text.primary,fontWeight:500,fontSize:"29px",letterSpacing:"-0.24px",lineHeight:"32px"},h3:{color:j.text.primary,fontWeight:500,fontSize:"24px",letterSpacing:"-0.06px",lineHeight:"28px"},h4:{color:j.text.primary,fontWeight:500,fontSize:"20px",letterSpacing:"-0.06px",lineHeight:"24px"},h5:{color:j.text.primary,fontWeight:500,fontSize:"16px",letterSpacing:"-0.05px",lineHeight:"20px"},h6:{color:j.text.primary,fontWeight:500,fontSize:"14px",letterSpacing:"-0.05px",lineHeight:"20px"},subtitle1:{color:j.text.primary,fontSize:"16px",letterSpacing:"-0.05px",lineHeight:"25px"},subtitle2:{color:j.text.secondary,fontWeight:400,fontSize:"14px",letterSpacing:"-0.05px",lineHeight:"21px"},body1:{color:j.text.primary,fontSize:"14px",letterSpacing:"-0.05px",lineHeight:"21px"},body2:{color:j.text.secondary,fontSize:"12px",letterSpacing:"-0.04px",lineHeight:"18px"},button:{color:j.text.primary,fontSize:"14px"},caption:{color:j.text.secondary,fontSize:"11px",letterSpacing:"0.33px",lineHeight:"13px"},overline:{color:j.text.secondary,fontSize:"11px",fontWeight:500,letterSpacing:"0.33px",lineHeight:"13px",textTransform:"uppercase"}};function N(){return(N=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var n in a)Object.prototype.hasOwnProperty.call(a,n)&&(e[n]=a[n])}return e}).apply(this,arguments)}var G={MuiButton:{contained:{boxShadow:"0 1px 1px 0 rgba(0,0,0,0.14), 0 2px 1px -1px rgba(0,0,0,0.12), 0 1px 3px 0 rgba(0,0,0,0.20)",backgroundColor:"#FFFFFF"}},MuiIconButton:{root:{color:j.icon,"&:hover":{backgroundColor:"rgba(0, 0, 0, 0.03)"}}},MuiPaper:{elevation1:{boxShadow:"0 0 0 1px rgba(63,63,68,0.05), 0 1px 3px 0 rgba(63,63,68,0.15)"}},MuiTableCell:{root:N({},I.body1,{borderBottom:"1px solid "+j.divider})},MuiTableHead:{root:{backgroundColor:u.a.grey[50]}},MuiTypography:{gutterBottom:{marginBottom:8}}},J=Object(c.a)({palette:j,typography:I,overrides:G,zIndex:{appBar:100,drawer:1200}}),P=function(e){var t,a=e.status,n=e.title,m=e.style;return t=1===a?"#258933":0===a?"#ff0000":a>0&&a<1?"#ebc034":"#918f89",l.a.createElement(v.a,{title:n},l.a.createElement(B.a,{style:N({color:t},m)}))},q=function(e){var t=e.component,a=e.subComponents,n=l.a.useState(!1,!0),m=n[0],i=n[1];return l.a.createElement(d.a,{style:{verticalAlign:"top"}},l.a.createElement(h.a,{align:"left",style:{width:"1%"}},l.a.createElement(P,{status:t.status,title:t.lastCheckTime?new Date(t.lastCheckTime).toString():"",style:{margin:"8px 0px"}})),l.a.createElement(h.a,{component:"th",scope:"row",style:{width:"100%"}},l.a.createElement(g.a,{button:!0,onClick:function(){i(!m)}},m?l.a.createElement(F.a,null):l.a.createElement(A.a,null),l.a.createElement(x.a,{primary:t.name,size:"small",dense:"true",style:{width:"200px",margin:"0.1em"}}),l.a.createElement("div",null,t.datapoints&&t.datapoints.map((function(e){return l.a.createElement(P,{key:e.timestamp,status:e.value,title:new Date(parseInt(e.timestamp)).toString()})})))),l.a.createElement(b.a,{in:m,timeout:"auto",unmountOnExit:!0},l.a.createElement(f.a,{component:"div",disablePadding:!0},a.map((function(e){return l.a.createElement(g.a,{key:e.name},l.a.createElement(y.a,null,l.a.createElement(P,{status:e.status,title:e.lastCheckTime?new Date(e.lastCheckTime).toString():""})),l.a.createElement(x.a,{primary:e.name,size:"small",dense:"true",style:{width:"200px",margin:"0.1em"}}),l.a.createElement("div",null,e.datapoints.map((function(e){return l.a.createElement(P,{key:e.timestamp,status:e.value,title:new Date(parseInt(e.timestamp)).toString(),style:{width:"0.8em",margin:"0.1em"}})}))))}))))),l.a.createElement(h.a,{align:"left"},1===t.status?"Healthy":"Unhealthy"))},L={height:"300px",width:"100%",display:"flex",justifyContent:"center",alignItems:"center",background:"white"},U=function(e){var t=e.error;return l.a.createElement("div",{style:L,className:"error-display"},l.a.createElement(M.a,{color:"error"}),l.a.createElement(E.a,{variant:"h5"},t))},X=Object(p.a)((function(e){return{root:{width:"100%",marginTop:3,overflowX:"auto"},selectEnv:{padding:"12px"},table:{minWidth:650},loadingBox:{height:"65px"},loading:{margin:"20px auto",display:"block"},filter:{width:"100px"}}})),K=function(e){var t=e.data,a=e.loading,n=e.error,m=X();return l.a.createElement(S.a,{className:m.root},a?l.a.createElement(k.a,null):n?l.a.createElement(U,{error:n}):l.a.createElement(C.a,{className:m.table,size:"small"},l.a.createElement(T.a,null,l.a.createElement(d.a,null,l.a.createElement(h.a,{align:"left"}),l.a.createElement(h.a,{align:"center"},"Component"),l.a.createElement(h.a,{align:"left"},"Status"))),l.a.createElement(w.a,null,t.map((function(e){return l.a.createElement(q,{key:e.name,component:e,subComponents:e.elements})})))))},Q=function(e){return l.a.createElement(o.a,{theme:J},l.a.createElement(K,e))},R=(a(212),[{name:"Google Cloud",status:1,lastCheckTime:161199e7,datapoints:[{timestamp:"1611964800000",value:1},{timestamp:"1611968400000",value:1},{timestamp:"1611972000000",value:1},{timestamp:"1611975600000",value:1},{timestamp:"1611979200000",value:.9996438888888889},{timestamp:"1611982800000",value:1},{timestamp:"1611986400000",value:1},{timestamp:"1611990000000",value:1}],elements:[{name:"Cloud Storage",status:1,lastCheckTime:161199e7,datapoints:[{timestamp:"1611964800000",value:1},{timestamp:"1611968400000",value:1},{timestamp:"1611972000000",value:1},{timestamp:"1611975600000",value:1},{timestamp:"1611979200000",value:1},{timestamp:"1611982800000",value:1},{timestamp:"1611986400000",value:1},{timestamp:"1611990000000",value:1}]}]},{name:"AWS",status:null,lastCheckTime:0,datapoints:[{timestamp:"1611964800000",value:1},{timestamp:"1611968400000",value:1},{timestamp:"1611972000000",value:1},{timestamp:"1611975600000",value:1},{timestamp:"1611979200000",value:0},{timestamp:"1611982800000",value:1},{timestamp:"1611986400000",value:1},{timestamp:"1611990000000",value:1}],elements:[{name:"File Storage",status:null,lastCheckTime:0,datapoints:[{timestamp:"1611964800000",value:1},{timestamp:"1611968400000",value:1},{timestamp:"1611972000000",value:1},{timestamp:"1611975600000",value:1},{timestamp:"1611979200000",value:0},{timestamp:"1611982800000",value:1},{timestamp:"1611986400000",value:1},{timestamp:"1611990000000",value:1}]},{name:"Cloud",status:null,lastCheckTime:0,datapoints:[]},{name:"DNS",status:null,lastCheckTime:0,datapoints:[{timestamp:"1611964800000",value:1},{timestamp:"1611968400000",value:1},{timestamp:"1611972000000",value:1},{timestamp:"1611975600000",value:1},{timestamp:"1611979200000",value:1},{timestamp:"1611982800000",value:1},{timestamp:"1611986400000",value:1},{timestamp:"1611990000000",value:1}]},{name:"Lambda",status:null,lastCheckTime:0,datapoints:[]}]},{name:"Microsoft Azure",status:1,lastCheckTime:161199e7,datapoints:[{timestamp:"1611964800000",value:1},{timestamp:"1611968400000",value:1},{timestamp:"1611972000000",value:1},{timestamp:"1611975600000",value:1},{timestamp:"1611979200000",value:1},{timestamp:"1611982800000",value:1},{timestamp:"1611986400000",value:1},{timestamp:"1611990000000",value:1}],elements:[{name:"Azure Blob Storage",status:1,lastCheckTime:161199e7,datapoints:[{timestamp:"1611964800000",value:1},{timestamp:"1611968400000",value:1},{timestamp:"1611972000000",value:1},{timestamp:"1611975600000",value:1},{timestamp:"1611979200000",value:1},{timestamp:"1611982800000",value:1},{timestamp:"1611986400000",value:1},{timestamp:"1611990000000",value:1}]}]}]);var V=()=>l.a.createElement(l.a.Fragment,null,l.a.createElement(Q,{data:R}),l.a.createElement("br",null),l.a.createElement("h3",null,"Given below is the JSON that is used as the prop `data` for the above displayed compoenent."),l.a.createElement(r.a,{language:"javascript",style:s.a},"export const healthData = [\n    {\n      name: 'Google Cloud',\n      status: 1.0,\n      lastCheckTime: 1611990000000,\n      datapoints: [\n        { timestamp: '1611964800000', value: 1.0 },\n        { timestamp: '1611968400000', value: 1.0 },\n        { timestamp: '1611972000000', value: 1.0 },\n        { timestamp: '1611975600000', value: 1.0 },\n        { timestamp: '1611979200000', value: 0.9996438888888889 },\n        { timestamp: '1611982800000', value: 1.0 },\n        { timestamp: '1611986400000', value: 1.0 },\n        { timestamp: '1611990000000', value: 1.0 }\n      ],\n      elements: [\n        {\n          name: 'Cloud Storage',\n          status: 1.0,\n          lastCheckTime: 1611990000000,\n          datapoints: [\n            { timestamp: '1611964800000', value: 1.0 },\n            { timestamp: '1611968400000', value: 1.0 },\n            { timestamp: '1611972000000', value: 1.0 },\n            { timestamp: '1611975600000', value: 1.0 },\n            { timestamp: '1611979200000', value: 1.0 },\n            { timestamp: '1611982800000', value: 1.0 },\n            { timestamp: '1611986400000', value: 1.0 },\n            { timestamp: '1611990000000', value: 1.0 }\n          ]\n        }\n      ]\n    },\n    {\n      name: 'AWS',\n      status: null,\n      lastCheckTime: 0,\n      datapoints: [\n        { timestamp: '1611964800000', value: 1.0 },\n        { timestamp: '1611968400000', value: 1.0 },\n        { timestamp: '1611972000000', value: 1.0 },\n        { timestamp: '1611975600000', value: 1.0 },\n        { timestamp: '1611979200000', value: 0.0 },\n        { timestamp: '1611982800000', value: 1.0 },\n        { timestamp: '1611986400000', value: 1.0 },\n        { timestamp: '1611990000000', value: 1.0 }\n      ],\n      elements: [\n        {\n          name: 'File Storage',\n          status: null,\n          lastCheckTime: 0,\n          datapoints: [\n            { timestamp: '1611964800000', value: 1.0 },\n            { timestamp: '1611968400000', value: 1.0 },\n            { timestamp: '1611972000000', value: 1.0 },\n            { timestamp: '1611975600000', value: 1.0 },\n            { timestamp: '1611979200000', value: 0.0 },\n            { timestamp: '1611982800000', value: 1.0 },\n            { timestamp: '1611986400000', value: 1.0 },\n            { timestamp: '1611990000000', value: 1.0 }\n          ]\n        },\n        {\n          name: 'Cloud',\n          status: null,\n          lastCheckTime: 0,\n          datapoints: []\n        },\n        {\n          name: 'DNS',\n          status: null,\n          lastCheckTime: 0,\n          datapoints: [\n            { timestamp: '1611964800000', value: 1.0 },\n            { timestamp: '1611968400000', value: 1.0 },\n            { timestamp: '1611972000000', value: 1.0 },\n            { timestamp: '1611975600000', value: 1.0 },\n            { timestamp: '1611979200000', value: 1.0 },\n            { timestamp: '1611982800000', value: 1.0 },\n            { timestamp: '1611986400000', value: 1.0 },\n            { timestamp: '1611990000000', value: 1.0 }\n          ]\n        },\n        {\n          name: 'Lambda',\n          status: null,\n          lastCheckTime: 0,\n          datapoints: []\n        }\n      ]\n    },\n    {\n      name: 'Microsoft Azure',\n      status: 1.0,\n      lastCheckTime: 1611990000000,\n      datapoints: [\n        { timestamp: '1611964800000', value: 1.0 },\n        { timestamp: '1611968400000', value: 1.0 },\n        { timestamp: '1611972000000', value: 1.0 },\n        { timestamp: '1611975600000', value: 1.0 },\n        { timestamp: '1611979200000', value: 1.0 },\n        { timestamp: '1611982800000', value: 1.0 },\n        { timestamp: '1611986400000', value: 1.0 },\n        { timestamp: '1611990000000', value: 1.0 }\n      ],\n      elements: [\n        {\n          name: 'Azure Blob Storage',\n          status: 1.0,\n          lastCheckTime: 1611990000000,\n          datapoints: [\n            { timestamp: '1611964800000', value: 1.0 },\n            { timestamp: '1611968400000', value: 1.0 },\n            { timestamp: '1611972000000', value: 1.0 },\n            { timestamp: '1611975600000', value: 1.0 },\n            { timestamp: '1611979200000', value: 1.0 },\n            { timestamp: '1611982800000', value: 1.0 },\n            { timestamp: '1611986400000', value: 1.0 },\n            { timestamp: '1611990000000', value: 1.0 }\n          ]\n        }\n      ]\n    }\n  ]"),l.a.createElement("br",null),l.a.createElement("br",null),l.a.createElement("hr",null),l.a.createElement("h3",null,"Adding a loader to the health dashbaord. This can be used when fetching the data required for the health dashboard."),l.a.createElement(Q,{loading:!0}),l.a.createElement("br",null),l.a.createElement("br",null),l.a.createElement("hr",null),l.a.createElement("h3",null,"Adding an error message in the dashbaord. This can be used when the data reuiqred for the health dashboard could not be fetched."),l.a.createElement(Q,{error:"An error occurred when fetching data for the Health Dashboard"}));i.a.render(l.a.createElement(V,null),document.getElementById("root"))}},[[198,1,2]]]);
//# sourceMappingURL=main.9c4044ab.chunk.js.map