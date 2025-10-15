import { useState, useEffect } from 'react';
import Blog_16 from '../components/Blog_16';
// import blogData_16 from '../assets/data/blogData.json';

const api_url = 'http://localhost:5000/api/blogs_16';

const BlogNodePage_16 = () => {
  const [name, setName] = useState('ChaseChou');
  const [id, setId] = useState('213417016');
  const [blogs_16, setBlogs_16] = useState([]);

  const fetchBlogFromNodeServer = async () => {
    try {
      const response = await fetch(api_url);
      const data = await response.json();
      console.log('blogs', data);
      setBlogs_16(data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchBlogFromNodeServer();
  }, []);

  return (
    <>
      <section className='blogs'>
        <div className='section-title'>
          <h2>
            blogs from Node -- {name}, {id}
          </h2>
        </div>
        <div className='blogs-center'>
          {blogs_16.map((item) => {
            const { id, title, descrip, category, img } = item;
            return (
              <Blog_16
                key={id}
                id={id}
                title={title}
                descrip={descrip}
                category={category}
                img={img}
              />
            );
          })}
        </div>
      </section>
    </>
  );
};

export default BlogNodePage_16;
