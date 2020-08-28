import React from 'react'

const Post = props => {
    return (
        <div className='Post'>
            <div
                className='Post__image'
                style={{
                    backgroundImage: `url(${props.image})`
                }}
            />
            <div className='Post__info'>
                <h2 className='Post__title'>{props.title}</h2>
                <p className='Post__description'>{props.description}</p>
            </div>
        </div>
    );
}

export default Post;