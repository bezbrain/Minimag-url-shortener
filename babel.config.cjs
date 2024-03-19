module.exports = {
  presets: [
    "@babel/preset-env",
    "@babel/preset-typescript",
    "@babel/preset-react",
  ],
  plugins: [
    "babel-plugin-transform-import-meta",
    "babel-plugin-bundled-import-meta",
  ],
  // "plugins": ["babel-plugin-bundled-import-meta"],
  sourceType: "module",
};

// module.exports = {
//   presets: [
//     ["@babel/preset-env", { targets: { node: "current" } }],
//     "@babel/preset-typescript",
//   ],
// };

// module.exports = {
//   presets: [
//     "@babel/preset-env",
//     "@babel/preset-react",
//     "@babel/preset-typescript",
//   ],
// };
