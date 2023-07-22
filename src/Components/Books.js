


const Books = ({books,setSelectedBook}) => {



    return(
        <div className="booksSection">
            {
                books  && 
                books.map((book,index)=>{
                    return(
                        <div className="bookDiv" key={index} onClick={()=>{setSelectedBook(book)}}>
                            <div className="imgDiv">
                            <img src={book.volumeInfo.imageLinks.thumbnail} alt="bookImage"/>
                            </div>
                            <div className="info">
                               <h3>{book.volumeInfo.title}</h3>
                               <p className="description">{book.volumeInfo.description}</p>
                               <button>Read Now</button>
                            </div>
                        </div>
                    )
                })
            }
        </div>
    )
}

export default Books;