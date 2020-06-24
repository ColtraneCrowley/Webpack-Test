import * as $ from 'jquery'

function createAnalytics(): object {
  let counter = 0
  let destroyed: boolean = false

  console.log('Kappa')

  const listener = (): number => counter++

  $(document).on('click', listener)

  return {
    destroy() {
      $(document).off('click', listener)
      destroyed = true
    },
    getClicks() {
      if (destroyed) {
        return `'Analytics deleted!' Total clicks = ${counter}`
      }
      return counter
    }
  }
}

window['analytics'] = createAnalytics()