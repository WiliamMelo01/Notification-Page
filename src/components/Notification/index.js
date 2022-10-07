import React from 'react'
import * as c from './notificationStyle'


export default function Notification(props) {
    return (
        <c.Container className="container" unred={props.unred}>
            <c.ContainerHorizontal>
                <c.UserImage src={require(`../../assets/images/avatar-${props.user}.webp`)} alt="user" />
                <c.line>
                    <c.name>{props.name}</c.name>
                    <c.action>{props.action}</c.action>
                    {props.group && <c.group>{props.group}</c.group>}
                    {props.post && <c.post>{props.post}</c.post>}
                    {props.unred && <c.newICon className="newIcon"></c.newICon>}
                    <c.date className="date">
                        {props.date}
                    </c.date>
                </c.line>
            </c.ContainerHorizontal>
            {props.message && <c.message className="message">{props.message}</c.message>}
        </c.Container >
    )
}
