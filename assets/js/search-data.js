// get the ninja-keys element
const ninja = document.querySelector('ninja-keys');

// add the home and posts menu items
ninja.data = [{
    id: "nav-",
    title: "",
    section: "Navigation",
    handler: () => {
      window.location.href = "/";
    },
  },{id: "nav-about-me",
          title: "About Me",
          description: "",
          section: "Navigation",
          handler: () => {
            window.location.href = "/about-me/";
          },
        },{id: "nav-projects",
          title: "Projects",
          description: "",
          section: "Navigation",
          handler: () => {
            window.location.href = "/projects/";
          },
        },{id: "nav-coursework",
          title: "Coursework",
          description: "Coursework for my CS A.B. at Harvard.",
          section: "Navigation",
          handler: () => {
            window.location.href = "/coursework/";
          },
        },{id: "post-hello-world",
      
        title: "Hello, World!",
      
      description: "my first blog post",
      section: "Posts",
      handler: () => {
        
          window.location.href = "/blog/2024/hello-world/";
        
      },
    },{id: "projects-dexterikey",
          title: 'DexteriKey',
          description: "Gloves built for typing. A HackHarvard 2022 project.",
          section: "Projects",handler: () => {
              window.location.href = "/projects/dexterikey/";
            },},{id: "projects-the-path-to-the-us-green-card",
          title: 'The Path to the US Green Card',
          description: "An interactive look at the US Green Card process, built with p5.js.",
          section: "Projects",handler: () => {
              window.location.href = "/projects/greencard/";
            },},{id: "projects-moonwalker",
          title: 'Moonwalker',
          description: "A moonwalking simulation app built with Unity. Winner of the 2020 NASA App Development Challenge.",
          section: "Projects",handler: () => {
              window.location.href = "/projects/nasa/";
            },},{id: "projects-orbit-determination-of-asteroid-2003-ha22",
          title: 'Orbit Determination of Asteroid 2003 HA22',
          description: "Astrophysics research done at the Summer Science Program.",
          section: "Projects",handler: () => {
              window.location.href = "/projects/ssp/";
            },},{id: "projects-taiwan-vlog",
          title: 'Taiwan Vlog',
          description: "Vlog filmed during the 2023 Harvard Taipei Academy.",
          section: "Projects",handler: () => {
              window.location.href = "/projects/taiwan/";
            },},{id: "projects-timetracker",
          title: 'Timetracker',
          description: "A Google Sheets template I use for personal timetracking.",
          section: "Projects",handler: () => {
              window.location.href = "/projects/timetracker/";
            },},{id: "projects-hallucinations-in-watermarked-llms",
          title: 'Hallucinations in Watermarked LLMs',
          description: "Investigating whether watermarked LLMs are more likely to “hallucinate.” My MIT Deep Learning final project.",
          section: "Projects",handler: () => {
              window.location.href = "/projects/watermark/";
            },},{
        id: 'social-email',
        title: 'email',
        section: 'Socials',
        handler: () => {
          window.open("mailto:%6A%75%73%74%69%6E%6A%69@%63%6F%6C%6C%65%67%65.%68%61%72%76%61%72%64.%65%64%75", "_blank");
        },
      },{
        id: 'social-github',
        title: 'GitHub',
        section: 'Socials',
        handler: () => {
          window.open("https://github.com/jujipotle", "_blank");
        },
      },{
        id: 'social-linkedin',
        title: 'LinkedIn',
        section: 'Socials',
        handler: () => {
          window.open("https://www.linkedin.com/in/jujipotle", "_blank");
        },
      },{
      id: 'light-theme',
      title: 'Change theme to light',
      description: 'Change the theme of the site to Light',
      section: 'Theme',
      handler: () => {
        setThemeSetting("light");
      },
    },
    {
      id: 'dark-theme',
      title: 'Change theme to dark',
      description: 'Change the theme of the site to Dark',
      section: 'Theme',
      handler: () => {
        setThemeSetting("dark");
      },
    },
    {
      id: 'system-theme',
      title: 'Use system default theme',
      description: 'Change the theme of the site to System Default',
      section: 'Theme',
      handler: () => {
        setThemeSetting("system");
      },
    },];
