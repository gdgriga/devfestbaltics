window.$ = window.jQuery = require('jquery')
window.Popper = require('popper.js')
require('bootstrap')

import './index.scss'
import './js/sidebar'

console.log("world!")

// use tooltip and popover components everywhere
$(function (){
  $('[data-toggle="tooltip"]').tooltip()
  $('[data-toggle="popover"]').popover()
})
