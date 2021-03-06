const frameworks = require('./frameworks')
const runtime = require('weex-js-runtime')
const WeexNodeRunner = require('./runner')
const { sizeof } = require('../utils')

function handleError (error) {
  console.log(` => handle error`)
  // console.log(error)
}

function runner (jsbundle, analyser) {
  // console.log(' => run runner')
  // console.log(jsbundle)
  analyser.takeRecord('bundleSize', sizeof(jsbundle))
  const nodeRunner = new WeexNodeRunner(frameworks, runtime, {}, analyser)

  return nodeRunner.execute(jsbundle)
    .catch(result => {
      handleError(result)
      return result
    })

}

module.exports = runner
