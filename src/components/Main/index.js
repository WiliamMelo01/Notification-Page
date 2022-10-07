import React, { useContext } from 'react'
import * as c from './mainStyle'

import Notification from '../Notification'

import { UnredContext } from '../../contexts/Unred'

export default function Main() {

    const { unred} = useContext(UnredContext)

    return (
        <c.Container>
            <Notification
                unred={unred}
                name="Mark Webber"
                action="reacted to your recent post"
                post="My first tournament today!"
                user="mark-webber"
                date="1m ago"
            />
            <Notification
                unred={unred}
                name="Angela Gray"
                action="followed you"
                user="angela-gray"
                date="5m ago"
            />
            <Notification
                unred={unred}
                name="Jacob Thompson"
                action="has joined your group"
                group="Chess club"
                user="jacob-thompson"
                date="1 day ago"
            />
            <Notification
                name="Rizky Hasanuddin"
                action="sent you a private message"
                user="rizky-hasanuddin"
                date="5 days ago"
                message="Hello, thanks for setting up the Chess Club.I've been a member for a few weeks now and i'm already having lots of fun and improving my game. "
            />
            <Notification
                name="kimberly Smith"
                action="commented on your picture "
                user="kimberly-smith"
                date="1 week ago"
            />
            <Notification
                name="Nathan Peterson"
                action="reacted to your recent post"
                post="5 end-game strategies to increase your win rate"
                user="nathan-peterson"
                long={true}
                date="2 weeks ago"
            />
            <Notification
                name="Anna Kim"
                action="left the group"
                group="Chess club"
                user="anna-kim"
                long={true}
                date="2 week ago"
            />
        </c.Container>
    )
}
