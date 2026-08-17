// get the ninja-keys element
const ninja = document.querySelector('ninja-keys');

// add the home and posts menu items
ninja.data = [{
    id: "nav-home",
    title: "Home",
    section: "Navigation",
    handler: () => {
      window.location.href = "/";
    },
  },{id: "nav-publications",
          title: "Publications",
          description: "(* Corresponding Authors)",
          section: "Navigation",
          handler: () => {
            window.location.href = "/publications/";
          },
        },{id: "nav-projects",
          title: "Projects",
          description: "纸上得来终觉浅，绝知此事要躬行。——《冬夜读书示子聿》，陆游",
          section: "Navigation",
          handler: () => {
            window.location.href = "/projects/";
          },
        },{id: "nav-teaching",
          title: "Teaching",
          description: "学然后知不足，教然后知困。——《礼记·学记》",
          section: "Navigation",
          handler: () => {
            window.location.href = "/teaching/";
          },
        },{id: "nav-awards",
          title: "Awards",
          description: "",
          section: "Navigation",
          handler: () => {
            window.location.href = "/awards/";
          },
        },{id: "projects-fuyue-符钺",
          title: 'Fuyue (符钺)',
          description: "A Unified Program Analysis Framework for Chisel (Not Yet Released)",
          section: "Projects",handler: () => {
              window.location.href = "/projects/fuyue/";
            },},{id: "projects-qihe-骑河",
          title: 'Qihe (骑河)',
          description: "A General-Purpose Static Analysis Framework for Verilog",
          section: "Projects",handler: () => {
              window.location.href = "/projects/qihe/";
            },},{
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
