'use strict';

var gulp = require('gulp');

// load plugins
var $ = require('gulp-load-plugins')();
var eventStream = require('event-stream');
var mainBowerFiles = require('main-bower-files');
var del = require('del');

gulp.task('styles', function () {
    return gulp.src('content/styles/main.css')
        .pipe($.autoprefixer('last 1 version'))
        .pipe(gulp.dest('.tmp/styles'))
        .pipe($.size());
});

var tsProject = $.typescript.createProject({
    declarationFiles: true,
    noExternalResolve: false,
    sortOutput: true
});

gulp.task('scripts', function () {
    var tsResult = gulp.src('app/**/*.ts')
                       .pipe($.sourcemaps.init()) // This means sourcemaps will be generated
                       .pipe($.typescript(tsProject, undefined, $.typescript.reporter.fullReporter(true)));

    return eventStream.merge( // Merge the two output streams, so this task is finished when the IO of both operations are done.
        tsResult.dts.pipe(gulp.dest('.tmp/definitions')),
        tsResult.js
                .pipe($.concatSourcemap('output.js')) // You can use other plugins that also support gulp-sourcemaps
                .pipe($.sourcemaps.write()) // Now the sourcemaps are added to the .js file
                .pipe(gulp.dest('.tmp/js'))
    );
});

gulp.task('html', ['styles', 'scripts'], function () {
    return gulp.src('app/*.html')
        .pipe($.useref.assets())
        .pipe($.if('**/*.js', $.uglify()))
        .pipe($.if('**/*.css', $.csso()))
        .pipe($.useref.restore())
        .pipe($.useref())
        .pipe(gulp.dest('dist'))
        .pipe($.size());
});

gulp.task('images', function () {
    return gulp.src('content/images/**/*')
        .pipe($.cache($.imagemin({
            optimizationLevel: 3,
            progressive: true,
            interlaced: true
        })))
        .pipe(gulp.dest('dist/images'))
        .pipe($.size());
});

gulp.task('fonts', function () {
    return gulp.src(mainBowerFiles())
        .pipe($.filter('**/*.{eot,svg,ttf,woff}'))
        .pipe($.flatten())
        .pipe(gulp.dest('dist/fonts'))
        .pipe($.size());
});

gulp.task('extras', function () {
    return gulp.src(['app/*.*', '!app/*.html', '!app/*.ts'], { dot: true })
        .pipe(gulp.dest('dist'));
});

gulp.task('clean', function (cb) {
    del(['.tmp', 'dist'], cb);
});

gulp.task('test', function () {
    return test()
        .on('error', function (e) {
            throw e;
        });
});

function test() {
    return gulp.src(['test/**/*.test.js'], { read: false })
        .pipe($.spawnMocha({
            r: 'test/setup.js',
            R: 'spec',
            c: true,
            inlineDiffs: true,
            debug: true
        }))
        .on('error', console.warn.bind(console));
}

gulp.task('build', ['html', 'images', 'fonts', 'extras']);

gulp.task('default', ['clean', 'test'], function () {
    gulp.start('build');
});

gulp.task('connect', function () {
    $.connect.server({
        root: ['app', __dirname],
        port: 9000,
        livereload: true
    });
});

gulp.task('serve', ['scripts', 'connect'], function () {
    require('opn')('http://localhost:9000');
});

// inject bower components
gulp.task('wiredep', function () {
    var wiredep = require('wiredep').stream;

    gulp.src('app/*.html')
        .pipe(wiredep({
            directory: 'bower_components'
        }))
        .pipe(gulp.dest('app'));
});

gulp.task('watch', ['serve'], function () {
    $.watch([
        'app/*.html',
        '.tmp/styles/**/*.css',
        'app/**/*.ts',
        'content/images/**/*'
    ]).pipe($.connect.reload());

    gulp.watch('content/styles/**/*.css', ['styles']);
    gulp.watch('app/**/*.ts', ['scripts', 'test']);
    gulp.watch('content/images/**/*', ['images']);
    gulp.watch('bower.json', ['wiredep']);
});
