"use strict";

var gulp         = require("gulp");
var gutil        = require("gulp-util");
var sass         = require("gulp-ruby-sass");
var rename       = require("gulp-rename");
var notify       = require("gulp-notify");

var examplesTask = function(fileName, path, ext) {
    
    path = path || "";
    ext  = ext  || "scss";
    
    return gulp.src(path + fileName + "." + ext)
               .pipe(sass({ style: "nested", sourcemap: false }))   //nested,compact,expanded,compressed
               .pipe(gulp.dest("examples")) 
               .pipe(notify({ message: fileName + "." + ext + " task completed!" }));
};

gulp.task("scss", function() {
    return gulp.src("src/prefixes.scss")
               .pipe(rename("prefixes.scss"))
               .pipe(gulp.dest("dist")) 
               .pipe(notify({ message: "prefixes.scss task completed!" }));
});

gulp.task("sass", function() {
    return examplesTask("*", "examples/**/", "sass");
});

gulp.task("examples", function() {
    return examplesTask("*", "examples/**/");
});

gulp.task("watch", function() {
	gulp.watch("src/**/*.scss", ["scss"]);
	gulp.watch("examples/**/*.sass", ["sass"]);
	gulp.watch("examples/**/*.scss", ["examples"]);
});

gulp.task("default", function() {
    gulp.run("scss");
    gulp.run("sass");
    gulp.run("examples");
});