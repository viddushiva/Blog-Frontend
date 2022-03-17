import React, { useContext, } from "react";
import { Link, } from "react-router-dom";
import { CategoryContext } from "../context/Context";
import Footer from "../footer/Footer";
// import Sports from "../Sports/Sports";

const Home = () => {

  const [category]=useContext(CategoryContext);
  
  return (
    <div className="h1">
      <div className="grid1">
        <Link to="/politics/13" className="one"><img src="https://akm-img-a-in.tosshub.com/indiatoday/styles/magazine_top_story_483x271/public/images/story/202203/COVER_STORY-647x363.jpeg?8QSdqWITNVRnXiM0LXlf0AutfR_AqS1g" alt="" /><div className="onet"> BJP SOLID WIN SAYS WHAT PEOPLE THINK ABOUT NATION </div></Link>
        {category.filter((disp)=>disp.id==="9").map((sports)=>(<Link to={`/sports/${sports.id}`} className="two"><img src={sports.img} alt="" height={"250px"} width={"480px"}/><div className="twot">  ms dhoni hair looks awesome </div></Link>))}
        {category.filter((disp)=>disp.id==="5").map((tec)=>(<Link to={`/business/${tec.id}`} className="three"><img src={tec.img} alt="" /><div className="threet"> Samsung Galaxy <br/> S22 Series </div></Link>))}
      </div>
      
      <div>
        <div>The Latest</div>
        <hr className="hlhr"/>
        <div className="flex2">
          <div className="hc1">
            {category.filter(data=>data.id==="1").map((latest)=>(
            <Link to={`/movies/${latest.id}`}  key={category.id} className="hcc1">
              <div className="himg"><img src={latest.img} alt="" /></div>
              <div className="c1h3"><h3>{latest.det}</h3></div>
              <div className="c1h5"><h5>{latest.date}</h5></div>
              <div className="c1h4"><h4>Category: {latest.category}</h4></div>
            </Link>
           ))}
          </div>
          <div className="hc1">
           {category.filter(data=>data.id==="5").map((latest)=>(
             <Link to={`/business/${latest.id}`}  key={category.id} className="hcc1">
                <div className="himg"><img src={latest.img} alt="" /></div>
                <div className="c1h3"><h3>{latest.det}</h3></div>
                <div className="c1h5"><h5>{latest.date}</h5></div>
                <div className="c1h4"><h4>Category: {latest.category}</h4></div>
            </Link>
           ))}
          </div>
            <div className="hc1">
              {category.filter(data=>data.id==="9").map((latest)=>(
                <Link to={`/sports/${latest.id}`}  key={category.id} className="hcc1">
                  <div className="himg"><img src={latest.img} alt="" /></div>
                  <div className="c1h3"><h3>{latest.det}</h3></div>
                  <div className="c1h5"><h5>{latest.date}</h5></div>
                  <div className="c1h4"><h4>Category: {latest.category}</h4></div>
                </Link>
              ))}
           </div><br/>
          </div>
          <div style={{marginLeft:"-8.5%",marginTop:"2%"}}><Footer/></div>
        <div className="flex3">
        <div className="advs" ><img src="https://i.cbc.ca/1.5275645.1567993892!/fileImage/httpImage/image.jpg_gen/derivatives/16x9_780/nadal-rafael-090819.jpg" className="advr" alt="" /></div><br/>
            
            <div>Latest Articles</div>
            <hr className="hlhr"/>
            <div className="hc2">
            {category.filter(data=>data.id==="2").map((latest)=>(
              <Link to={`/movies/${latest.id}`}  key={category.id} className="hcc2">
              <div className="tollyi"><img src={latest.img} alt="" /></div>
              <div className="tollyt"><h3>{latest.det}</h3></div>
              <div className="c2h5"><h5>{latest.date}</h5></div>
            <div className="c1h7"><h4>Category: {latest.category}</h4></div>
            </Link>
          ))}
          </div><hr className="f50per"/>
          <div className="hc2">
          {category.filter(data=>data.id==="6").map((latest)=>(
          <Link to={`/business/${latest.id}`}  key={category.id} className="hcc2">
            <div className="tollyi"><img src={latest.img} alt="" /></div>
            <div className="tollyt"><h3>{latest.det}</h3></div>
            <div className="c2h5"><h5>{latest.date}</h5></div>
            <div className="c1h7"><h4>Category: {latest.category}</h4></div>
          </Link>
          ))}
            </div><hr className="f50per"/>
            <div className="hc2">
            {category.filter(data=>data.id==="12").map((latest)=>(
            <Link to={`/politics/${latest.id}`} key={category.id} className="hcc2">
              <div className="tollyi"><img src={latest.img} alt="" /></div>
              <div className="tollyt"><h3>{latest.det}</h3></div>
              <div className="c2h5"><h5>{latest.date}</h5></div>
              <div className="c1h7"><h4>Category: {latest.category}</h4></div>
            </Link>
          ))}
          </div><br/>
        </div>
      </div>
    </div>
  );
};

export default Home;
