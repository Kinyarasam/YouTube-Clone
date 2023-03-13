#!/usr/bin/env node
/**
 * Defines routes using vue-router
 * @module Router
 * @requires About
 * @requires Home
 * @requires NotFound
 * @requires vue-router
 * @type {import("vue-router").Router} router - Vue Router instance
 * @description The router object defines three routes:
 *  - A route for the home page, represented by the "/" path, which renders the Home component.
 *  - A route for the about page, represented by the "/about" path, which renders the About component.
 *  - A catch-all route, represented by the "/:pathMatch(.)" path, which matches any other path that does not match the previous routes and renders the NotFound component.
 *  - The createWebHashHistory function is used to create a router history object that uses the hash portion of the URL to simulate a full URL so that the router can work properly even if the server is not configured to handle URL rewriting.
 *  - The router object is then exported so that it can be used by other parts of the application.
 */
import About from '../components/About'
import Home from '../components/Home';
import NotFound from '../components/NotFound'
import { createRouter, createWebHashHistory } from 'vue-router'

const routes = [
  /**
   * Home route
   * @name Home
   * @route {string} path - "/" path
   * @component {Home} component - Home component
   */
  {
    path: '/',
    name: Home,
    component: Home
  },
  /**
   * About route
   * @name About
   * @route {string} path - "/about" path
   * @component {About} component - About component
   */
  {
    name: 'About',
    path: '/about',
    component: About
  },
  /**
   * Not Found route
   * @name NotFound
   * @route {string} path - "/:pathmatch(.*)*" path
   * @component {NotFound} component - NotFound component
   */
  {
    path: '/:pathMatch(.*)*',
    name: 'NotFound',
    component: NotFound
  }
]

/**
 * Create Vue Router instance
 * @function createRouter
 * @param {object} options - Router options
 * @param {import("vue-router).RouteRecordRaw[]} options.routes - Route configurations
 * @param {import("vue-router).RouterHistory} options.history - Router history configuration.
 * @returns {import("vue-router").Router} Router instance
 */
const router = createRouter({
  history: createWebHashHistory(),
  routes, // short for `routes: routes`  
})

export default router;
