import {Link, useParams} from 'react-router-dom'
import { useState } from 'react';

function Detail(props){
  let {id} =useParams();


  return(
    <>
    <div className="container">
      <div className="row">
        <div className="cols-md-6">
        <img src={'../image/nekut'+[id]+'.jpg'} width="50%" />
        {/*   <img src={'https://codingapple1.github.io/shop/shoes'+[id]+'.jpg'} width="100%" /> */}
        </div>
        <div className="col-md-6 mt-4" width="100%">
          <h4 className="ptp-5">{props.shoes[id-1].title}</h4>
          <p>{props.shoes[id-1].content}</p>
          <p>{props.shoes[id-1].price}</p>
          <a href="/payment:id">
          <button className="btn btn-danger"> 결제하기</button>
          </a>
        </div>
      </div>
    </div>

<div className="photocon">

  <div className="photos">
  <div id="image1" className="photo-frame">
    <span id="desc1" className="photo_description">
    </span>
  </div>
  <div id="image2" className="photo-frame">
    <span id="desc2" className="photo_description">
      두번째 이미지
    </span>
  </div>
  <div id="image3" className="photo-frame">
    <span id="desc3" className="photo_description">
      세번째 이미지
    </span>
  </div>
  <div id="image4" className="photo-frame">
    <span id="desc4" className="photo_description">
      네번째 이미지
    </span>
  </div>
  </div>

  
</div>






    </>
  )
}

export default Detail;