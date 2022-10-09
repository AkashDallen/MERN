import React from 'react';
import { Link } from 'react-router-dom';
import '../App.css';

const BookCard = (props) => {
    const  book  = props.book;

    return(
        <div className="card-container">
            <img src="https://www.google.com/imgres?imgurl=https%3A%2F%2Fhellowebbooks.com%2Fstatic%2Fimages%2Fic%2F2.jpg&imgrefurl=https%3A%2F%2Fhellowebbooks.com%2Fdjango-intermediate-concepts%2F&tbnid=YlaJCoC9IDpK2M&vet=12ahUKEwiQ-Ky_uNP6AhURi9gFHQXAANYQMyg7egQIARBa..i&docid=j2j4zl1Wg9KoIM&w=1200&h=1200&q=books%20images%20for%20web%20app&ved=2ahUKEwiQ-Ky_uNP6AhURi9gFHQXAANYQMyg7egQIARBa" alt="" />
            <div className="desc">
                <h2>
                    <Link to={`/show-book/${book._id}`}>
                        { book.title }
                    </Link>
                </h2>
                <h3>{book.author}</h3>
                <p>{book.description}</p>
            </div>
        </div>
    )
};

export default BookCard;