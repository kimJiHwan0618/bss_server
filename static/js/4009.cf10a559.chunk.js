"use strict";(self.webpackChunkdiamond_bss_front=self.webpackChunkdiamond_bss_front||[]).push([[4009],{32025:function(n,e,t){t.d(e,{lQ:function(){return c},oR:function(){return d},ap:function(){return s},_o:function(){return o},j1:function(){return r}});var a=t(63263),i={getCompanies:"/api/companies",getCompanyDetail:"/api/companies/:companyId",addOrUpdateCompany:"/api/companies/",deleteCompany:"/api/companies/:companyId"},s=function(n){return new Promise((function(e,t){a.Z.get(i.getCompanies,{params:n}).then((function(n){if(200===n.data.code){var a=n.data.response;e(a)}else t(n)})).catch((function(n){t(n)}))}))},o=function(n){return new Promise((function(e,t){a.Z.get(i.getCompanyDetail.replace(":companyId",n)).then((function(n){if(200===n.data.code){var a=n.data.response;e(a)}else t(n)})).catch((function(n){t(n)}))}))},c=function(n){return new Promise((function(e,t){a.Z.post(i.addOrUpdateCompany,n).then((function(n){if(200===n.data.code){var a=n.data.response;e(a)}else t(n)})).catch((function(n){t(n)}))}))},r=function(n){return new Promise((function(e,t){a.Z.put(i.addOrUpdateCompany,n).then((function(n){if(200===n.data.code){var a=n.data.response;e(a)}else t(n)})).catch((function(n){t(n)}))}))},d=function(n){return new Promise((function(e,t){a.Z.delete(i.deleteCompany.replace(":companyId",n)).then((function(n){if(200===n.data.code){var a=n.data.response;e(a)}else t(n)})).catch((function(n){t(n)}))}))}},4009:function(n,e,t){t.r(e);var a=t(29439),i=(t(87894),t(68639),t(67516)),s=(t(52868),t(57689)),o=t(72791),c=t(32025),r=t(57780),d=t(69146),l=t(50661),u=t(25470),m=t(80184);e.default=function(){var n=(0,s.s0)(),e=(0,o.useState)("ALL"),t=(0,a.Z)(e,2),p=t[0],f=t[1],h=(0,o.useState)([]),_=(0,a.Z)(h,2),x=_[0],j=_[1],v=(0,o.useState)(!1),g=(0,a.Z)(v,2),w=g[0],N=g[1],k=(0,o.useRef)(),y=(0,l.I0)(),C=function(){w?y((0,u.PV)({message:"\ub370\uc774\ud130\ub97c \uc870\ud68c\ud558\uace0 \uc788\uc2b5\ub2c8\ub2e4.",variant:"info"})):(N(!0),(0,c.ap)({companyName:k.current.value,useYn:p}).then((function(n){j(n),N(!1)})).catch((function(n){console.log(n),N(!1),y((0,u.PV)({message:"\uace0\uac1d\uc0ac \ubaa9\ub85d \uc870\ud68c \uc2e4\ud328.",variant:"error"}))})))};return(0,m.jsx)("div",{id:"companies",className:"section__grid__wrap content qr__history",children:(0,m.jsx)("section",{className:"qr__history__search",children:(0,m.jsxs)("div",{className:"section__inner",children:[(0,m.jsxs)("div",{className:"search__wrap groups",children:[(0,m.jsxs)("div",{className:"left",children:[(0,m.jsx)("div",{className:"selector__wrap",children:(0,m.jsxs)("dl",{children:[(0,m.jsx)("dt",{children:"\uc0ac\uc6a9\uc5ec\ubd80"}),(0,m.jsx)("dd",{children:(0,m.jsxs)("select",{className:"custom__select",onChange:function(n){return f(n.target.value)},children:[(0,m.jsx)("option",{value:"ALL",children:"\uc804\uccb4"}),(0,m.jsx)("option",{value:"1",children:"\uc0ac\uc6a9"}),(0,m.jsx)("option",{value:"0",children:"\ubbf8\uc0ac\uc6a9"})]})})]})}),(0,m.jsx)("div",{className:"input__wrap",children:(0,m.jsxs)("dl",{children:[(0,m.jsx)("dt",{children:"\ud68c\uc0ac\uba85"}),(0,m.jsx)("dd",{children:(0,m.jsx)("input",{onKeyPress:function(n){return"Enter"===n.key&&C()},ref:k,type:"text",className:"custom__input",placeholder:"\ud68c\uc0ac\uba85\uc744 \uc785\ub825\ud558\uc138\uc694"})})]})}),(0,m.jsxs)("button",{className:"custom__btn",onClick:function(){C()},children:[(0,m.jsx)("svg",{fill:"none",viewBox:"0 0 24 24",stroke:"currentColor",children:(0,m.jsx)("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"2",d:"M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"})}),(0,m.jsx)("span",{className:"f__medium",children:"\uac80\uc0c9"})]})]}),(0,m.jsxs)("button",{className:"custom__btn add__btn",onClick:function(){n("/administrator/companies/addOrUpdate",{state:{detailLink:[{title:"\ucd94\uac00",link:"/administrator/companies/addOrUpdate"}]}})},children:[(0,m.jsx)("svg",{fill:"none",viewBox:"0 0 24 24",stroke:"currentColor",children:(0,m.jsx)("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"2",d:"M12 6v6m0 0v6m0-6h6m-6 0H6"})}),(0,m.jsx)("span",{className:"f__medium",children:"\ucd94\uac00"})]})]}),(0,m.jsxs)("div",{className:"grid__wrap",onClick:function(e){!function(e){var t={};null!==e.target.getAttribute("data-column-id")&&(N(!0),e.target.parentNode.childNodes.forEach((function(n){t["".concat(n.getAttribute("data-column-id"))]=n.textContent})),(0,c._o)(t.companyId).then((function(e){t.detailLink=[{title:"\uc218\uc815",link:"/administrator/companies/addOrUpdate"}];var a=Object.assign(t,e);n(t.detailLink[0].link,{state:a})})).catch((function(n){console.log(n),N(!1)})))}(e)},children:[!0===w&&(0,m.jsxs)("div",{className:"loading__wrap",children:[(0,m.jsx)("div",{className:"bg"}),(0,m.jsx)(r.Z,{className:"lottie",options:{animationData:d},width:300,height:300})]}),(0,m.jsx)(i.r,{sort:"true",className:"grid",data:x,resizable:!0,columns:[{name:"\ubc88\ud638",id:"companyId",width:"95px"},{name:"\ud68c\uc0ac\uba85",id:"companyName"},{name:"\ub300\ud45c\uc804\ud654",id:"telNo",width:"145px"},{name:"\uc8fc\uc18c",id:"address",width:"300px"},{name:"\uad00\ub9ac\uc790ID",id:"owner",width:"210px"},{name:"\uc2dc\uc2a4\ud15c \uad00\ub9ac\uc790\uba85",id:"ownerName"},{name:"\uc0ac\uc6a9\uc5ec\ubd80",id:"useYn",formatter:function(n,e){return"1"===e.cells[6].data?"\uc0ac\uc6a9":"\ubbf8\uc0ac\uc6a9"},width:"120px"},{name:"\ucd5c\uc885 \uc218\uc815\uc790",id:"updateUsername"},{name:"\ucd5c\uc885 \ubcc0\uacbd\uc77c\uc2dc",id:"updateTime",width:"180px"}],pagination:{enabled:!0,limit:10}})]})]})})})}},52868:function(){},68639:function(){},87894:function(){}}]);
//# sourceMappingURL=4009.cf10a559.chunk.js.map