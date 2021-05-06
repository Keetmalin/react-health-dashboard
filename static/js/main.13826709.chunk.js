(this["webpackJsonpreact-health-dashboard-example"]=this["webpackJsonpreact-health-dashboard-example"]||[]).push([[0],{229:function(e,t,a){e.exports=a(462)},230:function(e,t,a){},242:function(e,t,a){},462:function(e,t,a){"use strict";a.r(t);a(230);var n=a(0),l=a.n(n),m=a(11),i=a.n(m),s=a(520),r=a(517),u=a(220),o=a(21),p=a(519),c=a(516),v=a(12),d=a(219),g=a(492),h=a(495),x=a(496),y=a(466),b=a(497),E=a(498),f=a(467),S=a(499),k=a(65),C=a(223),T=a(500),w=a(512),z=a(513),H=a(514),O=a(515),F=a(15),j=a(518),D=a(218),B=a(469),N=a(502),W=a(468),M=a(477),A=a(209),G=a.n(A),I=a(210),L=a.n(I),V=a(208),J=a.n(V),P=a(211),K=a.n(P),U="#FFFFFF",X={black:"#000000",white:U,primary:{contrastText:U,dark:v.a.indigo[900],main:v.a.indigo[500],light:v.a.indigo[100]},secondary:{contrastText:U,dark:v.a.blue[900],main:v.a.blue.A400,light:v.a.blue.A400},success:{contrastText:U,dark:v.a.green[900],main:v.a.green[600],light:v.a.green[400]},info:{contrastText:U,dark:v.a.blue[900],main:v.a.blue[600],light:v.a.blue[400]},warning:{contrastText:U,dark:v.a.orange[900],main:v.a.orange[600],light:v.a.orange[400]},error:{contrastText:U,dark:v.a.red[900],main:v.a.red[600],light:v.a.red[400]},text:{primary:v.a.blueGrey[900],secondary:v.a.blueGrey[600],link:v.a.blue[600]},background:{default:"#F4F6F8",paper:U},icon:{primary:"#006066",secondary:"#00e676"},divider:v.a.grey[200]},q={h1:{color:X.text.primary,fontWeight:500,fontSize:"35px",letterSpacing:"-0.24px",lineHeight:"40px"},h2:{color:X.text.primary,fontWeight:500,fontSize:"29px",letterSpacing:"-0.24px",lineHeight:"32px"},h3:{color:X.text.primary,fontWeight:500,fontSize:"24px",letterSpacing:"-0.06px",lineHeight:"28px"},h4:{color:X.text.primary,fontWeight:500,fontSize:"20px",letterSpacing:"-0.06px",lineHeight:"24px"},h5:{color:X.text.primary,fontWeight:500,fontSize:"16px",letterSpacing:"-0.05px",lineHeight:"20px"},h6:{color:X.text.primary,fontWeight:500,fontSize:"14px",letterSpacing:"-0.05px",lineHeight:"20px"},subtitle1:{color:X.text.primary,fontSize:"16px",letterSpacing:"-0.05px",lineHeight:"25px"},subtitle2:{color:X.text.secondary,fontWeight:400,fontSize:"14px",letterSpacing:"-0.05px",lineHeight:"21px"},body1:{color:X.text.primary,fontSize:"14px",letterSpacing:"-0.05px",lineHeight:"21px"},body2:{color:X.text.secondary,fontSize:"12px",letterSpacing:"-0.04px",lineHeight:"18px"},button:{color:X.text.primary,fontSize:"14px"},caption:{color:X.text.secondary,fontSize:"11px",letterSpacing:"0.33px",lineHeight:"13px"},overline:{color:X.text.secondary,fontSize:"11px",fontWeight:500,letterSpacing:"0.33px",lineHeight:"13px",textTransform:"uppercase"}},Q={MuiButton:{contained:{boxShadow:"0 1px 1px 0 rgba(0,0,0,0.14), 0 2px 1px -1px rgba(0,0,0,0.12), 0 1px 3px 0 rgba(0,0,0,0.20)",backgroundColor:"#FFFFFF"}},MuiIconButton:{root:{color:X.icon,"&:hover":{backgroundColor:"rgba(0, 0, 0, 0.03)"}}},MuiPaper:{elevation1:{boxShadow:"0 0 0 1px rgba(63,63,68,0.05), 0 1px 3px 0 rgba(63,63,68,0.15)"}},MuiTableCell:{root:Object(o.a)(Object(o.a)({},q.body1),{},{borderBottom:"1px solid ".concat(X.divider)})},MuiTableHead:{root:{backgroundColor:v.a.grey[50]}},MuiTypography:{gutterBottom:{marginBottom:8}}},R=Object(d.a)({palette:X,typography:q,overrides:Q,zIndex:{appBar:100,drawer:1200}}),Y=function(e){var t,a=e.status,n=e.title,m=e.style;return t=1===a?"#258933":0===a?"#ff0000":a>0&&a<1?"#ebc034":"#918f89",l.a.createElement(g.a,{title:n},l.a.createElement(J.a,{style:Object(o.a)({color:t},m)}))},Z=function(e){var t=e.getHealthServiceData,a=e.dependentServices,n=e.cluster,m=l.a.useState(!1,!0),i=Object(u.a)(m,2),s=i[0],r=i[1];return l.a.createElement(h.a,{style:{verticalAlign:"top"}},l.a.createElement(x.a,{align:"left",style:{width:"1%"}},l.a.createElement(Y,{status:n.status,title:n.lastCheckTime?new Date(n.lastCheckTime).toString():"",style:{margin:"8px 0px"}})),l.a.createElement(x.a,{component:"th",scope:"row",style:{width:"100%"}},l.a.createElement(y.a,{button:!0,onClick:function(){r(!s)}},s?l.a.createElement(G.a,null):l.a.createElement(L.a,null),l.a.createElement(b.a,{primary:n.name,size:"small",dense:"true",style:{width:"200px",margin:"0.1em"}}),l.a.createElement("div",null,n.datapoints&&n.datapoints.map((function(e){return l.a.createElement(Y,{key:e.timestamp,status:e.value,title:new Date(parseInt(e.timestamp)).toString()})})))),l.a.createElement(E.a,{in:s,timeout:"auto",unmountOnExit:!0},l.a.createElement(f.a,{component:"div",disablePadding:!0},a.map((function(e){return l.a.createElement(y.a,{key:e.name,button:!0,onClick:function(){return t(e.name)}},l.a.createElement(S.a,null,l.a.createElement(Y,{status:e.status,title:n.lastCheckTime?new Date(n.lastCheckTime).toString():""})),l.a.createElement(b.a,{primary:e.name,size:"small",dense:"true",style:{width:"200px",margin:"0.1em"}}),l.a.createElement("div",null,e.datapoints.map((function(e){return l.a.createElement(Y,{key:e.timestamp,status:e.value,title:new Date(parseInt(e.timestamp)).toString(),style:{width:"0.8em",margin:"0.1em"}})}))))}))))),l.a.createElement(x.a,{align:"left"},1===n.status?"Healthy":"Unhealthy"))},$={height:"300px",width:"100%",display:"flex",justifyContent:"center",alignItems:"center",background:"white"},_=function(e){var t=e.error;return l.a.createElement("div",{style:$,className:"error-display"},l.a.createElement(K.a,{color:"error"}),l.a.createElement(k.a,{variant:"h5"},t))},ee=Object(p.a)((function(e){return{root:{width:"100%",marginTop:3,overflowX:"auto"},grid:{},selectEnv:{padding:"12px"},table:{minWidth:650},loadingBox:{height:"65px"},loading:{margin:"20px auto",display:"block"},filter:{width:"100px"}}})),te=function(e){var t=e.changeHealthViewEnvironment,a=e.changeHealthViewDate,n=e.changeHealthViewGranularity,m=e.changeHealthViewSLOType,i=e.fetchHealthData,s=e.environments,r=e.granularities,u=e.sloTypes,p=e.filters,c=e.fetching,v=e.error,d=e.showFilters,g=e.data;console.log(g);var y=ee();return l.a.createElement(C.a,{className:y.root},d&&l.a.createElement(T.a,{className:y.grid,container:!0},l.a.createElement(T.a,{className:y.selectEnv,item:!0,xs:6,md:3},l.a.createElement(W.a,null,l.a.createElement(B.a,{id:"environment-selection"},"Environment"),l.a.createElement(M.a,{id:"environment-selection",labelId:"environment-selection",onChange:function(e){t(e.target.value),i(Object(o.a)(Object(o.a)({},p),{},{selectedEnvironment:{value:e.target.value}}))},value:p.selectedEnvironment.value},s.map((function(e){return l.a.createElement(N.a,{value:e.value,key:e.name},e.name)}))))),l.a.createElement(T.a,{className:y.selectEnv,item:!0,xs:6,md:3},l.a.createElement(W.a,null,l.a.createElement(B.a,{id:"graularity-selection"},"Granularity"),l.a.createElement(M.a,{id:"graularity-selection",labelId:"graularity-selection",onChange:function(e){n(e.target.value),i(Object(o.a)(Object(o.a)({},p),{},{selectedGranularity:e.target.value}))},value:p.selectedGranularity},r.map((function(e){return l.a.createElement(N.a,{value:e,key:e},e)}))))),l.a.createElement(T.a,{className:y.selectEnv,item:!0,xs:6,md:3},l.a.createElement(W.a,{className:y.filter},l.a.createElement(B.a,{id:"slo-type-selection"},"SLO Type"),l.a.createElement(M.a,{id:"slo-type-selection",labelId:"slo-type-selection",onChange:function(e){m(e.target.value),i(Object(o.a)(Object(o.a)({},p),{},{selectedSloType:e.target.value}))},value:p.selectedSloType},u.map((function(e){return l.a.createElement(N.a,{value:e,key:e},e)}))))),l.a.createElement(T.a,{item:!0,xs:6,md:3},l.a.createElement(F.a,{utils:D.a},l.a.createElement(j.a,{autoOk:!0,disableToolbar:!0,format:"MM/dd/yyyy",id:"date-picker-inline",KeyboardButtonProps:{"aria-label":"change date"},label:"Select Date",margin:"normal",onChange:function(e){a(e),i(Object(o.a)(Object(o.a)({},p),{},{selectedDate:e.valueOf()}))},value:p.selectedDate,variant:"inline"})))),c?l.a.createElement(w.a,null):v?l.a.createElement(_,{error:v}):l.a.createElement(z.a,{className:y.table,size:"small"},l.a.createElement(H.a,null,l.a.createElement(h.a,null,l.a.createElement(x.a,{align:"left"}),l.a.createElement(x.a,{align:"center"},"Component"),l.a.createElement(x.a,{align:"left"},"Status"))),l.a.createElement(O.a,null,g.map((function(e){return l.a.createElement(Z,{key:e.name,cluster:e,dependentServices:e.elements})})))))},ae=function(e){return l.a.createElement(c.a,{theme:R},l.a.createElement(te,e))},ne=(a(242),[{name:"Google Cloud",status:1,lastCheckTime:161199e7,datapoints:[{timestamp:"1611964800000",value:1},{timestamp:"1611968400000",value:1},{timestamp:"1611972000000",value:1},{timestamp:"1611975600000",value:1},{timestamp:"1611979200000",value:.9996438888888889},{timestamp:"1611982800000",value:1},{timestamp:"1611986400000",value:1},{timestamp:"1611990000000",value:1}],elements:[{name:"Cloud Storage",status:1,lastCheckTime:161199e7,datapoints:[{timestamp:"1611964800000",value:1},{timestamp:"1611968400000",value:1},{timestamp:"1611972000000",value:1},{timestamp:"1611975600000",value:1},{timestamp:"1611979200000",value:1},{timestamp:"1611982800000",value:1},{timestamp:"1611986400000",value:1},{timestamp:"1611990000000",value:1}]}]},{name:"AWS",status:null,lastCheckTime:0,datapoints:[{timestamp:"1611964800000",value:1},{timestamp:"1611968400000",value:1},{timestamp:"1611972000000",value:1},{timestamp:"1611975600000",value:1},{timestamp:"1611979200000",value:0},{timestamp:"1611982800000",value:1},{timestamp:"1611986400000",value:1},{timestamp:"1611990000000",value:1}],elements:[{name:"File Storage",status:null,lastCheckTime:0,datapoints:[{timestamp:"1611964800000",value:1},{timestamp:"1611968400000",value:1},{timestamp:"1611972000000",value:1},{timestamp:"1611975600000",value:1},{timestamp:"1611979200000",value:0},{timestamp:"1611982800000",value:1},{timestamp:"1611986400000",value:1},{timestamp:"1611990000000",value:1}]},{name:"Cloud",status:null,lastCheckTime:0,datapoints:[]},{name:"DNS",status:null,lastCheckTime:0,datapoints:[{timestamp:"1611964800000",value:1},{timestamp:"1611968400000",value:1},{timestamp:"1611972000000",value:1},{timestamp:"1611975600000",value:1},{timestamp:"1611979200000",value:1},{timestamp:"1611982800000",value:1},{timestamp:"1611986400000",value:1},{timestamp:"1611990000000",value:1}]},{name:"Lambda",status:null,lastCheckTime:0,datapoints:[]}]},{name:"Microsoft Azure",status:1,lastCheckTime:161199e7,datapoints:[{timestamp:"1611964800000",value:1},{timestamp:"1611968400000",value:1},{timestamp:"1611972000000",value:1},{timestamp:"1611975600000",value:1},{timestamp:"1611979200000",value:1},{timestamp:"1611982800000",value:1},{timestamp:"1611986400000",value:1},{timestamp:"1611990000000",value:1}],elements:[{name:"Azure Blob Storage",status:1,lastCheckTime:161199e7,datapoints:[{timestamp:"1611964800000",value:1},{timestamp:"1611968400000",value:1},{timestamp:"1611972000000",value:1},{timestamp:"1611975600000",value:1},{timestamp:"1611979200000",value:1},{timestamp:"1611982800000",value:1},{timestamp:"1611986400000",value:1},{timestamp:"1611990000000",value:1}]}]}]),le=function(){return l.a.createElement(l.a.Fragment,null,l.a.createElement(ae,{data:ne}),l.a.createElement("br",null),l.a.createElement("h3",null,"Given below is the JSON that is used as the prop `data` for the above displayed compoenent."),l.a.createElement(s.a,{language:"javascript",style:r.a},"export const healthData = [\n    {\n      name: 'Google Cloud',\n      status: 1.0,\n      lastCheckTime: 1611990000000,\n      datapoints: [\n        { timestamp: '1611964800000', value: 1.0 },\n        { timestamp: '1611968400000', value: 1.0 },\n        { timestamp: '1611972000000', value: 1.0 },\n        { timestamp: '1611975600000', value: 1.0 },\n        { timestamp: '1611979200000', value: 0.9996438888888889 },\n        { timestamp: '1611982800000', value: 1.0 },\n        { timestamp: '1611986400000', value: 1.0 },\n        { timestamp: '1611990000000', value: 1.0 }\n      ],\n      elements: [\n        {\n          name: 'Cloud Storage',\n          status: 1.0,\n          lastCheckTime: 1611990000000,\n          datapoints: [\n            { timestamp: '1611964800000', value: 1.0 },\n            { timestamp: '1611968400000', value: 1.0 },\n            { timestamp: '1611972000000', value: 1.0 },\n            { timestamp: '1611975600000', value: 1.0 },\n            { timestamp: '1611979200000', value: 1.0 },\n            { timestamp: '1611982800000', value: 1.0 },\n            { timestamp: '1611986400000', value: 1.0 },\n            { timestamp: '1611990000000', value: 1.0 }\n          ]\n        }\n      ]\n    },\n    {\n      name: 'AWS',\n      status: null,\n      lastCheckTime: 0,\n      datapoints: [\n        { timestamp: '1611964800000', value: 1.0 },\n        { timestamp: '1611968400000', value: 1.0 },\n        { timestamp: '1611972000000', value: 1.0 },\n        { timestamp: '1611975600000', value: 1.0 },\n        { timestamp: '1611979200000', value: 0.0 },\n        { timestamp: '1611982800000', value: 1.0 },\n        { timestamp: '1611986400000', value: 1.0 },\n        { timestamp: '1611990000000', value: 1.0 }\n      ],\n      elements: [\n        {\n          name: 'File Storage',\n          status: null,\n          lastCheckTime: 0,\n          datapoints: [\n            { timestamp: '1611964800000', value: 1.0 },\n            { timestamp: '1611968400000', value: 1.0 },\n            { timestamp: '1611972000000', value: 1.0 },\n            { timestamp: '1611975600000', value: 1.0 },\n            { timestamp: '1611979200000', value: 0.0 },\n            { timestamp: '1611982800000', value: 1.0 },\n            { timestamp: '1611986400000', value: 1.0 },\n            { timestamp: '1611990000000', value: 1.0 }\n          ]\n        },\n        {\n          name: 'Cloud',\n          status: null,\n          lastCheckTime: 0,\n          datapoints: []\n        },\n        {\n          name: 'DNS',\n          status: null,\n          lastCheckTime: 0,\n          datapoints: [\n            { timestamp: '1611964800000', value: 1.0 },\n            { timestamp: '1611968400000', value: 1.0 },\n            { timestamp: '1611972000000', value: 1.0 },\n            { timestamp: '1611975600000', value: 1.0 },\n            { timestamp: '1611979200000', value: 1.0 },\n            { timestamp: '1611982800000', value: 1.0 },\n            { timestamp: '1611986400000', value: 1.0 },\n            { timestamp: '1611990000000', value: 1.0 }\n          ]\n        },\n        {\n          name: 'Lambda',\n          status: null,\n          lastCheckTime: 0,\n          datapoints: []\n        }\n      ]\n    },\n    {\n      name: 'Microsoft Azure',\n      status: 1.0,\n      lastCheckTime: 1611990000000,\n      datapoints: [\n        { timestamp: '1611964800000', value: 1.0 },\n        { timestamp: '1611968400000', value: 1.0 },\n        { timestamp: '1611972000000', value: 1.0 },\n        { timestamp: '1611975600000', value: 1.0 },\n        { timestamp: '1611979200000', value: 1.0 },\n        { timestamp: '1611982800000', value: 1.0 },\n        { timestamp: '1611986400000', value: 1.0 },\n        { timestamp: '1611990000000', value: 1.0 }\n      ],\n      elements: [\n        {\n          name: 'Azure Blob Storage',\n          status: 1.0,\n          lastCheckTime: 1611990000000,\n          datapoints: [\n            { timestamp: '1611964800000', value: 1.0 },\n            { timestamp: '1611968400000', value: 1.0 },\n            { timestamp: '1611972000000', value: 1.0 },\n            { timestamp: '1611975600000', value: 1.0 },\n            { timestamp: '1611979200000', value: 1.0 },\n            { timestamp: '1611982800000', value: 1.0 },\n            { timestamp: '1611986400000', value: 1.0 },\n            { timestamp: '1611990000000', value: 1.0 }\n          ]\n        }\n      ]\n    }\n  ]"))};i.a.render(l.a.createElement(le,null),document.getElementById("root"))}},[[229,1,2]]]);
//# sourceMappingURL=main.13826709.chunk.js.map