"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[690],{3690:function(e,n,o){o.r(n),o.d(n,{default:function(){return x}});var r=o(9434),t=o(1087),i=o(6015),a=o(4565),s=o(5017),c=o(6283),l=o(7205),u=o(9273),d=o(3329),p=function(){var e=(0,r.I0)();return(0,d.jsxs)(i.Z,{component:"form",sx:{"& .MuiTextField-root":{mb:3,width:"100%"},py:3,px:4,borderRadius:2,boxShadow:3},onSubmit:function(n){n.preventDefault();var o=n.currentTarget;e((0,u.Ib)({email:o.elements.email.value,password:o.elements.password.value})),o.reset()},autoComplete:"off",children:[(0,d.jsxs)("div",{children:[(0,d.jsx)(a.Z,{variant:"subtitle2",component:"p",sx:{color:"text.primary",mb:2},children:"Enter your email"}),(0,d.jsx)(s.Z,{id:"outlined-email",label:"Email*",type:"email",name:"email",color:"secondary",size:"normal",sx:{"& .MuiOutlinedInput-root":{"& fieldset":{borderColor:"primary.main"}}}})]}),(0,d.jsxs)("div",{children:[(0,d.jsx)(a.Z,{variant:"subtitle2",component:"p",sx:{color:"text.primary",mb:2},children:"Enter your password"}),(0,d.jsx)(s.Z,{id:"outlined-password-input",label:"Password*",type:"password",name:"password",autoComplete:"current-password",color:"secondary",size:"normal",sx:{"& .MuiOutlinedInput-root":{"& fieldset":{borderColor:"primary.main"}}}})]}),(0,d.jsxs)(i.Z,{sx:{display:"flex",px:8,alignItems:"center",justifyContent:"space-between"},children:[(0,d.jsxs)(a.Z,{variant:"subtitle2",component:"p",sx:{fontWeight:500,color:"text.primary"},children:["Don't have an account yet?",(0,d.jsx)(c.Z,{component:t.rU,to:"/register",color:"secondary",underline:"none",sx:{px:1},children:"Sign up here."})]}),(0,d.jsx)(l.Z,{variant:"contained",color:"secondary",type:"submit",sx:{textTransform:"none",color:"text.primary",boxShadow:3},children:"Login"})]}),(0,d.jsx)(a.Z,{variant:"subtitle2",component:"p",sx:{textAlign:"center",mt:3,color:"primary.main",fontWeight:400},children:'By clicking "Sign up" button you agree with our Privacy policy.'})]})},m=o(803);function x(){return(0,d.jsx)(m.Z,{component:"main",children:(0,d.jsxs)(i.Z,{sx:{width:"60%",mx:"auto",my:4},children:[(0,d.jsx)(a.Z,{variant:"body1",component:"p",sx:{color:"text.secondary",mb:2,fontWeight:500},children:"LOGIN"}),(0,d.jsx)(a.Z,{variant:"h4",component:"h2",sx:{color:"text.primary",mb:1,fontWeight:700},children:"Welcome back"}),(0,d.jsx)(a.Z,{variant:"body1",component:"p",sx:{color:"text.secondary",mb:3},children:"Enter your password"}),(0,d.jsx)(p,{})]})})}},6283:function(e,n,o){o.d(n,{Z:function(){return M}});var r=o(2982),t=o(885),i=o(4942),a=o(3366),s=o(7462),c=o(2791),l=o(8182),u=o(4419),d=o(9853),p=o(277),m=o(5513),x=o(2763),y=o(7933),b=o(4565),h=o(5878),f=o(1217);function v(e){return(0,f.Z)("MuiLink",e)}var Z=(0,h.Z)("MuiLink",["root","underlineNone","underlineHover","underlineAlways","button","focusVisible"]),w=o(8529),g=o(2065),j={primary:"primary.main",textPrimary:"text.primary",secondary:"secondary.main",textSecondary:"text.secondary",error:"error.main"},k=function(e){var n=e.theme,o=e.ownerState,r=function(e){return j[e]||e}(o.color),t=(0,w.D)(n,"palette.".concat(r),!1)||o.color,i=(0,w.D)(n,"palette.".concat(r,"Channel"));return"vars"in n&&i?"rgba(".concat(i," / 0.4)"):(0,g.Fq)(t,.4)},C=o(3329),S=["className","color","component","onBlur","onFocus","TypographyClasses","underline","variant","sx"],D=(0,p.ZP)(b.Z,{name:"MuiLink",slot:"Root",overridesResolver:function(e,n){var o=e.ownerState;return[n.root,n["underline".concat((0,d.Z)(o.underline))],"button"===o.component&&n.button]}})((function(e){var n=e.theme,o=e.ownerState;return(0,s.Z)({},"none"===o.underline&&{textDecoration:"none"},"hover"===o.underline&&{textDecoration:"none","&:hover":{textDecoration:"underline"}},"always"===o.underline&&(0,s.Z)({textDecoration:"underline"},"inherit"!==o.color&&{textDecorationColor:k({theme:n,ownerState:o})},{"&:hover":{textDecorationColor:"inherit"}}),"button"===o.component&&(0,i.Z)({position:"relative",WebkitTapHighlightColor:"transparent",backgroundColor:"transparent",outline:0,border:0,margin:0,borderRadius:0,padding:0,cursor:"pointer",userSelect:"none",verticalAlign:"middle",MozAppearance:"none",WebkitAppearance:"none","&::-moz-focus-inner":{borderStyle:"none"}},"&.".concat(Z.focusVisible),{outline:"auto"}))})),M=c.forwardRef((function(e,n){var o=(0,m.Z)({props:e,name:"MuiLink"}),i=o.className,p=o.color,b=void 0===p?"primary":p,h=o.component,f=void 0===h?"a":h,Z=o.onBlur,w=o.onFocus,g=o.TypographyClasses,k=o.underline,M=void 0===k?"always":k,A=o.variant,F=void 0===A?"inherit":A,W=o.sx,I=(0,a.Z)(o,S),L=(0,x.Z)(),R=L.isFocusVisibleRef,T=L.onBlur,V=L.onFocus,B=L.ref,N=c.useState(!1),z=(0,t.Z)(N,2),E=z[0],O=z[1],P=(0,y.Z)(n,B),_=(0,s.Z)({},o,{color:b,component:f,focusVisible:E,underline:M,variant:F}),H=function(e){var n=e.classes,o=e.component,r=e.focusVisible,t=e.underline,i={root:["root","underline".concat((0,d.Z)(t)),"button"===o&&"button",r&&"focusVisible"]};return(0,u.Z)(i,v,n)}(_);return(0,C.jsx)(D,(0,s.Z)({color:b,className:(0,l.Z)(H.root,i),classes:g,component:f,onBlur:function(e){T(e),!1===R.current&&O(!1),Z&&Z(e)},onFocus:function(e){V(e),!0===R.current&&O(!0),w&&w(e)},ref:P,ownerState:_,variant:F,sx:[].concat((0,r.Z)(Object.keys(j).includes(b)?[]:[{color:b}]),(0,r.Z)(Array.isArray(W)?W:[W]))},I))}))}}]);
//# sourceMappingURL=690.ae8c7f96.chunk.js.map