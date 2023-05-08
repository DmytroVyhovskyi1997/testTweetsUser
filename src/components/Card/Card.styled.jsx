import styled from "styled-components";


export const Box = styled.li`
position: relative;
width: 380px;
height: 496px;
background: linear-gradient(114.99deg, #471CA9 -0.99%, #5736A3 54.28%, #4B2A99 78.99%);
border-radius: 20px;
`

export const Ul = styled.ul`
display:flex;
justify-content: space-evenly;
gap:48px;
padding:0;
`

export const Img = styled.img`
position: absolute;
z-index:999;
top: 178px;
left: 150px;
border-radius: 50%;
border: 8px solid #EBD8FF;
display: flex;
justify-content: center;
width: 80px;
height: 80px;
overflow: hidden;
box-shadow: 0px 4.39163px 4.39163px rgba(0, 0, 0, 0.06), inset 0px -2.19582px 4.39163px #AE7BE3, inset 0px 4.39163px 3.29372px #FBF8FF;
`
export const Stick = styled.div`
position: absolute;
width: 380px;
height: 8px;
left: 0px;
top: 216px;
background: #EBD8FF;
box-shadow: 0px 3.43693px 3.43693px rgba(0, 0, 0, 0.06),
    inset 0px -1.71846px 3.43693px #AE7BE3,
    inset 0px 3.43693px 2.5777px #FBF8FF;
height: 8px;
`
export const UserList = styled.div`
text-align: center;
    align-items: center;
    margin-top: 242px;
    margin-bottom: 26px;
`
export const User = styled.p`
font-family: 'Montserrat';
font-style: normal;
font-weight: 500;
font-size: 20px;
line-height: 24px;
text-transform: uppercase;

color: #EBD8FF;
`
export const Button = styled.button`
width: 196px;
height: 50px;


background: #EBD8FF;
box-shadow: 0px 3.43693px 3.43693px rgba(0, 0, 0, 0.25);
border-radius: 10.3108px;
`
export const Span = styled.span`
font-family: 'Montserrat';
font-style: normal;
font-weight: 600;
font-size: 18px;
line-height: 22px;
text-transform: uppercase;
color: #373737;
`
export const ImgAnswer = styled.img`
position: absolute;
width: 308px;
height: 168px;
left: 36px;
top: 28px;
`
export const ImgLogo = styled.img`
margin-left:20px;
margin-top:20px;
`