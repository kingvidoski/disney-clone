import { useEffect } from 'react';
import styled from 'styled-components';
import { useDispatch, useSelector} from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { auth, provider } from '../firebase-handler';
import { selectUserName, selectUserEmail, selectUserPhoto, setUserLoginDetails, setSignOutState } from '../features/user/userSlice';

const Header = (props) => {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const userName = useSelector(selectUserName);
    const userPhoto = useSelector(selectUserPhoto);

    useEffect(() => {
        auth.onAuthStateChanged(async (user) => {
            if (user) {
                setUser(user);
                navigate("/home");
            }
        });
    }, [userName]);

    const handleAuth = () => {
        if (!userName) {
            auth.signInWithPopup(provider).then((result) => {
            setUser(result.user);
        })
            .catch((error) => {
                alert(error.message);
            });
        } else if(userName) {
            auth.signOut().then(() => {
                dispatch(setSignOutState());
                navigate("/");
            })
                .catch((error) => {
                alert(error.message);
            });
        }
    };

    const setUser = (user) => {
        dispatch(
            setUserLoginDetails({
                name: user.displayName,
                email: user.email,
                photo: user.photoURL,
            })
        );
    };

    return (
    <Nav>
        <Logo>
            <img src="/Images/logo.svg" alt="Disney+" />
        </Logo>
            

        {!userName ?
            <Login onClick={handleAuth}>LOGIN</Login> : 
            
        <>
            <NavMenu className='menu'>
            <ul>
                <li><a href= "/home"><img src="/Images/home-icon.svg" alt=""/><span>HOME</span></a></li>
                <li><a href= "/home"><img src="/Images/search-icon.svg" alt=""/><span>SEARCH</span></a></li>
                <li><a href= "/home"><img src="/Images/watchlist-icon.svg" alt=""/><span>WATCHLIST</span></a></li>
                <li><a href= "/home"><img src="/Images/original-icon.svg" alt=""/><span>ORIGINALS</span></a></li>
                <li><a href= "/home"><img src="/Images/movie-icon.svg" alt=""/><span>MOVIES</span></a></li>
                <li><a href= "/home"><img src="/Images/series-icon.svg" alt=""/><span>SERIES</span></a></li>
            </ul>
            </NavMenu>
            <SignOut>
                <img src={userPhoto} alt={userName} />
                <DropDown>
                    <span onClick={handleAuth}>Sign Out</span>
                </DropDown>
            </SignOut>
        </>
        }
        
    </Nav>
    )
}

const Nav = styled.nav`
    height: 70px;
    padding: 0 36px;
    background: #090b13;
    position: fixed;
    top: 0;
    right: 0;
    left: 0;
    z-index: 3;
`;

const Logo = styled.div`
    width: 80px;
    margin-top: 4px;
    max-height: 70px;
    img{
        width: 100%;
    }
`;

const NavMenu = styled.div`
    height: 100%;
    margin-left: 30px;
`;

const Login = styled.a`
    margin-left: auto;
    background: rgba(0, 0, 0, 0.6);
    padding: 8px 16px;
    letter-spacing: 1.5px;
    border: 1px solid #f9f9f9;
    border-radius: 4px;
    transition: all .2s ease 0s;
    cursor: pointer;

    &:hover{
        background: #f9f9f9;
        color: #000;
        border-color: transparent;
    }
`;

// const userImg = styled.img`
//     height: 100%;
// `;

const DropDown = styled.div`
    width: 110px;
    border-radius: 4px;
    position: absolute;
    bottom: -28px;
    left: -55px;
    transition-property: all;
    opacity: 0;
    
    span{
        font-size: 12px;
        background: rgb(19, 19, 19);
        border: 1px solid rgba(151, 151, 151, 0.34);
        border-radius: 4px;
        box-shadow: rgb(0 0 0 / 50%) 0 0 18px 0;
        padding: 10px;
        text-align: center;
        letter-spacing: 3px;
    }
`;

const SignOut = styled.div`
    position: relative;
    width: 48px;
    height: 48px;
    margin-left: auto;
    margin-right: 10px;
    cursor: pointer;
    
    Img {
        border-radius: 50%;
        width: 100%;
        height: 100%;
    }
    &:hover{
        ${DropDown} {
            opacity: 1;
            transition-duration: 1s;
        }
    }
`;



export default Header
