import { useParams } from "react-router-dom";

function Detail({ shoes }) {
  let { id } = useParams();
  id = parseInt(id, 10); // 문자열을 숫자로 변환

  if (!shoes || !shoes[id]) {
    return <div>상품 정보를 찾을 수 없습니다.</div>;
  }

  return (
    <div className="container">
      <div className="row">
        <div className="col-md-6">
          <img
            src={`https://codingapple1.github.io/shop/shoes${id + 1}.jpg`}
            alt="Product"
            width="100%"
          />
        </div>
        <div className="col-md-6 mt-4">
          <h4 className="pt-5">{shoes[id].title}</h4>
          <p>{shoes[id].content}</p>
          <p>{shoes[id].price}원</p>
          <button className="btn btn-danger">주문하기</button>
        </div>
      </div>
    </div>
  );
}

export default Detail;
