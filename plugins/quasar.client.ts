import { defineNuxtPlugin } from "#app";
import { Quasar, Dialog, Notify } from "quasar";
import "@quasar/extras/material-icons/material-icons.css";
import "quasar/dist/quasar.css";

export default defineNuxtPlugin((nuxtApp) => {
  console.log("Quasar plugin loaded");

  nuxtApp.vueApp.use(Quasar, {
    plugins: {
      Dialog,
      Notify,
    }
  });
});
