"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[550],{8550:function(e,t,n){n.r(t),n.d(t,{default:function(){return de}});var r=n(2791),o=n(9434),a=n(3634),i=n(7689),s=n(6015),c=n(4565),l=n(1087),d=n(7205),u=n(885),p=n(5629),m=n(4942),v=n(3366),h=n(7462),x=n(8182),f=n(4419),y=n(2065),Z=n(277),g=n(5513),j=n(753),b=n(3026),w=n(7933),C=n(8826),I=n(2652),z=n(3329),S=["alignItems","autoFocus","component","children","dense","disableGutters","divider","focusVisibleClassName","selected","className"],M=(0,Z.ZP)(j.Z,{shouldForwardProp:function(e){return(0,Z.FO)(e)||"classes"===e},name:"MuiListItemButton",slot:"Root",overridesResolver:function(e,t){var n=e.ownerState;return[t.root,n.dense&&t.dense,"flex-start"===n.alignItems&&t.alignItemsFlexStart,n.divider&&t.divider,!n.disableGutters&&t.gutters]}})((function(e){var t,n=e.theme,r=e.ownerState;return(0,h.Z)((t={display:"flex",flexGrow:1,justifyContent:"flex-start",alignItems:"center",position:"relative",textDecoration:"none",minWidth:0,boxSizing:"border-box",textAlign:"left",paddingTop:8,paddingBottom:8,transition:n.transitions.create("background-color",{duration:n.transitions.duration.shortest}),"&:hover":{textDecoration:"none",backgroundColor:(n.vars||n).palette.action.hover,"@media (hover: none)":{backgroundColor:"transparent"}}},(0,m.Z)(t,"&.".concat(I.Z.selected),(0,m.Z)({backgroundColor:n.vars?"rgba(".concat(n.vars.palette.primary.mainChannel," / ").concat(n.vars.palette.action.selectedOpacity,")"):(0,y.Fq)(n.palette.primary.main,n.palette.action.selectedOpacity)},"&.".concat(I.Z.focusVisible),{backgroundColor:n.vars?"rgba(".concat(n.vars.palette.primary.mainChannel," / calc(").concat(n.vars.palette.action.selectedOpacity," + ").concat(n.vars.palette.action.focusOpacity,"))"):(0,y.Fq)(n.palette.primary.main,n.palette.action.selectedOpacity+n.palette.action.focusOpacity)})),(0,m.Z)(t,"&.".concat(I.Z.selected,":hover"),{backgroundColor:n.vars?"rgba(".concat(n.vars.palette.primary.mainChannel," / calc(").concat(n.vars.palette.action.selectedOpacity," + ").concat(n.vars.palette.action.hoverOpacity,"))"):(0,y.Fq)(n.palette.primary.main,n.palette.action.selectedOpacity+n.palette.action.hoverOpacity),"@media (hover: none)":{backgroundColor:n.vars?"rgba(".concat(n.vars.palette.primary.mainChannel," / ").concat(n.vars.palette.action.selectedOpacity,")"):(0,y.Fq)(n.palette.primary.main,n.palette.action.selectedOpacity)}}),(0,m.Z)(t,"&.".concat(I.Z.focusVisible),{backgroundColor:(n.vars||n).palette.action.focus}),(0,m.Z)(t,"&.".concat(I.Z.disabled),{opacity:(n.vars||n).palette.action.disabledOpacity}),t),r.divider&&{borderBottom:"1px solid ".concat((n.vars||n).palette.divider),backgroundClip:"padding-box"},"flex-start"===r.alignItems&&{alignItems:"flex-start"},!r.disableGutters&&{paddingLeft:16,paddingRight:16},r.dense&&{paddingTop:4,paddingBottom:4})})),k=r.forwardRef((function(e,t){var n=(0,g.Z)({props:e,name:"MuiListItemButton"}),o=n.alignItems,a=void 0===o?"center":o,i=n.autoFocus,s=void 0!==i&&i,c=n.component,l=void 0===c?"div":c,d=n.children,u=n.dense,p=void 0!==u&&u,m=n.disableGutters,y=void 0!==m&&m,Z=n.divider,j=void 0!==Z&&Z,k=n.focusVisibleClassName,R=n.selected,E=void 0!==R&&R,L=n.className,T=(0,v.Z)(n,S),F=r.useContext(C.Z),N={dense:p||F.dense||!1,alignItems:a,disableGutters:y},O=r.useRef(null);(0,b.Z)((function(){s&&O.current&&O.current.focus()}),[s]);var P=(0,h.Z)({},n,{alignItems:a,dense:N.dense,disableGutters:y,divider:j,selected:E}),H=function(e){var t=e.alignItems,n=e.classes,r=e.dense,o=e.disabled,a={root:["root",r&&"dense",!e.disableGutters&&"gutters",e.divider&&"divider",o&&"disabled","flex-start"===t&&"alignItemsFlexStart",e.selected&&"selected"]},i=(0,f.Z)(a,I.t,n);return(0,h.Z)({},n,i)}(P),V=(0,w.Z)(O,t);return(0,z.jsx)(C.Z.Provider,{value:N,children:(0,z.jsx)(M,(0,h.Z)({ref:V,href:T.href||T.to,component:(T.href||T.to)&&"div"===l?"a":l,focusVisibleClassName:(0,x.Z)(H.focusVisible,k),ownerState:P,className:(0,x.Z)(H.root,L)},T,{classes:H,children:d}))})})),R=n(9343),E=["className"],L=(0,Z.ZP)("div",{name:"MuiListItemIcon",slot:"Root",overridesResolver:function(e,t){var n=e.ownerState;return[t.root,"flex-start"===n.alignItems&&t.alignItemsFlexStart]}})((function(e){var t=e.theme,n=e.ownerState;return(0,h.Z)({minWidth:56,color:(t.vars||t).palette.action.active,flexShrink:0,display:"inline-flex"},"flex-start"===n.alignItems&&{marginTop:8})})),T=r.forwardRef((function(e,t){var n=(0,g.Z)({props:e,name:"MuiListItemIcon"}),o=n.className,a=(0,v.Z)(n,E),i=r.useContext(C.Z),s=(0,h.Z)({},n,{alignItems:i.alignItems}),c=function(e){var t=e.alignItems,n=e.classes,r={root:["root","flex-start"===t&&"alignItemsFlexStart"]};return(0,f.Z)(r,R.f,n)}(s);return(0,z.jsx)(L,(0,h.Z)({className:(0,x.Z)(c.root,o),ownerState:s,ref:t},a))})),F=n(9282),N=["children","className","disableTypography","inset","primary","primaryTypographyProps","secondary","secondaryTypographyProps"],O=(0,Z.ZP)("div",{name:"MuiListItemText",slot:"Root",overridesResolver:function(e,t){var n=e.ownerState;return[(0,m.Z)({},"& .".concat(F.Z.primary),t.primary),(0,m.Z)({},"& .".concat(F.Z.secondary),t.secondary),t.root,n.inset&&t.inset,n.primary&&n.secondary&&t.multiline,n.dense&&t.dense]}})((function(e){var t=e.ownerState;return(0,h.Z)({flex:"1 1 auto",minWidth:0,marginTop:4,marginBottom:4},t.primary&&t.secondary&&{marginTop:6,marginBottom:6},t.inset&&{paddingLeft:56})})),P=r.forwardRef((function(e,t){var n=(0,g.Z)({props:e,name:"MuiListItemText"}),o=n.children,a=n.className,i=n.disableTypography,s=void 0!==i&&i,l=n.inset,d=void 0!==l&&l,u=n.primary,p=n.primaryTypographyProps,m=n.secondary,y=n.secondaryTypographyProps,Z=(0,v.Z)(n,N),j=r.useContext(C.Z).dense,b=null!=u?u:o,w=m,I=(0,h.Z)({},n,{disableTypography:s,inset:d,primary:!!b,secondary:!!w,dense:j}),S=function(e){var t=e.classes,n=e.inset,r=e.primary,o=e.secondary,a={root:["root",n&&"inset",e.dense&&"dense",r&&o&&"multiline"],primary:["primary"],secondary:["secondary"]};return(0,f.Z)(a,F.L,t)}(I);return null==b||b.type===c.Z||s||(b=(0,z.jsx)(c.Z,(0,h.Z)({variant:j?"body2":"body1",className:S.primary,component:null!=p&&p.variant?void 0:"span",display:"block"},p,{children:b}))),null==w||w.type===c.Z||s||(w=(0,z.jsx)(c.Z,(0,h.Z)({variant:"body2",className:S.secondary,color:"text.secondary",display:"block"},y,{children:w}))),(0,z.jsxs)(O,(0,h.Z)({className:(0,x.Z)(S.root,a),ownerState:I,ref:t},Z,{children:[b,w]}))})),H=n(6752),V=n(5354),D=n(6780),W=n(4142),B=n(5878),G=n(1217);function A(e){return(0,G.Z)("MuiCollapse",e)}(0,B.Z)("MuiCollapse",["root","horizontal","vertical","entered","hidden","wrapper","wrapperInner"]);var U=["addEndListener","children","className","collapsedSize","component","easing","in","onEnter","onEntered","onEntering","onExit","onExited","onExiting","orientation","style","timeout","TransitionComponent"],q=(0,Z.ZP)("div",{name:"MuiCollapse",slot:"Root",overridesResolver:function(e,t){var n=e.ownerState;return[t.root,t[n.orientation],"entered"===n.state&&t.entered,"exited"===n.state&&!n.in&&"0px"===n.collapsedSize&&t.hidden]}})((function(e){var t=e.theme,n=e.ownerState;return(0,h.Z)({height:0,overflow:"hidden",transition:t.transitions.create("height")},"horizontal"===n.orientation&&{height:"auto",width:0,transition:t.transitions.create("width")},"entered"===n.state&&(0,h.Z)({height:"auto",overflow:"visible"},"horizontal"===n.orientation&&{width:"auto"}),"exited"===n.state&&!n.in&&"0px"===n.collapsedSize&&{visibility:"hidden"})})),_=(0,Z.ZP)("div",{name:"MuiCollapse",slot:"Wrapper",overridesResolver:function(e,t){return t.wrapper}})((function(e){var t=e.ownerState;return(0,h.Z)({display:"flex",width:"100%"},"horizontal"===t.orientation&&{width:"auto",height:"100%"})})),J=(0,Z.ZP)("div",{name:"MuiCollapse",slot:"WrapperInner",overridesResolver:function(e,t){return t.wrapperInner}})((function(e){var t=e.ownerState;return(0,h.Z)({width:"100%"},"horizontal"===t.orientation&&{width:"auto",height:"100%"})})),K=r.forwardRef((function(e,t){var n=(0,g.Z)({props:e,name:"MuiCollapse"}),o=n.addEndListener,a=n.children,i=n.className,s=n.collapsedSize,c=void 0===s?"0px":s,l=n.component,d=n.easing,u=n.in,p=n.onEnter,y=n.onEntered,Z=n.onEntering,j=n.onExit,b=n.onExited,C=n.onExiting,I=n.orientation,S=void 0===I?"vertical":I,M=n.style,k=n.timeout,R=void 0===k?V.x9.standard:k,E=n.TransitionComponent,L=void 0===E?H.ZP:E,T=(0,v.Z)(n,U),F=(0,h.Z)({},n,{orientation:S,collapsedSize:c}),N=function(e){var t=e.orientation,n=e.classes,r={root:["root","".concat(t)],entered:["entered"],hidden:["hidden"],wrapper:["wrapper","".concat(t)],wrapperInner:["wrapperInner","".concat(t)]};return(0,f.Z)(r,A,n)}(F),O=(0,W.Z)(),P=r.useRef(),B=r.useRef(null),G=r.useRef(),K="number"===typeof c?"".concat(c,"px"):c,Q="horizontal"===S,X=Q?"width":"height";r.useEffect((function(){return function(){clearTimeout(P.current)}}),[]);var Y=r.useRef(null),$=(0,w.Z)(t,Y),ee=function(e){return function(t){if(e){var n=Y.current;void 0===t?e(n):e(n,t)}}},te=function(){return B.current?B.current[Q?"clientWidth":"clientHeight"]:0},ne=ee((function(e,t){B.current&&Q&&(B.current.style.position="absolute"),e.style[X]=K,p&&p(e,t)})),re=ee((function(e,t){var n=te();B.current&&Q&&(B.current.style.position="");var r=(0,D.C)({style:M,timeout:R,easing:d},{mode:"enter"}),o=r.duration,a=r.easing;if("auto"===R){var i=O.transitions.getAutoHeightDuration(n);e.style.transitionDuration="".concat(i,"ms"),G.current=i}else e.style.transitionDuration="string"===typeof o?o:"".concat(o,"ms");e.style[X]="".concat(n,"px"),e.style.transitionTimingFunction=a,Z&&Z(e,t)})),oe=ee((function(e,t){e.style[X]="auto",y&&y(e,t)})),ae=ee((function(e){e.style[X]="".concat(te(),"px"),j&&j(e)})),ie=ee(b),se=ee((function(e){var t=te(),n=(0,D.C)({style:M,timeout:R,easing:d},{mode:"exit"}),r=n.duration,o=n.easing;if("auto"===R){var a=O.transitions.getAutoHeightDuration(t);e.style.transitionDuration="".concat(a,"ms"),G.current=a}else e.style.transitionDuration="string"===typeof r?r:"".concat(r,"ms");e.style[X]=K,e.style.transitionTimingFunction=o,C&&C(e)}));return(0,z.jsx)(L,(0,h.Z)({in:u,onEnter:ne,onEntered:oe,onEntering:re,onExit:ae,onExited:ie,onExiting:se,addEndListener:function(e){"auto"===R&&(P.current=setTimeout(e,G.current||0)),o&&o(Y.current,e)},nodeRef:Y,timeout:"auto"===R?null:R},T,{children:function(e,t){return(0,z.jsx)(q,(0,h.Z)({as:l,className:(0,x.Z)(N.root,i,{entered:N.entered,exited:!u&&"0px"===K&&N.hidden}[e]),style:(0,h.Z)((0,m.Z)({},Q?"minWidth":"minHeight",K),M),ownerState:(0,h.Z)({},F,{state:e}),ref:$},t,{children:(0,z.jsx)(_,{ownerState:(0,h.Z)({},F,{state:e}),className:N.wrapper,ref:B,children:(0,z.jsx)(J,{ownerState:(0,h.Z)({},F,{state:e}),className:N.wrapperInner,children:a})})}))}}))}));K.muiSupportAuto=!0;var Q=K,X=n(2885),Y=n(1131),$=n(1444),ee=n(4684),te=n(9527),ne=n(7206),re=n(3292),oe=n(6424);function ae(){var e=(0,r.useState)(0),t=(0,u.Z)(e,2),n=t[0],o=t[1],a=(0,r.useState)(!0),i=(0,u.Z)(a,2),c=i[0],d=i[1],m=function(e,t){o(t)};return(0,z.jsx)(s.Z,{sx:{width:"100%"},children:(0,z.jsxs)(p.Z,{component:"nav","aria-label":"main mailbox folders",sx:{color:"text.primary","&& .Mui-selected, && .Mui-selected:hover":{backgroundColor:"rgb(230, 81, 0)",color:"text.primary","&, & .MuiListItemIcon-root":{color:"text.primary"}},"& .MuiListItemButton-root:hover":{color:"rgb(230, 81, 0)","&, & .MuiListItemIcon-root":{color:"rgb(230, 81, 0)"}}},children:[(0,z.jsxs)(k,{component:l.rU,to:"/contacts",selected:0===n,onClick:function(e){return m(0,0)},children:[(0,z.jsx)(T,{sx:{color:"text.primary"},children:(0,z.jsx)(ee.Z,{})}),(0,z.jsx)(P,{primary:"All Contacts"})]}),(0,z.jsxs)(k,{component:l.rU,to:"favorites",selected:1===n,onClick:function(e){return m(0,1)},children:[(0,z.jsx)(T,{sx:{color:"text.primary"},children:(0,z.jsx)($.Z,{})}),(0,z.jsx)(P,{primary:"Favorites"})]}),(0,z.jsxs)(k,{selected:2===n,onClick:function(){d(!c)},children:[(0,z.jsx)(P,{primary:"Groups"}),c?(0,z.jsx)(X.Z,{}):(0,z.jsx)(Y.Z,{})]}),(0,z.jsx)(Q,{in:c,timeout:"auto",unmountOnExit:!0,children:(0,z.jsxs)(p.Z,{component:"div",disablePadding:!0,children:[(0,z.jsxs)(k,{component:l.rU,to:"coworkers",sx:{pl:4},selected:3===n,onClick:function(e){return m(0,3)},children:[(0,z.jsx)(T,{sx:{color:"text.primary"},children:(0,z.jsx)(te.Z,{})}),(0,z.jsx)(P,{primary:"Co-workers"})]}),(0,z.jsxs)(k,{component:l.rU,to:"family",sx:{pl:4},selected:4===n,onClick:function(e){return m(0,4)},children:[(0,z.jsx)(T,{sx:{color:"text.primary"},children:(0,z.jsx)(ne.Z,{})}),(0,z.jsx)(P,{primary:"Family"})]}),(0,z.jsxs)(k,{component:l.rU,to:"friends",sx:{pl:4},selected:5===n,onClick:function(e){return m(0,5)},children:[(0,z.jsx)(T,{sx:{color:"text.primary"},children:(0,z.jsx)(re.Z,{})}),(0,z.jsx)(P,{primary:"Friends"})]}),(0,z.jsxs)(k,{component:l.rU,to:"other",sx:{pl:4},selected:6===n,onClick:function(e){return m(0,6)},children:[(0,z.jsx)(T,{sx:{color:"text.primary"},children:(0,z.jsx)(oe.Z,{})}),(0,z.jsx)(P,{primary:"Other"})]})]})})]})})}var ie=n(8627),se=n(2996);function ce(){var e=(0,ie.a)().user;return(0,z.jsxs)(s.Z,{component:"aside",sx:{width:260,display:"flex",flexDirection:"column",bgcolor:"background.primary",p:3,pb:10,borderRadius:2,boxShadow:3},children:[(0,z.jsxs)(s.Z,{sx:{display:"flex",width:"100%",alignItems:"center",gap:3,mb:6},children:[(0,z.jsx)(se.Z,{}),(0,z.jsxs)(c.Z,{variant:"body2",component:"p",color:"secondary",children:["Welcome, ",e.name,"!"]})]}),(0,z.jsx)(d.Z,{variant:"contained",component:l.rU,to:"addcontact",color:"secondary",size:"large",sx:{mb:5,textTransform:"none",boxShadow:3,fontWeight:500,color:"text.primary"},children:"+ Add Contact"}),(0,z.jsx)(ae,{})]})}var le=n(5025);function de(){var e=(0,o.I0)();return(0,r.useEffect)((function(){e((0,a.yF)())}),[e]),(0,z.jsxs)(s.Z,{component:"main",sx:{display:"flex",px:3,py:2},children:[(0,z.jsx)(ce,{}),(0,z.jsxs)(s.Z,{sx:{width:"80%",px:3},children:[(0,z.jsxs)(s.Z,{sx:{display:"flex",width:"100%",p:2,alignItems:"center",justifyContent:"space-between",borderRadius:2,boxShadow:3},children:[(0,z.jsx)(c.Z,{variant:"h4",component:"h2",color:"text.primary",sx:{fontWeight:"700"},children:"Contacts"}),(0,z.jsx)(le.Z,{})]}),(0,z.jsx)(i.j3,{})]})]})}},3292:function(e,t,n){var r=n(4836);t.Z=void 0;var o=r(n(5649)),a=n(3329),i=(0,o.default)([(0,a.jsx)("path",{d:"M6.32 13.01c.96.02 1.85.5 2.45 1.34C9.5 15.38 10.71 16 12 16s2.5-.62 3.23-1.66c.6-.84 1.49-1.32 2.45-1.34-.72-1.22-3.6-2-5.68-2-2.07 0-4.96.78-5.68 2.01zM4 13c1.66 0 3-1.34 3-3S5.66 7 4 7s-3 1.34-3 3 1.34 3 3 3zm16 0c1.66 0 3-1.34 3-3s-1.34-3-3-3-3 1.34-3 3 1.34 3 3 3zm-8-3c1.66 0 3-1.34 3-3s-1.34-3-3-3-3 1.34-3 3 1.34 3 3 3z"},"0"),(0,a.jsx)("path",{d:"M21 14h-3.27c-.77 0-1.35.45-1.68.92-.04.06-1.36 2.08-4.05 2.08-1.43 0-3.03-.64-4.05-2.08-.39-.55-1-.92-1.68-.92H3c-1.1 0-2 .9-2 2v4h7v-2.26c1.15.8 2.54 1.26 4 1.26s2.85-.46 4-1.26V20h7v-4c0-1.1-.9-2-2-2z"},"1")],"Diversity3");t.Z=i},2885:function(e,t,n){var r=n(4836);t.Z=void 0;var o=r(n(5649)),a=n(3329),i=(0,o.default)((0,a.jsx)("path",{d:"m12 8-6 6 1.41 1.41L12 10.83l4.59 4.58L18 14z"}),"ExpandLess");t.Z=i},1131:function(e,t,n){var r=n(4836);t.Z=void 0;var o=r(n(5649)),a=n(3329),i=(0,o.default)((0,a.jsx)("path",{d:"M16.59 8.59 12 13.17 7.41 8.59 6 10l6 6 6-6z"}),"ExpandMore");t.Z=i},7206:function(e,t,n){var r=n(4836);t.Z=void 0;var o=r(n(5649)),a=n(3329),i=(0,o.default)((0,a.jsx)("path",{d:"M16 4c0-1.11.89-2 2-2s2 .89 2 2-.89 2-2 2-2-.89-2-2zm4 18v-6h2.5l-2.54-7.63C19.68 7.55 18.92 7 18.06 7h-.12c-.86 0-1.63.55-1.9 1.37l-.86 2.58c1.08.6 1.82 1.73 1.82 3.05v8h3zm-7.5-10.5c.83 0 1.5-.67 1.5-1.5s-.67-1.5-1.5-1.5S11 9.17 11 10s.67 1.5 1.5 1.5zM5.5 6c1.11 0 2-.89 2-2s-.89-2-2-2-2 .89-2 2 .89 2 2 2zm2 16v-7H9V9c0-1.1-.9-2-2-2H4c-1.1 0-2 .9-2 2v6h1.5v7h4zm6.5 0v-4h1v-4c0-.82-.68-1.5-1.5-1.5h-2c-.82 0-1.5.68-1.5 1.5v4h1v4h3z"}),"FamilyRestroom");t.Z=i},6424:function(e,t,n){var r=n(4836);t.Z=void 0;var o=r(n(5649)),a=n(3329),i=(0,o.default)((0,a.jsx)("path",{d:"M12 6c-1.1 0-2-.9-2-2s.9-2 2-2 2 .9 2 2-.9 2-2 2zm5-4h2v.4c-.1 2.2-.8 3.9-2.3 5.1-.5.4-1.1.7-1.7.9V22h-2v-6h-2v6H9V10.1c-.3.1-.5.2-.6.3-.9.7-1.39 1.6-1.4 3.1v.5H5v-.5c0-2 .71-3.59 2.11-4.79C8.21 7.81 10 7 12 7s2.68-.46 3.48-1.06C16.48 5.14 17 4 17 2.5V2zM4 16h3v6H4v-6z"}),"Hail");t.Z=i},9527:function(e,t,n){var r=n(4836);t.Z=void 0;var o=r(n(5649)),a=n(3329),i=(0,o.default)([(0,a.jsx)("path",{fillRule:"evenodd",d:"M16.67 13.13C18.04 14.06 19 15.32 19 17v3h4v-3c0-2.18-3.57-3.47-6.33-3.87z"},"0"),(0,a.jsx)("circle",{cx:"9",cy:"8",r:"4",fillRule:"evenodd"},"1"),(0,a.jsx)("path",{fillRule:"evenodd",d:"M15 12c2.21 0 4-1.79 4-4s-1.79-4-4-4c-.47 0-.91.1-1.33.24C14.5 5.27 15 6.58 15 8s-.5 2.73-1.33 3.76c.42.14.86.24 1.33.24zm-6 1c-2.67 0-8 1.34-8 4v3h16v-3c0-2.66-5.33-4-8-4z"},"2")],"PeopleAlt");t.Z=i},4684:function(e,t,n){var r=n(4836);t.Z=void 0;var o=r(n(5649)),a=n(3329),i=(0,o.default)((0,a.jsx)("path",{d:"M19 3h-1V1h-2v2H8V1H6v2H5c-1.11 0-2 .9-2 2v14c0 1.1.89 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm-7 3c1.66 0 3 1.34 3 3s-1.34 3-3 3-3-1.34-3-3 1.34-3 3-3zm6 12H6v-1c0-2 4-3.1 6-3.1s6 1.1 6 3.1v1z"}),"PermContactCalendar");t.Z=i},1444:function(e,t,n){var r=n(4836);t.Z=void 0;var o=r(n(5649)),a=n(3329),i=(0,o.default)((0,a.jsx)("path",{d:"m22 9.24-7.19-.62L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21 12 17.27 18.18 21l-1.63-7.03L22 9.24zM12 15.4l-3.76 2.27 1-4.28-3.32-2.88 4.38-.38L12 6.1l1.71 4.04 4.38.38-3.32 2.88 1 4.28L12 15.4z"}),"StarBorder");t.Z=i}}]);
//# sourceMappingURL=550.0e82747c.chunk.js.map