// import {src, dest} from 'gulp'
// import less from 'gulp-less'
// import include from 'gulp-file-include'
// import del from 'del'
// const less = require('gulp-less');
// const path = require('path');

const {src, dest, task, series} = require('gulp')
const include = require('gulp-file-include')
const {stream} = require('browser-sync');

const paths = {
  src: {
    folder: "./src/",
    less: "./src/assets/less/**.less",
    components: "/src/components/",
  },
  dist: {
    folder: "./dist/",
    css: "./dist/css/",
    images: "./dist/assets/img/",
  },

}

task("components", () => {
  return src(paths.src.folder + "*.html")
    .pipe(
      include({
        includePaths: __dirname + paths.src.components,
      })
    )
    .pipe(dest(paths.dist.folder))
    .pipe(stream());
});



// function html() {
//   return src('srс/**.html')
//     .pipe(include({
//       prefix: '@@'
//     }))
//     .pipe(dest('./public'))
// }
//
// task('less', function () {
//   return src('./less/**/*.less')
//     .pipe(less({
//       paths: [ path.join(__dirname, 'less', 'includes') ]
//     }))
//     .pipe(dest('./public/css'));
// });
//
//
// exports.build = series(html)
// exports.html = html