import { useGlobalStore } from "~/store";
export default defineNuxtPlugin(async ({ }) => {
    const { $pinia } = useNuxtApp()
    if (process.server) {
        const store = useGlobalStore($pinia);
        await store.nuxtServerInit();
    }
})