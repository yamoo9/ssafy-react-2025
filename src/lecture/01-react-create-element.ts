import * as React from 'react'
import * as ReactDOM from 'react-dom/client'

const buttonElement = React.createElement('button', {
  type: 'button',
  className: 'button primary-button',
  children: '리액트 버전 확인',
})

const navElement = React.createElement(
  'nav',
  null,
  React.createElement('h2', { className: 'sr-only' }, '페이지 탐색 메뉴'),
  React.createElement(
    'ul',
    null,
    React.createElement(
      'li',
      null,
      React.createElement(
        'a',
        {
          href: '/products',
        },
        '상품 목록',
      ),
    ),
    React.createElement(
      'li',
      null,
      React.createElement(
        'a',
        {
          href: '/cart',
        },
        '장바구니',
      ),
    ),
  ),
)

const rootElement = document.getElementById('root')

if (rootElement) {
  const reactDomRoot = ReactDOM.createRoot(rootElement)
  reactDomRoot.render(navElement)
}
