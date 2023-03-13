import React from 'react'
import './blogItem.scss'
// import { LoginBg } from '../../../assets'
import { Button } from '../../atoms'
import { useHistory } from 'react-router-dom'

const BlogItem = (props) => {
    const history = useHistory()
    const { image, title, name, date, body } = props
    return (
        <div className='blog-item'>
            <img className='image-thumb' src={image} alt='post' />
            <div className='content-detail'>
                <p className='title'>{title}</p>
                <p className='author'>{name} - {date}</p>
                <p className='body'>{body}</p>
                <Button title='view detail' onClick={() => history.push('/detail-blog')} />
            </div>
        </div>
    )
}

export default BlogItem
