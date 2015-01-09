AngularJS + Typescript + Gulp Seed
===================


This project is an application skeleton for an **AngularJS** and **Typescript** web app.

The seed contains a sample [TodoMVC](https://github.com/tastejs/todomvc/tree/gh-pages/examples/typescript-angular) application, it uses Typescript and its internal module concept, it is preconfigured to install the AngularJS framework and a bunch of development and testing tools.

----------


Features
-------------

Please see the [gulpfile.js](https://github.com/florinn/angular-typescript-gulp-seed/blob/master/gulpfile.js) for up to date information on what is supported.

* Compile Typescript files and concatenate them to a single output file
* Support for sourcemaps
* Script minification
* CSS autoprefixing
* Image optimization
* Wire-up dependencies installed with [Bower](http://bower.io/) (for `gulp watch` or `gulp wiredep`)
* Testing with [Karma](http://karma-runner.github.io/) and [Mocha](http://mochajs.org/), [Chai](http://chaijs.com/), [Sinon](http://sinonjs.org/) and [TypeMoq](https://github.com/florinn/typemoq)
* Built-in preview server with livereload

> **Tip:** The project allows you to choose a workflow that fits you best, going either for a code editor (**SublimeText**, **Brackets** etc) and `gulp watch` combo, or for a Typescript aware IDE, or maybe for both at the same time.
>
> **Note:** When using IDE's that have built-in support for Typescript (**Visual Studio**, **WebStorm**, etc) you should: 

> - Create an IDE specific project corresponding to the `app` folder and enable combining Javascript output into the file `.tmp/js/app/output.js`
> - Create another IDE specific project corresponding to the `test` folder and enable combining Javascript output into the file `.tmp/js/test/output.test.js`


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
> ```

You should find that you have some new folders in your project:

* `node_modules` - contains the npm packages for the tools
* `bower_components` - contains app specific dependencies

> **Note:** The `bower_components` folder would normally be installed in the root folder but you may change this location through the `.bowerrc` file.


Build and Run the Application
-------------

The project is preconfigured with a simple development web server. The simplest way to start this server is:

```
gulp serve
```

----------

At development time, you should have in the background all the time:

```
gulp watch
```

which is going to:

* detect any changes to app or test scripts and consequently recompile them and run the tests
* detect any changes to index.html and static content and consequently reload them in the browser
* it will also rewire into index.html any changes in the bower dependencies

----------

At release time, you should simply run:

```
gulp
```

and when the command gets completed, the dir `dist` has all the release artifacts.

----------

To delete the `.tmp` dir (housing any temporary data) and the `dist` dir, you may run:

```
gulp clean
```


Directory Layout
-------------

```
|   .bowerrc                        // config for location of bower_components
|   .editorconfig
|   .gitattributes
|   .gitignore
|   .jshintrc
|   bower.json
|   gulpfile.js
|   karma.conf.js                   // Karma test runner config file
|   package.json
|   
+---app                             // root folder for all app related scripts
|   |   .htaccess
|   |   404.html
|   |   app.ts
|   |   favicon.ico
|   |   index.html
|   |   robots.txt
|   |   _all.ts                     // '.h' file for app with .d.ts refs
|   |   
|   \---todo                        // folder of 'todo' app feature
|           todo.controller.ts
|           todoBlur.directive.ts
|           todoFocus.directive.ts
|           todoItem.ts
|           todoScope.ts
|           todoStorage.service.ts
|           todoStorage.ts
|           
+---content                         // root folder for all static content
|   +---images
|   +---styles
|   
+---lib                             // third party libraries
|        
\---test                            // root folder for all test related scripts
    |   index.html                  // Mocha test runner for browser
    |   setup.ts                    // '.h' file for tests with .d.ts refs
    |   
    \---spec                        // folder for any 'bdd' tests (aka specs)
            todo.controller.test.ts
            todoStorage.service.test.ts         
```


Testing
-------------

The project comes preconfigured with unit tests written in **Mocha** using **Chai** assertions and **TypeMoq** spies, which are run with the **Karma Test Runner**.

The easiest way to run the unit tests is:

```
gulp test
```

The provided Karma configuration file to run them is `karma.conf.js`


Serving the Application Files
-------------

Although the project contains only client side code and hence you may serve the files directly from the file system, it is advisable to use a web server to avoid any browser related security restrictions (aka sandboxing).

Make sure that the web server you are using is properly configured to serve static files.

