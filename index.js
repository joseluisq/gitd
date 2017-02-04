const execFile = require('child_process').execFile

module.exports = (options) => {
  return new Promise((resolve, reject) => {
    if (!options) {
      options = {}
    }

    if (!options.repository) {
      throw new Error('No respository supplied.')
    }

    if (!options.directory) {
      throw new Error('No directory supplied.')
    }

    if (!options.branch) {
      options.branch = 'master'
    }

    const args = [
      options.repository,
      options.branch,
      options.directory
    ]

    return execFile('./gitd.sh', args, (error, stdout) => {
      if (error) reject(error)
      else resolve(stdout.trim())
    })
  })
}
