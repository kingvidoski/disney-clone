import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import styled from 'styled-components';
import db from '../firebase-handler';

const Details = () => {
    const { id } = useParams();
    const [detailData, setDetialData] = useState({});

    useEffect(() => {
        db.collection('movie')
            .doc(id)
            .get()
            .then((doc) => {
                if (doc.exists) {
                    setDetialData(doc.data());
                } else {
                    console.log('no such document in firebase')
                }
            })
            .catch((error) => {
                console.log("error getting:", error);
            });
    }, [id]);


    return (
    <Container>
        <BgImage>
            <img src={detailData.backgroundImg} alt={detailData.title} /> 
        </BgImage>
        <ImageTitle>
            <img src={detailData.titleImg} alt={detailData.title} />
        </ImageTitle>
        <ContentMeta>
            <Controls>
                <Player>
                    <img src='/Images/play-icon-black.png' alt='' />
                    <spna>Play</spna>
                </Player>
                <Trailer>
                    <img src='/Images/play-icon-white.png' alt='' />
                    <spna>Trailer</spna>
                </Trailer>
                <AddList>
                    <span />
                    <span />
                </AddList>
                <GroupWatch>
                    <div>
                        <img src='/Images/group-icon.png' alt='' />
                    </div>
                </GroupWatch>
            </Controls>
            <SubTitle>{detailData.subTitle}</SubTitle>
            <Description>{detailData.description}</Description>
        </ContentMeta>
    </Container>
    )
}

const Container = styled.div`
    position: relative;
    top: 72px;
    min-height: calc(100vh - 250px);
    overflow-x: hidden;
    padding: 0  3rem;
`;

const BgImage = styled.div`
    position: fixed;
    top: 0;
    left: 0;
    opacity: 0.8;
    z-index: -1;

    img{
        width: 100vw;
        height: 100vh;
    }

    @media (max-width: 768px){
        img{
            width: initial;
        }
    }
`;

const ImageTitle = styled.div`
    display: flex;
    align-items: flex-end;
    justify-content: flex-start;
    -webkit-box-pack: start;
    height: 30vw;
    min-height: 170px;
    padding-bottom: 24px;

    img{
        max-width: 600px;
        min-width: 200px;
        width: 35vw;
    }
`;

const ContentMeta = styled.div`
    max-width: 874px;
`;

const Controls = styled.div`
    display: flex;
    wrap: nowrap;
    align-items: center;
    margin: 24px 0;
    min-height: 56px;
`;

const Player = styled.button`
    font-size: 15px;
    margin: 0 22px 0 0;
    padding: 0 24px;
    height: 56px;
    border-radius: 4px;
    display: flex;
    justify-content: center;
    align-items: center;
    letter-spacing: 1.5px;
    text-transform: uppercase;
    border: none;
    background: rgb(249, 249, 249);
    color: rgb(0, 0, 0);
    cursor: pointer;

    img{
        width: 32px;
    }

    &:hover{
        background: rgb(198, 198, 198);
    }

    @media (max-width: 768px){
        height: 45px;
        padding: 0 12px;
        margin: 0 10px 0 0;
        font-size: 12px;

        img{
            width: 25px;
        }
    }
`;

const Trailer = styled(Player)`
    background: rgba(0, 0, 0, 0.3);
    color: rgb(249, 249, 249);
    border: 1px solid rgb(249, 249, 249);
`;

const AddList = styled.div`
    margin-right: 16px;
    height: 44px;
    width: 44px;
    background: rgba(0, 0, 0, 0.6);
    border-radius: 50%;
    border: 2px solid white;
    display: flex;
    justify-content: center;
    align-items: center;
    cursor: pointer;

    span{
        background: rgb(249, 249, 249);

        &:first-child{
            height: 2px;
            transform: translate(1px, 0);
            width: 16px;
        }

        &:nth-child(2){
            height: 16px;
            transform: translateX(-8px);
            width: 2px;
        }
    }
`;

const GroupWatch = styled.div`
    height: 44px;
    width: 44px;
    border-radius: 50%;
    display: flex;
    justify-content: center;
    align-items: center;
    cursor: pointer;
    background: white;

    div{
        height: 40px;
        width: 40px;
        border-radius: 50%;
        background: rgb(0, 0, 0);

        img{
            width: 100%;
        }
    }
`;

const SubTitle = styled.div`
    color: rgb(249, 249, 249);
    font-size: 15px;
    min-height: 20px

    @media (max-width: 768px){
        font-size: 12px;
    }
`;

const Description = styled.div`
    line-height: 1.4;
    font-size: 20px;
    padding:  16px 0;
    color: rgb(249, 249, 249);

    @media (max-width: 768px){
        font-size: 14px;
    }
`;

export default Details
