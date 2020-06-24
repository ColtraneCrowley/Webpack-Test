import * as $ from 'jquery'
import Post from '@models/Post'
// import json from './assets/json'
import './styles/styles.css'
import WebpackLogo from './assets/forsenW.jpg'
// import xml from './assets/data.xml'
import React from 'react'
import { render } from 'react-dom'
import './styles/less.less'
import './styles/scss.scss'
import './babel.js'

const post = new Post('Webpack Test. Kappa ', WebpackLogo)
$('pre').addClass('code').html(post.toString())

const App = () => (
  <div className='container'>
    <h1>Webpack test!</h1>
    <hr />

    <div className='logo'></div>

    <hr />

    <div className='box'>
      <h2>Less</h2>
    </div>
    <hr />

    <div className='card'>
      <h2>SCSS here!</h2>
    </div>

  </div>)

render(<App></App>, document.getElementById('app'))

// console.log('Post', post)
// console.log('XML: ', xml)
// console.log('JSON: ', json)