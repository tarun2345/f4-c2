import { useState,useEffect } from "react";
import axios  from "axios";
import Navbar from "./Components/Navbar";
import Books from "./Components/Books"
import SelectedBook from "./Components/SelectedBook";

const App = () => {
    let [books,setBooks] = useState([]);
    let [selectedBook,setSelectedBook] = useState('');
    

    useEffect(()=>{
        (async function renderBooks(){
          try{
              let response = await axios.get("https://www.googleapis.com/books/v1/volumes?q=harry+potter");
              setBooks(response.data.items)
          }
          catch(err){console.log(err)};
       })();
  
       (async function renderBooks(){
          try{
              let response = await axios.get("https://www.googleapis.com/books/v1/volumes?q=Sherlock+Holmes");
              setBooks(response.data.items)
          }
          catch(err){console.log(err)};
       })();
    },[])


    return(
        <div>
            <Navbar setBooks={setBooks} setSelectedBook={setSelectedBook}/>
            <SelectedBook selectedBook={selectedBook} />
            <Books books={books} setSelectedBook={setSelectedBook}/> 
            
        </div>
    )
}

export default App;