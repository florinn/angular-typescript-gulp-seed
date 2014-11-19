AngularJS + Typescript + Gulp Seed
===================


This project is an application skeleton for an AngularJS and Typescript web app.

The seed contains a sample [TodoMVC](https://github.com/tastejs/todomvc/tree/gh-pages/examples/typescript-angular) application, it uses Typescript and its internal module concept, it is preconfigured to install the AngularJS framework and a bunch of development and testing tools.

----------


Features
-------------

Please see the [gulpfile.js](https://github.com/florinn/angular-typescript-gulp-seed/blob/master/gulpfile.js) for up to date information on what is supported.

* Compile Typescript files and concatenate them to a single output file
* Support for sourcemaps
* CSS autoprefixing
* Image optimization
* Wire-up dependencies installed with [Bower](http://bower.io/) (for `gulp watch` or `gulp wiredep`)
* Built-in preview server with livereload

> **Note:** When using IDE's that have built-in support for Typescript (like Visual Studio, Webstorm, etc) you should enable combining Javascript output into the file `.tmp\js\output.js`


Getting Started
-------------

### Clone the repository

Clone the repository using [git](http://git-scm.com/):

```
git clone https://github.com/florinn/angular-typescript-gulp-seed.git
cd angular-typescript-gulp-seed
```

### Install dependencies

There are two kinds of dependencies in this project: tools and application specific. The tools help manage and test the application.

> You can get the tools the project depends upon via [npm](https://www.npmjs.org/):

> ``` 
> npm install
> ```

> You can get the app specific dependencies via Bower:

> ```
> bower install
> cd test && bower install
> ```

You should find that you have some new folders in your project:

* `node_modules` - contains the npm packages for the tools
* `bower_components` and `test/bower_components` - contains app specific dependencies

> **Note:** The `bower_components` folder would normally be installed in the root folder but you may change this location through the .bowerrc file.


Build and Run the Application
-------------

The project is preconfigured with a simple development web server. The simplest way to start this server is:

```
gulp serve
```

At development time, you should have in the background all the time:

```
gulp watch
```

At release time, you should simply run:

```
gulp
```


Directory Layout
-------------

```
|   .bowerrc
|   .editorconfig
|   .gitattributes
|   .gitignore
|   .jshintrc
|   bower.json
|   gulpfile.js
|   package.json
|   
+---app
|   |   .htaccess
|   |   404.html
|   |   app.ts
|   |   favicon.ico
|   |   index.html
|   |   robots.txt
|   |   _all.ts
|   |   
|   \---todo
|           todo.controller.ts
|           todoBlur.directive.ts
|           todoFocus.directive.ts
|           todoItem.ts
|           todoScope.ts
|           todoStorage.service.ts
|           todoStorage.ts
|           
+---content
|   +---images
|   \---styles
|           main.css
|           
\---test
    |   .bowerrc
    |   bower.json
    |   index.html
    |   
    \---spec
            test.js            
```

