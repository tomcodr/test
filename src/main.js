import { createApp } from "vue";
import { createRouter, createWebHistory } from "vue-router";
import App from "./App.vue";

import HomeDashboardHybrid from "./pages/HomeDashboardHybrid.vue";
import HomeDashboardElektrisch from "./pages/HomeDashboardElektrisch.vue";
import HomeDashboardOtto from "./pages/HomeDashboardOtto.vue";
import Fahrzeuge from "./pages/Fahrzeuge.vue";
import Profil from "./pages/Profil.vue";
import FahrzeugHinzufuegen from "./pages/FahrzeugHinzufuegen.vue";
import LoggedOut from "./pages/LoggedOut.vue";
import SideBoardLoggedOut from "./pages/SideBoardLoggedOut.vue";
import LogIn from "./pages/LogIn.vue";
import Register from "./pages/Register.vue";
import HilfeLoggedIn from "./pages/HilfeLoggedIn.vue";
import HilfeLoggedOut from "./pages/HilfeLoggedOut.vue";
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


import "./global.css";

const routes = [
  {
    path: "/",
    name: "HomeDashboardHybrid",
    component: HomeDashboardHybrid,
  },
  {
    path: "/home-dashboard-elektrisch",
    name: "HomeDashboardElektrisch",
    component: HomeDashboardElektrisch,
  },
  {
    path: "/home-dashboard-otto",
    name: "HomeDashboardOtto",
    component: HomeDashboardOtto,
  },
  {
    path: "/fahrzeuge",
    name: "Fahrzeuge",
    component: Fahrzeuge,
  },
  {
    path: "/profil",
    name: "Profil",
    component: Profil,
  },
  {
    path: "/fahrzeughinzufuegen",
    name: "FahrzeugHinzufuegen",
    component: FahrzeugHinzufuegen,
  },
  {
    path: "/loggedout",
    name: "LoggedOut",
    component: LoggedOut,
  },
  {
    path: "/sideboard-loggedout",
    name: "SideBoardLoggedOut",
    component: SideBoardLoggedOut,
  },
  {
    path: "/login",
    name: "LogIn",
    component: LogIn,
  },
  {
    path: "/register",
    name: "Register",
    component: Register,
  },
  {
    path: "/hilfe-logged-in",
    name: "HilfeLoggedIn",
    component: HilfeLoggedIn,
  },
  {
    path: "/hilfe-logged-out",
    name: "HilfeLoggedOut",
    component: HilfeLoggedOut,
  },
  {
    path: "/layout",
    name: "Layout",
    component: Layout,
  },
  {
    path: "/gang",
    name: "Gang",
    component: Gang,
  },
  {
    path: "/lenkung",
    name: "Lenkung",
    component: Lenkung,
  },
  {
    path: "/drehzahl",
    name: "Drehzahl",
    component: Drehzahl,
  },
  {
    path: "/geschwindigkeit",
    name: "Geschwindigkeit",
    component: Geschwindigkeit,
  },
  {
    path: "/tank",
    name: "Tank",
    component: Tank,
  },
  {
    path: "/temperaturen",
    name: "Temperaturen",
    component: Temperaturen,
  },
  {
    path: "/trips",
    name: "Trips",
    component: Trips,
  },
  {
    path: "/bremsen",
    name: "Bremsen",
    component: Bremsen,
  },
  {
    path: "/motor",
    name: "Motor",
    component: Motor,
  },
  
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

router.beforeEach((toRoute, fromRoute, next) => {
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

createApp(App).use(router).mount("#app");

export default router;
