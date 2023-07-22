import { useState } from "react";
import logo from "../images/logo.svg"
import axios from "axios";
import { BiBookHeart } from "react-icons/bi";
import { FaBell,FaUser } from 'react-icons/fa'

const Navbar = ({setBooks,setSelectedBook}) => {
    let [search,setSearch] = useState('');


    async function renderImages(){
        if(search!==""){
            try{
                let response = await axios.get(`https://www.googleapis.com/books/v1/volumes?q=${search}`);
                setBooks(response.data.items);
            }
            catch(err){alert('there is no books pesent with your search request restatrt the page')}
        }
        setSelectedBook('')
    }

    return(
        <div className="navbar">
            <div className="logoDiv">
                <img src={logo} alt="Logo"/>
                <div><h2>KeazoN</h2><span>BOOKS</span></div>
            </div>
            <div className="searchBar">
                <input type="text" placeholder="Search for books" value={search}
                onChange={(e)=>{setSearch(e.target.value)}}/>
                <button onClick={renderImages}>Search</button>
            </div>
            <div className="profile">
                <BiBookHeart className="profileIcons"/>
                <FaBell className="profileIcons"/>
                <FaUser className="profileIcons"/>
            </div>
        </div>
    )
}

export default Navbar;