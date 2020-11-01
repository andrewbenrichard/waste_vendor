/**
 * First we will load all of this project's JavaScript dependencies which
 * includes Vue and other libraries. It is a great starting point when
 * building robust, powerful web applications using Vue and Laravel.
 */

require("./bootstrap");
require("./store/subscriber");

window.Form = Form;
window.Vue = require("vue");

import store from "./store";
import { Form, HasError, AlertError } from "vform";
import VueRouter from "vue-router";

Vue.component(HasError.name, HasError);
Vue.component(AlertError.name, AlertError);
Vue.use(VueRouter);
// Vue.use(Vuesax);

window.Fire = new Vue();
import VueProgressBar from "vue-progressbar";

Vue.use(VueProgressBar, {
    color: "rgb(143, 255, 199)",
    failedColor: "red",
    height: "60px"
});
import Swal from "sweetalert2";
window.Swal = Swal;

const Toast = Swal.mixin({
    toast: true,
    position: "top-end",
    showConfirmButton: false,
    timer: 3000
});
window.Toast = Toast;

let routes = [
    // after auth
    {
        path: "/prime/dashboard/",
        name: "admin",
        component: require("./components/dashboardComponents/dashboard.vue")
            .default,
        beforeEnter: (to, from, next) => {
            if (!store.getters["auth/authenticated"]) {
                return next({
                    name: "login"
                });
            }
            next();
        }
    },
    {
        path: "/prime/dashboard/donations",
        name: "donations",
        component: require("./components/dashboardComponents/donations.vue")
            .default,
        beforeEnter: (to, from, next) => {
            if (!store.getters["auth/authenticated"]) {
                return next({
                    name: "login"
                });
            }
            next();
        }
    },
    {
        path: "/prime/dashboard/donation/:slug",
        component: require("./components/dashboardComponents/singles/donation.vue")
            .default,
        beforeEnter: (to, from, next) => {
            if (!store.getters["auth/authenticated"]) {
                return next({
                    name: "login"
                });
            }
            next();
        }
    },
    {
        path: "/prime/dashboard/event/gallery/:id",
        component: require("./components/dashboardComponents/create/eventGallery.vue")
            .default,
        beforeEnter: (to, from, next) => {
            if (!store.getters["auth/authenticated"]) {
                return next({
                    name: "login"
                });
            }
            next();
        }
    },
    {
        path: "/prime/dashboard/categories",
        name: "categories",
        component: require("./components/dashboardComponents/categories.vue")
            .default,
        beforeEnter: (to, from, next) => {
            if (!store.getters["auth/authenticated"]) {
                return next({
                    name: "login"
                });
            }
            next();
        }
    },
    {
        path: "/prime/dashboard/add-event",
        name: "addevent",
        component: require("./components/dashboardComponents/create/event.vue")
            .default,
        beforeEnter: (to, from, next) => {
            if (!store.getters["auth/authenticated"]) {
                return next({
                    name: "login"
                });
            }
            next();
        }
    },
    {
        path: "/prime/dashboard/gallery",
        name: "gallery",
        component: require("./components/dashboardComponents/gallery.vue")
            .default,
        beforeEnter: (to, from, next) => {
            if (!store.getters["auth/authenticated"]) {
                return next({
                    name: "login"
                });
            }
            next();
        }
    },
    {
        path: "/prime/dashboard/events",
        name: "events",
        component: require("./components/dashboardComponents/events.vue")
            .default,
        beforeEnter: (to, from, next) => {
            if (!store.getters["auth/authenticated"]) {
                return next({
                    name: "login"
                });
            }
            next();
        }
    },
    {
        path: "/prime/dashboard/volunteers",
        name: "volunteers",
        component: require("./components/dashboardComponents/volunteers.vue")
            .default,
        beforeEnter: (to, from, next) => {
            if (!store.getters["auth/authenticated"]) {
                return next({
                    name: "login"
                });
            }
            next();
        }
    },
    {
        path: "/prime/dashboard/products",
        name: "products",
        component: require("./components/dashboardComponents/products.vue")
            .default,
        beforeEnter: (to, from, next) => {
            if (!store.getters["auth/authenticated"]) {
                return next({
                    name: "login"
                });
            }
            next();
        }
    },
    {
        path: "/prime/dashboard/orders",
        name: "orders",
        component: require("./components/dashboardComponents/orders.vue")
            .default,
        beforeEnter: (to, from, next) => {
            if (!store.getters["auth/authenticated"]) {
                return next({
                    name: "login"
                });
            }
            next();
        }
    },
    {
        path: "/prime/dashboard/customers",
        name: "customers",
        component: require("./components/dashboardComponents/customers.vue")
            .default,
        beforeEnter: (to, from, next) => {
            if (!store.getters["auth/authenticated"]) {
                return next({
                    name: "login"
                });
            }
            next();
        }
    },
    {
        path: "/prime/dashboard/blog",
        name: "blog",
        component: require("./components/dashboardComponents/blog.vue").default,
        beforeEnter: (to, from, next) => {
            if (!store.getters["auth/authenticated"]) {
                return next({
                    name: "login"
                });
            }
            next();
        }
    },
    {
        path: "/prime/dashboard/profile",
        name: "profile",
        component: require("./components/dashboardComponents/profile.vue")
            .default,
        beforeEnter: (to, from, next) => {
            if (!store.getters["auth/authenticated"]) {
                return next({
                    name: "login"
                });
            }
            next();
        }
    },
    {
        path: "",
        name: "home",
        component: require("./components/frontendComponents/pages/home.vue")
            .default
    },

    {
        path: "/404",
        name: "404",
        component: require("./components/frontendComponents/pages/NotFound.vue")
            .default
    },
    { path: "*", redirect: "/404" }
];

const router = new VueRouter({
    mode: "history",
    routes // short for `routes: routes`
});
/**
 * The following block of code may be used to automatically register your
 * The following block of code may be used to automatically register your
 * Vue components. It will recursively scan this directory for the Vue
 * components and automatically register them with their "basename".
 *
 * Eg. ./components/ExampleComponent.vue -> <example-component></example-component>
 */

// const files = require.context('./', true, /\.vue$/i);
// files.keys().map(key => Vue.component(key.split('/').pop().split('.')[0], files(key).default));

/**
 * Next, we will create a fresh Vue application instance and attach it to
 * the page. Then, you may begin adding components to this application
 * or customize the JavaScript scaffolding to fit your unique needs.
 */
store.dispatch("auth/attempt", localStorage.getItem("token")).then(() => {
    const app = new Vue({
        store,
        el: "#app",
        router
    });
});
