module.exports = {
  siteMetadata: {
    title: `Ajulu's Thoughts`,
    name: `Ajulu's Thoughts`,
    siteUrl: `https://ajulusthoughts.stephenajulu.com`,
    description: `Ajulu's Thoughts is an Informative Blog with content revolving around Tech, Cybersecurity, Web Development, Blockchain, Cryptocurrencies, Machine Learning and Related Topics`,
    hero: {
      heading: `Welcome to Ajulu's Thoughts - a Tech and Cybersecurity Blog`,
      maxWidth: 600,
    },
    social: [
      {
        name: `twitter`,
        url: `https://twitter.com/stephenajulu`,
      },
      {
        name: `github`,
        url: `https://github.com/stephenajulu`,
      },
      {
        name: `instagram`,
        url: `https://instagram.com/stephenajulu`,
      },
      {
        name: `linkedin`,
        url: `https://www.linkedin.com/in/stephenajulu/`,
      },
      {
        name: `dribbble`,
        url: `https://dribbble.com/stephenajulu`,
      },
    ],
  },
  plugins: [
    {
      resolve: "@narative/gatsby-theme-novela",
      options: {
        contentPosts: "content/posts",
        contentAuthors: "content/authors",
        basePath: "/",
        authorsPage: true,
        sources: {
          local: true,
          // contentful: true,
        },
      },
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Ajulu's Thoughts`,
        short_name: `Ajulu's 💭`,
        start_url: `/`,
        background_color: `#000000`,
        theme_color: `#000000`,
        display: `standalone`,
        icon: `src/assets/favicon.png`,
      },
    },
    {
      resolve: `gatsby-plugin-netlify-cms`,
      options: {
      },
    },
  ],
};
