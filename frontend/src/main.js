#!/usr/bin/env node
/**
 * Creates a new Vue.js application with routing enabled
 * @module Main
 * @requires createApp
 * @requires App
 * @requires Router
 * @type {import("vue").App} app - Vue.js instance
 * @description This code creates a new Vue.js application using the createApp
 *  function from Vue.js. It then uses the router object imported from
 *  '.router' to enable routing in the app. Finall, it mounts the app to the
 *  DOM element with if 'app'.
 */
import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import './index.css';

const app = createApp(App)

/**
 * Mount the Vue.js application to the DOM
 * @function use
 * @param {import("vue-router).Router} plugin - A Vue.js plugin to install
 * @returns {import("vue").App} The Vue.js app instance
 */
app.use(router)

/**
 * Mount the Vue.js application to the DOM
 * @function mount
 * @param {string|HTMLElement} element - The DOM element tot mount the app to.
 * @returns {import("vue").ComponentPublicInstance} The mounted Vue.js component instance
 */
app.mount('#app')
