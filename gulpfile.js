const less = require('gulp-less');
// const path = require('path');

const {src, dest, task, series} = require('gulp')
const include = require('gulp-file-include')
const {stream} = require('browser-sync');

const paths = {
  src: {
    folder: "./src/",
    indexLess: "./src/**/index.less",
    assets: "./src/assets",
    less: "./src/**/*.less",
    components: "/src/**/*.html",
  },
  dist: {
    folder: "./dist/",
    css: "./dist/assets/css/",
    images: "./dist/assets/img/",
    assets: "./dist/assets",
  },

}

task("components", () => {
  return src(paths.src.folder + "/**/*.html")
    .pipe(
      include({
        includePaths: __dirname + paths.src.components,
      })
    )
    .pipe(dest(paths.dist.folder))
    .pipe(stream());
});

task('less', function() {
  return src(paths.src.folder + "assets/less/index.less")
    .pipe(less())
    .pipe(include({
        includePaths: __dirname + paths.src.less
      }
    ))
    .pipe(dest(paths.dist.css));
});

task('img', function() {
  return src(paths.src.assets + "/img/*.{svg, png}")
    .pipe(dest(paths.dist.assets + "/img"));
});
task('font', function() {
  return src(paths.src.assets + "/fonts/*.ttf")
    .pipe(dest(paths.dist.assets + "/fonts"))
})

// task('default', series)

exports.default = series('components', 'less','img', 'font')