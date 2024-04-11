import{C as oe,d as ae,r as ge,a as k,_ as T,u as q,b as se,w as le,c as _,o as d,e as h,f as m,g,F as B,h as O,t as A,i as be,j as p,k as x,l as ye,m as we,n as Se,E as ie,p as b,q as N,s as F,v as M,x as xe,y as Ee,z as ke,A as ce,B as ue,D as Q,G as Ce,H as Ae,I as K,J as H,T as de,K as Te,L as Ie,M as Fe,N as Me,O as Pe,P as De}from"./index-BSXqk4om.js";const Re=()=>localStorage.getItem(oe.SIDEBAR_STATUS),G=n=>{localStorage.setItem(oe.SIDEBAR_STATUS,n)},z={Mobile:0,Desktop:1},X=ae("app",()=>{const n=ge({opened:Re()!=="closed",withoutAnimation:!1}),e=k(z.Desktop);return{device:e,sidebar:n,toggleSidebar:s=>{n.opened=!n.opened,n.withoutAnimation=s,n.opened?G("opened"):G("closed")},toggleDevice:s=>{e.value=s},closeSidebar:s=>{n.opened=!1,n.withoutAnimation=s,G("closed")}}}),P={showSettings:!0,showTagsView:!0,fixedHeader:!0,showSidebarLogo:!0,showNotify:!0,showThemeSwitch:!0,showScreenfull:!0,showGreyMode:!1,showColorWeakness:!1},fe=ae("settings",()=>{const n=k(P.fixedHeader),e=k(P.showSettings),t=k(P.showTagsView),a=k(P.showSidebarLogo),o=k(P.showNotify),s=k(P.showThemeSwitch),r=k(P.showScreenfull),l=k(P.showGreyMode),i=k(P.showColorWeakness);return{fixedHeader:n,showSettings:e,showTagsView:t,showSidebarLogo:a,showNotify:o,showThemeSwitch:s,showScreenfull:r,showGreyMode:l,showColorWeakness:i}});function $e(n){for(var e=[],t=0;t<n.length;){var a=n[t];if(a==="*"||a==="+"||a==="?"){e.push({type:"MODIFIER",index:t,value:n[t++]});continue}if(a==="\\"){e.push({type:"ESCAPED_CHAR",index:t++,value:n[t++]});continue}if(a==="{"){e.push({type:"OPEN",index:t,value:n[t++]});continue}if(a==="}"){e.push({type:"CLOSE",index:t,value:n[t++]});continue}if(a===":"){for(var o="",s=t+1;s<n.length;){var r=n.charCodeAt(s);if(r>=48&&r<=57||r>=65&&r<=90||r>=97&&r<=122||r===95){o+=n[s++];continue}break}if(!o)throw new TypeError("Missing parameter name at ".concat(t));e.push({type:"NAME",index:t,value:o}),t=s;continue}if(a==="("){var l=1,i="",s=t+1;if(n[s]==="?")throw new TypeError('Pattern cannot start with "?" at '.concat(s));for(;s<n.length;){if(n[s]==="\\"){i+=n[s++]+n[s++];continue}if(n[s]===")"){if(l--,l===0){s++;break}}else if(n[s]==="("&&(l++,n[s+1]!=="?"))throw new TypeError("Capturing groups are not allowed at ".concat(s));i+=n[s++]}if(l)throw new TypeError("Unbalanced pattern at ".concat(t));if(!i)throw new TypeError("Missing pattern at ".concat(t));e.push({type:"PATTERN",index:t,value:i}),t=s;continue}e.push({type:"CHAR",index:t,value:n[t++]})}return e.push({type:"END",index:t,value:""}),e}function Ne(n,e){e===void 0&&(e={});for(var t=$e(n),a=e.prefixes,o=a===void 0?"./":a,s="[^".concat(Be(e.delimiter||"/#?"),"]+?"),r=[],l=0,i=0,f="",u=function(R){if(i<t.length&&t[i].type===R)return t[i++].value},c=function(R){var V=u(R);if(V!==void 0)return V;var Z=t[i],ve=Z.type,he=Z.index;throw new TypeError("Unexpected ".concat(ve," at ").concat(he,", expected ").concat(R))},v=function(){for(var R="",V;V=u("CHAR")||u("ESCAPED_CHAR");)R+=V;return R};i<t.length;){var w=u("CHAR"),E=u("NAME"),y=u("PATTERN");if(E||y){var S=w||"";o.indexOf(S)===-1&&(f+=S,S=""),f&&(r.push(f),f=""),r.push({name:E||l++,prefix:S,suffix:"",pattern:y||s,modifier:u("MODIFIER")||""});continue}var U=w||u("ESCAPED_CHAR");if(U){f+=U;continue}f&&(r.push(f),f="");var pe=u("OPEN");if(pe){var S=v(),Y=u("NAME")||"",j=u("PATTERN")||"",_e=v();c("CLOSE"),r.push({name:Y||(j?l++:""),pattern:Y&&!j?s:j,prefix:S,suffix:_e,modifier:u("MODIFIER")||""});continue}c("END")}return r}function ze(n,e){return Le(Ne(n,e),e)}function Le(n,e){e===void 0&&(e={});var t=Ve(e),a=e.encode,o=a===void 0?function(i){return i}:a,s=e.validate,r=s===void 0?!0:s,l=n.map(function(i){if(typeof i=="object")return new RegExp("^(?:".concat(i.pattern,")$"),t)});return function(i){for(var f="",u=0;u<n.length;u++){var c=n[u];if(typeof c=="string"){f+=c;continue}var v=i?i[c.name]:void 0,w=c.modifier==="?"||c.modifier==="*",E=c.modifier==="*"||c.modifier==="+";if(Array.isArray(v)){if(!E)throw new TypeError('Expected "'.concat(c.name,'" to not repeat, but got an array'));if(v.length===0){if(w)continue;throw new TypeError('Expected "'.concat(c.name,'" to not be empty'))}for(var y=0;y<v.length;y++){var S=o(v[y],c);if(r&&!l[u].test(S))throw new TypeError('Expected all "'.concat(c.name,'" to match "').concat(c.pattern,'", but got "').concat(S,'"'));f+=c.prefix+S+c.suffix}continue}if(typeof v=="string"||typeof v=="number"){var S=o(String(v),c);if(r&&!l[u].test(S))throw new TypeError('Expected "'.concat(c.name,'" to match "').concat(c.pattern,'", but got "').concat(S,'"'));f+=c.prefix+S+c.suffix;continue}if(!w){var U=E?"an array":"a string";throw new TypeError('Expected "'.concat(c.name,'" to be ').concat(U))}}return f}}function Be(n){return n.replace(/([.+*?=^!:${}()[\]|/\\])/g,"\\$1")}function Ve(n){return n&&n.sensitive?"":"i"}const He={key:0,class:"no-redirect"},Oe=["onClick"],Ue={__name:"index",setup(n){const e=q(),t=se(),a=k([]),o=()=>{a.value=e.matched.filter(l=>l.meta&&l.meta.title&&l.meta.breadcrumb!==!1)},s=l=>{const{params:i}=e;return ze(l)(i)},r=l=>{const{redirect:i,path:f}=l;if(i){t.push(i);return}t.push(s(f))};return le(()=>e.path,l=>{l.startsWith("/redirect/")||o()}),o(),(l,i)=>{const f=_("el-breadcrumb-item"),u=_("el-breadcrumb");return d(),h(u,{class:"app-breadcrumb"},{default:m(()=>[(d(!0),g(B,null,O(a.value,(c,v)=>(d(),h(f,{key:c.path},{default:m(()=>[c.redirect==="noredirect"||v===a.value.length-1?(d(),g("span",He,A(c.meta.title),1)):(d(),g("a",{key:1,onClick:be(w=>r(c),["prevent"]),href:""},A(c.meta.title),9,Oe))]),_:2},1024))),128))]),_:1})}}},qe=T(Ue,[["__scopeId","data-v-8b0dda9c"]]),Xe={__name:"index",props:{isActive:{type:Boolean,default:!1}},emits:["toggle-click"],setup(n,{emit:e}){const t=n,a=e,o=()=>{a("toggle-click")};return(s,r)=>{const l=_("el-icon");return d(),g("div",{onClick:o},[p(l,{size:20,class:"icon"},{default:m(()=>[t.isActive?(d(),h(x(ye),{key:0})):(d(),h(x(we),{key:1}))]),_:1})])}}},ee=[["requestFullscreen","exitFullscreen","fullscreenElement","fullscreenEnabled","fullscreenchange","fullscreenerror"],["webkitRequestFullscreen","webkitExitFullscreen","webkitFullscreenElement","webkitFullscreenEnabled","webkitfullscreenchange","webkitfullscreenerror"],["webkitRequestFullScreen","webkitCancelFullScreen","webkitCurrentFullScreenElement","webkitCancelFullScreen","webkitfullscreenchange","webkitfullscreenerror"],["mozRequestFullScreen","mozCancelFullScreen","mozFullScreenElement","mozFullScreenEnabled","mozfullscreenchange","mozfullscreenerror"],["msRequestFullscreen","msExitFullscreen","msFullscreenElement","msFullscreenEnabled","MSFullscreenChange","MSFullscreenError"]],D=(()=>{if(typeof document>"u")return!1;const n=ee[0],e={};for(const t of ee)if((t==null?void 0:t[1])in document){for(const[o,s]of t.entries())e[n[o]]=s;return e}return!1})(),te={change:D.fullscreenchange,error:D.fullscreenerror};let C={request(n=document.documentElement,e){return new Promise((t,a)=>{const o=()=>{C.off("change",o),t()};C.on("change",o);const s=n[D.requestFullscreen](e);s instanceof Promise&&s.then(o).catch(a)})},exit(){return new Promise((n,e)=>{if(!C.isFullscreen){n();return}const t=()=>{C.off("change",t),n()};C.on("change",t);const a=document[D.exitFullscreen]();a instanceof Promise&&a.then(t).catch(e)})},toggle(n,e){return C.isFullscreen?C.exit():C.request(n,e)},onchange(n){C.on("change",n)},onerror(n){C.on("error",n)},on(n,e){const t=te[n];t&&document.addEventListener(t,e,!1)},off(n,e){const t=te[n];t&&document.removeEventListener(t,e,!1)},raw:D};Object.defineProperties(C,{isFullscreen:{get:()=>!!document[D.fullscreenElement]},element:{enumerable:!0,get:()=>document[D.fullscreenElement]??void 0},isEnabled:{enumerable:!0,get:()=>!!document[D.fullscreenEnabled]}});D||(C={isEnabled:!1});const $=C,je={__name:"index",props:{element:{type:String,default:"html"},openTips:{type:String,default:"全屏"},exitTips:{type:String,default:"退出全屏"}},setup(n){const e=n,t=k(e.openTips),a=k(!1),o=()=>{const r=document.querySelector(e.element)||void 0;if(!$.isEnabled){ie.warning("您的浏览器无法工作");return}$.toggle(r)},s=()=>{a.value=$.isFullscreen,t.value=$.isFullscreen?e.exitTips:e.openTips};return $.on("change",s),Se(()=>{$.isEnabled&&$.off("change",s)}),(r,l)=>{const i=_("svg-icon"),f=_("el-tooltip");return d(),g("div",{onClick:o},[p(f,{effect:"dark",content:t.value,placement:"bottom"},{default:m(()=>[p(i,{name:a.value?"fullscreen-exit":"fullscreen"},null,8,["name"])]),_:1},8,["content"])])}}},Ge=T(je,[["__scopeId","data-v-5655a87c"]]),We={class:"card-header"},Ke={class:"card-title"},Je={class:"card-time"},Ye={key:0,class:"card-avatar"},Ze=["src"],Qe={class:"card-body"},et={__name:"NotifyList",props:{list:{type:Object,required:!0}},setup(n){const e=n;return(t,a)=>{const o=_("el-empty"),s=_("el-tag"),r=_("el-card");return e.list.length===0?(d(),h(o,{key:0})):(d(!0),g(B,{key:1},O(e.list,(l,i)=>(d(),h(r,{key:i,shadow:"never",class:"card-container"},{header:m(()=>[b("div",We,[b("div",null,[b("span",null,[b("span",Ke,A(l.title),1),l.extra?(d(),h(s,{key:0,type:l.status,effect:"plain",size:"small"},{default:m(()=>[N(A(l.extra),1)]),_:2},1032,["type"])):F("",!0)]),b("div",Je,A(l.datetime),1)]),l.avatar?(d(),g("div",Ye,[b("img",{src:l.avatar,width:"34",alt:"NotifyFreeIcon"},null,8,Ze)])):F("",!0)])]),default:m(()=>[b("div",Qe,A(l.description??"No Data"),1)]),_:2},1024))),128))}}},tt=T(et,[["__scopeId","data-v-f29226a4"]]),nt=[{avatar:"https://gw.alipayobjects.com/zos/rmsportal/OKJXDXrmkNshAMvwtvhu.png",title:"Notify组件完成",datetime:"一个月前",description:"mock数据配合el-card遍历挂载到页面上去,使用Vue的computed钩子函数计算角标值,以组件方式引入ElementPlus@icon里的图标。"},{avatar:"https://gw.alipayobjects.com/zos/rmsportal/OKJXDXrmkNshAMvwtvhu.png",title:"Screenfull组件完成",datetime:"两个月前",description:"利用插件screenfull.js配合el-tooltip进行放大全屏功能,配合封装svg-icon来实现图标的切换。"},{avatar:"https://gw.alipayobjects.com/zos/rmsportal/OKJXDXrmkNshAMvwtvhu.png",title:"SvgIcon组件完成",datetime:"四个月前",description:"iconfont官网下载svg图标,封装svgicon组件便于各个组件之间交互使用svg图标。"}],rt=[{avatar:"https://gw.alipayobjects.com/zos/rmsportal/ThXAXghbEsBCCSDihZxY.png",title:"Star Wars",description:"May the Force be with you.",datetime:"2023-10-1"},{avatar:"https://gw.alipayobjects.com/zos/rmsportal/ThXAXghbEsBCCSDihZxY.png",title:"Casablanca",description:"Here's looking at you, kid",datetime:"2023-11-11"},{avatar:"https://gw.alipayobjects.com/zos/rmsportal/ThXAXghbEsBCCSDihZxY.png",title:"Forrest Gump",description:"Life is like a box of chocolates, you never know what you're gonna get",datetime:"2024-4-7"}],ot=[{title:"任务名称",description:"这家伙很懒，什么都没留下",extra:"未开始",status:"info"},{title:"任务名称",description:"这家伙很懒，什么都没留下",extra:"进行中",status:""},{title:"任务名称",description:"这家伙很懒，什么都没留下",extra:"已超时",status:"danger"}],at={class:"notify"},st={class:"notify-history"},ne=99,lt=350,it={__name:"index",setup(n){const e=M(()=>{let s=0;for(let r=0;r<a.value.length;r++)s+=a.value[r].list.length;return s}),t=k("通知"),a=k([{name:"通知",type:"primary",list:nt},{name:"消息",type:"danger",list:rt},{name:"待办",type:"warning",list:ot}]),o=()=>{ie.success(`跳转到${t.value}历史页面`)};return(s,r)=>{const l=_("el-icon"),i=_("el-tooltip"),f=_("el-badge"),u=_("el-scrollbar"),c=_("el-tab-pane"),v=_("el-tabs"),w=_("el-button"),E=_("el-popover");return d(),g("div",at,[p(E,{placement:"bottom",width:lt,trigger:"click"},{reference:m(()=>[p(f,{value:e.value,max:ne,hidden:e.value===0},{default:m(()=>[p(i,{effect:"dark",content:"消息通知",placement:"bottom"},{default:m(()=>[p(l,{size:20},{default:m(()=>[p(x(xe))]),_:1})]),_:1})]),_:1},8,["value","hidden"])]),default:m(()=>[p(v,{modelValue:t.value,"onUpdate:modelValue":r[0]||(r[0]=y=>t.value=y),class:"demo-tabs",stretch:""},{default:m(()=>[(d(!0),g(B,null,O(a.value,(y,S)=>(d(),h(c,{name:y.name,key:S},{label:m(()=>[N(A(y.name)+" ",1),p(f,{value:y.list.length,max:ne,type:y.type},null,8,["value","type"])]),default:m(()=>[p(u,{height:"400px"},{default:m(()=>[p(tt,{list:y.list},null,8,["list"])]),_:2},1024)]),_:2},1032,["name"]))),128))]),_:1},8,["modelValue"]),b("div",st,[p(w,{link:"",onClick:o},{default:m(()=>[N("查看"+A(t.value)+"历史",1)]),_:1})])]),_:1})])}}},ct=T(it,[["__scopeId","data-v-eab12092"]]),ut=n=>(ce("data-v-b87f6d33"),n=n(),ue(),n),dt={class:"navigation-bar"},ft={class:"right-menu"},mt={class:"right-menu-avatar"},pt={target:"_blank",href:"https://yaozongbin.gitee.io/yaozongbin/"},_t={target:"_blank",href:"https://github.com/yaozongbin"},vt={target:"_blank",href:"https://gitee.com/yaozongbin"},ht=ut(()=>b("span",{style:{display:"block"}},"退出登录",-1)),gt={__name:"index",setup(n){const e=X(),t=Ee(),a=se(),o=M(()=>e.sidebar),s=()=>{e.toggleSidebar(!1)},r=()=>{t.logout(),a.push("/login")};return(l,i)=>{const f=_("el-avatar"),u=_("el-dropdown-item"),c=_("el-dropdown-menu"),v=_("el-dropdown");return d(),g("div",dt,[p(Xe,{"is-active":o.value.opened,class:"hamburger",onToggleClick:s},null,8,["is-active"]),p(qe,{class:"breadcrumb"}),b("div",ft,[p(Ge),p(ct),p(v,{class:"right-menu-item"},{dropdown:m(()=>[p(c,null,{default:m(()=>[b("a",pt,[p(u,null,{default:m(()=>[N("个人博客")]),_:1})]),b("a",_t,[p(u,null,{default:m(()=>[N("GitHub")]),_:1})]),b("a",vt,[p(u,null,{default:m(()=>[N("Gitee")]),_:1})]),p(u,{divided:"",onClick:r},{default:m(()=>[ht]),_:1})]),_:1})]),default:m(()=>[b("div",mt,[p(f,{icon:x(ke),size:30},null,8,["icon"]),b("span",null,A(x(t).username),1)])]),_:1})])])}}},bt=T(gt,[["__scopeId","data-v-b87f6d33"]]),J=n=>/^(https?:|mailto:|tel:)/.test(n),yt=["href"],wt={__name:"SidebarItemLink",props:{to:{type:String,required:!0}},setup(n){const e=n;return(t,a)=>{const o=_("router-link");return x(J)(e.to)?(d(),g("a",{key:0,href:e.to,target:"_blank",rel:"noopener"},[Q(t.$slots,"default")],8,yt)):(d(),h(o,{key:1,to:e.to},{default:m(()=>[Q(t.$slots,"default")]),_:3},8,["to"]))}}};function I(n){if(typeof n!="string")throw new TypeError("Path must be a string. Received "+JSON.stringify(n))}function re(n,e){for(var t="",a=0,o=-1,s=0,r,l=0;l<=n.length;++l){if(l<n.length)r=n.charCodeAt(l);else{if(r===47)break;r=47}if(r===47){if(!(o===l-1||s===1))if(o!==l-1&&s===2){if(t.length<2||a!==2||t.charCodeAt(t.length-1)!==46||t.charCodeAt(t.length-2)!==46){if(t.length>2){var i=t.lastIndexOf("/");if(i!==t.length-1){i===-1?(t="",a=0):(t=t.slice(0,i),a=t.length-1-t.lastIndexOf("/")),o=l,s=0;continue}}else if(t.length===2||t.length===1){t="",a=0,o=l,s=0;continue}}e&&(t.length>0?t+="/..":t="..",a=2)}else t.length>0?t+="/"+n.slice(o+1,l):t=n.slice(o+1,l),a=l-o-1;o=l,s=0}else r===46&&s!==-1?++s:s=-1}return t}function St(n,e){var t=e.dir||e.root,a=e.base||(e.name||"")+(e.ext||"");return t?t===e.root?t+a:t+n+a:a}var L={resolve:function(){for(var e="",t=!1,a,o=arguments.length-1;o>=-1&&!t;o--){var s;o>=0?s=arguments[o]:(a===void 0&&(a=process.cwd()),s=a),I(s),s.length!==0&&(e=s+"/"+e,t=s.charCodeAt(0)===47)}return e=re(e,!t),t?e.length>0?"/"+e:"/":e.length>0?e:"."},normalize:function(e){if(I(e),e.length===0)return".";var t=e.charCodeAt(0)===47,a=e.charCodeAt(e.length-1)===47;return e=re(e,!t),e.length===0&&!t&&(e="."),e.length>0&&a&&(e+="/"),t?"/"+e:e},isAbsolute:function(e){return I(e),e.length>0&&e.charCodeAt(0)===47},join:function(){if(arguments.length===0)return".";for(var e,t=0;t<arguments.length;++t){var a=arguments[t];I(a),a.length>0&&(e===void 0?e=a:e+="/"+a)}return e===void 0?".":L.normalize(e)},relative:function(e,t){if(I(e),I(t),e===t||(e=L.resolve(e),t=L.resolve(t),e===t))return"";for(var a=1;a<e.length&&e.charCodeAt(a)===47;++a);for(var o=e.length,s=o-a,r=1;r<t.length&&t.charCodeAt(r)===47;++r);for(var l=t.length,i=l-r,f=s<i?s:i,u=-1,c=0;c<=f;++c){if(c===f){if(i>f){if(t.charCodeAt(r+c)===47)return t.slice(r+c+1);if(c===0)return t.slice(r+c)}else s>f&&(e.charCodeAt(a+c)===47?u=c:c===0&&(u=0));break}var v=e.charCodeAt(a+c),w=t.charCodeAt(r+c);if(v!==w)break;v===47&&(u=c)}var E="";for(c=a+u+1;c<=o;++c)(c===o||e.charCodeAt(c)===47)&&(E.length===0?E+="..":E+="/..");return E.length>0?E+t.slice(r+u):(r+=u,t.charCodeAt(r)===47&&++r,t.slice(r))},_makeLong:function(e){return e},dirname:function(e){if(I(e),e.length===0)return".";for(var t=e.charCodeAt(0),a=t===47,o=-1,s=!0,r=e.length-1;r>=1;--r)if(t=e.charCodeAt(r),t===47){if(!s){o=r;break}}else s=!1;return o===-1?a?"/":".":a&&o===1?"//":e.slice(0,o)},basename:function(e,t){if(t!==void 0&&typeof t!="string")throw new TypeError('"ext" argument must be a string');I(e);var a=0,o=-1,s=!0,r;if(t!==void 0&&t.length>0&&t.length<=e.length){if(t.length===e.length&&t===e)return"";var l=t.length-1,i=-1;for(r=e.length-1;r>=0;--r){var f=e.charCodeAt(r);if(f===47){if(!s){a=r+1;break}}else i===-1&&(s=!1,i=r+1),l>=0&&(f===t.charCodeAt(l)?--l===-1&&(o=r):(l=-1,o=i))}return a===o?o=i:o===-1&&(o=e.length),e.slice(a,o)}else{for(r=e.length-1;r>=0;--r)if(e.charCodeAt(r)===47){if(!s){a=r+1;break}}else o===-1&&(s=!1,o=r+1);return o===-1?"":e.slice(a,o)}},extname:function(e){I(e);for(var t=-1,a=0,o=-1,s=!0,r=0,l=e.length-1;l>=0;--l){var i=e.charCodeAt(l);if(i===47){if(!s){a=l+1;break}continue}o===-1&&(s=!1,o=l+1),i===46?t===-1?t=l:r!==1&&(r=1):t!==-1&&(r=-1)}return t===-1||o===-1||r===0||r===1&&t===o-1&&t===a+1?"":e.slice(t,o)},format:function(e){if(e===null||typeof e!="object")throw new TypeError('The "pathObject" argument must be of type Object. Received type '+typeof e);return St("/",e)},parse:function(e){I(e);var t={root:"",dir:"",base:"",ext:"",name:""};if(e.length===0)return t;var a=e.charCodeAt(0),o=a===47,s;o?(t.root="/",s=1):s=0;for(var r=-1,l=0,i=-1,f=!0,u=e.length-1,c=0;u>=s;--u){if(a=e.charCodeAt(u),a===47){if(!f){l=u+1;break}continue}i===-1&&(f=!1,i=u+1),a===46?r===-1?r=u:c!==1&&(c=1):r!==-1&&(c=-1)}return r===-1||i===-1||c===0||c===1&&r===i-1&&r===l+1?i!==-1&&(l===0&&o?t.base=t.name=e.slice(1,i):t.base=t.name=e.slice(l,i)):(l===0&&o?(t.name=e.slice(1,r),t.base=e.slice(1,i)):(t.name=e.slice(l,r),t.base=e.slice(l,i)),t.ext=e.slice(r,i)),l>0?t.dir=e.slice(0,l-1):o&&(t.dir="/"),t},sep:"/",delimiter:":",win32:null,posix:null};L.posix=L;var xt=L;const Et=Ce(xt),kt={key:2},Ct={__name:"SidebarItem",props:{item:{type:Object,required:!0},isCollapse:{type:Boolean,default:!1},isFirstLevel:{type:Boolean,default:!0},basePath:{type:String,default:""}},setup(n){const e=n,t=M(()=>e.item.meta&&e.item.meta.alwaysShow),a=M(()=>e.item.children?e.item.children.filter(l=>!(l.meta&&l.meta.hidden)).length:0),o=M(()=>{if(a.value>1)return null;if(e.item.children){for(const r of e.item.children)if(!r.meta||!r.meta.hidden)return r}return{...e.item,path:""}}),s=r=>J(r)?r:J(e.basePath)?e.basePath:Et.resolve(e.basePath,r);return(r,l)=>{var v;const i=_("svg-icon"),f=_("el-menu-item"),u=_("sidebar-item",!0),c=_("el-sub-menu");return(v=e.item.meta)!=null&&v.hidden?F("",!0):(d(),g("div",{key:0,class:H({"simple-mode":e.isCollapse,"first-level":e.isFirstLevel})},[!t.value&&o.value&&!o.value.children?(d(),g(B,{key:0},[o.value.meta?(d(),h(wt,{key:0,to:s(o.value.path)},{default:m(()=>[p(f,{index:s(o.value.path)},Ae({default:m(()=>[o.value.meta.svgIcon?(d(),h(i,{key:0,name:o.value.meta.svgIcon},null,8,["name"])):o.value.meta.elIcon?(d(),h(K(o.value.meta.elIcon),{key:1,class:"el-icon"})):F("",!0)]),_:2},[o.value.meta.title?{name:"title",fn:m(()=>[N(A(o.value.meta.title),1)]),key:"0"}:void 0]),1032,["index"])]),_:1},8,["to"])):F("",!0)],64)):(d(),h(c,{key:1,index:s(e.item.path),teleported:""},{title:m(()=>[e.item.meta&&e.item.meta.svgIcon?(d(),h(i,{key:0,name:e.item.meta.svgIcon},null,8,["name"])):e.item.meta&&e.item.meta.elIcon?(d(),h(K(e.item.meta.elIcon),{key:1,class:"el-icon"})):F("",!0),e.item.meta&&e.item.meta.title?(d(),g("span",kt,A(e.item.meta.title),1)):F("",!0)]),default:m(()=>[e.item.children?(d(!0),g(B,{key:0},O(e.item.children,w=>(d(),h(u,{key:w.path,item:w,"is-collapse":e.isCollapse,"is-first-level":!1,"base-path":s(w.path)},null,8,["item","is-collapse","base-path"]))),128)):F("",!0)]),_:1},8,["index"]))],2))}}},At=T(Ct,[["__scopeId","data-v-7c82abab"]]),Tt=""+new URL("logo-BY3URNHQ.png",import.meta.url).href,It=""+new URL("logo-text-1-CHuEm79x.png",import.meta.url).href,me=n=>(ce("data-v-fe4be8c5"),n=n(),ue(),n),Ft=me(()=>b("img",{src:Tt,class:"sidebar-logo"},null,-1)),Mt=me(()=>b("img",{src:It,class:"sidebar-logo-text"},null,-1)),Pt={__name:"SidebarLogo",props:{collapse:{type:Boolean,default:!0}},setup(n){const e=n;return(t,a)=>{const o=_("router-link");return d(),g("div",{class:H(["sidebar-logo-container",{collapse:e.collapse}])},[p(de,{name:"sidebar-logo-fade"},{default:m(()=>[e.collapse?(d(),h(o,{key:"collapse",to:"/"},{default:m(()=>[Ft]),_:1})):(d(),h(o,{key:"expand",to:"/"},{default:m(()=>[Mt]),_:1}))]),_:1})],2)}}},Dt=T(Pt,[["__scopeId","data-v-fe4be8c5"]]),W=n=>{let e="";try{e=getComputedStyle(document.documentElement).getPropertyValue(n)}catch(t){console.error(t)}return e},Rt={__name:"index",setup(n){const e=W("--v3-sidebar-menu-bg-color"),t=W("--v3-sidebar-menu-text-color"),a=W("--v3-sidebar-menu-active-text-color"),o=q(),s=X(),r=Te(),l=fe(),{showSidebarLogo:i}=Ie(l),f=M(()=>{const{meta:c,path:v}=o;return c!=null&&c.activeMenu?c.activeMenu:v}),u=M(()=>!s.sidebar.opened);return(c,v)=>{const w=_("el-menu"),E=_("el-scrollbar");return d(),g("div",{class:H({"has-logo":x(i)})},[x(i)?(d(),h(Dt,{key:0,collapse:u.value},null,8,["collapse"])):F("",!0),p(E,{"wrap-class":"scrollbar-wrapper"},{default:m(()=>[p(w,{"default-active":f.value,collapse:u.value,"background-color":x(e),"text-color":x(t),"active-text-color":x(a),"unique-opened":!0,"collapse-transition":!1,mode:"vertical"},{default:m(()=>[(d(!0),g(B,null,O(x(r).routes,y=>(d(),h(At,{key:y.path,item:y,"base-path":y.path,"is-collapse":u.value},null,8,["item","base-path","is-collapse"]))),128))]),_:1},8,["default-active","collapse","background-color","text-color","active-text-color"])]),_:1})],2)}}},$t=T(Rt,[["__scopeId","data-v-d1da17ff"]]);var Nt={VITE_BASE_API:"https://mock.mengxuegu.com/mock/63218b5fb4c53348ed2bc212/api/v1",VITE_ROUTER_HISTORY:"hash",VITE_PUBLIC_PATH:"/v3-vite-admin-js-master/",VITE_USER_NODE_ENV:"production",BASE_URL:"./",MODE:"production",DEV:!1,PROD:!0,SSR:!1};const zt={class:"layout-footer"},Lt={__name:"index",setup(n){const e=Nt.VITE_APP_TITLE;return(t,a)=>(d(),g("footer",zt,"MIT © 2023-PRESENT @yaozongbin"+A(x(e)),1))}},Bt=T(Lt,[["__scopeId","data-v-3bafc0dd"]]),Vt={class:"app-main"},Ht={__name:"AppMain",setup(n){const e=q(),t=M(()=>e.path);return(a,o)=>{const s=_("router-view"),r=_("el-backtop");return d(),g("section",Vt,[p(s,null,{default:m(({Component:l})=>[p(de,{name:"fade-transform",mode:"out-in"},{default:m(()=>[(d(),h(Fe,null,[(d(),h(K(l),{key:t.value,class:"app-container-grow"}))],1024))]),_:2},1024)]),_:1}),p(Bt),p(r)])}}},Ot=T(Ht,[["__scopeId","data-v-2f21cd05"]]),Ut=992,qt=()=>{const n=q(),e=X(),t=()=>document.body.getBoundingClientRect().width-1<Ut,a=()=>{if(!document.hidden){const o=t();e.toggleDevice(o?z.Mobile:z.Desktop),o&&e.closeSidebar(!0)}};le(()=>n.name,()=>{e.device===z.Mobile&&e.sidebar.opened&&e.closeSidebar(!1)}),Me(()=>{window.addEventListener("resize",a)}),Pe(()=>{t()&&(e.toggleDevice(z.Mobile),e.closeSidebar(!0))}),De(()=>{window.removeEventListener("resize",a)})},Xt={class:"main-container"},jt={__name:"index",setup(n){const e=X(),t=fe();qt();const a=M(()=>({hideSidebar:!e.sidebar.opened,openSidebar:e.sidebar.opened,withoutAnimation:e.sidebar.withoutAnimation,mobile:e.device===z.Mobile})),o=M(()=>t.fixedHeader),s=()=>{e.closeSidebar(!1)};return(r,l)=>(d(),g("div",{class:H([a.value,"app-wrapper"])},[a.value.mobile&&a.value.openSidebar?(d(),g("div",{key:0,class:"drawer-bg",onClick:s})):F("",!0),p(x($t),{class:"sidebar-container"}),b("div",Xt,[b("div",{class:H({"fixed-header":o.value})},[p(x(bt))],2),p(x(Ot))])],2))}},Wt=T(jt,[["__scopeId","data-v-272f574d"]]);export{Wt as default};