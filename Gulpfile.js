"use strict";

var gulp         = require('gulp');
var gutil        = require('gulp-util');
var sass         = require('gulp-sass');
var rename       = require('gulp-rename');
var notify       = require('gulp-notify');
var header       = require('gulp-header');
var concat       = require('gulp-concat');
var dateFormat   = require('dateformatter').format;
var pkg          = require('./package.json');

pkg.name         = "Prefixes.scss";
pkg.today        = dateFormat;

var headerComment = ["/*!", 
					" * <%= pkg.name %> v<%= pkg.version %>",
					" * @file        <%= fileName(file) %> ",
					" * @description <%= pkg.description %>",
					" * @license     MIT License",
					" * @author      <%= pkg.author %>",
					" * {@link       <%= pkg.homepage %>}",
					" * @updateTime  <%= pkg.today('Y-m-d') %>",
					" */", 
					"\r\n"].join("\r\n");

var headerCommentInline = "/*! <%= pkg.name %> v<%= pkg.version %> | <%= pkg.description %> | Author: <%= pkg.author %> | Copyright (c) 2015 Pandao, MIT License | <%= pkg.homepage %> | <%=pkg.today('Y-m-d') %> */\r\n\r\n@charset \"UTF-8\";\r\n";


var examplesTask = function(files) {
    
    return gulp.src("examples/" + files)
               .pipe(sass({ outputStyle: "nested", sourcemap: false }))   //nested,compact,expanded,compressed
               .pipe(gulp.dest("examples/css"))
               .pipe(notify({ message: "Examples task completed!" }));
};

gulp.task("dist", function() {
    return gulp.src("src/**/*.scss")
                .pipe(concat("prefixes.scss"))
                .pipe(gulp.dest("dist")) 
                .pipe(header(headerCommentInline, {pkg : pkg, fileName : function(file) {
                    var name = file.path.split(file.base + "\\");
                    return name[1];
                }}))
                .pipe(gulp.dest("dist"))
                .pipe(notify({ message: "prefixes.scss task completed!" }));
});

gulp.task("sass", function() {
    return examplesTask("*.sass");
});

gulp.task("examples", function() {
    return examplesTask("**/*.scss");
});

gulp.task("watch", function() {
	gulp.watch("src/**/*.scss", ["dist"]);
	gulp.watch("examples/**/*.sass", ["sass"]);
	gulp.watch("examples/**/*.scss", ["examples"]);
});

gulp.task("default", function() {
    gulp.run("dist");
    gulp.run("sass");
    gulp.run("examples");
});