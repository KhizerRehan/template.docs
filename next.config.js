console.log("process.env.NODE_ENV:", process.env.NODE_ENV);

const withNextra = require("nextra")({
  theme: "nextra-theme-docs",
  themeConfig: "./theme.config.tsx",
  output: "export",
  images: {
    unoptimized: true,
  },
});

module.exports = withNextra();
