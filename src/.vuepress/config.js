const { config } = require("vuepress-theme-hope");
const navBarConfig = require("./navBar");
const sideBarConfig = require("./sideBar");

module.exports = config({
  title: 'All about ESG | ESG 资料库',
  description: '关于ESG，包括ESG的标准有哪些，公司应如何披露ESG、提升ESG评级。Environmental, Social, Governance and more.',

  dest: "./dist",

  head: [
    //[
    //  "meta",
    //  {
    //    name: "google-site-verification",
    //    content: "qG3soux9jAKB4Q_DYf7yj1p5cEIuib6yG4zDhpmv2_E",
    //  },
    //],
    [
      "script",
      { src: "https://cdn.jsdelivr.net/npm/react/umd/react.production.min.js" },
    ],
    [
      "script",
      {
        src:
          "https://cdn.jsdelivr.net/npm/react-dom/umd/react-dom.production.min.js",
      },
    ],
    ["script", { src: "https://cdn.jsdelivr.net/npm/vue/dist/vue.min.js" }],
    [
      "script",
      { src: "https://cdn.jsdelivr.net/npm/@babel/standalone/babel.min.js" },
    ],
  ],



  themeConfig: {
    logo: "/esg.png",
    //hostname: "https://vuepress-theme-hope.github.io",

    //author: "Mr.Hope",
    //repo: "https://github.com/vuepress-theme-hope/vuepress-theme-hope",
    //repoDisplay: false,
    
    docsDir: "src",
	themeColor:false,
	search: true,

    nav: navBarConfig.zh,
    sidebar: sideBarConfig.zh,
	
	visitor: false,
	breadcrumb:true,
	editLinks:false,
	feed:false,
	

    //algolia: {
    //  apiKey: "6b0dce9b8ac6778738e26c56def7eb76",
    //  indexName: "vuepress-theme-hope",
    //},

    //algoliaType: "full",
	
    activeHeaderLinks: true, // 默认值：true
	smoothScroll: true,	
	pageInfo: false,
	
    footer: {
      display: true,
      copyright: " Copyright © 2019-present Zhou Sanfeng",
    },

    //comment: {
    //  type: "valine",
    //  appId: "2vSLKb0SqFKKWEgrOPGy3sp1-gzGzoHsz",
    //  appKey: "vma8Ewk61WeNkI81O3CGpT2i",
    //},

    copyright: {
      status: "local",
    },

    git: {
      timezone: "Asia/Shanghai",
    },

    mdEnhance: {
      enableAll: true,
      presentation: {
        plugins: ["highlight", "math", "search", "notes", "zoom"],
      },
    },

    pwa: {
      cacheHTML:false,
	  cachePic:false,
	  maxPicSize:1024,
	  favicon: "/favicon.ico",
      themeColor: "#46bd87",
      cachePic: true,
      apple: {
        icon: "/assets/icon/apple-icon-152.png",
        statusBarColor: "black",
      },
      msTile: {
        image: "/assets/icon/ms-icon-144.png",
        color: "#ffffff",
      },
      manifest: {
        icons: [
          {
            src: "/assets/icon/chrome-mask-512.png",
            sizes: "512x512",
            purpose: "maskable",
            type: "image/png",
          },
          {
            src: "/assets/icon/chrome-mask-192.png",
            sizes: "192x192",
            purpose: "maskable",
            type: "image/png",
          },
          {
            src: "/assets/icon/chrome-512.png",
            sizes: "512x512",
            type: "image/png",
          },
          {
            src: "/assets/icon/chrome-192.png",
            sizes: "192x192",
            type: "image/png",
          },
        ],

      },
    },
  },

 plugins: [
    // code-copy 插件安装后，每段代码行都看起来像多了一行，不好看。而且有较宽的行触发左右滑动时，复制按钮也跟着滑动，滑稽
    //'code-copy',
    [
      '@vuepress/last-updated', 
      {
        transformer: (timestamp, lang) => {
          //return (new Date(timestamp)).toUTCString() 或者用下面这段
          // 不要忘了安装 moment
           const moment = require("moment");
          moment.locale(lang);
          return moment(timestamp).format("YYYY-MM-DD");
        }
      }
    ],
   
  ],
});
