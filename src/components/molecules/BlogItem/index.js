import React from 'react'
import './blogItem.scss'
import { LoginBg } from '../../../assets'
import { Button } from '../../atoms'
import { useHistory } from 'react-router-dom'

const BlogItem = (props) => {
    const history = useHistory()
    return (
        <div className='blog-item'>
            <img className='image-thumb' src={LoginBg} alt='post' />
            <div className='content-detail'>
                <p className='title'>blog item</p>
                <p className='author'>author</p>
                <p className='body'>lorem</p>
                <Button title='view detail' onClick={() => history.push('/detail-blog')} />
            </div>
        </div>
    )
}

export default BlogItem
