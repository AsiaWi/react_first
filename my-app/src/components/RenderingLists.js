import React from 'react';
import Book from './Book';
 
function RenderingLists() {
    const booklist = [
        'to kill a mockingbird',
        'the great gatsby',
        'the catcher in the rye'
    ]

    const books = [
        {title: '1to kill a mockingbird',
         author: '1harper lee',
         pages: 200
        },
        {title: '2to kill a mockingbird',
        author: '2harper lee',
        pages: 200
       },
       {title: '3to kill a mockingbird',
       author: '3harper lee',
       pages: 200
      },
    ]
  return (
    <div>
        {booklist.map(book => { return<h2 key={book}>{book}</h2>})}
        <hr />
        {books.map(book => { 
            return (
                <div key={book.title}>
                    <h5>{book.title}</h5>
                    <p>{book.author}</p>
                    <p>{book.pages}</p>
                </div>
            )})}
            <hr />
            {books.map(book => {
                return <Book key={book.title} book = {book}/> // each item needs pk
            })}
    </div>
  )
}

export default RenderingLists