module.exports = {
    presets: [
        "@babel/preset-env", 
        ["@babel/preset-react", {runtime: "automatic"}]
    ],
    plugins: ["@emotion",
    //  {
    //     "sourceMap": true,
    //     "autoLabel": "dev-only",
    //     "labelFormat": "[local]",
    //     "cssPropOptimization": true
    //  }
    ],
    // ["react-refresh/babel"]
};