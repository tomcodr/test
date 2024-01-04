import { createApp } from "vue";
import { createRouter, createWebHistory, RouterView } from "vue-router"; // Füge RouterView hinzu
import App from "./App.vue";
import store from "./store/store";
import 'boxicons/css/boxicons.min.css';



import HomeDashboardHybrid from "./pages/HomeDashboardHybrid.vue";
import Fahrzeuge from "./pages/Fahrzeuge.vue";
import Profil from "./pages/Profil.vue";
import FahrzeugHinzufuegen from "./pages/FahrzeugHinzufuegen.vue";
import LogIn from "./pages/LogIn.vue";
import Register from "./pages/Register.vue";
import Hilfe from "./pages/Hilfe.vue";
import Layout from "./pages/Layout.vue";
import Gang from "./pages/Gang.vue";
import Lenkung from "./pages/Lenkung.vue";
import Drehzahl from "./pages/Drehzahl.vue";
import Geschwindigkeit from "./pages/Geschwindigkeit.vue";
import Tank from "./pages/Tank.vue";
import Temperaturen from "./pages/Temperaturen.vue";
import Trips from "./pages/Trips.vue";
import Bremsen from "./pages/Bremsen.vue";
import Motor from "./pages/Motor.vue";
import Hoehe from "./pages/Hoehe.vue";
import NotFound from "./pages/NotFound.vue";



import "./global.css";
import i18n from './i18n';  // Anpassen des Pfads entsprechend deiner Ordnerstruktur



const routes = [
  {
    path: "/:lang?",
    component: RouterView,
    children: [{
      path: "",
      name: "HomeDashboardHybrid",
      component: HomeDashboardHybrid,
      meta: {
        title: "Dashboard"
      },
    },
    {
      path: "fahrzeuge",
      name: "Fahrzeuge",
      component: Fahrzeuge,
      meta: {
        title: "Fahrzeuge"
      },
    },
    {
      path: "profil",
      name: "Profil",
      component: Profil,
      meta: {
        title: "Benutzerprofil"
      },
    },
    {
      path: "fahrzeughinzufuegen",
      name: "FahrzeugHinzufuegen",
      component: FahrzeugHinzufuegen,
      meta: {
        title: "Hinzufügen eines neuen Fahrzeugs"
      },
    },
    {
      path: "login",
      name: "LogIn",
      component: LogIn,
    },
    {
      path: "register",
      name: "Register",
      component: Register,
    },
    {
      path: "hilfe",
      name: "Hilfe",
      component: Hilfe,
    },
    {
      path: "layout",
      name: "Layout",
      component: Layout,
      meta: {
        title: "Layout"
      },
    },
    {
      path: "gang",
      name: "Gang",
      component: Gang,
      meta: {
        title: "Gang"
      },
    },
    {
      path: "lenkung",
      name: "Lenkung",
      component: Lenkung,
      meta: {
        title: "Lenkung"
      },
    },
    {
      path: "drehzahl",
      name: "Drehzahl",
      component: Drehzahl,
      meta: {
        title: "Drehzahl"
      },
    },
    {
      path: "geschwindigkeit",
      name: "Geschwindigkeit",
      component: Geschwindigkeit,
      meta: {
        title: "Geschwindigkeit"
      },
    },
    {
      path: "tank",
      name: "Tank",
      component: Tank,
      meta: {
        title: "Tank"
      },
    },
    {
      path: "temperaturen",
      name: "Temperaturen",
      component: Temperaturen,
      meta: {
        title: "Öl und Wassertemperatur"
      },
    },
    {
      path: "trips",
      name: "Trips",
      component: Trips,
      meta: {
        title: "Trips"
      },
    },
    {
      path: "bremsen",
      name: "Bremsen",
      component: Bremsen,
      meta: {
        title: "Bremstemperaturen"
      },
    },
    {
      path: "motor",
      name: "Motor",
      component: Motor,
      meta: {
        title: "Motor"
      },
    },
    {
      path: "hoehe",
      name: "Hoehe",
      component: Hoehe,
      meta: {
        title: "Höhe"
      },
    },
    {
      path: "/:pathName(.*)*",
      name: "notfound",
      component: NotFound,
      meta: {
        title: "404 error"
      },
    },



    ]
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

router.beforeEach((toRoute, fromRoute, next) => {
  const lang = toRoute.params.lang || store.getters.getSelectedLanguage || 'de';
  store.dispatch('updateSelectedLanguage', lang);
  i18n.global.locale.value = lang;

  const documentTitle =
    toRoute?.meta && toRoute?.meta?.title ? toRoute?.meta?.title : "CT_AF-IT";
  window.document.title = documentTitle;
  if (toRoute?.meta?.description) {
    addMetaTag(toRoute?.meta?.description);
  }

  next();
});

const addMetaTag = (value) => {
  let element = document.querySelector(`meta[name='description']`);

  if (element) {
    element.setAttribute("content", value);
  } else {
    element = `<meta name="description" content="${value}" />`;
    document.head.insertAdjacentHTML("beforeend", element);
  }
};

const selectedLanguage = store.getters.getSelectedLanguage || 'de';
store.dispatch('updateSelectedLanguage', selectedLanguage);

createApp(App).use(i18n).use(router).mount("#app");

export default router;