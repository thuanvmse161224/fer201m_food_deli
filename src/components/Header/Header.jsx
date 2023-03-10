//About
import "./Header.scss";
import cartIcon from './assets/fonts/shopping_basket_black_24dp.svg';
import pageLogo from './assets/image/FptFoodLogo.png';
import imageBackgr from './assets/image/HeaderImage.png';
import locationIcon from './assets/fonts/room_black_24dp.svg';
import userLocationIcon from './assets/fonts/my_location_black_24dp.svg';



export default function Header() {
    return (
        <div>

            <header className="home-header">
                <div className="header-img-container">
                    <img className="background-header-img" src={imageBackgr} alt="" />
                </div>

                <div className="home-header-nav">
                    <a href="#" className="home-header-left">
                        <img className="page-logo" src={pageLogo} alt="FptFood" />
                    </a>

                    <div className="home-header-right">
                        <ul className="home-header-list">
                            <li className="header-item">
                                <img src={cartIcon} alt="Cart" />
                            </li>
                            <li className="header-item">Đăng nhập/Đăng ký</li>
                        </ul>
                    </div>
                </div>

                <div className="location-delivery-container">
                    <div className="location-header">
                        <div className="location-title">
                            Chào buổi sáng
                        </div>
                        <div className="location-text">
                            Chúng tôi nên giao thức ăn cho bạn đến đâu đây?
                        </div>
                    </div>

                    <form className="location-form">
                        <div className="user-input-location">
                            <img src={locationIcon} className="location-icon" alt="" />
                            <input type="text" name="address" placeholder="Nhập địa chỉ của bạn" className="user-location" />
                            <img src={userLocationIcon} className="location-icon" alt="" />
                        </div>
                        <button className="submit-btn">
                            Tìm kiếm
                        </button>
                    </form>

                </div>
            </header>

        </div>
    )
}