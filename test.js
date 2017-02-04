const gitd = require('./')
const test = require('tape')

test('Test suite', t => {
  t.plan(2)

  gitd({
    repository: 'https://github.com/joseluisq/gitd.git',
    branch: 'master',
    directory: '.tmp/test1'
  })
  .then((res) => {
    t.ok(res, 'should be ok')
  }, (err) => {
    throw err
  })

  gitd({
    repository: 'https://github.com/joseluisq/prelodr.git',
    directory: '.tmp//test2'
  })
  .then((res) => {
    t.ok(res, 'should be ok')
  }, (err) => {
    throw err
  })
})
