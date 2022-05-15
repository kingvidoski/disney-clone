import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { selectNewDisney } from '../features/movies/movieSlice';

const NewDisney = () => {
    const movies = useSelector(selectNewDisney);
    return (
    <Container>
        <h4>New to Disney+</h4>
        <Content>
            {
                movies &&
                    movies.map((movie, key) => (
                        <Wrap key={key}>
                            {movie.id}
                            <Link to={"/details/" + movie.id}>
                                <img src={movie.cardImg} alt={movie.title} />
                            </Link>
                        </Wrap>
                    ))
            }
        </Content>
    </Container>
    )
}

const Container = styled.div`
    align-self: flex-start;
    width: 100%;
    padding: 0 0 26px;
    margin-top: 30px;

    h4{
        letter-spacing: 2px;
    }
`;

const Content = styled.div`
    margin-top: 20px;
    display: grid;
    grid-gap: 25px;
    gap: 25px;
    grid-template-columns: repeat(4, minmax(0, 1fr));

    @media (max-width: 768px){
        grid-template-columns: repeat(2, minmax(0, 1fr));
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
        width: 100%
        opacity: 1;
        transition: opacity 250ms ease-in-out;
        z-index: 1;
    }

    &:hover{
        box-shadow: rgb(0 0 0 / 80%) 0 40px 58px -16px, rgb(0 0 0 / 72%) 0 30px 22px -10px;
        transform: scale(1.05);
        border: 3px solid rgba(249, 249, 249, 0.8);
    }
`;

export default NewDisney
