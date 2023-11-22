// https://nuxt.com/docs/api/configuration/nuxt-config

// @ts-ignore
// @ts-ignore
export default defineNuxtConfig({
  
  // watchers: {
  //   webpack: {
  //     aggregateTimeout: 300,
  //     poll: 1000
  //   }
  // },
  devtools: { enabled: false },
  modules: ["@nuxtjs/google-fonts", "@pinia/nuxt", '@nuxtjs/tailwindcss',  ],
  // @ts-ignore
  googleFonts: {
    families: {
      // "Open Sans": [100,200,300,400,500,600,700],
      // "Roboto": [100,200,300,400,500,600,700],
      // "Poppins": [100,200,300,400,500,600,700],
      // "Raleway": [100,200,300,400,500,600,700],
      // "Inter": [100,200,300,400,500,600,700],
      Lato: [500,600,700],
    },
    subsets: ['latin'],
    display: 'swap',
    prefetch: false,
    preconnect: false,
    preload: false,
    download: true,
    base64: false,
 
    // @ts-ignore
    // "Open Sans": true,
  }

})
