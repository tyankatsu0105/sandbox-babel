const babelJest = require("babel-jest");

/** @type import('babel__core').TransformOptions */
const transformOptions = {
    presets: [
        ["@babel/env", {
            "targets": {
                "node": "current",
            },
            "exclude": ["transform-regenerator"],
        }],
    ],
    babelrc: false,
};

module.exports = babelJest.createTransformer(transformOptions);