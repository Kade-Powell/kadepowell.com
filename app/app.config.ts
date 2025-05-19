export default defineAppConfig({
  global: {
    picture: {
      dark: 'https://avatars.githubusercontent.com/u/47295838?s=400&u=09dade5cf9f70a5172f1bd44ee9815bb60ea3bf9&v=4',
      light: 'https://avatars.githubusercontent.com/u/47295838?s=400&u=09dade5cf9f70a5172f1bd44ee9815bb60ea3bf9&v=4',
      alt: 'My profile picture'
    },
    email: 'kadepowell@gmail.com'
  },
  ui: {
    colors: {
      primary: 'blue',
      neutral: 'neutral'
    }
  },
  uiPro: {
    pageHero: {
      slots: {
        container: 'py-18 sm:py-24 lg:py-32',
        title: 'mx-auto max-w-xl text-pretty text-3xl sm:text-4xl lg:text-5xl',
        description: 'mt-2 text-md mx-auto max-w-2xl text-pretty sm:text-md text-muted'
      }
    }
  },
  footer: {
    credits: `Copyright © ${new Date().getFullYear()}`,
    colorMode: false,
    links: [{
      'icon': 'i-simple-icons-github',
      'to': 'https://github.com/Kade-Powell',
      'target': '_blank',
      'aria-label': 'Kade Powell on GitHub'
    },
    {
      'icon': 'i-simple-icons-linkedin',
      'to': 'https://www.linkedin.com/in/kade-powell-b48396202/',
      'target': '_blank',
      'aria-label': 'Kade Powell on LinkedIn'
    }]
  }
})
