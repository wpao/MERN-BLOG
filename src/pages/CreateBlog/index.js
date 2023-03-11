import React from 'react'
import { Button, Gap, Input, Link, TextArea, Upload } from '../../components'
import './createBlog.scss'
import { useHistory } from 'react-router-dom'

const CreateBlog = (props) => {
    const history = useHistory()
    return (
        <div className='blog-post'>
            <Link title='kembali' onClick={() => history.push('/')} />
            <p className='title'>Content Create Blog Page</p>
            <Input label="Post Title" />
            <Upload />
            <TextArea />
            <Gap height={20} />
            <div className='button-action'>
                <Button title="save" />
            </div>
        </div>
    )
}

export default CreateBlog
