import Vue from 'vue'
import Router from 'vue-router'
import { normalizeURL, decode } from 'ufo'
import { interopDefault } from './utils'
import scrollBehavior from './router.scrollBehavior.js'

const _b00084f4 = () => interopDefault(import('..\\pages\\layout' /* webpackChunkName: "" */))
const _83cac38a = () => interopDefault(import('..\\pages\\home' /* webpackChunkName: "" */))
const _0571718d = () => interopDefault(import('..\\pages\\login' /* webpackChunkName: "" */))
const _480212cd = () => interopDefault(import('..\\pages\\profile' /* webpackChunkName: "" */))
const _4980577f = () => interopDefault(import('..\\pages\\settings' /* webpackChunkName: "" */))
const _c79e386e = () => interopDefault(import('..\\pages\\editor' /* webpackChunkName: "" */))
const _2ecc561a = () => interopDefault(import('..\\pages\\article' /* webpackChunkName: "" */))

const emptyFn = () => {}

Vue.use(Router)

export const routerOptions = {
  mode: 'history',
  base: '/',
  linkActiveClass: 'nuxt-link-active',
  linkExactActiveClass: 'nuxt-link-exact-active',
  scrollBehavior,

  routes: [{
    path: "/",
    component: _b00084f4,
    children: [{
      path: "",
      component: _83cac38a,
      name: "home"
    }, {
      path: "/login",
      component: _0571718d,
      name: "login"
    }, {
      path: "/register",
      component: _0571718d,
      name: "register"
    }, {
      path: "/profile/:username",
      component: _480212cd,
      name: "profile"
    }, {
      path: "/settings",
      component: _4980577f,
      name: "settings"
    }, {
      path: "/editor",
      component: _c79e386e,
      name: "editor"
    }, {
      path: "/article/:slug",
      component: _2ecc561a,
      name: "article"
    }]
  }],

  fallback: false
}

export function createRouter (ssrContext, config) {
  const base = (config._app && config._app.basePath) || routerOptions.base
  const router = new Router({ ...routerOptions, base  })

  // TODO: remove in Nuxt 3
  const originalPush = router.push
  router.push = function push (location, onComplete = emptyFn, onAbort) {
    return originalPush.call(this, location, onComplete, onAbort)
  }

  const resolve = router.resolve.bind(router)
  router.resolve = (to, current, append) => {
    if (typeof to === 'string') {
      to = normalizeURL(to)
    }
    return resolve(to, current, append)
  }

  return router
}
