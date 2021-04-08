module.exports = {
    publicPath: "./",
    outputDir: "./docs/",
    assetsDir: "./assets/",
    lintOnSave: false,
    devServer: {
        host: process.env.HOST || 'localhost',
        open: true,
        port: process.env.PORT || 8080
    },
};