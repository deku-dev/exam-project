const gulp = require("gulp");
const sass = require("gulp-sass")(require("sass"));
const sourcemaps = require("gulp-sourcemaps");
const plumber = require("gulp-plumber");

var path = {
  build: {
    css: "css/",
  },
  src: {
    scss: "scss/*.scss",
  },
};

gulp.task("css:build", function () {
  return gulp
    .src(path.src.scss)
    .pipe(plumber())
    .pipe(sourcemaps.init())
    .pipe(
      sass().on("error", (error) => {
        console.log(error.toString());
        this.emit("end");
      })
    )
    .pipe(sourcemaps.write("."))
    .pipe(gulp.dest(path.build.css));
});

gulp.task("css:watch", function () {
  gulp.watch(path.src.scss, gulp.series("css:build"));
});

gulp.task("default", gulp.series("css:build", "css:watch"));
