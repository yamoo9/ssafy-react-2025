import * as React from 'react'
import * as ReactDOM from 'react-dom/client'

// [TypeScript] React.ReactElement
// JavaScript Library

// Vue.js
// Default Slot === children prop

// <elementType prop1="value"></elementType>
// <button type="button" class="button primary-button">리액트 버전 확인</button>
const reactElement = React.createElement('button', {
  type: 'button',
  className: 'button primary-button',
  children: '리액트 버전 확인',
})

// DOM API
// document.getElementById('idName')
const rootElement = document.getElementById('root')

if (rootElement) {
  const reactDomRoot = ReactDOM.createRoot(rootElement)
  reactDomRoot.render(reactElement)
}
