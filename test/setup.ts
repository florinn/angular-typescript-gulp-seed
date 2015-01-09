/// <reference path='../app/_all.ts' />

/// <reference path='../node_modules/typemoq/typemoq.d.ts' /> 

/// <reference path='../bower_components/DefinitelyTyped/mocha/mocha.d.ts' /> 
/// <reference path='../bower_components/DefinitelyTyped/chai/chai.d.ts' /> 
/// <reference path='../bower_components/DefinitelyTyped/sinon-chai/sinon-chai.d.ts' /> 
/// <reference path='../bower_components/DefinitelyTyped/sinon/sinon.d.ts' /> 
/// <reference path='../bower_components/DefinitelyTyped/angularjs/angular-mocks.d.ts' /> 

import assert = chai.assert;
import expect = chai.expect;

import Mock = TypeMoq.Mock;
import GlobalMock = TypeMoq.GlobalMock;
import GlobalScope = TypeMoq.GlobalScope;
import It = TypeMoq.It;