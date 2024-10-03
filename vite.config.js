import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react({
    babel: {
      plugins: [
        // Intégration du plugin pour les CSS Modules
        'babel-plugin-react-css-modules',
      ],
    },
  })],
  css: {
    modules: {
      generateScopedName: '[name]__[local]___[hash:base64:5]', // Personnalise le nom de classe
    },
  },

  // plugins: [react(
  //   {
  //     // {
  //     babel: {
  //       plugins: [
  //         [
  //           'react-css-modules',
  //           {
  //             // filetypes: {
  //             //   '.scss': {
  //             //     syntax: 'postcss-scss' // Assure-toi que ce module est bien installé
  //             //   }
  //             // },
  //             generateScopedName: '[name]___[local]',
  //             webpackHotModuleReloading: true
  //           }
  //         ]
  //       ]
  //       // plugins: [
  //       //   [
  //       //     'react-css-modules',
  //       //     {
  //       //       // filetypes: {
  //       //       //   '.scss': {
  //       //       //     syntax: 'postcss-scss'
  //       //       //   }
  //       //       // },
  //       //       generateScopedName: '[name]___[local]',
  //       //       webpackHotModuleReloading: true
  //       //     }
  //       //   ]
  //       // ]
  //     }
  //     // }
  //     // {
  //     //   css: {
  //     //     modules: {
  //     //       generateScopedName: (className, filePath) => {
  //     //         const fileName = path.basename(filePath, '.module.css')
  //     //         const hash = crypto
  //     //           .createHash('sha256')
  //     //           .update(fileName.concat(className))
  //     //           .digest('hex')
  //     //           .substring(0, 5)
  //     //         return `${fileName}__${className}__${hash}`
  //     //       },
  //     //     },
  //     //   }
  //     // },
  //     // css: {
  //     //   modules: {
  //     //     // generateScopedName,
  //     //     generateScopedName: '[name]___[local]',
  //     //   },
  //     // }
  //   }
  // )],

  // // plugins: [react()],
  // css: {
  //   modules: {
  //     generateScopedName: '[name]___[local]___[hash:base64:5]', // Personnalisation du nom des classes CSS
  //   }
  // },

  base: '/Frontend-Mentor-20-Space-tourism-multi-page-website/'
})
