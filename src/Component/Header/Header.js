import React,{useState} from 'react'
import styled from 'styled-components'
import {GoThreeBars} from 'react-icons/go'
import {GiCancel} from 'react-icons/gi'
import { Link } from 'react-router-dom'

 const Header = () => {
    const [change, setChange] = useState(false)

    const Toggle = () =>{
        setChange(!change)
    }

  return (
    <div>
        <Con>
            <Wrapper>
                <Icon to='/'>MASTERMIND</Icon>
                <Navs onClick={Toggle} change={change}>
                    <Nav to='/'>Home</Nav>
                    <Nav to='/my'>Wishes</Nav>
                    <Nav to='/mys'>Make wish</Nav>
                    {/* <Nav><a href='tel:+2349074422962'>Contact Me</a></Nav> */}
                   
                </Navs>
                <Holder>
              {/* <GoThreeBars size="20px"/> */}
              </Holder>
                <MyHold onClick={Toggle}>
               {change ? ( <GoThreeBars size="20px"/>) : (<GiCancel size="20px"/>)}
                </MyHold>
                    
            </Wrapper>
        </Con>
    </div>
  )
}

export default Header
const Holder = styled.div`
display: flex;
    @media screen and (max-width:786px){
        display: none;
    }
`


const MyHold = styled.div`
    display: none;

    @media screen and (max-width:786px){
        display: flex;
        transition: all 350ms;
    }
`
const Icon = styled.div`
 font-family: poppins;
 font-size: 20px;
 /* font-style: italic; */
 font-weight: 900;

`

const Navs = styled.div`
    display: flex;
    width: 400px;
    /* background-color: red; */
    justify-content: space-between;
    margin-left: 120px;


   
@media screen and (max-width: 768px){
    display:flex;
    margin-left: 0px;
    flex-direction:column;
    position: absolute;
    height: 80vh;
    width: 100%;
    top: 100px;
    justify-content:space-evenly;
    left: ${({change})=> (change? '-100%' : 0)};
    background-color:#E6B938;
    transition: all 950ms;
    color:white;
    display: flex;
    justify-content: space-around;
    align-items: center;
    border-radius: 0px 20px 20px 0px;
    
}
`

const Nav = styled(Link)`
    font-size: 19px;
    font-weight: 600;
    font-family: poppins;
    text-decoration: inherit;
    outline: none;
    transform: scale(1.10);
    transition: all 400ms;
    cursor: pointer;
    color: black;
:hover{
    transform: scale(1.40);
    transition: all 500ms; 
    /* text-decoration: line-through; */
}
a{
    text-decoration: none;
    color: black;
}

@media screen and (max-width: 768px){
  font-size:16px;
}
`

const Con = styled.div`
        display: flex;
        justify-content: center;
        align-items: center;
        width: 100%;
        height: 60px;
        /* background-color: blue; */
`

const Wrapper = styled.div`
        width: 85%;
        height: 80%;
        /* background-color: yellow; */
        display: flex;
        align-items: center;
        justify-content: space-between;
`