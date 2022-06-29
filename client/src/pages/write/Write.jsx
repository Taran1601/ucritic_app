import { useState } from "react";
import "./write.css";
import axios from "axios";
import { useContext } from "react";
import {Context} from "../../context/Context";

export default function Write() {
  const {user}=useContext(Context);
  const[title,setTitle]=useState("");
  const[desc,setDesc]=useState("");
  const[category,setCategory]=useState("");
  const[file,setFile]=useState(null);

const handleSubmit= async (e)=>{
  e.preventDefault();
const newPost={
  username:user.username,
  title,
  desc,
  category
};
if(file){
  const data= new FormData();
  const filename=Date.now() + file.name;
  data.append("name",filename);
  data.append("file",file);
  newPost.photo=filename;
  try {
    await axios.post("/upload",data);
  } catch (error) { }
}
try {
 const res= await axios.post("/posts",newPost);
window.location.replace("/post/"+res.data._id);
} catch (error) {}
};

  return (
    <div className="write">
      <form className="writeForm" onSubmit={handleSubmit}>
       <div className="upload">
       <div className="writeFormGroup">
         <div>
         <input
            className="writeInput"
            placeholder="Title"
            type="text"
            autoFocus={true}
            onChange={e=>setTitle(e.target.value)}
          />
         </div>
         <div>
          <textarea
            className="writeText"
            placeholder="Write your reviews here..."
            type="text"
            autoFocus={true}
            onChange={e=>setDesc(e.target.value)}
          />
        </div>
        <div >
          <select name="category" id="category" onChange={e=>setCategory(e.target.value)} className="select-category" > 
          <option  value="chooseCategory" selected disabled hidden>Select your category</option>
            <option value="movies">Movies</option>
            <option value="books">Books</option>
            <option value="shoes">Shoes</option>
            <option value="tech">Tech</option>
            <option value="cars">Cars</option>
            <option value="hotels">Hotels</option>
          </select>
        </div>
        <div>
        <button className="writeSubmit" type="submit">
          PUBLISH
        </button>
        </div>
        </div>
        <div class="divider">
          <div class="or-spacer">
            <div class="mask"></div>
            <span><i>UCRITIC</i></span>
          </div>
        </div>
        <div className="fileUpload">
            <div className="fileDiv">
            <label htmlFor="fileInput">
            <i class=" writeIcon fa-solid fa-upload">
            {file &&(
        <img
        className="writeImg"
        src={URL.createObjectURL(file)}
        alt=""/>
        )}
         </i>
          </label>
      
          <input id="fileInput"
           type="file"
            style={{ display: "none" }}
            onChange={(e)=>setFile(e.target.files[0])}/>
            </div>
        </div> 
       </div>
      </form>
    </div>

  );
}  
