
import '@/assets/css/app.css';


import { createApp, h } from 'vue';
import { createInertiaApp } from '@inertiajs/vue3';
import { resolvePageComponent } from 'laravel-vite-plugin/inertia-helpers';
import { ZiggyVue } from '../../vendor/tightenco/ziggy/dist/vue.m';
import { createPinia } from 'pinia';
import i18n from '@/i18n';
import PerfectScrollbar from 'vue3-perfect-scrollbar';
import { createHead } from '@vueuse/head';
import { TippyPlugin } from 'tippy.vue';
import VueEasymde from 'vue3-easymde';
import Maska from 'maska';
import vue3JsonExcel from 'vue3-json-excel';
import 'easymde/dist/easymde.min.css';
import router from '@/router';
import Popper from 'vue3-popper';





const appName = import.meta.env.VITE_APP_NAME || 'Laravel';
const pinia = createPinia();
const head = createHead();



createInertiaApp({
    title: (title) => `${title} - ${appName}`,
    resolve: (name) => resolvePageComponent(`./Pages/${name}.vue`, import.meta.glob('./Pages/**/*.vue')),
    setup({ el, App, props, plugin }) {
        return createApp({ render: () => h(App, props) })
            .use(plugin)
            .use(pinia)
            .use(i18n)
            .use(PerfectScrollbar)
            .use(head)
            .use(TippyPlugin)
            .use(Maska)
            .use(VueEasymde)
            .use(vue3JsonExcel)
            .use(ZiggyVue)
            .component('Popper', Popper)
            .mount(el);
    },
    progress: {
        color: '#4B5563',
    },
});
