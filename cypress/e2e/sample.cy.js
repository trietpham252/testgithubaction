describe('Sample Test', () => {
    it('should visit the app', () => {
      cy.visit('/')
      cy.contains('Welcome to Your App') // Đảm bảo rằng nội dung này khớp với ứng dụng của bạn
    })
  })
  