(window.webpackJsonp=window.webpackJsonp||[]).push([[5],{194:function(t,e,n){var content=n(204);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(18).default)("ffcccec2",content,!0,{sourceMap:!1})},195:function(t,e,n){var content=n(206);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(18).default)("31a82106",content,!0,{sourceMap:!1})},200:function(t,e,n){var content=n(210);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(18).default)("3c127962",content,!0,{sourceMap:!1})},203:function(t,e,n){"use strict";var o=n(194);n.n(o).a},204:function(t,e,n){(t.exports=n(17)(!1)).push([t.i,"button[data-v-1e0f5e04]{position:fixed;top:1rem;right:1rem;border:none;font-size:2rem;background-color:transparent;outline:none}button i[data-v-1e0f5e04]{padding:1rem;color:#ff4081}",""])},205:function(t,e,n){"use strict";var o=n(195);n.n(o).a},206:function(t,e,n){(t.exports=n(17)(!1)).push([t.i,"button[data-v-7b652156]{position:fixed;top:1rem;left:50%;-webkit-transform:translateX(-50%);transform:translateX(-50%);border:none;font-size:2rem;background-color:transparent;outline:none}button i[data-v-7b652156]{padding:1rem;color:#ff4081}",""])},207:function(t,e,n){"use strict";var o={name:"HomeButton"},r=(n(205),n(14)),component=Object(r.a)(o,function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("button",{on:{click:function(e){return t.$emit("home")}}},[n("i",{staticClass:"fas fa-home"})])},[],!1,null,"7b652156",null);e.a=component.exports},208:function(t,e,n){"use strict";var o={name:"LogoutButton"},r=(n(203),n(14)),component=Object(r.a)(o,function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("button",{on:{click:function(e){return t.$emit("logout")}}},[n("i",{staticClass:"fas fa-sign-out-alt"})])},[],!1,null,"1e0f5e04",null);e.a=component.exports},209:function(t,e,n){"use strict";var o=n(200);n.n(o).a},210:function(t,e,n){(t.exports=n(17)(!1)).push([t.i,"button[data-v-38d25ec5]{position:fixed;top:1rem;left:1rem;border:none;font-size:2rem;background-color:transparent;outline:none}button i[data-v-38d25ec5]{padding:1rem;color:#ff4081}",""])},211:function(t,e,n){"use strict";var o={name:"BackButton"},r=(n(209),n(14)),component=Object(r.a)(o,function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("button",{on:{click:function(e){return t.$emit("back")}}},[n("i",{staticClass:"fas fa-chevron-left"})])},[],!1,null,"38d25ec5",null);e.a=component.exports},220:function(t,e,n){var content=n(243);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(18).default)("0c664331",content,!0,{sourceMap:!1})},242:function(t,e,n){"use strict";var o=n(220);n.n(o).a},243:function(t,e,n){(t.exports=n(17)(!1)).push([t.i,".container[data-v-95b9c716]{min-width:100vw;min-height:100vh;background-color:#ffcbcf}.container[data-v-95b9c716],.container .buttonContainer[data-v-95b9c716]{display:flex;flex-direction:column;align-items:center}.container .buttonContainer[data-v-95b9c716]{margin:7rem 0 2rem}.container .buttonContainer button[data-v-95b9c716]{margin-bottom:1rem;border:none;font-size:2rem;color:#ff4081;background-color:transparent;outline:none}.container .add[data-v-95b9c716]{width:100%}.container .add form[data-v-95b9c716]{display:flex;flex-direction:column}.container .add form input[data-v-95b9c716]{width:80%;margin:.5rem auto;padding:1rem 2rem;text-align:center;outline:none;border:none;border-radius:.5rem}.container .add form .error[data-v-95b9c716]{margin:1rem auto;font-size:1.5rem;color:red}.container .add form button[data-v-95b9c716]{width:50%;margin:2rem auto;padding:1rem 0;border:1px solid #ff4081;border-radius:.5rem;background-color:transparent;outline:none}.container .remove ul[data-v-95b9c716]{display:flex;justify-content:center;align-items:center;flex-wrap:wrap;list-style-type:none}.container .remove ul li[data-v-95b9c716]{display:flex;justify-content:center;margin:.5rem}.container .remove ul li img[data-v-95b9c716]{height:100px}",""])},254:function(t,e,n){"use strict";n.r(e);n(21);var o=n(3),r=n(208),c=n(211),l=n(207),d={middleware:["autologin","notAuthenticated"],components:{LogoutButton:r.a,BackButton:c.a,HomeButton:l.a},data:function(){return{add:null,remove:null,img:"",imgDescription:"",error:!1}},methods:{logout:function(){this.$store.dispatch("auth/logout")},back:function(){this.$router.push("/admin/panel")},show:function(option){"add"===option?(this.add=!0,this.remove=!1):"remove"===option&&(this.add=!1,this.remove=!0)},addImg:function(){var t=Object(o.a)(regeneratorRuntime.mark(function t(){return regeneratorRuntime.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:if(""===this.img||""===this.imgDescription){t.next=15;break}return this.error=!1,t.prev=2,t.next=5,this.$axios.$post("https://dusiowe-pazurki.firebaseio.com/images.json",{thumb:this.img,src:this.img,description:this.imgDescription});case 5:t.sent,t.next=11;break;case 8:t.prev=8,t.t0=t.catch(2),console.log(t.t0);case 11:this.img="",this.imgDescription="",t.next=16;break;case 15:this.error=!0;case 16:case"end":return t.stop()}},t,this,[[2,8]])}));return function(){return t.apply(this,arguments)}}(),deleteImg:function(){var t=Object(o.a)(regeneratorRuntime.mark(function t(e){return regeneratorRuntime.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,this.$store.dispatch("gallery/delete",e);case 2:case"end":return t.stop()}},t,this)}));return function(e){return t.apply(this,arguments)}}(),home:function(){this.$router.push("/")}},computed:{nails:function(){return this.$store.state.gallery.photos}},created:function(){this.$store.dispatch("gallery/downloadImages")},beforeUpdate:function(){this.$store.dispatch("gallery/downloadImages")}},m=(n(242),n(14)),component=Object(m.a)(d,function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"container"},[n("BackButton",{on:{back:t.back}}),t._v(" "),n("HomeButton",{on:{home:t.home}}),t._v(" "),n("LogoutButton",{on:{logout:t.logout}}),t._v(" "),n("div",{staticClass:"buttonContainer"},[n("button",{on:{click:function(e){return t.show("add")}}},[t._v("Dodaj zdjęcie")]),t._v(" "),n("button",{on:{click:function(e){return t.show("remove")}}},[t._v("Usuń zdjęcie")])]),t._v(" "),t.add?n("div",{staticClass:"add"},[n("form",[n("input",{directives:[{name:"model",rawName:"v-model.trim",value:t.img,expression:"img",modifiers:{trim:!0}}],attrs:{type:"url",placeholder:"Link do zdjęcia"},domProps:{value:t.img},on:{input:function(e){e.target.composing||(t.img=e.target.value.trim())},blur:function(e){return t.$forceUpdate()}}}),t._v(" "),t.error?n("p",{staticClass:"error"},[t._v("Pole nie może być puste.")]):t._e(),t._v(" "),n("input",{directives:[{name:"model",rawName:"v-model.trim",value:t.imgDescription,expression:"imgDescription",modifiers:{trim:!0}}],attrs:{type:"text",placeholder:"Opis zdjęcia"},domProps:{value:t.imgDescription},on:{input:function(e){e.target.composing||(t.imgDescription=e.target.value.trim())},blur:function(e){return t.$forceUpdate()}}}),t._v(" "),t.error?n("p",{staticClass:"error"},[t._v("Pole nie może być puste.")]):t._e(),t._v(" "),n("button",{attrs:{type:"submit"},on:{click:function(e){return e.preventDefault(),t.addImg(e)}}},[t._v("Dodaj")])])]):t._e(),t._v(" "),t.remove?n("div",{staticClass:"remove"},[n("ul",t._l(t.nails,function(e,o){return n("li",{key:o,on:{click:function(e){return t.deleteImg(o)}}},[n("img",{directives:[{name:"lazy",rawName:"v-lazy",value:e.src,expression:"nail.src"}]})])}),0)]):t._e()],1)},[],!1,null,"95b9c716",null);e.default=component.exports}}]);