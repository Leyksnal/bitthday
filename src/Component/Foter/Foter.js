import React from 'react'
import styled from 'styled-components'

const Foter = () => {
  return (
   <>
   <Con>
    <Wrap>
        <All>copyright all right reserved </All>
        <Dev>Developed by: lucia dera</Dev>
    </Wrap>
   </Con>
   </>
  )
}

export default Foter
const Dev = styled.div`
font-size: 13px;
font-family: poppins;
color:  #E6B938;
text-align: center;
margin-left: 10px;

@media screen and (max-width: 430px){
  font-size:9px;
}
`
const Con = styled.div`
width: 100%;
display: flex;
justify-content: center;
align-items: center;
padding-top: 20px;
padding-bottom: 20px;
/* position: fixed; */
/* background-color: black; */
`
const Wrap = styled.div`
width: 80%;
display: flex;
justify-content: center;
align-items: center;
/* flex-direction: column; */

@media screen and (max-width: 430px){
 flex-direction: column;
}

`
const All = styled.div`
font-size: 15px;
font-family: poppins;
color: black;
text-align: center;

@media screen and (max-width: 430px){
  font-size:11px;
}
`