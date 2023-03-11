import React from 'react'
import { useHistory } from 'react-router-dom'
import { RegisterBg } from '../../assets'
import { Gap, Link } from '../../components'
import './detailBlog.scss'

const DetailBlog = (props) => {
    const history = useHistory()
    return (
        <div className='detail-blog-wrapper'>
            <img className='img-cover' src={RegisterBg} alt='thumb' />
            <p className='blog-title'>Title Blog</p>
            <p className='blog-author'>Author - Date Post</p>
            <p className='blog-body'>Lorem</p>
            <Gap height={20} />
            <Link title="kembali ke home" onClick={() => history.push('/')} />
        </div>
    )
}

export default DetailBlog
