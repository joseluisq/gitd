const gitd = require('./')
const test = require('tape')

test('Test suite', t => {
  t.plan(1)

  gitd({
    repository: 'https://github.com/joseluisq/gitd.git',
    branch: 'master',
    directory: '.tmp'
  })
  .then((res) => {
    t.ok(res, 'should be ok')
  }, (err) => {
    console.error(err)
  })
})
