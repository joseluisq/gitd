# gitd [![Build Status](https://travis-ci.org/joseluisq/gitd.svg?branch=master)](https://travis-ci.org/joseluisq/gitd) [![Standard - JavaScript Style Guide](https://img.shields.io/badge/code%20style-standard-brightgreen.svg)](http://standardjs.com/)

> Use git to fetch all directories and files from any repository. :octocat:

## Prerequisites

- [NodeJS](https://nodejs.org) v4.0 or greater.
- Unix-like operating systems, because this package uses a shell script.

## Install

```sh
npm install gitd --save-dev
```

## Usage

`gitd` returns a `Promise` object. When promise is fulfilled the `directory` value is passed else when it is `rejected` an `Error` object is passed.

```js
const gitd = require('gitd')

gitd({
  repository: 'https://github.com/joseluisq/gitd.git',
  branch: 'master',
  directory: '.tmp'
})
.then(dir => {
  console.log(`Files downloaded at "${dir}"`)
}, err => {
  throw err
})
```

## Options

```js
{
  repository: 'https://github.com/joseluisq/gitd.git', // required
  branch: 'master', // `master` branch (by default). You can also provide a `tag` name.
  directory: 'my_source_files' // Empty directory required (git will create the directory if not exists)
}
```

## License
MIT license

© 2017 [José Luis Quintana](http://quintana.io)
