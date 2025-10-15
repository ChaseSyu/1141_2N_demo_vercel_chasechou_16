// import './App_16.scss';
import books_data from '../assets/data/booklist_data';
import Wrapper from '../assets/wrappers/Booklist_16';

console.log('books_data', books_data);

const BookListPage_16 = () => {
  return (
    <Wrapper>
      <section className='booklist'>
        {books_data.map((book, index) => {
          return (
            <article className='book' key={index}>
              <img src={book.img} />
              <div className='bookinfo'>
                <h1>{book.title}</h1>
                <h4>{book.author}</h4>
              </div>
            </article>
          );
        })}
      </section>
    </Wrapper>
  );
};

export default BookListPage_16;
