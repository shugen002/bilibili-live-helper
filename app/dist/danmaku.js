module.exports=function(e){function s(a){if(t[a])return t[a].exports;var n=t[a]={i:a,l:!1,exports:{}};return e[a].call(n.exports,n,n.exports,s),n.l=!0,n.exports}var t={};return s.m=e,s.c=t,s.i=function(e){return e},s.d=function(e,t,a){s.o(e,t)||Object.defineProperty(e,t,{configurable:!1,enumerable:!0,get:a})},s.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return s.d(t,"a",t),t},s.o=function(e,s){return Object.prototype.hasOwnProperty.call(e,s)},s.p="",s(s.s=134)}({0:function(e,s){e.exports=function(e,s,t,a){var n,r=e=e||{},o=typeof e.default;"object"!==o&&"function"!==o||(n=e,r=e.default);var i="function"==typeof r?r.options:r;if(s&&(i.render=s.render,i.staticRenderFns=s.staticRenderFns),t&&(i._scopeId=t),a){var u=i.computed||(i.computed={});Object.keys(a).forEach(function(e){var s=a[e];u[e]=function(){return s}})}return{esModule:n,exports:r,options:i}}},1:function(e,s){e.exports=function(){var e=[];return e.toString=function(){for(var e=[],s=0;s<this.length;s++){var t=this[s];t[2]?e.push("@media "+t[2]+"{"+t[1]+"}"):e.push(t[1])}return e.join("")},e.i=function(s,t){"string"==typeof s&&(s=[[null,s,""]]);for(var a={},n=0;n<this.length;n++){var r=this[n][0];"number"==typeof r&&(a[r]=!0)}for(n=0;n<s.length;n++){var o=s[n];"number"==typeof o[0]&&a[o[0]]||(t&&!o[2]?o[2]=t:t&&(o[2]="("+o[2]+") and ("+t+")"),e.push(o))}},e}},12:function(e,s){e.exports=require("vue-electron")},134:function(e,s,t){"use strict";Object.defineProperty(s,"__esModule",{value:!0});var a=t(7),n=t.n(a),r=t(12),o=t.n(r),i=t(70),u=t.n(i);n.a.use(o.a),n.a.config.debug=!0,new n.a({components:{App:u.a},render:function(e){return e(u.a)}}).$mount("#app")},148:function(e,s,t){"use strict";Object.defineProperty(s,"__esModule",{value:!0}),s.default={data:function(){return{danmakuCount:0,danmakuList:[],onlineNumber:"--",fansNumber:"--",showResetHint:!1,config:{onlineMessage:!0,fansMessage:!0,welcomeMessage:!0,welcomeGuardMessage:!0,commentMessage:!0,giftMessage:!0,guardBuyMessage:!0,newFansMessage:!0,blockMessage:!0,showUserLevel:!0,showUserTitle:!0,showUserBadge:!0,showUserVIP:!0,showUserGuard:!0,useGiftEnd:!0,hideToolbar:!1,showOnlineAndFans:!0,danmakuFontSize:14,danmakuDisplayTime:10,danmakuBackgroundOpacity:80,lockWindowHeight:!1,danmakuMaxHeight:600,useWebsocket:!0,useHttps:!1,useNotification:!1,useTTS:!1}}},computed:{danmakuBoxStyle:function(){return{fontSize:this.config.danmakuFontSize+"px",lineHeight:3*this.config.danmakuFontSize/2+"px"}},danmakuListStyle:function(){return{backgroundColor:"rgba(249, 233, 236, "+this.config.danmakuBackgroundOpacity/100+")",bottom:this.config.showOnlineAndFans?"27px":0}},guardStyle:function(){return{width:3*this.config.danmakuFontSize/2+"px",height:3*this.config.danmakuFontSize/2+"px",backgroundSize:"auto "+3*this.config.danmakuFontSize/2+"px"}},danmakuResetHint:function(){return this.showResetHint?"reset-hint":""}},watch:{"config.lockWindowHeight":function(){this.resetWindow(!1)},"config.danmakuMaxHeight":function(){this.resetWindow(!1)}},created:function(){var e=this;this.$electron.ipcRenderer.on("newConfig",function(s,t){e.config=t}),this.$electron.ipcRenderer.on("clearDanmaku",function(s){e.danmakuList=[]}),this.$electron.ipcRenderer.on("newDanmaku",function(s,t){t.filter(function(s){return"test"==s.type||"musicLog"==s.type||"sendLog"==s.type||e.config[s.type+"Message"]}).map(function(s){e.addDanmaku(s)})}),this.$electron.ipcRenderer.on("onlineNumber",function(s,t){e.onlineNumber=t}),this.$electron.ipcRenderer.on("fansNumber",function(s,t){e.fansNumber=t}),this.$electron.ipcRenderer.on("move",function(s,t,a){e.resetWindow(!0,t,a)})},methods:{addDanmaku:function(e){var s=this;e.transCount=""+this.danmakuCount++,this.danmakuList.push(e),setTimeout(function(){s.removeDanmaku()},1e3*this.config.danmakuDisplayTime)},removeDanmaku:function(){this.danmakuList.splice(0,1)},userLevelColor:function(e){return"user-level-"+Math.ceil(Number(e)/10)},userBadgeLevelColor:function(e){return"user-badge-level-"+Math.ceil(Number(e)/4)},userGuardLevel:function(e){return"guard-user-"+e},giftImage:function(e){return"http://s1.hdslb.com/bfs/static/blive/blfe-live-room/static/img/gift-images/image-png/gift-"+e+".png"},titleImage:function(e){return e?"http://s1.hdslb.com/bfs/static/blive/live-assets/"+e.replace("title-","title/")+".png":""},resetWindow:function(e,s,t){var a=this,n=this.$electron.screen.getPrimaryDisplay().workArea,r=this.$electron.remote.getCurrentWindow(),o=r.getBounds();if(e)if(this.config.lockWindowHeight){var i=Math.min(t-n.y,this.config.danmakuMaxHeight);r.setBounds({x:s,y:t-i,width:320,height:i})}else r.setBounds({x:s,y:n.y,width:320,height:t-n.y});else{var u=o.x,l=o.y+o.height;if(this.config.lockWindowHeight){var d=Math.min(l-n.y,this.config.danmakuMaxHeight);r.setBounds({x:u,y:l-d,width:320,height:d})}else r.setBounds({x:u,y:n.y,width:320,height:l-n.y})}this.showResetHint=!0,setTimeout(function(){a.showResetHint=!1},300)}}}},151:function(e,s,t){s=e.exports=t(1)(),s.push([e.i,'*{margin:0;padding:0;font-family:Helvetica Neue,Helvetica,PingFang SC,Hiragino Sans GB,Microsoft YaHei,\\\\5FAE\\8F6F\\96C5\\9ED1,Arial,sans-serif}.danmaku-page{height:100vh;overflow:hidden}.reset-hint{background-color:rgba(249,233,236,.4)}.toolbar{position:absolute;left:0;bottom:0;width:100%;display:flex;border-radius:5px;overflow:hidden}.toolbar .item{flex:1;color:#000;background-color:rgba(249,233,236,.8)}.toolbar .item+.item{margin-left:1px}.toolbar .online{display:inline-block;padding:5px 8px;font-size:14px;line-height:16px;flex:3}.toolbar .online span{float:right}.danmaku-enter{opacity:0;transform:translateY(100%)}.danmaku-leave-to{opacity:0;transform:translateY(-75%)}.danmaku-enter-active,.danmaku-leave-active{transition:all 1s}.danmaku-list{position:absolute;left:0;width:100%;border-radius:5px;overflow:hidden}.danmaku-box{padding:4px 8px;user-select:none;cursor:default;color:#000}.danmaku-box .admin-user{padding:1px 2px;border-radius:4px;background-color:#ea9336}.danmaku-box .vip-user{padding:1px 2px;border-radius:4px;background-color:#f25d8e}.danmaku-box .svip-user{padding:1px 2px;border-radius:4px;background-color:#ffb100}.danmaku-box .user-name{color:#4fc1e9}.danmaku-box .user-level{padding:0 2px;border-radius:4px;border-width:1px;border-style:solid}.danmaku-box .user-level-1{color:#939393}.danmaku-box .user-level-2{color:#5dbb57}.danmaku-box .user-level-3{color:#5595d9}.danmaku-box .user-level-4{color:#9a65ed}.danmaku-box .user-level-5{color:#fc84ae}.danmaku-box .user-level-6{color:#fc953a}.danmaku-box .user-badge{border-width:1px;border-style:solid;border-radius:4px;overflow:hidden}.danmaku-box .user-badge .user-badge-title{padding:0 4px}.danmaku-box .user-badge .user-badge-level{border-top-right-radius:3px;border-bottom-right-radius:3px;padding:0 3px}.danmaku-box .user-badge-level-1{background-color:#61decb;border-color:#61decb}.danmaku-box .user-badge-level-1 .user-badge-level{background-color:#fff;color:#61decb}.danmaku-box .user-badge-level-2{background-color:#5896de;border-color:#5896de}.danmaku-box .user-badge-level-2 .user-badge-level{background-color:#fff;color:#5896de}.danmaku-box .user-badge-level-3{background-color:#a068f1;border-color:#a068f1}.danmaku-box .user-badge-level-3 .user-badge-level{background-color:#fff;color:#a068f1}.danmaku-box .user-badge-level-4{background-color:#ff86b2;border-color:#ff86b2}.danmaku-box .user-badge-level-4 .user-badge-level{background-color:#fff;color:#ff86b2}.danmaku-box .user-badge-level-5{background-color:#f6be18;border-color:#f6be18}.danmaku-box .user-badge-level-5 .user-badge-level{background-color:#fff;color:#f6be18}.danmaku-box .user-title img{vertical-align:middle}.danmaku-box .guard-user{display:inline-block;vertical-align:top;background-image:url("http://static.hdslb.com/live-static/live-room/images/guard/icon-guard-big.png")}.danmaku-box .guard-user-1{background-position:100% 0}.danmaku-box .guard-user-2{background-position:50% 0}.danmaku-box .guard-user-3{background-position:0 0}.danmaku-box .guard-user-gift{display:inline-block;width:32px;height:32px;vertical-align:bottom;background-image:url("http://static.hdslb.com/live-static/live-room/images/guard/icon-guard-big.png");background-size:auto 32px}.danmaku-box .msg-gift .gift-img>img{height:32px}.danmaku-box .msg-gift .user-name{color:#ff8f34}.danmaku-box .msg-gift .gift-action,.danmaku-box .msg-gift .user-gift{color:#000}.danmaku-box .success{color:#19be6b}.danmaku-box .failed{color:#ed3f14}.msg-new-fans,.user-comment{color:#000}.admin-user,.guard-user,.svip-user,.user-badge,.vip-user{color:#fff}',""])},184:function(e,s){e.exports={render:function(){var e=this,s=e.$createElement,t=e._self._c||s;return t("div",{ref:"page",staticClass:"danmaku-page",class:e.danmakuResetHint},[t("div",{ref:"list",staticClass:"danmaku-list",style:e.danmakuListStyle},[t("transition-group",{attrs:{name:"danmaku"}},e._l(e.danmakuList,function(s,a){return t("div",{key:s.transCount,staticClass:"danmaku-box",style:e.danmakuBoxStyle},["connected"==s.type?t("div",{staticClass:"msg-connected"},[e._v("弹幕服务器连接成功...")]):"error"==s.type?t("div",{staticClass:"msg-error"},[e._v("连接发生错误，3秒后自动重连...")]):"live"==s.type?t("div",{staticClass:"msg-live"},[e._v("开始直播啦！")]):"preparing"==s.type?t("div",{staticClass:"msg-preparing"},[e._v("直播已结束，下次再见！")]):"welcome"==s.type?t("div",{staticClass:"msg-welcome"},[s.user.isVIP?t("span",{staticClass:"vip-user"},[e._v("爷")]):e._e(),e._v(" "),s.user.isSVIP?t("span",{staticClass:"svip-user"},[e._v("爷")]):e._e(),e._v(" "),t("span",{staticClass:"user-name"},[e._v(e._s(s.user.name))]),e._v(" "),t("span",{staticClass:"welcome-message"},[e._v("进入直播间")])]):"welcomeGuard"==s.type?t("div",{staticClass:"msg-welcome-guard"},[s.user.guard>0?t("span",{staticClass:"guard-user",class:e.userGuardLevel(s.user.guard),style:e.guardStyle}):e._e(),e._v(" "),t("span",{staticClass:"user-name"},[e._v(e._s(s.user.name))]),e._v(" "),t("span",{staticClass:"welcome-message"},[e._v("进入直播间")])]):"comment"==s.type?t("div",{staticClass:"msg-comment"},[s.user.guard>0?t("span",{staticClass:"guard-user",class:e.userGuardLevel(s.user.guard),style:e.guardStyle}):e._e(),e._v(" "),s.user.isAdmin?t("span",{staticClass:"admin-user"},[e._v("管")]):e._e(),e._v(" "),s.user.isSVIP&&e.config.showUserVIP?t("span",{staticClass:"svip-user"},[e._v("爷")]):s.user.isVIP&&e.config.showUserVIP?t("span",{staticClass:"vip-user"},[e._v("爷")]):e._e(),e._v(" "),s.user.badge&&e.config.showUserBadge?t("span",{staticClass:"user-badge",class:e.userBadgeLevelColor(s.user.badge.level)},[t("span",{staticClass:"user-badge-title"},[e._v(e._s(s.user.badge.title))]),t("span",{staticClass:"user-badge-level"},[e._v(e._s(s.user.badge.level))])]):e._e(),e._v(" "),s.user.title&&e.config.showUserTitle?t("span",{staticClass:"user-title"},[t("img",{attrs:{src:e.titleImage(s.user.title.source)}})]):e._e(),e._v(" "),s.user.level&&e.config.showUserLevel?t("span",{staticClass:"user-level",class:e.userLevelColor(s.user.level)},[e._v(e._s("UL "+s.user.level))]):e._e(),e._v(" "),t("span",{staticClass:"user-name"},[e._v(e._s(s.user.name)+":")]),e._v(" "),t("span",{staticClass:"user-comment"},[e._v(e._s(s.comment))])]):"gift"==s.type?t("div",{staticClass:"msg-gift"},[t("span",{staticClass:"user-name"},[e._v(e._s(s.user.name))]),e._v(" "),t("span",{staticClass:"gift-action"},[e._v("赠送")]),e._v(" "),t("span",{staticClass:"gift-img"},[t("img",{attrs:{src:e.giftImage(s.gift.id)}})]),e._v(" "),t("span",{staticClass:"user-gift"},[e._v(e._s(s.gift.name+" × "+s.gift.count))])]):"guardBuy"==s.type?t("div",{staticClass:"msg-guard-buy"},[t("span",{staticClass:"user-name"},[e._v(e._s(s.user.name))]),e._v(" "),t("span",{staticClass:"buy-msg"},[e._v("购买")]),e._v(" "),t("span",{staticClass:"guard-user-gift",class:e.userGuardLevel(s.level),style:e.guardStyle}),e._v(" "),t("span",{staticClass:"buy-count"},[e._v(e._s("× "+s.count))])]):"block"==s.type?t("div",{staticClass:"msg-block"},[t("span",{staticClass:"user-name"},[e._v(e._s(s.user.name))]),e._v(" "),t("span",{staticClass:"block-msg"},[e._v("被管理员禁言")])]):"newFans"==s.type?t("div",{staticClass:"msg-new-fans"},[t("span",{staticClass:"user-name"},[e._v(e._s(s.user.name))]),e._v(" "),t("span",{staticClass:"follow-msg"},[e._v("关注了直播间")])]):"test"==s.type?t("div",{staticClass:"msg-test"},[t("span",{staticClass:"test-content"},[e._v(e._s(s.content))])]):"musicLog"==s.type?t("div",{staticClass:"msg-music"},[t("span",{staticClass:"user-name"},[e._v(e._s(s.user.name))]),e._v(" "),s.passed?t("span",{staticClass:"success"},[e._v("点歌成功")]):t("span",{staticClass:"failed"},[e._v("点歌失败")]),e._v(" "),s.log?t("span",{staticClass:"music-log"},[e._v(e._s(s.log))]):e._e()]):"sendLog"==s.type?t("div",{staticClass:"msg-send"},[s.success?t("span",{staticClass:"success"},[e._v("弹幕发送成功")]):t("span",{staticClass:"failed"},[e._v("弹幕发送失败")]),e._v(" "),s.msg?t("span",{staticClass:"send-log"},[e._v(e._s(s.msg))]):e._e()]):t("div",[e._v(e._s(s))])])}))],1),e._v(" "),e.config.showOnlineAndFans?t("div",{staticClass:"toolbar"},[t("div",{staticClass:"online item"},[e._v("房间人气"),t("span",[e._v(e._s(e.onlineNumber))])]),e._v(" "),t("div",{staticClass:"online item"},[e._v("关注人数"),t("span",[e._v(e._s(e.fansNumber))])])]):e._e()])},staticRenderFns:[]}},2:function(e,s){function t(e,s){for(var t=0;t<e.length;t++){var a=e[t],n=d[a.id];if(n){n.refs++;for(var r=0;r<n.parts.length;r++)n.parts[r](a.parts[r]);for(;r<a.parts.length;r++)n.parts.push(i(a.parts[r],s))}else{for(var o=[],r=0;r<a.parts.length;r++)o.push(i(a.parts[r],s));d[a.id]={id:a.id,refs:1,parts:o}}}}function a(e){for(var s=[],t={},a=0;a<e.length;a++){var n=e[a],r=n[0],o=n[1],i=n[2],u=n[3],l={css:o,media:i,sourceMap:u};t[r]?t[r].parts.push(l):s.push(t[r]={id:r,parts:[l]})}return s}function n(e,s){var t=f(),a=v[v.length-1];if("top"===e.insertAt)a?a.nextSibling?t.insertBefore(s,a.nextSibling):t.appendChild(s):t.insertBefore(s,t.firstChild),v.push(s);else{if("bottom"!==e.insertAt)throw new Error("Invalid value for parameter 'insertAt'. Must be 'top' or 'bottom'.");t.appendChild(s)}}function r(e){e.parentNode.removeChild(e);var s=v.indexOf(e);s>=0&&v.splice(s,1)}function o(e){var s=document.createElement("style");return s.type="text/css",n(e,s),s}function i(e,s){var t,a,n;if(s.singleton){var i=p++;t=m||(m=o(s)),a=u.bind(null,t,i,!1),n=u.bind(null,t,i,!0)}else t=o(s),a=l.bind(null,t),n=function(){r(t)};return a(e),function(s){if(s){if(s.css===e.css&&s.media===e.media&&s.sourceMap===e.sourceMap)return;a(e=s)}else n()}}function u(e,s,t,a){var n=t?"":a.css;if(e.styleSheet)e.styleSheet.cssText=b(s,n);else{var r=document.createTextNode(n),o=e.childNodes;o[s]&&e.removeChild(o[s]),o.length?e.insertBefore(r,o[s]):e.appendChild(r)}}function l(e,s){var t=s.css,a=s.media,n=s.sourceMap;if(a&&e.setAttribute("media",a),n&&(t+="\n/*# sourceURL="+n.sources[0]+" */",t+="\n/*# sourceMappingURL=data:application/json;base64,"+btoa(unescape(encodeURIComponent(JSON.stringify(n))))+" */"),e.styleSheet)e.styleSheet.cssText=t;else{for(;e.firstChild;)e.removeChild(e.firstChild);e.appendChild(document.createTextNode(t))}}var d={},c=function(e){var s;return function(){return void 0===s&&(s=e.apply(this,arguments)),s}},g=c(function(){return/msie [6-9]\b/.test(window.navigator.userAgent.toLowerCase())}),f=c(function(){return document.head||document.getElementsByTagName("head")[0]}),m=null,p=0,v=[];e.exports=function(e,s){if("undefined"!=typeof DEBUG&&DEBUG&&"object"!=typeof document)throw new Error("The style-loader cannot be used in a non-browser environment");s=s||{},void 0===s.singleton&&(s.singleton=g()),void 0===s.insertAt&&(s.insertAt="bottom");var n=a(e);return t(n,s),function(e){for(var r=[],o=0;o<n.length;o++){var i=n[o],u=d[i.id];u.refs--,r.push(u)}if(e){t(a(e),s)}for(var o=0;o<r.length;o++){var u=r[o];if(0===u.refs){for(var l=0;l<u.parts.length;l++)u.parts[l]();delete d[u.id]}}}};var b=function(){var e=[];return function(s,t){return e[s]=t,e.filter(Boolean).join("\n")}}()},201:function(e,s,t){var a=t(151);"string"==typeof a&&(a=[[e.i,a,""]]);t(2)(a,{});a.locals&&(e.exports=a.locals)},7:function(e,s){e.exports=require("vue")},70:function(e,s,t){t(201);var a=t(0)(t(148),t(184),null,null);e.exports=a.exports}});