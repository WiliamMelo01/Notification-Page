import React, { useState, useContext } from 'react'
import * as c from './headerStyle'

import { UnredContext } from '../../contexts/Unred'

export default function Header() {

    const { setUnred } = useContext(UnredContext)

    const [notification, setNotification] = useState(3);

    function markAllAsRead() {
        setNotification(0)
        setUnred(false)
    }

    return (
        <>
            <c.header>
                <c.containerNotification>
                    <c.title>Notifications</c.title>
                    <c.buttonNotification>
                        {notification}
                    </c.buttonNotification>
                </c.containerNotification>
                <c.buttonMarkAllAsRead
                    onClick={() => markAllAsRead()}
                >
                    Mark all as read
                </c.buttonMarkAllAsRead>
            </c.header>
        </>
    )
}
