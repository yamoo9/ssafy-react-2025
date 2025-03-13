import { createElement as h } from 'react'
import * as ReactDOM from 'react-dom/client'

// HTML =  hyper text markup language
// JavaScript Markup = hyperscript

const buttonElement = h('button', {
  type: 'button',
  className: 'button primary-button',
  children: '리액트 버전 확인',
})

const navElement = h(
  'nav',
  null,
  h('h2', { className: 'sr-only' }, '페이지 탐색 메뉴'),
  h(
    'ul',
    null,
    h(
      'li',
      null,
      h(
        'a',
        {
          href: '/products',
        },
        '상품 목록',
      ),
    ),
  ),
)

const rootElement = document.getElementById('root')

if (rootElement) {
  const reactDomRoot = ReactDOM.createRoot(rootElement)
  reactDomRoot.render(navElement)
}
