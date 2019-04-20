exports.ids=[4],exports.modules={100:function(t,e,n){"use strict";n.r(e);var o=n(57),r=n(60),c=n(56),d={middleware:["autologin","notAuthenticated"],components:{LogoutButton:o.a,BackButton:r.a,HomeButton:c.a},data:()=>({add:null,remove:null,img:"",imgDescription:"",error:!1}),methods:{logout(){this.$store.dispatch("auth/logout")},back(){this.$router.push("/admin/panel")},show(option){"add"===option?(this.add=!0,this.remove=!1):"remove"===option&&(this.add=!1,this.remove=!0)},async addImg(){if(""!==this.img&&""!==this.imgDescription){this.error=!1;try{await this.$axios.$post("https://dusiowe-pazurki.firebaseio.com/images.json",{thumb:this.img,src:this.img,description:this.imgDescription})}catch(t){console.log(t)}this.img="",this.imgDescription=""}else this.error=!0},async deleteImg(t){await this.$store.dispatch("gallery/delete",t)},home(){this.$router.push("/")}},computed:{nails(){return this.$store.state.gallery.photos}},created(){this.$store.dispatch("gallery/downloadImages")},beforeUpdate(){this.$store.dispatch("gallery/downloadImages")}},l=n(1);var component=Object(l.a)(d,function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"container"},[n("BackButton",{on:{back:t.back}}),t._ssrNode(" "),n("HomeButton",{on:{home:t.home}}),t._ssrNode(" "),n("LogoutButton",{on:{logout:t.logout}}),t._ssrNode(' <div class="buttonContainer" data-v-95b9c716><button data-v-95b9c716>Dodaj zdjęcie</button> <button data-v-95b9c716>Usuń zdjęcie</button></div> '+(t.add?'<div class="add" data-v-95b9c716><form data-v-95b9c716><input type="url" placeholder="Link do zdjęcia"'+t._ssrAttr("value",t.img)+" data-v-95b9c716> "+(t.error?'<p class="error" data-v-95b9c716>Pole nie może być puste.</p>':"\x3c!----\x3e")+' <input type="text" placeholder="Opis zdjęcia"'+t._ssrAttr("value",t.imgDescription)+" data-v-95b9c716> "+(t.error?'<p class="error" data-v-95b9c716>Pole nie może być puste.</p>':"\x3c!----\x3e")+' <button type="submit" data-v-95b9c716>Dodaj</button></form></div>':"\x3c!----\x3e")+" "),t.remove?t._ssrNode('<div class="remove" data-v-95b9c716>',"</div>",[t._ssrNode("<ul data-v-95b9c716>","</ul>",t._l(t.nails,function(e,o){return t._ssrNode("<li data-v-95b9c716>","</li>",[n("img",{directives:[{name:"lazy",rawName:"v-lazy",value:e.src,expression:"nail.src"}]},[])])}),0)]):t._e()],2)},[],!1,function(t){var e=n(89);e.__inject__&&e.__inject__(t)},"95b9c716","2d38c8ea");e.default=component.exports},43:function(t,e,n){var content=n(53);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);var o=n(3).default;t.exports.__inject__=function(t){o("ffcccec2",content,!0,t)}},44:function(t,e,n){var content=n(55);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);var o=n(3).default;t.exports.__inject__=function(t){o("31a82106",content,!0,t)}},49:function(t,e,n){var content=n(59);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);var o=n(3).default;t.exports.__inject__=function(t){o("3c127962",content,!0,t)}},52:function(t,e,n){"use strict";n.r(e);var o=n(43),r=n.n(o);for(var c in o)"default"!==c&&function(t){n.d(e,t,function(){return o[t]})}(c);e.default=r.a},53:function(t,e,n){(t.exports=n(2)(!1)).push([t.i,"button[data-v-1e0f5e04]{position:fixed;top:1rem;right:1rem;border:none;font-size:2rem;background-color:transparent;outline:none}button i[data-v-1e0f5e04]{padding:1rem;color:#ff4081}",""])},54:function(t,e,n){"use strict";n.r(e);var o=n(44),r=n.n(o);for(var c in o)"default"!==c&&function(t){n.d(e,t,function(){return o[t]})}(c);e.default=r.a},55:function(t,e,n){(t.exports=n(2)(!1)).push([t.i,"button[data-v-7b652156]{position:fixed;top:1rem;left:50%;-webkit-transform:translateX(-50%);transform:translateX(-50%);border:none;font-size:2rem;background-color:transparent;outline:none}button i[data-v-7b652156]{padding:1rem;color:#ff4081}",""])},56:function(t,e,n){"use strict";var o={name:"HomeButton"},r=n(1);var component=Object(r.a)(o,function(){var t=this,e=t.$createElement;return(t._self._c||e)("button",{on:{click:function(e){return t.$emit("home")}}},[t._ssrNode('<i class="fas fa-home" data-v-7b652156></i>')])},[],!1,function(t){var e=n(54);e.__inject__&&e.__inject__(t)},"7b652156","1b1cb41e");e.a=component.exports},57:function(t,e,n){"use strict";var o={name:"LogoutButton"},r=n(1);var component=Object(r.a)(o,function(){var t=this,e=t.$createElement;return(t._self._c||e)("button",{on:{click:function(e){return t.$emit("logout")}}},[t._ssrNode('<i class="fas fa-sign-out-alt" data-v-1e0f5e04></i>')])},[],!1,function(t){var e=n(52);e.__inject__&&e.__inject__(t)},"1e0f5e04","2d6412dc");e.a=component.exports},58:function(t,e,n){"use strict";n.r(e);var o=n(49),r=n.n(o);for(var c in o)"default"!==c&&function(t){n.d(e,t,function(){return o[t]})}(c);e.default=r.a},59:function(t,e,n){(t.exports=n(2)(!1)).push([t.i,"button[data-v-38d25ec5]{position:fixed;top:1rem;left:1rem;border:none;font-size:2rem;background-color:transparent;outline:none}button i[data-v-38d25ec5]{padding:1rem;color:#ff4081}",""])},60:function(t,e,n){"use strict";var o={name:"BackButton"},r=n(1);var component=Object(r.a)(o,function(){var t=this,e=t.$createElement;return(t._self._c||e)("button",{on:{click:function(e){return t.$emit("back")}}},[t._ssrNode('<i class="fas fa-chevron-left" data-v-38d25ec5></i>')])},[],!1,function(t){var e=n(58);e.__inject__&&e.__inject__(t)},"38d25ec5","66ff680e");e.a=component.exports},69:function(t,e,n){var content=n(90);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);var o=n(3).default;t.exports.__inject__=function(t){o("0c664331",content,!0,t)}},89:function(t,e,n){"use strict";n.r(e);var o=n(69),r=n.n(o);for(var c in o)"default"!==c&&function(t){n.d(e,t,function(){return o[t]})}(c);e.default=r.a},90:function(t,e,n){(t.exports=n(2)(!1)).push([t.i,".container[data-v-95b9c716]{min-width:100vw;min-height:100vh;background-color:#ffcbcf}.container[data-v-95b9c716],.container .buttonContainer[data-v-95b9c716]{display:flex;flex-direction:column;align-items:center}.container .buttonContainer[data-v-95b9c716]{margin:7rem 0 2rem}.container .buttonContainer button[data-v-95b9c716]{margin-bottom:1rem;border:none;font-size:2rem;color:#ff4081;background-color:transparent;outline:none}.container .add[data-v-95b9c716]{width:100%}.container .add form[data-v-95b9c716]{display:flex;flex-direction:column}.container .add form input[data-v-95b9c716]{width:80%;margin:.5rem auto;padding:1rem 2rem;text-align:center;outline:none;border:none;border-radius:.5rem}.container .add form .error[data-v-95b9c716]{margin:1rem auto;font-size:1.5rem;color:red}.container .add form button[data-v-95b9c716]{width:50%;margin:2rem auto;padding:1rem 0;border:1px solid #ff4081;border-radius:.5rem;background-color:transparent;outline:none}.container .remove ul[data-v-95b9c716]{display:flex;justify-content:center;align-items:center;flex-wrap:wrap;list-style-type:none}.container .remove ul li[data-v-95b9c716]{display:flex;justify-content:center;margin:.5rem}.container .remove ul li img[data-v-95b9c716]{height:100px}",""])}};
//# sourceMappingURL=000e96efb0bf4813f655.js.map