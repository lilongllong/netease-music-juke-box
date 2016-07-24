"use strict";

const gulp = require("gulp");
const gutil = require("gulp-util");
const open = require("gulp-open");
const rimraf = require("rimraf");
const webpack = require("webpack");
const WebpackDevServer = require("webpack-dev-server");

gulp.task("default", [ "dist" ]);


gulp.task("clean", cb => {
    rimraf("./assets", cb);
});


gulp.task("dist", [ "clean" ], cb => {
    gulp.src("./src/cache/test.mp3")
    .pipe(gulp.dest("assets/music"));
    webpack(require("./webpack.config-dist.js"), (err, stats) => {
        if (err) throw new gutil.PluginError("webpack", err);
        gutil.log("[webpack]", stats.toString());
    });
});


gulp.task("dev", [ "clean" ], cb => {
    const config = require("./webpack.config.js");
    const compiler = webpack(config);
    gulp.src("./src/cache/test.mp3")
    .pipe(gulp.dest("assets/music"));

    new WebpackDevServer(compiler, {
        publicPath: config.output.publicPath,
        proxy: config.devServer.proxy
    }).listen(8080, "localhost", err => {
        if (err) throw new gutil.PluginError("webpack-dev-server", err);
        const uri = "http://localhost:8080/";
        gutil.log("[webpack-dev-server]", uri);
        gulp.src("").pipe(open({ uri }));
    });
});
