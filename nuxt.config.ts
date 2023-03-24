// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
    srcDir: 'src/',
    modules: ["nuxt-microcms-module"],
    microCMS: {
        serviceDomain: process.env.MICROCMS_SERVICE_DOMAIN,
        apiKey: process.env.MICROCMS_API_KEY,
    },
    css:["@/assets/sass/main.scss"],
    vite: {
        css: {
            preprocessorOptions: {
                scss: {
                    additionalData:  `
                        @use 'sass:math'; \
                        @use '@/assets/sass/Global/_global' as *; \
                        `
                },
            },
        },
    }
})