const { defineConfig } = require('cypress')

module.exports = defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
    baseUrl: 'http://localhost:3000', // Đảm bảo rằng ứng dụng của bạn đang chạy trên cổng này
    specPattern: 'cypress/integration/**/*.spec.{js,jsx,ts,tsx}', // Cập nhật đường dẫn tới thư mục kiểm thử
  },
})
