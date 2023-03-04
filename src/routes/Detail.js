import {Link, useParams} from 'react-router-dom'

function Detail(props){
  let {id} =useParams();

  return(
    <div className="container">
      <div className="row">
        <div className="cols-md-6">
          <img src={'https://codingapple1.github.io/shop/shoes'+[id]+'.jpg'} width="100%" />
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
  )
}

export default Detail;