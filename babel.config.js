module.exports = function(api) {
    // Permacache the computed config and never call the function again.
    api.cache(false);

    // An array of plugins to activate when processing this file.
    const plugins = [
        "@babel/plugin-proposal-class-properties",
        "@babel/plugin-syntax-dynamic-import"
    ];

    // An array of presets to activate when processing this file.
    const presets = [
        ["@babel/preset-env", {modules: false}]
    ];

    // Allows for entire nested configuration options that will 
    // only be enabled if the envKey matches the envName option.
    const env = {
        production: {
            only: ['src'],
            plugins: [
                "lodash"
            ]
        },
        test: {
            plugins: [
                "@babel/plugin-transform-modules-commonjs",
                "dynamic-import-node"
            ]
        }
    }

    return {
        plugins,
        presets,
        env
    }
};


// {
//     "presets": ["@babel/preset-env"],
//     "plugins": [
//         "@babel/plugin-proposal-class-properties",
//         "@babel/plugin-syntax-dynamic-import"
//     ]
// }