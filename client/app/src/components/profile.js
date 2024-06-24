import React ,{useState,useEffect} from 'react';
import './profile.css';
import { Link } from 'react-router-dom';
import axios from 'axios';

function Profile()
{   
    const[name,setName]=useState('');
    const[email,setEmail]=useState('');
    const[noOfRe,setNoOfRe]=useState('');
    const [isEditing, setIsEditing] = useState(false);
    const[details,setDetails]=useState([]);
    const [editRecipeId, setEditRecipeId] = useState(null);
    const [editRecipeData, setEditRecipeData] = useState({
        dishName: '',
        dishStyle: '',
        dishTime: '',
        dishIngredients: '',
        dishProcedure: '',
        dishImage: ''
    })
    const handleEditToggle = () => {
        setIsEditing(!isEditing);
      };
      const [recipes, setRecipes] = useState([]);

      useEffect(() => {
          fetchRecipes();
          fetchDetail();
      }, []);
      useEffect(() => {
        fetchDetail();

    }, []);
      
  
      const fetchRecipes = async () => {
          try {
              const userId = localStorage.getItem('userId');
              const response = await axios.get('http://localhost:5000/userRecipe', {
                headers: { 'userId': userId }
              });
              setRecipes(response.data.recipes);
          } catch (error) {
              console.error('Error fetching recipes:', error);
          }
      };
      /*const fetchDetail = async () => {
        try {
          //const userId = localStorage.getItem('userId');
            const response = await axios.get('http://localhost:5000/users');
            setDetails(response.data.user);
            if (response.data.user.length > 0) {
              setName(response.data.user[0].name);
              setEmail(response.data.user[0].email);
          }
            console.log(details);
           // console.log(details.name);

        } catch (error) {
            console.error('Error fetching details:', error);
        }
    };
    useEffect(() => {
      if (details.length > 0) {
          console.log(details);
          console.log(details[0].name);
      }
  }, [details]);*/
  const fetchDetail = async () => {
    try {
        const userId = localStorage.getItem('userId');
        const response = await axios.get('http://localhost:5000/users', {
          headers: { 'userId': userId }
        });
        setDetails(response.data.user);
        setName(response.data.user[0].name);
        setEmail(response.data.user[0].email);
        console.log(response.data.user[0].name);
    } catch (error) {
        console.error('Error fetching recipes:', error);
    }
};
const handleDelete = async (recipeId) => {
  try {
      await axios.delete(`http://localhost:5000/userRecipe/recipes/${recipeId}`);
      fetchRecipes();
  } catch (error) {
      console.error('Error deleting recipe:', error);
  }
};


const handleEdit = (recipe) => {
  setEditRecipeId(recipe.recid);
  setEditRecipeData(recipe);
};

const handleSave = async () => {
  try {
      await axios.put(`http://localhost:5000/userRecipe/recipes/${editRecipeId}`, editRecipeData);
      setEditRecipeId(null);
      fetchRecipes();
  } catch (error) {
      console.error('Error saving recipe:', error);
  }
};

const handleInputChange = (e) => {
  const { name, value } = e.target;
  setEditRecipeData({ ...editRecipeData, [name]: value });
};

    return(

        <div style={{backgroundColor:" #FCF6F5"}}>
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
              
                <li id="search"  ></li>
                
                 {/*<li><a href="www.google.com">Sign in</a></li>*/}
                 <button className="button1"><Link to="/recipe">
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
        <div className='bottom' style={{backgroundColor:" #FCF6F5",marginTop:"0px"}}>
            <div className='iden'>
                {/*<h2 style={{marginLeft:"300px"}}>Profile of <p>{details.name}</p></h2>*/}
                <h2 style={{ marginLeft: "300px" }}>
                        Profile of {name}{/*details.length > 0 ? details[0].name : 'Loading...'*/}</h2>
                <div className='identity'>
                        <button className='button1' style={{width:"150px",marginLeft:"400px"}} onClick={handleEditToggle}>{isEditing ? 'Save' : 'Edit'}</button><br></br>
                        <div className='profile'>
                        <label>Name</label>
                        <input type="text" value={name} onChange={(e)=>setName(e.target.value)} disabled={!isEditing}/><br></br>
                        <label>Email</label>
                        <input type="email" value={email} onChange={(e)=>setEmail(e.target.value)} disabled={!isEditing}/><br></br>
                        {/*<label>Receipees</label>
                        <input type="text" value={noOfRe} onChange={(e)=>setNoOfRe(e.target.value)} style={{marginLeft:"178px"}} disabled={!isEditing}/><br></br>*/}
                        </div>
                        
                        {/*details.length > 0 && (
                            <div className='profile'>
                                <label>Name</label>
                                <input type="text" value={name} onChange={(e) => setName(e.target.value)} disabled={!isEditing} /><br />
                                <label>Email</label>
                                <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} disabled={!isEditing} /><br />
                                <label>Receipees</label>
                                <input type="text" value={noOfRe} onChange={(e) => setNoOfRe(e.target.value)} style={{ marginLeft: "178px" }} disabled={!isEditing} /><br />
                            </div>
                        )*/}
                </div>
                </div>
                <div style={{marginTop:"50px"}}>
                <div className="cont8" >
                      <img src="https://img.buzzfeed.com/buzzfeed-static/static/2014-06/23/15/campaign_images/webdr07/26-traditional-indian-foods-that-will-change-your-1-7312-1403550756-15_big.jpg?resize=1200:*" alt="imgg" style={{width:"200px" ,height:"150px"}}/>
                      <p>IndianStyle</p>
                      <h3>PooriMasal</h3>
                      <h4>Cook time : 30 minutes</h4>
                      <h4 >Ingredients : </h4><br></br><p>1.Water<p></p>2.Salt<p></p>3.Wheat Flour<p></p>4.Refined Oil</p> 
                      <h4>Procedure:</h4>
                      <p>1.Make dough</p>
                      <p>2.Heat Oil </p>
                      <p>3.Make poori balls</p>
                      <p>4.Frying</p>
                      <br></br>
                      <br></br>
                      <p style={{color:"blue" , fontSize:"20px"}} className="link1">Default</p>
                      <button className='button1' style={{width:"80px"}}>Edit</button>
                      <button className='button2'>Delete</button>

                      
                 </div>
                 <div className="cont8" >
                 <img src="https://res.cloudinary.com/hz3gmuqw6/image/upload/c_fill,q_60,w_750,f_auto/5-samosas-canva-phppf0Q4I" alt="imgg" style={{width:"200px" ,height:"150px"}}/>
                      <p>IndianStyle</p>
                      <h3>Samosa</h3>
                      <h4>Cook time : 30 minutes</h4>
                      <h4>Ingredients : </h4><br></br><p> 1.Flour</p><p>2.Oil</p><p>3.GreenChilli</p><p>4.Potato</p><p>5.Coriander</p>
                      <h4>Procedure:</h4>
                      <p>1.The spiced potato filling;</p>
                      <p>2.The Samosa dough;</p>
                      <p>3.Making the Samosa parcels</p>
                      <p>4.Frying</p>
                      <br></br>
                      <br></br>
                      <p style={{color:"blue" , fontSize:"20px"}} className="link1">Default</p>
                      <button className='button1' style={{width:"80px"}}>Edit</button>
                      <button className='button2'>Delete</button>

                 </div>
                 {/*recipes.map(recipe => (
                    <div className="cont8" key={recipe.recid}>
                        <img src={recipe.dishImage} alt={recipe.dishName} style={{ width: "200px", height: "150px" }} />
                        <p>{recipe.dishStyle}</p>
                        <h3>{recipe.dishName}</h3>
                        <h4>Cook time: {recipe.dishTime}</h4>
                        <h4>Ingredients:</h4>
                        <p>{recipe.dishIngredients}</p>
                        <h4>Procedure:</h4>
                        <p>{recipe.dishProcedure}</p>
                        <p style={{ color: "blue", fontSize: "20px" }} className="link1">By {name}</p>
                        <button className='button1' style={{width:"80px"}} onClick={handleEdit}>Edit</button>
                      <button className='button2' onClick={()=>handleDelete(recipe.recid)}>Delete</button>
                    </div>
                ))*/}
                {recipes.map(recipe => (
                        <div className="cont8" key={recipe.recid}>
                            {editRecipeId === recipe.recid ? (
                                <>
                                    <input type="text" name="dishName" value={editRecipeData.dishName} onChange={handleInputChange} /><br />
                                    <input type="text" name="dishStyle" value={editRecipeData.dishStyle} onChange={handleInputChange} /><br />
                                    <input type="text" name="dishTime" value={editRecipeData.dishTime} onChange={handleInputChange} /><br />
                                    <textarea name="dishIngredients" value={editRecipeData.dishIngredients} onChange={handleInputChange}></textarea><br />
                                    <textarea name="dishProcedure" value={editRecipeData.dishProcedure} onChange={handleInputChange}></textarea><br />
                                    <input type="text" name="dishImage" value={editRecipeData.dishImage} onChange={handleInputChange} /><br />
                                    <button className='button1' style={{ width: "80px" }} onClick={handleSave}>Save</button> {/* Save button calls handleSave */}
                                </>
                            ) : (
                                <>
                                    <img src={`http://localhost:5000/uploads/${recipe.dishImage}`} alt={recipe.dishName} style={{ width: "200px", height: "150px" }} />
                                    <p>{recipe.dishStyle}</p>
                                    <h3>{recipe.dishName}</h3>
                                    <h4>Cook time: {recipe.dishTime}</h4>
                                    <h4>Ingredients:</h4>
                                    <p>{recipe.dishIngredients}</p>
                                    <h4>Procedure:</h4>
                                    <p>{recipe.dishProcedure}</p>
                                    <p style={{ color: "blue", fontSize: "20px" }} className="link1">By {name}</p>
                                    <button className='button1' style={{ width: "80px" }} onClick={() => handleEdit(recipe)}>Edit</button>
                                    <button className='button2' onClick={() => handleDelete(recipe.recid)}>Delete</button>
                                </>
                           )}
                           </div>
                       ))}

                </div>
        </div>
        </div>
    );
}
export default Profile;