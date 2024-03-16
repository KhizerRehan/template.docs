const withNextra = require("nextra")({
  theme: "nextra-theme-docs",
  themeConfig: "./theme.config.tsx",
  // Add basePath
  basePath: "/template.docs",
});

module.exports = withNextra();
