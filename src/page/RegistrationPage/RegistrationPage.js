import React from 'react';
import Button from '../../components/Button/Button';
import './RegistrationPage.scss'
import { FaGoogle, FaMicrosoft, FaApple, FaSlack } from 'react-icons/fa'; 
import LoginInputForm from '../../components/LoginInputForm/LoginInputForm';
import logoHeader from '../../assets/trelloLogo-Login.png'
import logoFooter from '../../assets/footerLogin.png'
import backgrLeft from '../../assets/trello-backgr-left.svg'
import backgrRight from '../../assets/trello-backgr-right.svg'

function RegistrationPage(props) {
    return (
        <div className='login'>
            <div className='backgrImg leftImg'><img src={backgrLeft} alt="backgrLeft" /></div>
            <div className='login__wrapper'>
                <img className='login__logoHeader logo' src={logoHeader} alt="logoHeader"/>
                <p className='login__title'>Sign up to continue</p>
                <LoginInputForm isRegistrationPage={true} />
                <p className='login__subText'>Or</p>
                <Button className="login__signInWithSocialBtn" text='Continue with Google'  icon={<FaGoogle />}/>
                <Button className="login__signInWithSocialBtn" text='Continue with Microsoft' icon={<FaMicrosoft />} />
                <Button className="login__signInWithSocialBtn" text='Continue with Apple' icon={<FaApple />} />
                <Button className="login__signInWithSocialBtn" text='Continue with Slack' icon={<FaSlack />} />
                <div className='login__link'>
                    <a href='/'>Already have an Atlassian account? Log in</a>
                </div>
                <hr />
                <footer>
                    <img className='login__logoFooter logo' src={logoFooter} alt="logoFooter"/>
                    <p>One account for Trello, Jira, Confluence and <a href='registration'>more.</a></p>
                    <div>
                        This page is protected by reCAPTCHA and the Google 
                        <a href='registration'> Privacy Policy</a> and <a href='registration'>Terms of Service</a> apply.
                    </div>
                </footer>
            </div>

            <div className='backgrImg rightImg'><img src={backgrRight} alt="backgrRightt" /></div>
        </div>
    );
}

export default RegistrationPage;