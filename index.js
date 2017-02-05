const execFile = require('child_process').execFile
const resolvePath = require('path').resolve

module.exports = (options) => {
  if (!options) {
    options = {}
  }

  if (!options.repository) {
    return Promise.reject(Error('No respository supplied.'))
  }

  if (!options.directory) {
    return Promise.reject(Error('No directory supplied.'))
  }

  if (!options.branch) {
    options.branch = 'master'
  }

  const args = [
    options.repository,
    options.branch,
    options.directory
  ]

  return new Promise((resolve, reject) => {
    execFile(resolvePath('gitd.sh'), args, (error, stdout) => {
      if (error) reject(error)
      else resolve(stdout.trim())
    })
  })
}
