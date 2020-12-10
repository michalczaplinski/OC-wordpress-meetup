const settings = {
  name: "oc-wordpress-meetup",
  state: {
    frontity: {
      url: "https://test.frontity.org",
      title: "007",
      description: "Inside the World of James Bond",
    },
  },
  packages: [
    "@frontity/mars-theme",
    {
      name: "@frontity/wp-source",
      state: {
        source: {
          url: "https://www.007.com/",
        },
      },
    },
    "@frontity/tiny-router",
    "@frontity/html2react",
  ],
};

export default settings;
