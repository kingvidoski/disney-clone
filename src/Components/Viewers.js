import styled from 'styled-components'

const Viewers = () => {
    return (
    <Container>
        <Wrap>
            <img src='/Images/viewers-disney.png' alt='' />
            <video autoPlay={true} loop={true} playsInline={true}>
                <source src='/Videos/1564674844-disney.mp4' type='video/mp4'/>
            </video>
        </Wrap>
        <Wrap>
            <img src='/Images/viewers-marvel.png' alt='' />
            <video autoPlay={true} loop={true} playsInline={true}>
                <source src='/Videos/1564676115-marvel.mp4' type='video/mp4'/>
            </video>
        </Wrap>
        <Wrap>
            <img src='/Images/viewers-national.png' alt='' />
            <video autoPlay={true} loop={true} playsInline={true}>
                <source src='/Videos/1564676296-national-geographic.mp4' type='video/mp4'/>
            </video>
        </Wrap>
        <Wrap>
            <img src='/Images/viewers-pixar.png' alt='' />
            <video autoPlay={true} loop={true} playsInline={true}>
                <source src='/Videos/1564676714-pixar.mp4' type='video/mp4'/>
            </video>
        </Wrap>
        <Wrap>
            <img src='/Images/viewers-starwars.png' alt='' />
            <video autoPlay={true} loop={true} playsInline={true}>
                <source src='/Videos/1608229455-star-wars.mp4' type='video/mp4'/>
            </video>
        </Wrap>
    </Container>
    )
}

const Container = styled.div`
    width: 100%;
    margin-top: 30px;
    padding: 30px 0 26px;
    display: grid;
    grid-template-columns: repeat(5, minmax(0, 1fr));
    grid-gap: 25px;
    gap: 25px;

    @media (max-width: 768px){
        grid-template-columns: repeat(1, minmax(0, 1fr));
    }
`;

const Wrap = styled.div`
    padding-top: 56.25%;
    border-radius: 10px;
    box-shadow: rgb(0 0 0 / 69%) 0 26px 30px -10px, rgb(0 0 0 / 73%) 0 16px 10px -10px;
    border: 3px solid rgba(249, 249, 249, 0.1);
    overflow: hidden;
    transition: all 250ms cubic-bezier(0.25, 0.46, 0.45, 0.94) 0s;
    position: relative;
    cursor: pointer;

    img{
        position: absolute;
        inset: 0;
        height: 100%;
        opacity: 1;
        transition: opacity 250ms ease-in-out;
        z-index: 1;
    }

    video{
        width: 100%;
        height: 100%;
        position: absolute;
        top: 0;
        opacity: 0;
        z-index: 0;
    }

    &:hover{
        box-shadow: rgb(0 0 0 / 80%) 0 40px 58px -16px, rgb(0 0 0 / 72%) 0 30px 22px -10px;
        transform: scale(1.05);
        border: 3px solid rgba(249, 249, 249, 0.8);
        
        video{
            opacity: 1;
        }
    }
`;

export default Viewers
