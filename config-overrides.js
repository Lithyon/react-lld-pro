module.exports = {
    webpack: config => {
        config.optimization.runtimeChunk = false;
        config.optimization.splitChunks = {
            cacheGroups: {
                default: false
            }
        };

        config.output.filename = "js/[name]-react-lld-pro-v2.js";
        config.plugins[5].options.filename = "css/[name]-react-lld-pro-v2.css";
        config.plugins[5].options.moduleFilename = () => "css/main-react-lld-pro-v2.css";

        return config;
    }
};
