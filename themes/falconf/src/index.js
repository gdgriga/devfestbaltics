window.$ = window.jQuery = require('jquery')
window.Popper = require('popper.js')
require('bootstrap')
import './index.scss'
import './js/sidebar'
import './js/smoothScroll'
import handleChangeColorOnScroll from './js/colorChangeOnScroll'

// use tooltip and popover components everywhere
$(function (){
  $('[data-toggle="tooltip"]').tooltip()
  $('[data-toggle="popover"]').popover()
})


window.addEventListener('scroll', handleChangeColorOnScroll)

