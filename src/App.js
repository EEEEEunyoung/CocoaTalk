import logo from './logo.svg';
import './App.css';
import { Button, Container, Nav, Navbar } from 'react-bootstrap';
import bg from './logo.JPG'
import { useState } from 'react';
import data from './data';
import {Routes, Route, Link,  useNavigate,Outlet} from 'react-router-dom'
import Detail from './routes/Detail';
import SignUp from './routes/SignUp';
import LogIn from './routes/LogIn';
import Payment from './routes/Payment';


function App() {
let [shoes] = useState(data);
let navigate = useNavigate();


  return (
    <>

    {/* =====================나브바======================= */}
    <Navbar bg="light" variant="light">
        <Container>
          <Navbar.Brand href="/">현생네컷</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="/signin">Sign-In</Nav.Link>
            <Nav.Link onClick={()=>{navigate('/signup')}}>Sign-Up</Nav.Link>
            <Nav.Link onClick={()=>{navigate(-1)}}>←</Nav.Link>
            <Nav.Link onClick={()=>{navigate(+1)}}>→</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
{/* =====================나브바 끝======================= */}

{/* <Link to="/">홈</Link>
<Link to="/signin">로그인</Link> */}

{/* ====================메인페이지======================= */}
<Routes>
<Route path="/" element={
<>
{/* =====================상단이미지======================= */}
<div className="main-bg"></div>    
    {/* =====================상단이미지 끝======================= */}

        {/* =====================상품======================= */}
    <div className="container">
        <div className="row">
        {
          shoes.map((a, i)=>{
            return(
              <ShoesItems shoes={shoes[i]} i={i+1} ></ShoesItems>
              )    
            })
          }

        </div>
    </div>
    {/* =====================상품 끝======================= */}
    </>  
} />
{/* ====================메인페이지 끝======================= */}



<Route path="/signin" element={<div><LogIn></LogIn></div>} />
<Route path="/signup" element={<div><SignUp></SignUp></div>} />
<Route path="/detail/:id" element={<div><Detail shoes={shoes}></Detail></div>} />
<Route path="/payment:id" element={<div><Payment shoes={shoes}></Payment></div>} />
</Routes>






    </>
       );
       }
       
       
       
function ShoesItems(props){
  return (
           <div className="col-md-4">
              <a href={'/detail/'+props.i}>
              <img  src={'image/nekut'+props.i+'.JPG'} width="80%"/>
{/*                   <img  src={'https://codingapple1.github.io/shop/shoes'+props.i+'.jpg'} width="80%"/> */}
                 </a>
                 <h4>{props.shoes.title}</h4>
               <p>{props.shoes.price}</p>
          </div>
  );
}




export default App;
