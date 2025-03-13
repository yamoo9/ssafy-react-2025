import React from 'react'
import { createRoot } from 'react-dom/client'

const navElement = (
  <nav>
    <h2 className="sr-only">페이지 탐색 메뉴</h2>
    <ul>
      <li>
        <a href="/products">상품 목록</a>
      </li>
      <li>
        <a href="/cart">장바구니</a>
      </li>
    </ul>
  </nav>
)

createRoot(document.getElementById('root')!).render(navElement)
