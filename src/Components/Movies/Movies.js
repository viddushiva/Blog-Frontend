import * as React from "react";
import { useContext ,useState} from "react";
import { Link } from "react-router-dom";
import Bottom from "../bottom/Bottom";
import { CategoryContext } from "../context/Context";

const Movies = () => {
  const [category] = useContext(CategoryContext);
const[loadmore,setLoadmore]=useState(true)



  return (
    <div>
      <h1 className="">Movies</h1>
      {category.filter((render)=>render.id<5).map((wood) => (
        <div key={category.id} className="tolly">
          <Link to={`/movies/${wood.id}`}className="tolly">
            <div className="tollyi"><img src={wood.img} alt="" /></div>
            <h3 className="tollyt">{wood.det}</h3>
          </Link>
          <h5 className="tollyd">{wood.date}</h5>
          <hr/>
        </div>
      ))}
      <div className="adv"><img src="https://i.cbc.ca/1.5275645.1567993892!/fileImage/httpImage/image.jpg_gen/derivatives/16x9_780/nadal-rafael-090819.jpg" className="adv" alt="" /></div><br/>
      { loadmore?
        "":<Bottom/>}
     
       <button className="loadmore" onClick={()=>setLoadmore(!loadmore)}>loadmore</button>
    </div>
  );
};

export default Movies;
