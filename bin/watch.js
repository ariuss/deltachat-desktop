var watch = require('glob-watcher')
var child = require('child_process')

watch(['./_locales/*.xml'], function (done) {
  var p = child.spawn('npm', ['run', 'build-translations'])
  p.stdout.pipe(process.stdout)
  p.stderr.pipe(process.stderr)
  p.on('close', done)
})
