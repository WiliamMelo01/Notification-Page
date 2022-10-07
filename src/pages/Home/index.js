import React from 'react'
import * as c from './homeStyle'

import Header from '../../components/Header'
import Main from '../../components/Main'

export default function Home() {
    return (
        <>
        <c.Container className="home-container">
            <Header />
            <Main />
        </c.Container>
        </>
    )
}
