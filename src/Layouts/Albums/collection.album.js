import React, { useState, useEffect } from "react";
import axios from "axios";
import { Carousel, ButtonGroup } from "react-bootstrap";
import Loaders from "../Utilities/loader";

const Collection = () => {
  const [datas, setDatas] = useState([])
  const [limit, setLimit] = useState(4)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    let isCompleted = false;
    if (isCompleted === false){
      setLoading(true)
      axios({
        url: `${process.env.REACT_APP_BASEURL}/photos?_limit=${limit}`,
        method: "GET"
      }).then((res) => setDatas(res.data)).catch((err) => console.log(err)).finally(() => setLoading(false));
    }
    // cleane up data
    return () => { isCompleted = true }
  }, [limit]);

  const handleLimit = (option) => {
    option === "+" ? setLimit((prev) => prev + 1) : setLimit((prev) => prev - 1)
  }
  if(loading) return <Loaders/>
  return (
    <React.Fragment>
      <h3>{limit} Collection</h3>
      <Carousel>
        {/* Carousel item start */}
        {datas.map((data, i) => {
          return (
            <Carousel.Item key={i}>
              <img
                className="d-block w-100"
                src={data.url}
                alt="First slide"
                height={350}
                width={450}
              />
              <Carousel.Caption>
                <h3>{data.title}</h3>
              </Carousel.Caption>
            </Carousel.Item>
          )
        })}
        {/* Carousel item end */}
      </Carousel>
      <ButtonGroup className="d-flex mt-3 justify-content-center align-items-center">
        <button className="btn btn-outline-success" onClick={() => handleLimit("+")}>Tambah</button>
        {limit > 1 && 
          <button className="btn btn-outline-success" onClick={() => handleLimit("-")}>Kurang</button>
        }
      </ButtonGroup>
    </React.Fragment>
  )
}

export default Collection;