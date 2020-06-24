async function start() {
  return await Promise.resolve('Async is work! DON\'T forget about the \'return\'')
}

start().then(res => console.log(res))

const unused = 42

class Util {
  static id = Date.now()
}

console.log('Util ID:', Util.id)
console.log('Unused', unused)

import('lodash').then(_ => {
  console.log('Lodash', _.random(0, 42, true))
})