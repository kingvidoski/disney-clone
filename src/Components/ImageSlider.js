import styled from 'styled-components';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import Slider from 'react-slick';

const ImageSlider = (props) => {
    let settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
    };

    return (
        <Carousel {...settings}>
            <Wrap>
                <a>
                    <img src='/Images/slider-badag.jpg' alt='' />
                </a>
            </Wrap>
            <Wrap>
                <a>
                    <img src='/Images/slider-badging.jpg' alt='' />
                </a>
            </Wrap>
            <Wrap>
                <a>
                    <img src='/Images/slider-scale.jpg' alt='' />
                </a>
            </Wrap>
            <Wrap>
                <a>
                    <img src='/Images/slider-scales.jpg' alt='' />
                </a>
            </Wrap>
        </Carousel>
    )
}

const Carousel = styled(Slider)`
    margin-top: 40px;
    width: 100%;

    & > button{
        opacity: 0;
        height: 100%;
        width: 5vw;
        z-index: 1;

        &:hover {
            opacity: 1;
            transition: opacity 0.2s ease;
        }
    }

    ul li button{
        &:before{
            font-size: 8px;
            color: rgb(150, 158, 171);
        }
    }

    li.slick-active button:before{
        color: white;
    }

    .slick-list {
        overflow: initial;
    }

    .slick-prev{
        left: -70px;
    }

    .slick-next{
        right: -70px;
    }
`;

const Wrap = styled.div`
    border-radius: 4px;
    cursor: pointer;

    a{
        border-radius: 4px;
        box-shadow: rgb(0 0 0 / 69%) 0 26px 30px -10px, rgb(0 0 0 / 73%) 0 16px 10px -10px;  
        padding: 4px;
        display: block;

        img{
            width: 100%;
            height: 100%;
        }

        &:hover{
            padding: 0;
            border: 4px solid rgba(249, 249, 249, 0.8);
            transition-duration: 500ms;
        }
    }
`;

export default ImageSlider
