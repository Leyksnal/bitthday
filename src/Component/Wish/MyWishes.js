import React,{useState,useEffect} from 'react'
import styled from 'styled-components'
import {db} from '../Base'
import { collection, onSnapshot, query, orderBy} from 'firebase/firestore'


const MyWishes = () => {
 
 const [birth, setBirth] = useState([])

 const useRef = collection(db, "birthday")
 const que = query(useRef, orderBy("time", "desc"))
    
    const getData = () =>{
        onSnapshot(que, (snapshot)=>{
            const datas = snapshot.docs.map((doc)=> ({
                    id: doc.id,
                    ...doc.data(),
            }));
            setBirth(datas)
        })
    }

    useEffect(()=>{
        getData()
    },[])

  return (
   <>
    <Con>
        <Wrap>
        {birth.map(({name, quote, time, id})=>(
                       <Card key={id}>
                       <Title>Birthday Wishes</Title>
                       <Wishes>{quote}</Wishes>
                       <Sent>Sent By: <span>{name}</span></Sent>
                       <Time>{time.toDate().toDateString()}</Time>
                    </Card>
))}
 
        </Wrap>
    </Con>
   </>
  )
}

export default MyWishes
const Time = styled.div`
font-size: 13pxx;
font-family: poppins;
`
const Title = styled.div`
font-family: poppins;
display: flex;
justify-content: center;
margin-bottom: 30px;
font-size: 20px;

`
const Wishes = styled.div`
text-align: center;
font-size: 16px;
font-family: 'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif;
font-weight: 200;
width: 100%;

@media screen and (max-width: 430px){
 font-size: 14px;
}
`

const Sent = styled.div`
display: flex;
justify-content: flex-end;
margin-top: 50px;
font-family: poppins; 
display: flex;
align-items: center;
width:100%
span{
    color: #E6B938;
    margin-left: 5px;
    font-family: 'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif;
}
`

const Con = styled.div`
width: 100%;
display: flex;
justify-content: center;
padding-top: 20px;
padding-bottom: 20px;

`

const Wrap = styled.div`
width:80%;
display: flex;
flex-wrap: wrap;
justify-content: center;
/* @media screen and (max-width: 768px){
    background-color: red;
} */
`

const Card = styled.div`
width: 350px;
box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
padding: 20px;
margin-left: 10px;
margin-top: 10px;


@media screen and (max-width: 768px){
  width: 260px;
  margin-left: 5px;
}
@media screen and (max-width: 430px){
  width: 100%;
  margin-left: 0px;
}
`