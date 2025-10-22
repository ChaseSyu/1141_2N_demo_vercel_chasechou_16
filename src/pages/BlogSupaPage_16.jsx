import { useState, useEffect } from 'react';
import Blog_16 from '../components/Blog_16.jsx';
// import blogData_16 from '../assets/data/blogData.json';

// const api_url = 'http://localhost:5000/api/blogs_16';

import { supabase } from '../db/clientSupabase.js';

const BlogSupaPage_16 = () => {
  const [name, setName] = useState('ChaseChou');
  const [id, setId] = useState('213417016');
  const [blogs_16, setBlogs_16] = useState([]);

  const fetchBlogFromSupaServer = async () => {
    try {
      let { data, error } = await supabase.from('blogs_16').select('*');
      // const response = await fetch(api_url);
      // const data = await response.json();
      console.log('blogs', data);
      setBlogs_16(data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchBlogFromSupaServer();
  }, []);

  return (
    <>
      <section className='blogs'>
        <div className='section-title'>
          <h2>
            blogs from Supabase -- {name}, {id}
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

export default BlogSupaPage_16;
