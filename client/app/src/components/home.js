import React from 'react';
import './home.css';
import { Link } from 'react-router-dom';
function Home ()
{
  
  return(
    <div class="body">
      <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"></link>
      <div className="nav">
      <div className="navBar">
        <ol>
          <div className="navBar-left">
          
          <li><Link to="/">Home</Link></li>
          <li><Link to="/recipe">Receipees</Link></li>
          <li><Link to="/userRecipe">Add Your's</Link></li>   
          <li><Link to="/login">Login</Link></li>
          <li><Link to="/signup">SignUp</Link></li>
          <li><Link to="/profile">Profile</Link></li>
          </div>
          <div className="navBar-right">
              
                
                 {/*<li><a href="www.google.com">Sign in</a></li>*/}
                 <button className="button1"><Link to="/receipe">
                  TRY RECEIPE
                  </Link>
                 </button>
                 <button className="button2"><Link to="/signup">
                  GET STARTED
                  </Link>
                 </button>
                 
          </div>
        </ol>
      </div>
      </div>
        <div className="body1">
            <h1 className="txt1">Made for People.<span className="txt2">Made by People.</span></h1>
            <button className="button3">
                  TRY RECEIPE
                 </button>
                 <br></br><br></br>
                 <p><b>Explore, Cook, Share</b> delightful recipes today</p>
                 <br></br>
            <ol className="images">
                <li><img src="https://www.eatingwell.com/thmb/QYZnBgF72TIKI6-A--NyoPa6avY=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/greek-salmon-bowl-f681500cbe054bb1adb607ff55094075.jpeg" alt="receipe"/></li>
                <li><img src="https://images.immediate.co.uk/production/volatile/sites/30/2020/08/prawn_fried_rice-2481925.jpg?quality=90&resize=440,400" alt="receipe"/></li>
                <li><img src="https://www.foodiesfeed.com/wp-content/uploads/2023/10/image-16-1024x1024.webp" alt="receipe"/></li>
                <li><img src="https://img.delicious.com.au/Jgatsr_y/del/2023/05/p109-really-good-chocolate-cake-with-double-choc-ganache-188754-1.png" alt="receipe" className="img4" style={{height:"70px",width:"70px"}}/></li>
                {/*<li><img src="https://cdn.warc.com/Images/Feed//en-GB/28c84bef-664f-4c89-9e70-1213819f2c86/tile.png" alt="Airbnb"/></li>*/}
                <li><img src="https://www.eatthis.com/wp-content/uploads/sites/4/2021/12/tofu-stir-fry.jpg?quality=82&strip=1" alt="receipe"/></li>
            </ol>
            
                <img src="https://www.holidify.com/images/cmsuploads/compressed/shutterstock_649541308_20191010160155.png" style={{width:"15cm",height:"13cm",marginTop:"20px",marginBottom:"50px"}}/>
           
            <div className="container">
            <div className="left1">
            <h2 >Discover delicious recipes from<br></br>home cooks around the world</h2>
            <p style={{color:"black"}}>Explore a diverse array of mouth-watering recipes crafted by  <br></br>passionate home cooks from every corner of the globe, and<br></br>bring exciting new flavors to your kitchen</p>
            <a href="www.google.com" style={{color:"blue"}} className="link1">Explore more recipes like these here!</a>
            </div>
            <div className="right1">
            <img src="https://media-cdn.tripadvisor.com/media/photo-s/03/df/ff/5c/eat-chow.jpg " alt="slack" style={{width:"500", height:"300px"}}/>
            </div>
            <br></br><br></br>
            
            </div>
            <br></br><br></br>
            <div className="right2">
              <img src="https://media.licdn.com/dms/image/D4D12AQGrxDhbDg67uQ/article-cover_image-shrink_720_1280/0/1695975656613?e=2147483647&v=beta&t=GdG2BHM26zEPHs1KaGtZOEkOjyhtnzPHzQHb4-hISKc" alt="imgg" style={{width:"500", height:"300px"}}/>
            </div>
            <div className="left2">
              <h2>Find your next favorite meal idea here!</h2>
              <p>Browse our extensive collection of tried-and-true <br></br>recipes, from quick weeknight dinners to gourmet delights, and <br></br>discover the perfect dish to satisfy your cravings!.</p>
              <a href="www.google.com" style={{color:"blue"}} className="link1">Explore more recipes like these here!</a>

            </div>
            <div className="left2">
              <br></br><br></br>
            <h2 >Join our community and spice <br></br>up your kitchen</h2>
            <p style={{color:"black"}}>"Connect with fellow food enthusiasts, discover  <br></br>thousands of mouth-watering recipes, share your own culinary <br></br>  masterpieces, and add a dash of creativity to your everyday cooking!"<br></br>  </p>
            <a href="www.google.com" style={{color:"blue"}} className="link1">Explore more recipes like these here!</a>
            </div>
            <br></br>
            <div className="right2">
            <img src="https://img.freepik.com/premium-photo/pan-food-with-vegetables-it_662214-82994.jpg " alt="slack" style={{width:"500px", height:"300px"}}/>
            </div>

            
            

        </div>
        <div className="body3">
                 <h1>Inspire and be inspired by cooking.</h1>
                 <p>Connect with passionate cooks and discover recipes that spark your culinary creativity.</p>
                 <button className="button2">
                  TRY RECEIPE
                 </button>
                 <button className="button1">
                  GET STARTED
                 </button>
                 <br></br><br></br>
                 
            </div>
            
                    
                  <div className="ps">
                 <div class="part1">
                      <h1>83%</h1>
                 </div>
                 <div class="part2" >
                      <h1>72%</h1>
                 </div>
                 <div class="part3">
                      <h1>68%</h1>
                 </div>
                 <p style={{fontSize:"100%",color:"black" ,marginTop:"0cm" , display:"inline-block",marginLeft:"0cm"}}>of home cooks tailor <br></br> recipes to suit their taste*</p>
                 <p style={{fontSize:"100%",color:"black" ,marginTop:"0cm",display:"inline-block",marginLeft:"1cm"}}>of people prioritize homemade<br></br>meals over dining out*</p>
                 <p style={{fontSize:"100%",color:"black" ,marginTop:"0cm",display:"inline-block",marginLeft:"1cm"}}>of people who <br></br>enjoy cooking as hobby *</p>

                 </div>
                 <div className="cont4">
                  <div className='left4'>
                    <img src="https://ik.imagekit.io/awwybhhmo/satellite_images/indian/beyondmenu/hero/18.jpg?tr=w-3840,q-50" style={{width:"500px", height:"350px"}} alt="img"/>
                  </div>
                  <div className='right4'>
                    <p><i>'Recipes are the music notes that compose the symphony of a great meal’</i></p>
                    <p style={{fontSize:"20px" , display:"inline", marginBottom:"0"}}><b>Bobby Flay</b><br></br>An American celebrity chef, food writer, restaurateur and reality television personality</p>
                    {/*<p style={{fontSize:"20px"}}>Director of Technology Strategy and Architecture, Vodafone</p>*/}<br></br>
                    <a href="www.google.com" style={{color:"blue" , fontSize:"20px"}} className="link1">See more customer stories</a>

                  </div>
                 </div>
                 <div className="cont5">
                      <p>{/** Weighted average. Based on 2,707 survey responses from weekly Slack users in the US, UK, Australia and Canada with a ± 2% margin of error at 95% CI (December 2021).*/}</p>
                 </div>
                 <div className="cont7">
                  <br></br>
                 <div className="cont6">
                      <h1>Your culinary adventure starts here!</h1>
                 </div>
                 <div className="cont8">
                      <img src="https://img.buzzfeed.com/buzzfeed-static/static/2014-06/23/15/campaign_images/webdr07/26-traditional-indian-foods-that-will-change-your-1-7312-1403550756-15_big.jpg?resize=1200:*" alt="imgg" style={{width:"200px" ,height:"150px"}}/>
                      <p>PooriMasal</p>
                      <h3>Spicy Poori Masala: A taste of India's flavors!</h3>
                      <br></br>
                      <br></br>
                      <br></br>
                      <br></br>
                      <br></br>
                      <a href="www.google.com" style={{color:"blue" , fontSize:"20px"}} className="link1">READ NOW</a>

                      
                 </div>
                 <div className="cont8">
                 <img src="https://res.cloudinary.com/hz3gmuqw6/image/upload/c_fill,q_60,w_750,f_auto/5-samosas-canva-phppf0Q4I" alt="imgg" style={{width:"200px" ,height:"150px"}}/>
                      <p>Samosa</p>
                      <h3>Crispy Samosas: Golden parcels of savory delight!</h3>
                      <br></br>
                      <br></br>
                      <br></br>
                      <br></br>
                      <br></br>
                      <a href="www.google.com" style={{color:"blue" , fontSize:"20px"}} className="link1">READ NOW</a>

                 </div>
                 <div className="cont8">
                 <img src="https://www.thespruceeats.com/thmb/htgE7CCYS5FaW99oF183gVl7e_Q=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/GettyImages-639389404-5c450e724cedfd00015b09d5.jpg" alt="imgg" style={{width:"200px", height:"150px"}}/>
                      <p>FriedRice</p>
                      <h3>Fried Rice Fusion: A delicious blend of flavors </h3>
                      <br></br>
                      <br></br>
                      <br></br>
                      <br></br>
                      <br></br>
                      <a href="www.google.com" style={{color:"blue" , fontSize:"20px"}} className="link1">READ NOW</a>

                 </div>
                 <div className="cont8" style={{}}>
                 <img src="https://i0.wp.com/blog.bigbasket.com/wp-content/uploads/2023/04/South-Indian-main_584509564.jpeg?fit=2600%2C1733&ssl=1" alt="imgg" style={{width:"200px" ,height:"180px"}}/>
                      <p>Traditional</p>
                      <h3>Time-tested recipes for the soul!</h3>
                      <br></br>
                      <br></br>
                      <br></br>
                      <br></br>
                      <br></br>
                      <a href="www.google.com" style={{color:"blue" , fontSize:"20px"}} className="link1">READ NOW</a>

                 </div>
                 <br></br><br></br><br></br><br></br><br></br><br></br>
                 </div>
                 <div className="cont9">
                 <br></br><br></br><br></br><br></br><br></br>
                    <h1 style={{color:"white"}}>Enjoy cooking with your favorite dish</h1>
                    <button className="button1" style={{padding:"20px",width:"250px"}}>
                     TRY RECEIPE
                 </button>
                 <button className="button2" style={{padding:"20px",width:"250px"}}>
                 GET STARTED
                 </button>
                 </div>
                 <div className="cont10" style={{textAlign:"right"}}>
                 <a href="www.google.com" class="fa fa-facebook"></a>
                  <a href="www.google.com" class="fa fa-twitter"></a>
                  <a href="www.google.com" class="fa fa-linkedin"></a>
                  <a href="www.google.com" class="fa fa-youtube"></a>
                  <a href="www.google.com" class="fa fa-instagram"></a>
                 </div>
                 <hr></hr>
                 <div className="cont12">
                 <div className="cont11">
                      
                 </div>
                 <div className="cont11">

                 </div>
                 <div className="cont11">

                 </div>
                 <div className="cont11">

                 </div>
                 <div className="cont11">

                 </div>
                 </div>
                 

    </div>
  );
}
export default Home;