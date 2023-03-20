import './Footer.scss';
import '../../main.css';

import pageLogo from '../Header/assets/image/FptFoodLogo.png';
import fbIcon from '../Header/assets/fonts/logo-facebook.svg';
import instaIcon from '../Header/assets/fonts/logo-instagram.svg';
import twitterIcon from '../Header/assets/fonts/logo-twitter.svg';
import appStoreLogo from '../Header/assets/fonts/logo-appstore.svg';
import playStoreLogo from '../Header/assets/fonts/logo-playstore.svg';
import { Grid } from '@mui/material';
import { Link } from 'react-router-dom';

export default function Footer() {
    return (
        <div>
            <div className="footer-container">
                <Link to={`/`}>
                    <div className="footer-title">
                        <img src={pageLogo} alt="" className="footer-logo-page" />
                    </div>
                </Link>

                <div className="footer-navigations">
                    <div className="navigation-block">
                        <a href="/about" className="nav-links">
                            Về FptFood
                        </a>
                        <a href="/contact" className="nav-links">
                            Về FPT
                        </a>
                        <a href="#" className="nav-links">
                            Blog
                        </a>
                    </div>
                    <div className="navigation-block">
                        <a href="#" className="nav-links">
                            Trung tâm hỗ trợ
                        </a>
                        <a href="#" className="nav-links">
                            Câu hỏi thường gặp
                        </a>
                    </div>
                    <div className="navigation-block">
                        <a href="#" className="links-social-media">
                            <img src={fbIcon} alt="fbIcon" className="icon" />
                        </a>
                        <a href="#" className="links-social-media">
                            <img src={instaIcon} alt="instaIcon" className="icon" />
                        </a>
                        <a href="#" className="links-social-media">
                            <img src={twitterIcon} alt="twitterIcon" className="icon" />
                        </a>
                    </div>
                </div>

                <div className="footer-below">
                    <div className="logo-app-download">
                        <img src={appStoreLogo} alt="AppStore" />
                        <img src={playStoreLogo} alt="CHPlay" />
                    </div>

                    <div className="term-and-copyright">
                        <span>@ 2023 FptFood</span>
                        <a href="#" className="copyright-item">Câu hỏi thường gặp</a>
                        <a href="#" className="copyright-item">Chính sách bảo mật</a>
                    </div>
                </div>

            </div>
        </div>
    )
}