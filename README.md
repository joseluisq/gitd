# Gitd [![Build Status](https://travis-ci.org/joseluisq/gitd.svg?branch=master)](https://travis-ci.org/joseluisq/gitd) [![Standard - JavaScript Style Guide](https://img.shields.io/badge/code%20style-standard-brightgreen.svg)](http://standardjs.com/) [![Greenkeeper badge](https://badges.greenkeeper.io/joseluisq/gitd.svg)](https://greenkeeper.io/)

> Use [Git](https://git-scm.com/) to fetch all source files from any repository. :octocat:

## Prerequisites

- [NodeJS](https://nodejs.org) v4.0 or greater.
- [Git](https://git-scm.com/).
- Unix-like operating systems only (this package uses a shell script). :penguin:

## Install

[Yarn](https://github.com/yarnpkg/)

```sh
yarn add gitd --dev
```

[NPM](https://www.npmjs.com/)

```sh
npm install gitd --save-dev
```

## Usage

`gitd` returns a [Promise](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise) object. When promise is fulfilled the `directory` value is passed else when it is `rejected` an `Error` object is passed.

```js
const gitd = require('gitd')

gitd({
  repository: 'https://github.com/joseluisq/gitd.git',
  directory: '.tmp',
  branch: 'master',
})
.then(dir => console.log(`Files downloaded at "${dir}"`))
.catch(err => console.error(err.message))
```

## Options

| Name  | Required | Description
| ------------- | ------------- | ------------- |
| __repository__  | Required | Git repository URL. |
| __directory__  | Required | Empty directory path. (Git could create the directory if not exists) |
| __branch__  | Optional | `master` by default. You can also provide a `tag` name. |

## License
MIT license

© 2017 [José Luis Quintana](http://quintana.io)
