import { defineConfig } from 'vite'

// https://vitejs.dev/config/
export default defineConfig({
  plugins:{
    "plugins": [
      ["module-resolver", {
        "root": ["./src"], // Set the root directory for your project
        "alias": {
          "components": "./src/components", // Define your aliases here
          "utils": "./src/utils"
        }
      }]
    ]
  }
  ,
})
