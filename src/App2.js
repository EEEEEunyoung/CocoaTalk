import logo from './logo.svg';
import './App.css';
import { Button, Container, Nav, Navbar } from 'react-bootstrap';
import bg from './logo.JPG'
import { useState } from 'react';
import data from './data';

function App() {
let [shoes] = useState(data);
let [modal, setModal] = useState(0); //0이면 닫힘, 1이면 열림
let [image, setImage] = useState(0);

  return (
    <>
    {/* =====================나브바======================= */}
    <Navbar bg="dark" variant="dark">
        <Container>
          <Navbar.Brand href="#home">ㅎㅇㅎㅇ</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#features">Features</Nav.Link>
            <Nav.Link href="#pricing">Pricing</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
{/* =====================나브바 끝======================= */}

{/* =====================상단이미지======================= */}
<div className="main-bg"></div>    
    {/* =====================상단이미지 끝======================= */}

 

        {/* =====================상품======================= */}
    <div className="container">
        <div className="row">
          <span onClick={()=>{
            modal == 1 ? setModal(0) : setModal(1);
           
          }}>

        {
          shoes.map((a, i)=>{
            return(
              <ShoesItems shoes={shoes[i]} i={i+1} ></ShoesItems>
              )    
            })
          }

          </span>

       {modal == 1 ? <Modal color={'yellow'}  image={image}></Modal> : null} 

        </div>
    </div>
       {/* =====================상품 끝======================= */}



    </>
       );
       }
       
       
       
function ShoesItems(props){
  return (
           <div className="col-md-4">
             
                  <img src={'https://codingapple1.github.io/shop/shoes'+props.i+'.jpg'} width="80%"/>
                 <h4>{props.shoes.title}</h4>
               <p>{props.shoes.price}</p>
          </div>
  );
}

function Modal(props){
  return(
<>
    <h2>gdgd</h2>
    <img src={'https://codingapple1.github.io/shop/shoes1.jpg'} width="80%"/>

      <p>날짜</p>
      <p>상세내용</p>
</>
    )
}



export default App;
