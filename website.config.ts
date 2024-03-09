export const config = {
  metadata: {
    title: 'Robert Lewis',
    description:
      'Robert Lewis - Aspiring Software Developer specializing in modern web technologies. Check out my portfolio to see my projects and skills.'
  },
  webserver: {
    host: process.env.HOST ?? 'http://localhost:3000'
  }
}
