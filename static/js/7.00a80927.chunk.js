(this["webpackJsonpgoose-frontend"]=this["webpackJsonpgoose-frontend"]||[]).push([[7],{754:function(e,t,n){"use strict";var c=n(0),a=n(772),r=n(26),i=n(5);t.a=function(e){var t=e.value,n=e.decimals,s=e.fontSize,o=void 0===s?"40px":s,u=e.prefix,j=e.sufix,b=Object(a.useCountUp)({start:0,end:t,duration:1,separator:",",decimals:void 0!==n?n:t<0?4:t>1e5?0:3}),l=b.countUp,d=b.update,f=Object(c.useRef)(d);return Object(c.useEffect)((function(){f.current(t)}),[t,f]),Object(i.jsxs)(r.B,{bold:!0,fontSize:o,children:[u,l,j]})}},760:function(e,t,n){"use strict";(function(e){var c,a,r,i=n(3),s=n.n(i),o=n(15),u=n(25),j=n(32),b=n(0),l=n(33),d=n(2),f=n(26),O=n(112),p=n(92),x=n(789),h=n(775),m=n(776),g=n(777),v=n(780),w=n(781),y=n(5),S=d.e.div(c||(c=Object(j.a)(["\n    align-items: center;\n  background-image: url('/images/egg/3.png');\n  background-repeat: no-repeat;\n  background-position: top center;\n  display: flex;\n  justify-content: center;\n  flex-direction: column;\n  margin: auto;\n  margin-bottom: 32px;\n  padding-top: 116px;\n  font-weight:600;\n  text-align: center;\n  "," {\n    background-image: url('/images/egg/3.png'), url('/images/egg/3b.png');\n    background-position: left center, right center;\n    height: 165px;\n    padding-top: 0;\n  }\n"])),(function(e){return e.theme.mediaQueries.lg})),k=Object(d.e)(f.b)(a||(a=Object(j.a)(["\n  align-items: stretch;\n  justify-content: stretch;\n  margin-bottom: 48px;\n\n  & > div {\n    grid-column: span 6;\n    width: 100%;\n  }\n\n  "," {\n    & > div {\n      grid-column: span 8;\n    }\n  }\n\n  "," {\n    & > div {\n      grid-column: span 6;\n    }\n  }\n"])),(function(e){return e.theme.mediaQueries.sm}),(function(e){return e.theme.mediaQueries.lg})),M=d.e.div(r||(r=Object(j.a)(["\n  color: white;\n  font-size: 20px;\n  font-weight: 600;\n  text-align: center;\n  text-transform:uppercase\n  display:block;\n  background:#673ab7;\n  width:400px;\n  margin:40px auto;\n  padding:20px;\n  border-radius:20px;\n"])));t.a=function(){Object(O.a)();var t=Object(l.f)(),n=Object(b.useState)({blocksRemaining:0,secondsUntilStart:0,startBlockNum:0}),c=Object(u.a)(n,2),a=(c[0],c[1]),r=Object(w.a)(),i=Object(b.useState)({hours:0,minutes:0,seconds:0}),j=Object(u.a)(i,2),d=j[0],z=j[1],B=Object(b.useState)(!1),A=Object(u.a)(B,2),D=A[0],P=A[1];return Object(b.useEffect)((function(){var n=new URLSearchParams(t.search).get("ref");e.from("0x").toString("base64");window.localStorage.getItem("ref")||window.localStorage.setItem("ref","0kMHgwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAw"),n&&window.localStorage.setItem("ref",n),function(){var e=Object(o.a)(s.a.mark((function e(){var t;return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:r>15294500?P(!1):r>0&&(P(!0),console.log("current block",r),t=Math.ceil(2.05*(15294500-r)),z(Object(v.a)(t)));case 1:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}()()}),[t,r,a,z,P]),Object(y.jsxs)(p.a,{children:[Object(y.jsx)(S,{children:Object(y.jsxs)(f.n,{as:"h1",size:"xl",mb:"24px",color:"secondary",children:[Object(y.jsxs)("div",{style:{display:"inline-block",marginTop:"41px",letterSpacing:"5px",fontSize:"52px",fontFamily:"'Rajdhani', sans-serif"},children:["PolyPingu Finance",Object(y.jsx)("br",{})]}),Object(y.jsxs)("span",{style:{fontSize:"16px",fontFamily:"'Raleway', sans-serif",fontWeight:300},children:[Object(y.jsx)("br",{}),"Deflationary Sustainable Yield Automated Market Maker (AMM) ",Object(y.jsx)("br",{style:{lineHeight:"10px"}}),"with Hybrid Burn Vaults on Polygon"]})]})}),D?Object(y.jsx)(M,{children:"".concat(d.hours,"h, ").concat(d.minutes,"m until farming starts")}):Object(y.jsx)(y.Fragment,{}),Object(y.jsx)("div",{children:Object(y.jsxs)(k,{children:[Object(y.jsx)(x.a,{}),Object(y.jsx)(g.a,{}),Object(y.jsx)(h.a,{}),Object(y.jsx)(m.a,{})]})})]})}}).call(this,n(8).Buffer)},762:function(e,t,n){"use strict";n.d(t,"c",(function(){return p})),n.d(t,"b",(function(){return x}));var c=n(3),a=n.n(c),r=n(15),i=n(25),s=n(0),o=n(12),u=n.n(o),j=n(58),b=n(297),l=n(73),d=n(763),f=n(35),O=n(101),p=function(){var e=Object(O.a)().slowRefresh,t=Object(s.useState)(),n=Object(i.a)(t,2),c=n[0],o=n[1];return Object(s.useEffect)((function(){function e(){return(e=Object(r.a)(a.a.mark((function e(){var t,n;return a.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=Object(l.a)(b,Object(f.a)()),e.next=3,t.methods.totalSupply().call();case 3:n=e.sent,o(new u.a(n));case 5:case"end":return e.stop()}}),e)})))).apply(this,arguments)}!function(){e.apply(this,arguments)}()}),[e]),c},x=function(e){var t=Object(s.useState)(new u.a(0)),n=Object(i.a)(t,2),c=n[0],o=n[1],j=Object(O.a)().slowRefresh;return Object(s.useEffect)((function(){(function(){var e=Object(r.a)(a.a.mark((function e(){var t,n;return a.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=Object(l.a)(b,Object(f.a)()),e.next=3,t.methods.balanceOf("0x000000000000000000000000000000000000dEaD").call();case 3:n=e.sent,o(new u.a(n));case 5:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}})()()}),[e,j]),c};t.a=function(e){var t=Object(s.useState)(new u.a(0)),n=Object(i.a)(t,2),c=n[0],o=n[1],b=Object(j.m)(),l=b.account,f=b.ethereum,p=Object(O.a)().fastRefresh;return Object(s.useEffect)((function(){l&&f&&function(){var t=Object(r.a)(a.a.mark((function t(){var n;return a.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,Object(d.b)(f,e,l);case 2:n=t.sent,o(new u.a(n));case 4:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}}()()}),[l,f,e,p]),c}},775:function(e,t,n){"use strict";var c,a,r=n(32),i=(n(0),n(26)),s=n(757),o=n(2),u=n(749),j=n(762),b=n(112),l=n(35),d=n(754),f=n(115),O=n(5),p=Object(o.e)(i.h)(c||(c=Object(r.a)(["\n  margin-left: auto;\n  margin-right: auto;\n"]))),x=o.e.div(a||(a=Object(r.a)(["\n  align-items: center;\n  display: flex;\n  font-size: 14px;\n  justify-content: space-between;\n  margin-bottom: 8px;\n"])));t.a=function(){var e=Object(b.a)(),t=Object(j.c)(),n=Object(j.b)(Object(l.a)()),c=Object(f.c)(),a=Object(f.f)(),r=t?t.minus(n):new s.a(0),o=Object(u.a)(r),h=a.times(r),m=0;return c&&c[0]&&c[0].eggPerBlock&&(m=new s.a(c[0].eggPerBlock).div(new s.a(10).pow(18)).toNumber()),Object(O.jsx)(p,{children:Object(O.jsxs)(i.i,{children:[Object(O.jsx)(i.n,{size:"xl",mb:"24px",children:"Pingu Stats"}),Object(O.jsxs)(x,{children:[Object(O.jsx)(i.B,{fontSize:"14px",children:e(10005,"Market Cap")}),Object(O.jsx)(d.a,{fontSize:"14px",value:Object(u.a)(h),decimals:0,prefix:"$"})]}),Object(O.jsxs)(x,{children:[Object(O.jsx)(i.B,{fontSize:"14px",children:e(536,"Total Minted")}),t&&Object(O.jsx)(d.a,{fontSize:"14px",value:Object(u.a)(t),decimals:0})]}),Object(O.jsxs)(x,{children:[Object(O.jsx)(i.B,{fontSize:"14px",children:e(538,"Total Burned")}),Object(O.jsx)(d.a,{fontSize:"14px",value:Object(u.a)(n),decimals:0})]}),Object(O.jsxs)(x,{children:[Object(O.jsx)(i.B,{fontSize:"14px",children:e(10004,"Circulating Supply")}),o&&Object(O.jsx)(d.a,{fontSize:"14px",value:o,decimals:0})]}),Object(O.jsxs)(x,{children:[Object(O.jsx)(i.B,{fontSize:"14px",children:"Maximum Supply"}),Object(O.jsx)(d.a,{fontSize:"14px",value:1e6,decimals:0})]}),Object(O.jsxs)(x,{children:[Object(O.jsx)(i.B,{fontSize:"14px",children:e(540,"New Pingu/block")}),Object(O.jsx)(i.B,{bold:!0,fontSize:"14px",children:m})]}),Object(O.jsxs)(x,{children:[Object(O.jsx)(i.B,{fontSize:"14px",children:"Transfer Tax"}),Object(O.jsx)(d.a,{fontSize:"14px",value:4,decimals:2,sufix:"%"})]})]})})}},776:function(e,t,n){"use strict";var c,a=n(32),r=(n(0),n(2)),i=n(26),s=n(112),o=n(115),u=n(754),j=n(5),b=Object(r.e)(i.h)(c||(c=Object(a.a)(["\n  align-items: center;\n  display: flex;\n  flex: 1;\n"])));t.a=function(){var e=Object(s.a)(),t=Object(o.g)();return Object(j.jsx)(b,{children:Object(j.jsxs)(i.i,{children:[Object(j.jsx)(i.n,{size:"lg",mb:"24px",children:e(999,"Total Value Locked (TVL)")}),Object(j.jsxs)(j.Fragment,{children:[Object(j.jsx)(u.a,{value:t.toNumber(),prefix:"$",decimals:2}),Object(j.jsx)(i.B,{color:"textSubtle",children:e(999,"Across all Farms and Pools")})]})]})})}},777:function(e,t,n){"use strict";var c,a,r=n(32),i=(n(0),n(26)),s=n(2),o=n(790),u=n(112),j=n(5),b=Object(s.e)(i.h)(c||(c=Object(r.a)(["\n  margin-left: auto;\n  margin-right: auto;\n"])));s.e.div(a||(a=Object(r.a)(["\n  align-items: center;\n  display: flex;\n  font-size: 14px;\n  justify-content: space-between;\n  margin-bottom: 8px;\n"])));t.a=function(){var e=Object(u.a)();return Object(j.jsx)(b,{children:Object(j.jsxs)(i.i,{children:[Object(j.jsx)(i.n,{size:"xl",mb:"24px",children:e(10003,"Announcements")}),Object(j.jsx)(o.a,{dataSource:{sourceType:"profile",screenName:"polypingu"},options:{height:"300",chrome:"noheader, nofooter",width:"400"}})]})})}},780:function(e,t,n){"use strict";var c=3600,a=86400,r=2629800,i=31557600;t.a=function(e){var t=e,n={years:0,months:0,days:0,hours:0,minutes:0,seconds:0};return t>=i&&(n.years=Math.floor(t/i),t-=n.years*i),t>=r&&(n.months=Math.floor(t/r),t-=n.months*r),t>=a&&(n.days=Math.floor(t/a),t-=n.days*a),t>=c&&(n.hours=Math.floor(t/c),t-=n.hours*c),t>=60&&(n.minutes=Math.floor(t/60),t-=60*n.minutes),n.seconds=t,n}},781:function(e,t,n){"use strict";var c=n(0),a=n(332);t.a=function(){return Object(c.useContext)(a.a)}},789:function(e,t,n){"use strict";var c,a,r,i,s,o,u=n(3),j=n.n(u),b=n(15),l=n(25),d=n(32),f=n(0),O=n(2),p=n(26),x=n(58),h=n(12),m=n.n(h),g=n(112),v=n(73),w=n(761),y=n(16),S=n(38),k=n(35),M=n(72),z=n(759),B=n(101),A=function(){var e=Object(f.useState)([]),t=Object(l.a)(e,2),n=t[0],c=t[1],a=Object(x.m)().account,r=Object(B.a)().fastRefresh;return Object(f.useEffect)((function(){a&&function(){var e=Object(b.a)(j.a.mark((function e(){var t,n,r;return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=z.a.map((function(e){return{address:Object(k.d)(),name:"pendingPingu",params:[e.pid,a]}})),e.next=3,Object(S.a)(M,t);case 3:n=e.sent,r=z.a.map((function(e,t){return Object(y.a)(Object(y.a)({},e),{},{balance:new m.a(n[t])})})),c(r);case 6:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}()()}),[a,r]),n},D=n(194),P=n(754),R=n(5),C=function(e){var t=e.earningsSum,n=Object(g.a)();return Object(x.m)().account?Object(R.jsx)(P.a,{value:t}):Object(R.jsx)(p.B,{color:"textDisabled",style:{lineHeight:"60px"},children:n(298,"Locked")})},E=function(e){var t=e.cakeBalance,n=Object(g.a)();return Object(x.m)().account?Object(R.jsx)(P.a,{value:t,fontSize:"24px"}):Object(R.jsx)(p.B,{color:"textDisabled",style:{lineHeight:"36px"},children:n(298,"Locked")})},F=n(115),N=n(762),T=function(){var e=Object(f.useState)([]),t=Object(l.a)(e,2),n=t[0],c=t[1],a=Object(x.m)().account,r=Object(B.a)().fastRefresh;return Object(f.useEffect)((function(){a&&function(){var e=Object(b.a)(j.a.mark((function e(){var t,n;return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=z.a.map((function(e){return{address:Object(k.d)(),name:"pendingPingu",params:[e.pid,a]}})),e.next=3,Object(S.a)(M,t);case 3:n=e.sent,c(n);case 5:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}()()}),[a,r]),n},H=n(749),L=Object(O.e)(p.h)(c||(c=Object(d.a)(["\n  background-image: url('/images/egg/2a.png');\n  background-repeat: no-repeat;\n  background-position: top right;\n  min-height: 376px;\n"]))),U=O.e.div(a||(a=Object(d.a)(["\n  margin-bottom: 16px;\n"]))),I=(O.e.div(r||(r=Object(d.a)(["\n    -webkit-box-align: center;\n    align-items: center;\n    margin-bottom: 16px;\n\n"]))),O.e.img(i||(i=Object(d.a)(["\n  margin-bottom: 16px;\n"])))),W=O.e.div(s||(s=Object(d.a)(["\n  color: ",";\n  font-size: 14px;\n"])),(function(e){return e.theme.colors.textSubtle})),$=O.e.div(o||(o=Object(d.a)(["\n  margin-top: 24px;\n"])));t.a=function(){var e=Object(f.useState)(!1),t=Object(l.a)(e,2),n=t[0],c=t[1],a=(Object(v.b)(),Object(k.a)()),r=Object(x.m)().account,i=Object(g.a)(),s=A(),o=Object(H.a)(Object(N.a)(Object(k.a)())),u=Object(F.f)().toNumber(),d=T().reduce((function(e,t){return e+new m.a(t).div(new m.a(10).pow(18)).toNumber()}),0),O=s.filter((function(e){return e.balance.toNumber()>0})),h=Object(w.a)(O.map((function(e){return e.pid}))).onReward,y=Object(f.useCallback)(Object(b.a)(j.a.mark((function e(){return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return c(!0),e.prev=1,e.next=4,h();case 4:e.next=8;break;case 6:e.prev=6,e.t0=e.catch(1);case 8:return e.prev=8,c(!1),e.finish(8);case 11:case"end":return e.stop()}}),e,null,[[1,6,8,11]])}))),[h]);return Object(R.jsx)(L,{children:Object(R.jsxs)(p.i,{children:[Object(R.jsx)(p.n,{size:"xl",mb:"24px",children:i(542,"Farms & Staking")}),Object(R.jsxs)(U,{children:[Object(R.jsx)(I,{src:"/images/egg/2.png",alt:"cake logo",width:64,height:64}),Object(R.jsxs)(p.d,{style:{color:"rgb(255, 114, 13)",float:"right",marginTop:"8px"},onClick:function(){var e=Object(b.a)(j.a.mark((function e(t){return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:window.ethereum.request({method:"wallet_watchAsset",params:{type:"ERC20",options:{address:a,symbol:"PINGU",decimals:"18",image:"https://polypingu.finance/images/egg/2.png"}},id:Math.round(1e5*Math.random())},(function(e,t){console.log("provider returned",e,t)}));case 1:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),children:["+",Object(R.jsx)("img",{width:"24",height:"auto",src:"/images/metamask.svg",alt:"metamask logo",style:{marginLeft:"15px"}})]})]}),Object(R.jsxs)(U,{children:[Object(R.jsx)(W,{children:i(544,"Pingu to Harvest")}),Object(R.jsx)(C,{earningsSum:d}),Object(R.jsxs)(W,{children:["~$",(u*d).toFixed(2)]})]}),Object(R.jsxs)(U,{children:[Object(R.jsx)(W,{children:i(546,"Pingu in Wallet")}),Object(R.jsx)(E,{cakeBalance:o}),Object(R.jsxs)(W,{children:["~$",(u*o).toFixed(2)]})]}),Object(R.jsx)($,{children:r?Object(R.jsx)(p.d,{id:"harvest-all",disabled:O.length<=0||n,onClick:y,fullWidth:!0,children:n?i(548,"Collecting Pingu"):i(999,"Harvest all (".concat(O.length,")"))}):Object(R.jsx)(D.a,{fullWidth:!0})})]})})}},791:function(e,t,n){"use strict";n.r(t);var c=n(760);n.d(t,"default",(function(){return c.a}))}}]);
//# sourceMappingURL=7.00a80927.chunk.js.map