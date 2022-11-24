import { createRouter, createWebHistory } from "@ionic/vue-router";
import { RouteRecordRaw } from "vue-router";
import TabsPage from "../views/TabsPage.vue";

const routes: Array<RouteRecordRaw> = [
  {
    path: "",
    component: TabsPage,
    children: [
      {
        path: "",
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
      {
        path: ":catchAll(.*)",
        redirect: "/",
      },
    ],
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
