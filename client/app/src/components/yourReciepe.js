import React, { useState } from 'react';
import './yourReciepe.css';
import { Link } from 'react-router-dom';
import axios from 'axios';

function PostReceipe() {
    const [dishName, setDishName] = useState('');
    const [dishStyle, setDishStyle] = useState('');
    const [dishTime, setDishTime] = useState('');
    const [dishIngredients, setDishIngredients] = useState('');
    const [dishProcedure, setDishProcedure] = useState('');
    const [dishImage, setDishImage] = useState(null); // change to store the file object
    const [message, setMessage] = useState('');

    const handleImageChange = (e) => {
        setDishImage(e.target.files[0]);
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try { 
            const userId = localStorage.getItem('userId');
            const formData = new FormData();
            formData.append('userId', userId);
            formData.append('dishName', dishName);
            formData.append('dishStyle', dishStyle);
            formData.append('dishTime', dishTime);
            formData.append('dishIngredients', dishIngredients);
            formData.append('dishProcedure', dishProcedure);
            formData.append('dishImage', dishImage);

            const response = await axios.post('http://localhost:5000/userRecipe', formData, {
                headers: {
                    'Content-Type': 'multipart/form-data',
                },
            });

            console.log(response.data.message);
            setMessage(response.data.message);
        } catch (error) {
            console.error('Error adding recipe:', error);
            setMessage(error.response?.data?.message || 'Error adding recipe');
        }
    };

    return (
        <>
            <div>
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
                 <button className="button1"><Link to="/recipe">TRY RECEIPE</Link></button>
                                <button className="button2"><Link to="/signup">GET STARTED</Link></button>
                            </div>
                        </ol>
                    </div>
                </div>
                <div className='bottom'>
                    <div className='left'>
                        <h3 style={{ display: "inline" }}>Add your Receipe here !!! </h3><p style={{ display: "inline" }}> Let other's enjoy your receipe ...</p>
                        <form className='yourReceipe' onSubmit={handleSubmit}>
                            <input type="text" placeholder="Dish Name" name="dishName" value={dishName} onChange={(e) => setDishName(e.target.value)} /><br />
                            <input type="text" placeholder="Dish Style" name="dishStyle" value={dishStyle} onChange={(e) => setDishStyle(e.target.value)} /><br />
                            <input type="text" placeholder="CookTime" name="dishTime" value={dishTime} onChange={(e) => setDishTime(e.target.value)} /><br />
                            <textarea type="text" placeholder="Ingredients" name="dishIngredients" value={dishIngredients} onChange={(e) => setDishIngredients(e.target.value)} /><br />
                            <textarea placeholder="Procedure" name="dishProcedure" value={dishProcedure} onChange={(e) => setDishProcedure(e.target.value)} /><br /><br />
                            <label htmlFor="images" className="drop-container" id="dropcontainer">
                                <span className="drop-title">Drop files here</span>
                                or
                                <input type="file" id="images" accept="image/*" onChange={handleImageChange} required />
                            </label>
                            <br /><br />
                            <button className='buttonY' type='submit'>Add Receipe</button>
                            <br /><br />
                        </form>
                        {message && <p>{message}</p>}
                    </div>
                    <div className='right'>
                        <marquee direction="up" className='mar' scrollamount="30" height="1000" behaviour="scroll">
                            {/* Image carousel */}
                            <img src="https://www.eatingwell.com/thmb/QYZnBgF72TIKI6-A--NyoPa6avY=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/greek-salmon-bowl-f681500cbe054bb1adb607ff55094075.jpeg" alt='img' style={{ width: "10cm", height: "10cm" }} /><br />
                            <img src="https://images.immediate.co.uk/production/volatile/sites/30/2020/08/prawn_fried_rice-2481925.jpg?quality=90&resize=440,400" alt="img" style={{ width: "10cm", height: "10cm" }} />
                            <img src="https://www.foodiesfeed.com/wp-content/uploads/2023/10/image-16-1024x1024.webp" alt="img" style={{ width: "10cm", height: "10cm" }} />
                            <img src="https://img.delicious.com.au/Jgatsr_y/del/2023/05/p109-really-good-chocolate-cake-with-double-choc-ganache-188754-1.png" alt="img" style={{ width: "10cm", height: "10cm" }} />
                            <img src="https://www.eatthis.com/wp-content/uploads/sites/4/2021/12/tofu-stir-fry.jpg?quality=82&strip=1" alt="img" style={{ width: "10cm", height: "10cm" }} />
                            <img src="https://www.holidify.com/images/cmsuploads/compressed/shutterstock_649541308_20191010160155.png" alt="img" style={{ width: "10cm", height: "10cm" }} />
                            <img src="https://media-cdn.tripadvisor.com/media/photo-s/03/df/ff/5c/eat-chow.jpg" alt="img" style={{ width: "10cm", height: "10cm" }} />
                            <img src="https://media.licdn.com/dms/image/D4D12AQGrxDhbDg67uQ/article-cover_image-shrink_720_1280/0/1695975656613?e=2147483647&v=beta&t=GdG2BHM26zEPHs1KaGtZOEkOjyhtnzPHzQHb4-hISKc" alt="img" style={{ width: "10cm", height: "10cm" }} />
                            <img src="https://img.freepik.com/premium-photo/pan-food-with-vegetables-it_662214-82994.jpg" alt="img" style={{ width: "10cm", height: "10cm" }} />
                            <img src="https://ik.imagekit.io/awwybhhmo/satellite_images/indian/beyondmenu/hero/18.jpg?tr=w-3840,q-50" alt="img" style={{ width: "10cm", height: "10cm" }} />
                            <img src="https://img.buzzfeed.com/buzzfeed-static/static/2014-06/23/15/campaign_images/webdr07/26-traditional-indian-foods-that-will-change-your-1-7312-1403550756-15_big.jpg?resize=1200:*" alt="img" style={{ width: "10cm", height: "10cm" }} />
                            <img src="https://res.cloudinary.com/hz3gmuqw6/image/upload/c_fill,q_60,w_750,f_auto/5-samosas-canva-phppf0Q4I" alt="img" style={{ width: "10cm", height: "10cm" }} />
                            <img src="https://www.thespruceeats.com/thmb/htgE7CCYS5FaW99oF183gVl7e_Q=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/GettyImages-639389404-5c450e724cedfd00015b09d5.jpg" alt="img" style={{ width: "10cm", height: "10cm" }} />
                            <img src="https://i0.wp.com/blog.bigbasket.com/wp-content/uploads/2023/04/South-Indian-main_584509564.jpeg?fit=2600%2C1733&ssl=1" alt="img" style={{ width: "10cm", height: "10cm" }} />
                        </marquee>
                    </div>
                </div>
            </div>
        </>
    );
}

export default PostReceipe;
