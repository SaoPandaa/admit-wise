import React from 'react'
import Header from './Header'
import Footer from './Footer'

const Layout = ({children}) => {
  return (
    <div>
        
        <main style={{minHeight:'80vh'}}>
            {children}
        </main>
    </div>
  )
}

export default Layout