import React from 'react'
import styled from 'styled-components'
import {FaFacebookF} from 'react-icons/fa'
// import {GrLinkedin} from 'react-icons/gr'
import {FaTwitter, FaLinkedinIn} from 'react-icons/fa'
import {AiFillInstagram} from 'react-icons/ai'
import {BsWhatsapp} from 'react-icons/bs'
import What from './WhatsApp'

const Profile = () => {
  return (
    <>
        <Con>
            <Wrapper>
              {/* <input placeholder='hello'/> */}
            <Box2 src='./b.png'/>
            <Box1>
              <TextHold>
              <Intro>I'M <br/> <span>ANOZIE OKESINACHI <br/>FRANKLIN</span></Intro>
              <Line/>
              <Lorem>The world is my stage and i have played diligiently so far. i hope to play a noble and fierce expression of reign in the years to come. It is with great pleasure that i announce my birthday. i am surviving the toughests of days and growing physically, mentally, and spirituall.<span> Happy birthday to me.</span></Lorem>
              <Logos>
                  <Logo1 src='k1.jpg'/>
                  <Logo2 src='curve.jpg'/>
              </Logos>
             
              </TextHold>
              <Auto>
              <Au>#autofrankzee</Au>
              <Hold>
                <Li>LinkUp</Li>
                <IconHold>
              <Icon1><a href='https://https://web.facebook.com/Autofrankzee'><FaFacebookF color='black'/></a></Icon1>
              <Icon1><a href='https://www.linkedin.com/in/franklin-anozie-a8bb05220'><FaLinkedinIn color='black'/></a></Icon1>
              <Icon1><a href='https://twitter.com/Obinna1992?t=Bfyl6cmasbvU2zyaB5WQKw&s=08'><FaTwitter color='black'/></a></Icon1>
              <Icon1><a href='https://www.instagram.com/auto_frankzee?r=nametag'><AiFillInstagram color='black'/></a></Icon1>
              <Icon1><a href='https://wa.me/message/Q4PDNS4EMO74F1'><BsWhatsapp color='black'/></a></Icon1>
              </IconHold> 
              </Hold>
              </Auto>
              <FotoPic src='robot.jpg'/>
            </Box1>
               
            </Wrapper>
        </Con>
        {/* <What/> */}
    </>
  )
}

export default Profile
const FotoPic = styled.img`
object-fit: cover;
width: 888px;
height: 85px;
margin-left: -2px;
/* margin-top: 14px; */

@media screen and (max-width:1024px){
  width: 100%;
}
`
const Auto = styled.div`
display: flex;
justify-content: space-between;
/* align-self: center; */
margin-top: 67px;
margin-bottom: 20px;

/* background-color: pink; */

@media screen and (max-width: 1024px){
  width: 100%;
  /* justify-content: ; */
}

@media screen and (max-width: 768px){
 justify-content: center;
 margin-top: 50px;
  margin-bottom: 20px;
}
@media screen and (max-width: 430px){
  margin-top: 50px;
  margin-bottom: 20px;
}
`
const Au = styled.div`
display: flex;
align-self: center;
font-family: poppins;
margin-left: 50px;
@media screen and (max-width: 768px){
  display: none;
}
`
const Hold = styled.div`
display: flex;
align-items: center;
flex-direction: column;


`
const Li = styled.div`
display: none;

@media screen and (max-width: 768px){
  display: flex;
  font-family: poppins;
}
`
 
const TextHold = styled.div`
margin-top: 40px;
/* background-color: aqua; */
margin-left: 50px;

@media screen and (max-width: 1024px){
display: flex;
align-items: center;
flex-direction: column;
margin-left: 0px;
}
@media screen and (max-width: 768px){
  display: flex;
}
`
const Intro = styled.div`
font-size: 25px;
font-weight: 700;
span{
  font-family: poppins;
  font-size: 40px;
  font-weight: 700;
}
@media screen and (max-width: 1024px){
text-align: center;
}
@media screen and (max-width: 430px){
 width: 90%;
}
`
const Line = styled.div`
width: 60%;
height: 3px;
background-color: black;
margin-top: 10px;
`
const Lorem = styled.div`
font-size: 17px;
font-weight: 400;
margin-top: 10px;
width: 75%;
font-family: poppins;

@media screen and (max-width: 1024px){
text-align: center;
}

@media screen and (max-width: 430px){
  width:80%;
  font-size:15px;
}
`
const Logos = styled.div`
width: 300px;
/* background-color: pink; */
height: 50px;
margin-top: 65px;
display: flex;

@media screen and (max-width: 1024px){
 justify-content: center;
}

@media screen and (max-width: 768px){
 margin-top: 30px;
}

`
const Logo1 = styled.img`

`
const Logo2 = styled.img`

margin-left: 50px;

@media screen and (max-width: 768px){
 margin-left: 70px;
}
`
const IconHold = styled.div`
display: flex;
/* margin-top: 390px; */

@media screen and (max-width: 1024px){
  margin-top: 30px;
  margin-bottom: 10px;
}
`

const Icon1 = styled.div`
height: 40px;
width: 40px;
border-radius: 100%;
border: 2px solid #E6B938;
display: flex;
justify-content: center;
align-items: center;
font-size: 20px;
color: #E6B938;
margin-left: 25px;
color: white;
a{
  text-decoration: none;
  /* background-color: inherit; */
}
`


const Box1 = styled.div`
width: 60%;
height: 100%;
/* background-color: red; */
@media screen and (max-width: 1024px){
  width: 100%;
  display: flex;
  align-items: center;
  flex-direction: column;
}

`

const Box2 = styled.img`
width: 40%;
object-fit: cover;
height: 100%;

@media screen and (max-width: 1024px){
object-fit: contain;
width: 100%;
}
`




const Con = styled.div`
display: flex;
justify-content: center;
width:100%;
height: 93vh;
padding-top: 20px;
/* min-height: 100%; */
/* padding-bottom: 40px; */
@media screen and (max-width: 1024px){
 height: auto;
}
`
const Wrapper = styled.div`
width: 85%;
/* background-color: pink; */
display: flex;
justify-content: center;
/* align-items: center; */
/* height: 80vh; */

@media screen and (max-width: 1024px){
  flex-direction: column;
  width: 100%;
}
@media screen and (max-width: 768px){
  width: 100%;
}
`