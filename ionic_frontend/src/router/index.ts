import { createRouter, createWebHistory } from "@ionic/vue-router";
import { RouteRecordRaw } from "vue-router";
import TabsPage from "../views/TabsPage.vue";

const routes: Array<RouteRecordRaw> = [
  {
    path: "/",
    redirect: "/page/home",
  },
  {
    path: "/page/",
    component: TabsPage,
    children: [
      {
        path: "",
        redirect: "/page/home",
      },
      {
        path: "home",
        component: () => import("@/views/HomePage.vue"),
      },
      {
        path: "portfolio",
        component: () => import("@/views/PortfolioPage.vue"),
        beforeEnter() {
          window.location.href = "https://github.com/EthanHarsh";
        },
      },
      {
        path: "writing",
        component: () => import("@/views/WritingPage.vue"),
        beforeEnter() {
          window.location.href = "https://blog.ethanharsh.com/";
        },
      },
      {
        path: "linkedin",
        component: () => import("@/views/GoodbyePage.vue"),
        props: {
          redirectName: "LinkedIn",
        },
        beforeEnter() {
          window.location.href = "https://www.linkedin.com/in/ethanharsh/";
        },
      },
      {
        path: "roadmap",
        component: () => import("@/views/RoadmapPage.vue"),
      },
    ],
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
