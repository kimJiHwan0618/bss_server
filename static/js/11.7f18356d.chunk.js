"use strict";(self.webpackChunkdiamond_bss_front=self.webpackChunkdiamond_bss_front||[]).push([[11],{50011:function(e,t,n){n.r(t);var r=n(29439),l=n(57689),a=(n(68639),n(72791)),c=(n(76672),n(62623)),s=n(50661),o=n(25470),u=n(65073),i=n(83990),d=n(30337),f=(n(58988),n(81694)),m=n.n(f),p=n(51095),h=n(66997),v=n(80184);t.default=function(){var e=(0,s.I0)(),t=(0,s.v9)(p.s8).company,n=(0,s.v9)(p.s8).project,f=(0,s.v9)(p.s8).department,y=(0,s.v9)(p.s8).role,j=(0,a.useState)([]),_=(0,r.Z)(j,2),b=_[0],x=_[1],g=(0,a.useState)([]),N=(0,r.Z)(g,2),C=N[0],I=N[1],k=(0,a.useState)([]),E=(0,r.Z)(k,2),w=E[0],O=E[1],S=(0,a.useState)([]),L=(0,r.Z)(S,2),P=L[0],V=L[1],Z=(0,a.useState)(""),A=(0,r.Z)(Z,2),U=A[0],R=A[1],B=(0,a.useState)(""),D=(0,r.Z)(B,2),M=D[0],T=D[1],Y=(0,a.useState)(""),$=(0,r.Z)(Y,2),F=$[0],K=$[1],z=(0,a.useState)(""),H=(0,r.Z)(z,2),q=H[0],G=H[1],W=(0,l.s0)(),J=(0,l.TH)().state,Q=(0,a.useRef)(),X=(0,a.useRef)(),ee=(0,a.useRef)(),te=(0,a.useRef)(),ne=(0,a.useRef)(),re=(0,a.useState)([]),le=(0,r.Z)(re,2),ae=le[0],ce=(le[1],(0,s.v9)(h.hK).admins);return(0,a.useEffect)((function(){if(x(t),V(y),"\ucd94\uac00"===J.detailLink[0].title){R(t[0].code),T(y[0].code);var e=n.filter((function(e){return e.parentId===t[0].code}));I(e),G(n[0].code),O(f.filter((function(t){return t.parentId===e[0].code}))),K(f[0].code)}else"\uc218\uc815"===J.detailLink[0].title&&(R(J.companyId),T(J.role),I(n.filter((function(e){return e.parentId===J.companyId}))),G(J.projectId),O(f.filter((function(e){return e.parentId===J.projectId}))),K(J.deptId))}),[J.detailLink[0].title,J.companyId,J.projectId,J.role,J.deptId]),(0,v.jsxs)("div",{className:"section__grid__wrap content batteries__add__update admin__manage",children:[(0,v.jsx)(u.DR,{flag:J.detailLink[0].title,deleteBtnClick:function(){(0,d._1)({title:"\uc6b4\uc601\uc790 \uc815\ubcf4\ub97c \uc0ad\uc81c \ud558\uc2dc\uaca0\uc2b5\ub2c8\uae4c?",buttons:[{label:"\uc608",onClick:function(){e((0,i.bA)());var t=ce.slice().filter((function(e){return e.userId!==J.userId}));e((0,i.xv)()),e((0,h.NV)({data:t})),e((0,o.PV)({message:"\uc6b4\uc601\uc790 \uc815\ubcf4\uac00 \uc0ad\uc81c\ub418\uc5c8\uc2b5\ub2c8\ub2e4.",variant:"success"})),W("/bss_server/systemManagement/admin")}},{label:"\ucde8\uc18c"}]})},saveBtnClick:function(){(0,d._1)({title:"\uc6b4\uc601\uc790 \uc815\ubcf4\ub97c ".concat(J.detailLink[0].title," \ud558\uc2dc\uaca0\uc2b5\ub2c8\uae4c?"),buttons:[{label:"\uc608",onClick:function(){var t={};if((0,c.o)(Q.current.value))if((0,c.S)(ee.current.value)){t.companyId=U,t.projectId=q,t.deptId=F,t.userId=Q.current.value,t.username=X.current.value,t.phone=ee.current.value,t.role=M,t.userDesc=te.current.value,t.useYn=ne.current.value;var n=new Date,r=n.getFullYear(),l="0".concat(n.getMonth()+1).slice(-2),a="0".concat(n.getDate()).slice(-2),s="".concat(r,"-").concat(l,"-").concat(a),u="0".concat(n.getHours()).slice(-2),d="0".concat(n.getMinutes()).slice(-2),m="0".concat(n.getSeconds()).slice(-2),p="".concat(u,":").concat(d,":").concat(m),v=ce.slice(),j=v.filter((function(e){return e.userId!==J.userId}));switch(e((0,i.bA)()),J.detailLink[0].title){case"\ucd94\uac00":v.push({companyId:U,deptId:F,deptName:f.filter((function(e){return e.code===F}))[0].codeName,projectId:q,userId:Q.current.value,username:X.current.value,role:M,roleName:y.filter((function(e){return e.code===M}))[0].codeName,email:Q.current.value,phone:ee.current.value,useYn:ne.current.value,updateUsername:"\ud55c\ube5b \uad00\ub9ac\uc790",updateTime:"".concat(s," ").concat(p)}),e((0,i.xv)()),e((0,h.NV)({data:v})),e((0,o.PV)({message:"\uc6b4\uc601\uc790 \uc815\ubcf4\uac00 \ucd94\uac00\ub418\uc5c8\uc2b5\ub2c8\ub2e4.",variant:"success"})),W("/bss_server/systemManagement/admin");break;case"\uc218\uc815":j.push({companyId:U,deptId:F,deptName:f.filter((function(e){return e.code===F}))[0].codeName,projectId:q,userId:J.userId,username:X.current.value,role:M,roleName:y.filter((function(e){return e.code===M}))[0].codeName,email:Q.current.value,phone:ee.current.value,useYn:ne.current.value,updateUsername:"\ud55c\ube5b \uad00\ub9ac\uc790",updateTime:"".concat(s," ").concat(p)}),e((0,i.xv)()),e((0,h.NV)({data:j})),e((0,o.PV)({message:"\uc6b4\uc601\uc790 \uc815\ubcf4\uac00 \uc218\uc815\ub418\uc5c8\uc2b5\ub2c8\ub2e4.",variant:"success"})),W("/bss_server/systemManagement/admin")}}else e((0,o.PV)({message:"\uc5f0\ub77d\ucc98 \ud615\uc2dd\uc744 \ud655\uc778\ud574\uc8fc\uc138\uc694",variant:"error"}));else e((0,o.PV)({message:"\uc0ac\uc6a9\uc790 ID \uc774\uba54\uc77c \ud615\uc2dd\uc744 \ud655\uc778\ud574\uc8fc\uc138\uc694",variant:"error"}))}},{label:"\ucde8\uc18c"}]})}}),(0,v.jsx)("section",{className:"input__wrap",children:(0,v.jsx)("div",{className:"section__inner",children:(0,v.jsxs)("ul",{className:"selector__wrap",children:[(0,v.jsx)("li",{children:(0,v.jsxs)("dl",{children:[(0,v.jsxs)("dt",{children:[(0,v.jsx)("span",{className:"f__bold",style:{color:"red"},children:"*\xa0"}),"\ud68c\uc0ac\uba85"]}),(0,v.jsx)("dd",{children:(0,v.jsx)("select",{value:U,className:"custom__select",onChange:function(e){R(e.target.value),I(n.filter((function(t){return t.parentId===e.target.value}))),G(C[0].code),O(f.filter((function(e){return e.parentId===C[0].code}))),K(w[0].code)},children:b.map((function(e,t){return(0,v.jsx)("option",{value:e.code,children:e.codeName},e.code)}))})})]})}),(0,v.jsx)("li",{children:(0,v.jsxs)("dl",{children:[(0,v.jsxs)("dt",{children:[(0,v.jsx)("span",{className:"f__bold",style:{color:"red"},children:"*\xa0"}),"\ud504\ub85c\uc81d\ud2b8\uba85"]}),(0,v.jsx)("dd",{children:(0,v.jsx)("select",{value:q,className:"custom__select",onChange:function(e){G(e.target.value),O(f.filter((function(t){return t.parentId===e.target.value}))),K(w[0].code)},children:C.map((function(e,t){return(0,v.jsx)("option",{value:e.code,children:e.codeName},e.code)}))})})]})}),(0,v.jsx)("li",{children:(0,v.jsxs)("dl",{children:[(0,v.jsxs)("dt",{children:[(0,v.jsx)("span",{className:"f__bold",style:{color:"red"},children:"*\xa0"}),"\ubd80\uc11c\uba85"]}),(0,v.jsx)("dd",{children:(0,v.jsx)("select",{value:F,className:"custom__select",onChange:function(e){K(e.target.value)},children:w.map((function(e,t){return(0,v.jsx)("option",{value:e.code,children:e.codeName},e.code)}))})})]})}),(0,v.jsx)("li",{children:(0,v.jsxs)("dl",{children:[(0,v.jsxs)("dt",{children:[(0,v.jsx)("span",{className:"f__bold",style:{color:"red"},children:"*\xa0"}),"\uc0ac\uc6a9\uc790ID"]}),(0,v.jsxs)("dd",{children:[(0,v.jsx)("input",{defaultValue:J.userId,type:"email",className:m()("custom__input",[{readonly:"\uc218\uc815"===J.detailLink[0].title}]),readOnly:"\uc218\uc815"===J.detailLink[0].title,ref:Q}),ae.map((function(e){return"userId"===e.type&&(0,v.jsx)("p",{className:"f__medium field__error",children:e.message})}))]})]})}),(0,v.jsx)("li",{children:(0,v.jsxs)("dl",{children:[(0,v.jsxs)("dt",{children:[(0,v.jsx)("span",{className:"f__bold",style:{color:"red"},children:"*\xa0"}),"\uc0ac\uc6a9\uc790\uba85"]}),(0,v.jsx)("dd",{children:(0,v.jsx)("input",{defaultValue:J.username,type:"text",className:"custom__input",ref:X})})]})}),(0,v.jsx)("li",{children:(0,v.jsxs)("dl",{children:[(0,v.jsxs)("dt",{children:[(0,v.jsx)("span",{className:"f__bold",style:{color:"red"},children:"*\xa0"}),"\uc5f0\ub77d\ucc98"]}),(0,v.jsx)("dd",{children:(0,v.jsx)("input",{defaultValue:J.phone,type:"text",className:"custom__input",ref:ee})})]})}),(0,v.jsx)("li",{children:(0,v.jsxs)("dl",{children:[(0,v.jsxs)("dt",{children:[(0,v.jsx)("span",{className:"f__bold",style:{color:"red"},children:"*\xa0"}),"\uad8c\ud55c"]}),(0,v.jsx)("dd",{children:(0,v.jsx)("select",{value:M,className:"custom__select",onChange:function(e){T(e.target.value)},children:P.map((function(e,t){return(0,v.jsx)("option",{value:e.code,children:e.codeName},e.code)}))})})]})}),(0,v.jsx)("li",{className:"w50",children:(0,v.jsxs)("dl",{children:[(0,v.jsxs)("dt",{children:[(0,v.jsx)("span",{className:"f__bold",style:{color:"red"},children:"*\xa0"}),"\uc0ac\uc6a9\uc5ec\ubd80"]}),(0,v.jsx)("dd",{children:(0,v.jsxs)("select",{className:"custom__select",defaultValue:J.useYn,ref:ne,children:[(0,v.jsx)("option",{value:"1",children:"\uc0ac\uc6a9"}),(0,v.jsx)("option",{value:"0",children:"\ubbf8\uc0ac\uc6a9"})]})})]})}),(0,v.jsx)("li",{className:"w100",children:(0,v.jsxs)("dl",{children:[(0,v.jsx)("dt",{children:"\uc124\uba85"}),(0,v.jsx)("dd",{children:(0,v.jsx)("textarea",{className:"custom__input",ref:te})})]})})]})})})]})}},62623:function(e,t,n){n.d(t,{S:function(){return r},o:function(){return l}});var r=function(e){return/^[0-9]{2}-[0-9]{3}-[0-9]{4}$/.test(e)||/^[0-9]{2}-[0-9]{4}-[0-9]{4}$/.test(e)||/^[0-9]{3}-[0-9]{3}-[0-9]{4}$/.test(e)||/^[0-9]{3}-[0-9]{4}-[0-9]{4}$/.test(e)},l=function(e){return/^([0-9a-zA-Z_.-]+)@([0-9a-zA-Z_-]+)(\.[0-9a-zA-Z_-]+){1,2}$/.test(e)}},30337:function(e,t,n){var r,l,a=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},c=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}();t._1=function(e){document.body.classList.add("react-confirm-alert-body-element"),function(){if(document.getElementById("react-confirm-alert-firm-svg"))return;var e="http://www.w3.org/2000/svg",t=document.createElementNS(e,"feGaussianBlur");t.setAttribute("stdDeviation","0.3");var n=document.createElementNS(e,"filter");n.setAttribute("id","gaussian-blur"),n.appendChild(t);var r=document.createElementNS(e,"svg");r.setAttribute("id","react-confirm-alert-firm-svg"),r.setAttribute("class","react-confirm-alert-svg"),r.appendChild(n),document.body.appendChild(r)}(),function(e){var t=document.getElementById(e.targetId||v);e.targetId&&!t&&console.error("React Confirm Alert:","Can not get element id (#"+e.targetId+")");t||(document.body.children[0].classList.add("react-confirm-alert-blur"),(t=document.createElement("div")).id=v,document.body.appendChild(t)),(h=(0,i.createRoot)(t)).render(o.default.createElement(p,e))}(e)};var s=n(72791),o=d(s),u=d(n(52007)),i=n(1250);function d(e){return e&&e.__esModule?e:{default:e}}function f(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function m(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!==typeof t&&"function"!==typeof t?e:t}var p=(l=r=function(e){function t(){var e,n,r;f(this,t);for(var l=arguments.length,a=Array(l),c=0;c<l;c++)a[c]=arguments[c];return n=r=m(this,(e=t.__proto__||Object.getPrototypeOf(t)).call.apply(e,[this].concat(a))),r.handleClickButton=function(e){e.onClick&&e.onClick(),r.close()},r.handleClickOverlay=function(e){var t=r.props,n=t.closeOnClickOutside,l=t.onClickOutside,a=e.target===r.overlay;n&&a&&(l(),r.close()),e.stopPropagation()},r.close=function(){var e=r.props.afterClose;_(),j(r.props),y(e)},r.keyboard=function(e){var t=r.props,n=t.closeOnEscape,l=t.onKeypressEscape,a=t.onkeyPress,c=t.keyCodeForClose,s=e.keyCode,o=27===s;c.includes(s)&&r.close(),n&&o&&(l(e),r.close()),a&&a()},r.componentDidMount=function(){document.addEventListener("keydown",r.keyboard,!1)},r.componentWillUnmount=function(){document.removeEventListener("keydown",r.keyboard,!1),r.props.willUnmount()},r.renderCustomUI=function(){var e=r.props,t=e.title,n=e.message,l=e.buttons;return(0,e.customUI)({title:t,message:n,buttons:l,onClose:r.close})},m(r,n)}return function(e,t){if("function"!==typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,e),c(t,[{key:"render",value:function(){var e=this,t=this.props,n=t.title,r=t.message,l=t.buttons,c=t.childrenElement,s=t.customUI,u=t.overlayClassName;return o.default.createElement("div",{className:"react-confirm-alert-overlay "+u,ref:function(t){return e.overlay=t},onClick:this.handleClickOverlay},o.default.createElement("div",{className:"react-confirm-alert"},s?this.renderCustomUI():o.default.createElement("div",{className:"react-confirm-alert-body"},n&&o.default.createElement("h1",null,n),r,c(),o.default.createElement("div",{className:"react-confirm-alert-button-group"},l.map((function(t,n){return o.default.createElement("button",a({key:n,className:t.className},t,{onClick:function(n){return e.handleClickButton(t)}}),t.label)}))))))}}]),t}(s.Component),r.propTypes={title:u.default.string,message:u.default.string,buttons:u.default.array.isRequired,childrenElement:u.default.func,customUI:u.default.func,closeOnClickOutside:u.default.bool,closeOnEscape:u.default.bool,keyCodeForClose:u.default.arrayOf(u.default.number),willUnmount:u.default.func,afterClose:u.default.func,onClickOutside:u.default.func,onKeypressEscape:u.default.func,onkeyPress:u.default.func,overlayClassName:u.default.string},r.defaultProps={buttons:[{label:"Cancel",onClick:function(){return null},className:null},{label:"Confirm",onClick:function(){return null},className:null}],childrenElement:function(){return null},closeOnClickOutside:!0,closeOnEscape:!0,keyCodeForClose:[],willUnmount:function(){return null},afterClose:function(){return null},onClickOutside:function(){return null},onKeypressEscape:function(){return null}},l);var h=null,v="react-confirm-alert";function y(e){var t=document.getElementById("react-confirm-alert-firm-svg");t&&t.parentNode.removeChild(t),document.body.children[0].classList.remove("react-confirm-alert-blur"),e()}function j(e){var t=document.getElementById(e.targetId||v);t&&h.unmount(t)}function _(){document.body.classList.remove("react-confirm-alert-body-element")}},58988:function(){},68639:function(){},76672:function(){}}]);
//# sourceMappingURL=11.7f18356d.chunk.js.map