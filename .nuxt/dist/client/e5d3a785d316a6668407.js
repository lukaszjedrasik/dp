(window.webpackJsonp=window.webpackJsonp||[]).push([[4],{181:function(t,e,r){var content=r(184);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,r(20).default)("eba13e3a",content,!0,{sourceMap:!1})},182:function(t,e,r){var content=r(186);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,r(20).default)("7c4cc6a9",content,!0,{sourceMap:!1})},183:function(t,e,r){"use strict";var o=r(181);r.n(o).a},184:function(t,e,r){(t.exports=r(19)(!1)).push([t.i,".slide-menu-off[data-v-49ded260]{position:fixed;top:0;right:-100px;width:0;transition:.3s}.slide-menu-off ul[data-v-49ded260]{display:flex;flex-direction:column;justify-content:center;align-items:center;height:100vh;list-style-type:none}.slide-menu-off ul li[data-v-49ded260]{font-size:3.5rem;font-weight:300;cursor:pointer}.slide-menu-off.sideMenuOn[data-v-49ded260]{position:fixed;right:0;width:100%;height:100%;box-shadow:0 19px 38px rgba(0,0,0,.3),0 15px 12px rgba(0,0,0,.22);background-color:#ffcbcf;z-index:999}.slide-menu-off.sideMenuOn ul[data-v-49ded260]{display:flex;flex-direction:column;justify-content:center;align-items:center;height:100vh;list-style-type:none}.slide-menu-off.sideMenuOn ul li[data-v-49ded260]{margin:1rem 0;font-size:3.5rem;font-weight:300;cursor:pointer}",""])},185:function(t,e,r){"use strict";var o=r(182);r.n(o).a},186:function(t,e,r){(t.exports=r(19)(!1)).push([t.i,".hamburger[data-v-1e0e9fd0]{position:fixed;top:25px;right:25px;width:35px;height:25px;cursor:pointer;z-index:99}.hamburger div[data-v-1e0e9fd0]{position:absolute;top:0;right:0;height:2px;width:20px;background-color:#fff;transition:.3s}.hamburger div[data-v-1e0e9fd0]:nth-child(2){top:10px;width:100%}.hamburger div[data-v-1e0e9fd0]:nth-child(3){top:20px}@media (min-width:768px){.hamburger[data-v-1e0e9fd0]{display:none}}.hamburger.hamburgerBlack div[data-v-1e0e9fd0]{background-color:#ff4081}.hamburger.transformHamburger[data-v-1e0e9fd0]{position:fixed;z-index:9999}.hamburger.transformHamburger div[data-v-1e0e9fd0]{width:100%;top:10px;right:0;-webkit-transform:rotate(45deg);transform:rotate(45deg)}.hamburger.transformHamburger div[data-v-1e0e9fd0]:nth-child(2){opacity:0}.hamburger.transformHamburger div[data-v-1e0e9fd0]:nth-child(3){-webkit-transform:rotate(-45deg);transform:rotate(-45deg)}",""])},187:function(t,e,r){"use strict";var o={name:"SideMenu",methods:{hideMenu:function(){this.$store.commit("hamburgerValue/HAMBURGER_ON_OFF")}}},n=(r(183),r(14)),l={name:"Hamburger",components:{SideMenu:Object(n.a)(o,function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"slide-menu-off",class:{sideMenuOn:this.$store.state.hamburgerValue.hamburger}},[r("ul",{on:{click:t.hideMenu}},[r("nuxt-link",{attrs:{tag:"li",to:"/"}},[t._v("Strona Główna")]),t._v(" "),r("nuxt-link",{attrs:{tag:"li",to:"/blog"}},[t._v("Blog")]),t._v(" "),r("nuxt-link",{attrs:{tag:"li",to:"/galeria"}},[t._v("Galeria")]),t._v(" "),r("nuxt-link",{attrs:{tag:"li",to:"/kontakt"}},[t._v("Kontakt")])],1)])},[],!1,null,"49ded260",null).exports},data:function(){return{isSlide:!1}},methods:{hamburger:function(){this.$store.commit("hamburgerValue/HAMBURGER_ON_OFF")},changeHamburgerColor:function(){window.scrollY>=240?this.isSlide=!0:this.isSlide=!1}},created:function(){window.addEventListener("scroll",this.changeHamburgerColor)},destroyed:function(){window.removeEventListener("scroll",this.changeHamburgerColor)}},c=(r(185),Object(n.a)(l,function(){var t=this.$createElement,e=this._self._c||t;return e("div",[e("div",{staticClass:"hamburger",class:{transformHamburger:this.$store.state.hamburgerValue.hamburger,hamburgerBlack:this.isSlide&&!1===this.$store.state.hamburgerValue.hamburger},on:{click:this.hamburger,scroll:this.changeHamburgerColor}},[e("div",{class:{transformHamburger:this.$store.state.hamburgerValue.hamburger}}),this._v(" "),e("div",{class:{transformHamburger:this.$store.state.hamburgerValue.hamburger}}),this._v(" "),e("div",{class:{transformHamburger:this.$store.state.hamburgerValue.hamburger}})]),this._v(" "),e("SideMenu")],1)},[],!1,null,"1e0e9fd0",null));e.a=c.exports},189:function(t,e){t.exports="data:image/svg+xml;base64,PHN2ZyBoZWlnaHQ9IjQ2NHB0IiB2aWV3Qm94PSItMTEyIDAgNDY0IDQ2NCIgd2lkdGg9IjQ2NHB0IiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPjxwYXRoIGQ9Im03MiAwaDk2djI0MGgtOTZ6bTAgMCIgZmlsbD0iIzY5Njk2OSIvPjxwYXRoIGQ9Im0xNiAyNDBoMjA4YzguODM1OTM4IDAgMTYgNy4xNjQwNjIgMTYgMTZ2MTkyYzAgOC44MzU5MzgtNy4xNjQwNjIgMTYtMTYgMTZoLTIwOGMtOC44MzU5MzggMC0xNi03LjE2NDA2Mi0xNi0xNnYtMTkyYzAtOC44MzU5MzggNy4xNjQwNjItMTYgMTYtMTZ6bTAgMCIgZmlsbD0iI2ZkYTJjNiIvPjxwYXRoIGQ9Im0xNzcuNTE5NTMxIDQzMmgtMTE1LjAzOTA2MmMtOC4yMTg3NSAwLTE1LjA5NzY1Ny02LjIyMjY1Ni0xNS45MjE4NzUtMTQuMzk4NDM4bC0xNC41NTg1OTQtMTQ1LjYwMTU2MmgxNzZsLTE0LjU1ODU5NCAxNDUuNjAxNTYyYy0uODI0MjE4IDguMTc1NzgyLTcuNzAzMTI1IDE0LjM5ODQzOC0xNS45MjE4NzUgMTQuMzk4NDM4em0wIDAiIGZpbGw9IiNmZjZhYTAiLz48cGF0aCBkPSJtMTIwIDM1MmMtNC40MTc5NjkgMC04LTMuNTgyMDMxLTgtOHYtNjRjMC00LjQxNzk2OSAzLjU4MjAzMS04IDgtOHM4IDMuNTgyMDMxIDggOHY2NGMwIDQuNDE3OTY5LTMuNTgyMDMxIDgtOCA4em0wIDAiIGZpbGw9IiM2OTY5NjkiLz48cGF0aCBkPSJtMTM2IDM5MmgtMzJsOC00OGgxNnptMCAwIiBmaWxsPSIjYjRiNGI0Ii8+PC9zdmc+"},190:function(t,e,r){t.exports=r.p+"img/185dbbe.jpeg"},191:function(t,e,r){var content=r(196);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,r(20).default)("c95e5bfe",content,!0,{sourceMap:!1})},194:function(t,e,r){t.exports=r.p+"img/8ed231d.png"},195:function(t,e,r){"use strict";var o=r(191);r.n(o).a},196:function(t,e,r){(t.exports=r(19)(!1)).push([t.i,".about[data-v-3c7fe196]{width:100vw;display:flex;flex-direction:column;background-color:#fff}.about .information[data-v-3c7fe196]{display:flex;flex-direction:row;align-items:center;margin:0 auto}.about .information img[data-v-3c7fe196]{width:10rem}.about .information p[data-v-3c7fe196]{margin:3rem 1rem 3rem 0;font-size:1.5rem;font-weight:300;line-height:1.5;color:#000}.about .information.informationRight[data-v-3c7fe196]{flex-direction:row-reverse}.about .information.informationRight p[data-v-3c7fe196]{margin:3rem 0 3rem 1rem;text-align:right}.about .nailImage img[data-v-3c7fe196]{width:100%;margin:0 auto}",""])},197:function(t,e,r){"use strict";r.r(e);var o=[function(){var t=this.$createElement,e=this._self._c||t;return e("h1",{staticClass:"home-page-tittle"},[this._v("\n      Dusiowe\n      "),e("span",[this._v("Pazurki")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("section",{staticClass:"about"},[e("div",{staticClass:"information",attrs:{"data-aos":"fade-right","data-aos-once":"true"}},[e("img",{attrs:{src:r(189),alt:"nail nails"}}),this._v(" "),e("p",[this._v("Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta ullam mollitia sint quod similique officia fuga suscipit beatae accusamus! Ducimus!")])]),this._v(" "),e("div",{staticClass:"nailImage",attrs:{"data-aos":"zoom-in-up","data-aos-once":"true"}},[e("img",{attrs:{src:r(190),alt:"nail nails"}})])])},function(){var t=this.$createElement,e=this._self._c||t;return e("section",{staticClass:"about"},[e("div",{staticClass:"information informationRight",attrs:{"data-aos":"fade-left","data-aos-once":"true"}},[e("img",{attrs:{src:r(189),alt:"nail nails"}}),this._v(" "),e("p",[this._v("Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta ullam mollitia sint quod similique officia fuga suscipit beatae accusamus! Ducimus!")])]),this._v(" "),e("div",{staticClass:"nailImage",attrs:{"data-aos":"zoom-in-up","data-aos-once":"true"}},[e("img",{attrs:{src:r(190),alt:"nail nails"}})])])},function(){var t=this.$createElement,e=this._self._c||t;return e("section",{staticClass:"about"},[e("div",{staticClass:"information",attrs:{"data-aos":"fade-right","data-aos-once":"true"}},[e("img",{attrs:{src:r(189),alt:"nail nails"}}),this._v(" "),e("p",[this._v("Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta ullam mollitia sint quod similique officia fuga suscipit beatae accusamus! Ducimus!")])]),this._v(" "),e("div",{staticClass:"nailImage",attrs:{"data-aos":"zoom-in-up","data-aos-once":"true"}},[e("img",{attrs:{src:r(190),alt:"nail nails"}})])])}],n={components:{Hamburger:r(187).a},layout:"DesktopMenu"},l=(r(195),r(14)),component=Object(l.a)(n,function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",{staticClass:"container"},[o("div",{staticClass:"home-page"},[o("img",{staticClass:"home-page-animoji",attrs:{src:r(194),alt:"animoji face"}}),t._v(" "),t._m(0),t._v(" "),o("Hamburger")],1),t._v(" "),t._m(1),t._v(" "),t._m(2),t._v(" "),t._m(3)])},o,!1,null,"3c7fe196",null);e.default=component.exports}}]);