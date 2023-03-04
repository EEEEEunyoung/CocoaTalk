import { useState } from 'react';
import data from '../data';

function Home(){
  let [shoes] = useState(data);

  return(
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
  )
}

       
function ShoesItems(props){
  return (
           <div className="col-md-4">
              <a href='/detail'>
                  <img  src={'https://codingapple1.github.io/shop/shoes'+props.i+'.jpg'} width="80%"/>
                 </a>
                 <h4>{props.shoes.title}</h4>
               <p>{props.shoes.price}</p>
          </div>
  );
}

export default {Home, ShoesItems};