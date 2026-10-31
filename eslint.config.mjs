import nextPluginConfig from "eslint-config-next";

const eslintConfig = [
  ...nextPluginConfig,
  // Registry components ship as copy-paste source for arbitrary user projects,
  // so framework-specific <img> (next/image) and raw-anchor rules don't apply to them.
  {
    files: ["registry/**"],
    rules: {
      "@next/next/no-img-element": "off",
      "@next/next/no-html-link-for-pages": "off",
    },
  },
];

export default eslintConfig;
