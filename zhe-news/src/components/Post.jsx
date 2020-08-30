import React from 'react'

import {Item, Label} from "semantic-ui-react";

const Post = props => {

    const subString = s => s.length >= 250 ? s.substr(0,250) + '...'  : s

    return (

        <Item>
            <Item.Image src={props.image} />

            <Item.Content>
                <Item.Header as='a'>{props.title}</Item.Header>

                <Item.Description>{subString(props.description)}</Item.Description>
                <Item.Extra>
                    <Label icon='eye' content={`Просмотров: ${props.views.substr(0,1)}`} />
                </Item.Extra>
            </Item.Content>
        </Item>

    );
}

export default Post;