



const SelectedBook = ({selectedBook}) => {

    console.log(selectedBook)

    return(
        <div>
            {
                selectedBook &&
                <div>
                    <div className="selectedBook">
                            <div className="selectedImg">
                               <img src={selectedBook.volumeInfo.imageLinks.thumbnail} alt="bookImage"/>
                            </div>
                            <div className="selectedInfo">
                               <h3>{selectedBook.volumeInfo.title}</h3>
                               <h5 className="grey">{selectedBook.volumeInfo.authors[0]}</h5>
                               <p className="selectedDes grey">{selectedBook.volumeInfo.description}</p>
                               <div className="span">
                                    <span>Avg Rating : {selectedBook.volumeInfo.averageRating}</span>
                                    <span className="line"></span>
                                    <span>Rating Count : {selectedBook.volumeInfo.ratingsCount}</span>
                                    <span className="line"></span>
                                    <span>Publisher : {selectedBook.volumeInfo.publisher}</span>
                                    <span className="line"></span>
                                    <span>Language : {selectedBook.volumeInfo.language}</span>
                               </div>
                               <div className="btn">
                                   <button><a href={selectedBook.volumeInfo.previewLink} target="_blank">Read Now</a></button>
                                   <button><a href={selectedBook.volumeInfo.infoLink} target="_blank">More info</a></button>
                               </div>
                            </div>
                    </div>
                    <div>
                          <h1 className="more">More Books..</h1>
                    </div>
                </div>
            }
        </div>
    )
}

export default SelectedBook;