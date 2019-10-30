const path = require("path");

module.exports = async ({ config, mode }) => {
    config.module.rules = config.module.rules.filter(
        rule => rule.test.toString() !== '/\\.css$/'
    );
    config.module.rules.push({
        test: /\.css$/,
        sideEffects: true,
        loaders: ['style-loader', 'css-loader'],
        include: path.resolve(__dirname, '../'),
    });
    return config;
};