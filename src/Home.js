import React from 'react';
import './Home.css';
import './Product';
import Product from './Product';
import Mens from './images/menscollection.jpg';
import ACash from './images/amazoncash.jpg';

function Home() {


    return (
        <div className="home">
            <div className="home__container">
                <img className="home__image" src="https://images-na.ssl-images-amazon.com/images/G/01/digital/video/merch/2020/TV/THBY_S2_02111_GWBleedingHero_1500x600_PRE_Final_en-US_PVD5224._CB410800060_.jpg" alt="" />

                <div className="home__row">
                    <Product
                        id="100"
                        title="halloween"
                        price={29.99}
                        image="https://images-na.ssl-images-amazon.com/images/G/01/img20/events/halloween/GPSgraphics/XCM_Manual_ORIGIN_1253222_1311891_US_HWN20_us_hwn20_desktop_dash_cards_us_en_3302393_379x304_1X_en_US._SY304_CB406462336_.jpg"
                        rating={2}
                    />
                    <Product
                        id="101"
                        title="halloween"
                        price={29.99}
                        image={Mens}
                        rating={2}
                    />
                </div>
                <div className="home__row">
                    <Product
                        id="102"
                        title="halloween"
                        price={29.99}
                        image={ACash}
                        rating={1}
                    />
                    <Product
                        id="103"
                        title="halloween"
                        price={29.99}
                        image="https://images-na.ssl-images-amazon.com/images/G/01/img20/events/halloween/GPSgraphics/XCM_Manual_ORIGIN_1253222_1311891_US_HWN20_us_hwn20_desktop_dash_cards_us_en_3302393_379x304_1X_en_US._SY304_CB406462336_.jpg"
                        rating={4}
                    />
                    <Product
                        id="104"
                        title="halloween"
                        price={29.99}
                        image={ACash}
                        rating={3}
                    />
                </div>
                <div className="home__row">
                    <Product
                        id="105"
                        title="halloween"
                        price={29.99}
                        image={Mens}
                        rating={5}
                    />
                </div>
            </div>
        </div>
    )
}

export default Home;