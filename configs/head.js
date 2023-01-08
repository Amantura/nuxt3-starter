const interGoogleFont = [
  {
    rel: 'preconnet',
    href: 'https://fonts.googleapis.com'
  },
  {
    rel: 'preconnect',
    href: 'https://fonts.gstatic.com',
    crossorigin: true
  },
  {
    rel: 'stylesheet',
    href: 'https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800&display=swap',
  }
]

export default {
  charset: 'utf-8',
  viewport: 'width=device-width, initial-scale=1, user-scalabe=no',
  title: 'caps.kg',
  link: [
    ...interGoogleFont
  ]
}