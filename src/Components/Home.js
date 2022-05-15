import styled from 'styled-components';
import ImageSlider from './ImageSlider';
import NewDisney from './NewDisney';
import Originals from './Originals';
import Recommends from './Recommends';
import Trending from './Trending';
import Viewers from './Viewers';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import db from '../firebase-handler';
import { setMovies } from '../features/movies/movieSlice';
import { selectUserName } from '../features/user/userSlice';

const Home = (props) => {
    const dispatch = useDispatch();
    const userName = useSelector(selectUserName);
    
    useEffect(() => {
        let recommends = [];
        let newDisneys = [];
        let originals = [];
        let trendings = [];
        
        db.collection("movie").get().then((snapshot) => {
            snapshot.docs.map((doc) => {
                if (doc.data().type === "recommend") {
                    recommends = [...recommends, {id: doc.id, ...doc.data()}]
                } else if (doc.data().type === "new"){
                    newDisneys = [...newDisneys, { id: doc.id, ...doc.data() }]
                } else if (doc.data().type === "original"){
                    originals = [...originals, { id: doc.id, ...doc.data() }]
                } else if (doc.data().type === "trending"){
                    trendings = [...trendings, { id: doc.id, ...doc.data() }]
                }
            });
            
            dispatch(setMovies({
                recommend: recommends,
                newDisney: newDisneys,
                originals: originals,
                trending: trendings,
            })
            );
        });
    }, [userName]);

    return (
    <Container>
        <ImageSlider />
        <Viewers />
        <Recommends />
        <NewDisney />
        <Originals />
        <Trending />
    </Container>
    )
}

const Container = styled.main`
    position: relative;
    top: 72px;
    min-height: calc(100vh - 250px);
    padding: 0  3rem;
    width: calc(100vw - 20px);
    display: flex;
    flex-flow: column;
    justify-content: flex-start;
    align-items: center;
    overflow-x: hidden;
    

    &:after{
        content: '';
        position: absolute;
        background: url("/Images/home-background.png") center center/cover no-repeat fixed;
        inset: 0px;
        z-index: -1;
    }
`;

export default Home;
