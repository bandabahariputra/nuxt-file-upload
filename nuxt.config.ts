// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2024-04-03',
  devtools: { enabled: true },
  app: {
    head: {
      titleTemplate: 'File Uploader',
      meta: [
        { charset: 'utf-8' },
        { name: 'viewport', content: 'width=device-width, initial-scale=1' },
        {
          hid: 'description',
          name: 'description',
          content: 'File uploader build with Nuxt.js',
        },
      ],
      link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }],
    },
  },
  srcDir: 'src',
  css: ['@/assets/css/main.css'],
  modules: ['@nuxt/eslint', '@nuxt/ui', '@pinia/nuxt', '@uploadthing/nuxt'],
  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  },
  uploadthing: {
    /**
     * Path to your router definition file
     * @default `~/server/uploadthing.ts`
     */
    routerPath: '@/server/lib/uploadthing.ts',
    logLevel: 'info',
  },
  typescript: {
    typeCheck: true,
  },
});
