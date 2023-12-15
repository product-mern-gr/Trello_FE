import React from 'react';
import Button from '../../components/Button/Button';
import './LoginPage.scss'
import { FaGoogle, FaMicrosoft, FaApple, FaSlack } from 'react-icons/fa'; 
import LoginInputForm from '../../components/LoginInputForm/LoginInputForm';
import './LoginPage.scss'
import { Link } from 'react-router-dom';
import logoHeader from '../../assets/trelloLogo-Login.png'
import logoFooter from '../../assets/footerLogin.png'
import backgrLeft from '../../assets/trello-backgr-left.svg'
import backgrRight from '../../assets/trello-backgr-right.svg'

function LoginPage() {
    return (
        <div className='login'>
            <div className='backgrImg leftImg'><img src={backgrLeft} alt="backgrLeft" /></div>
            <div className='login__wrapper'>
                <img className='login__logoHeader logo' src={logoHeader} alt="logoHeader"/>
                <p className='login__title'>Log in to continue</p>
                <LoginInputForm isRegistrationPage={false} />
                <p className='login__subText'>Or</p>
                <Button className="login__signInWithSocialBtn" text='Continue with Google'  icon={<FaGoogle />}/>
                <Button className="login__signInWithSocialBtn" text='Continue with Microsoft' icon={<FaMicrosoft />} />
                <Button className="login__signInWithSocialBtn" text='Continue with Apple' icon={<FaApple />} />
                <Button className="login__signInWithSocialBtn" text='Continue with Slack' icon={<FaSlack />} />
                <div className='login__link'>
                    <a href='google.com'>Can't log in?</a>
                    <Link to={'./registration'} >Create an account</Link>

                </div>
                <hr />
                <footer>
                    <img className='login__logoFooter logo' src={logoFooter} alt="logoFooter"/>
                    <p>One account for Trello, Jira, Confluence and <a href='/'>more.</a></p>
                    <p>Privacy Policy  •  User Notice</p>
                </footer>
            </div>

            <div className='backgrImg rightImg'><img src={backgrRight} alt="backgrRightt" /></div>
        </div>
    );
}

export default LoginPage;