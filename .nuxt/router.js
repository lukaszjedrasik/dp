import Vue from 'vue'
import Router from 'vue-router'
import { interopDefault } from './utils'

const _7dbbe374 = () => interopDefault(import('../pages/admin/index.vue' /* webpackChunkName: "pages/admin/index" */))
const _5969f621 = () => interopDefault(import('../pages/blog/index.vue' /* webpackChunkName: "pages/blog/index" */))
const _4c0ebb64 = () => interopDefault(import('../pages/galeria/index.vue' /* webpackChunkName: "pages/galeria/index" */))
const _b00dfc52 = () => interopDefault(import('../pages/kontakt/index.vue' /* webpackChunkName: "pages/kontakt/index" */))
const _54c2d2fb = () => interopDefault(import('../pages/admin/panel/index.vue' /* webpackChunkName: "pages/admin/panel/index" */))
const _d3ef1368 = () => interopDefault(import('../pages/admin/panel/blog/index.vue' /* webpackChunkName: "pages/admin/panel/blog/index" */))
const _2addae43 = () => interopDefault(import('../pages/admin/panel/galeria/index.vue' /* webpackChunkName: "pages/admin/panel/galeria/index" */))
const _ca04cbfa = () => interopDefault(import('../pages/admin/panel/blog/edit/index.vue' /* webpackChunkName: "pages/admin/panel/blog/edit/index" */))
const _ffadcee8 = () => interopDefault(import('../pages/blog/_id/index.vue' /* webpackChunkName: "pages/blog/_id/index" */))
const _24e7fbf4 = () => interopDefault(import('../pages/index.vue' /* webpackChunkName: "pages/index" */))

Vue.use(Router)

if (process.client) {
  if ('scrollRestoration' in window.history) {
    window.history.scrollRestoration = 'manual'

    // reset scrollRestoration to auto when leaving page, allowing page reload
    // and back-navigation from other pages to use the browser to restore the
    // scrolling position.
    window.addEventListener('beforeunload', () => {
      window.history.scrollRestoration = 'auto'
    })

    // Setting scrollRestoration to manual again when returning to this page.
    window.addEventListener('load', () => {
      window.history.scrollRestoration = 'manual'
    })
  }
}
const scrollBehavior = function (to, from, savedPosition) {
  // if the returned position is falsy or an empty object,
  // will retain current scroll position.
  let position = false

  // if no children detected and scrollToTop is not explicitly disabled
  if (
    to.matched.length < 2 &&
    to.matched.every(r => r.components.default.options.scrollToTop !== false)
  ) {
    // scroll to the top of the page
    position = { x: 0, y: 0 }
  } else if (to.matched.some(r => r.components.default.options.scrollToTop)) {
    // if one of the children has scrollToTop option set to true
    position = { x: 0, y: 0 }
  }

  // savedPosition is only available for popstate navigations (back button)
  if (savedPosition) {
    position = savedPosition
  }

  return new Promise((resolve) => {
    // wait for the out transition to complete (if necessary)
    window.$nuxt.$once('triggerScroll', () => {
      // coords will be used if no selector is provided,
      // or if the selector didn't match any element.
      if (to.hash) {
        let hash = to.hash
        // CSS.escape() is not supported with IE and Edge.
        if (typeof window.CSS !== 'undefined' && typeof window.CSS.escape !== 'undefined') {
          hash = '#' + window.CSS.escape(hash.substr(1))
        }
        try {
          if (document.querySelector(hash)) {
            // scroll to anchor by returning the selector
            position = { selector: hash }
          }
        } catch (e) {
          console.warn('Failed to save scroll position. Please add CSS.escape() polyfill (https://github.com/mathiasbynens/CSS.escape).')
        }
      }
      resolve(position)
    })
  })
}

export function createRouter() {
  return new Router({
    mode: 'history',
    base: decodeURI('/'),
    linkActiveClass: 'nuxt-link-active',
    linkExactActiveClass: 'nuxt-link-exact-active',
    scrollBehavior,

    routes: [{
      path: "/admin",
      component: _7dbbe374,
      name: "admin"
    }, {
      path: "/blog",
      component: _5969f621,
      name: "blog"
    }, {
      path: "/galeria",
      component: _4c0ebb64,
      name: "galeria"
    }, {
      path: "/kontakt",
      component: _b00dfc52,
      name: "kontakt"
    }, {
      path: "/admin/panel",
      component: _54c2d2fb,
      name: "admin-panel"
    }, {
      path: "/admin/panel/blog",
      component: _d3ef1368,
      name: "admin-panel-blog"
    }, {
      path: "/admin/panel/galeria",
      component: _2addae43,
      name: "admin-panel-galeria"
    }, {
      path: "/admin/panel/blog/edit",
      component: _ca04cbfa,
      name: "admin-panel-blog-edit"
    }, {
      path: "/blog/:id",
      component: _ffadcee8,
      name: "blog-id"
    }, {
      path: "/",
      component: _24e7fbf4,
      name: "index"
    }],

    fallback: false
  })
}
