import styled from 'styled-components';

const Login = (props) => {
    return (
    <Container className='section'>
        <Content className='div'>
            <CTA className='CTA'>
                <CTALogoOne src="/Images/cta-logo-one.svg"/>
                <SignUp>GET ALL THERE</SignUp>
                <Description>Get Premier Access to Rays and the Last Dragon for an additional fee with a Disney+ subscription. As for 03/26/21, the price of Disney+ and The Disney Bundle will increase by $1</Description>
                <CTALogoTwo src="/Images/cta-logo-two.png"/>
            </CTA>
            <BgImage />
        </Content>
    </Container>
    )
}


const Container = styled.section`
    overflow: hidden;
    height: 100vh;
    text-align: center;
    position: relative;
`
const Content = styled.div`
    width: 100%;
    height: 100%
    min-height: 100vh;
    // margin-bottom: 10vw;
    padding: 80px 4px;

`; 

const BgImage = styled.div`
    height: 100%;
    background: url("/Images/login-background.jpg") top/cover no-repeat;
    position: absolute;
    top: 0;
    right: 0;
    left: 0;
    z-index: -1;
`;

const CTA = styled.div`
    width: 100%;
    max-width: 650px;
    margin-bottom: 2vw;
    margin-inline: auto;
    text-align: center;
`;

const CTALogoOne = styled.img`
    max-width: 600px;
    min-height: 1px;
    margin-bottom: 12px;
    width: 100%;
`;

const SignUp = styled.a`
    width: 100%;
    font-size: 18px;
    font-weight: bold;
    color: #f9f9f9;
    background: #0063e5;
    border: 1px solid transparent;
    border-radius: 4px;
    letter-spacing: 1.5px;
    margin-bottom: 12px;
    padding: 16.5px 0;
    cursor: pointer;
    
    &:hover{
        background: #0483ee;
    }
`;

const Description = styled.p`
    color: hsla(0, 0%, 95.3%, 1);
    font-size: 11px;
    margin: 0 0 24px;
    line-heihght: 1.5;
    letter-spacing: 1.5px;
`;

const CTALogoTwo = styled.img`
    width: 100%;
    max-width: 650px;
    margin-bottom: 20px;
    vertical-align: bottom:
`;
export default Login

