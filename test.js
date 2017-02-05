const gitd = require('./')
const test = require('tape')
const resolve = require('path').resolve

test('Test suite', t => {
  t.plan(4)

  // Equal paths (Promise resolve)
  gitd({
    repository: 'https://github.com/joseluisq/gitd.git',
    branch: 'master',
    directory: '.tmp/test1'
  })
  .then(res => t.ok(res, 'should be ok'))

  // Equal paths (Promise resolve)
  const directory = resolve('.tmp/test2')

  gitd({
    repository: 'https://github.com/joseluisq/slendr.git',
    directory: directory
  })
  .then(response => t.equal(response, directory, 'should be equal'))

  // No repository (Promise reject)
  gitd({
    branch: 'master',
    directory: '.tmp/test1'
  })
  .catch(err =>
    t.throws(() => {
      throw err
    }, /No respository/, 'No repository validation error')
  )

  // No directory (Promise reject)
  gitd({
    repository: 'http://anonymous.repo.url'
  })
  .catch(err =>
    t.throws(() => {
      throw err
    }, /No directory/, 'No directory validation error')
  )
})
