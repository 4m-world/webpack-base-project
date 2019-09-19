const path = require('path');

module.exports = {
    paths: {
        // source files
        src: path.resolve(__dirname, '../src'),
        // production build files
        build: path.resolve(__dirname, "../build"),
        // static files to copy to build folder
        static: path.resolve(__dirname, "../public")
    }
};

