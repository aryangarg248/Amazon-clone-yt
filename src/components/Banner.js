import { Carousel } from "react-responsive-carousel"
import "react-responsive-carousel/lib/styles/carousel.min.css";

function Banner() {
    return (
        <div className="relative">
            <div className="absolute w-full h-32 bg-gradient-to-t from-gray-100 to transparent bottom-0 z-20" />
            <Carousel
                autoPlay
                infiniteLoop
                showStatus={false}
                showIndicators={false}
                showThumbs={false}
                interval={5000}
            >
                <div>
                    <img loading="lazy" src="https://images-eu.ssl-images-amazon.com/images/G/31/Gateway/Zeitgeist/Mar20/Covid19/2021/IN_GWD_Covid19_Hero_Rec_Paused_1x._CB670356912_.jpg" alt="image not loading" />
                    {/* <img loading="lazy" src="https://links.papareact.com/gil" alt="" /> */}
                </div>
                <div>
                    <img loading="lazy" src="https://images-eu.ssl-images-amazon.com/images/G/31/img19/AmazonPay/HFC_21/HeroPC_1500x600_1._CB669048608_.jpg" alt="image not loading" />
                    {/* <img loading="lazy" src="https://links.papareact.com/7ma" alt="" /> */}
                </div>
                <div>
                    {/* <img loading="lazy" src="https://images-eu.ssl-images-amazon.com/images/G/31/digital/music/merch/India/2021/Apr/IN_GW_PC_Podcasts_9MM_1x._CB670341310_.jpg" alt="image not loading" /> */}
                    <img loading="lazy" src="https://links.papareact.com/6ff" alt="" />
                </div>

            </Carousel>
        </div>
    )
}

export default Banner
