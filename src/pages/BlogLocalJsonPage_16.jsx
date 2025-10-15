import { useState } from 'react';
import Blog_16 from '../components/Blog_16';
import blogData_16 from '../assets/data/blogData.json';

const BlogLocalJsonPage_16 = () => {
  const [name, setName] = useState('ChaseChou');
  const [id, setId] = useState('213417016');
  const [blogs_16, setBlogs] = useState(blogData_16);
  return (
    <>
      <section className='blogs'>
        <div className='section-title'>
          <h2>
            static blogs -- {name}, {id}
          </h2>
        </div>
        <div className='blogs-center'>
          {blogData_16.map((item) => {
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

export default BlogLocalJsonPage_16;
