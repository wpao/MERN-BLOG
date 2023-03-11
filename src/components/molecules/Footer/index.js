import React from 'react'
import { Logo, ICDiscord, ICFacebook, ICGithub, ICInstagram, ICTelegram, ICTwitter } from '../../../assets'
import './footer.scss'

const Icon = ({ img }) => {
    return (
        <div className='icon-wrapper'>
            <img className='icon-medsos' src={img} alt='icon' />
        </div>
    )
}

const Footer = (props) => {
    return (
        <div>
            <div className='footer'>
                <div>
                    <img className='logo' src={Logo} alt="logo" />
                </div>
                <div className='social-wrapper'>
                    <Icon img={ICFacebook} />
                    <Icon img={ICTwitter} />
                    <Icon img={ICInstagram} />
                    <Icon img={ICTelegram} />
                    <Icon img={ICDiscord} />
                    <Icon img={ICGithub} />
                </div>
            </div>
            <div>
                {/* <p>Copyright</p> */}
            </div>
        </div>
    )
}

export default Footer
