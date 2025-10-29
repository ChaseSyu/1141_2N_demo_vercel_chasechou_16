import { useState } from 'react';
import blogData_16 from '../assets/data/blogData.json';
import Blog2_16 from '../components/Blog2_16';
import Wrapper from '../assets/wrappers/Blog2_16';
import Alert_16 from '../components/Alert_16';

const BlogLocalJsonPage2_16 = () => {
  const [name, setName] = useState('ChaseChou');
  const [id, setId] = useState('213417016');
  const [blogs_16, setBlogs_16] = useState(blogData_16);
  const [alert, setAlert] = useState({
    show: false,
    msg: '',
    type: '',
  });

  const showAlert = (show = false, msg = '', type = '') => {
    setAlert({ show, msg, type });
  };

  const removeItem = (id) => {
    showAlert(true, 'blog removed', 'danger');
    setBlogs_16(blogs_16.filter((blog) => blog.id !== id));
  };

  const clearAllBlogs = () => {
    showAlert(true, 'all blogs cleared', 'danger');
    setBlogs_16([]);
  };

  const loadAllBlogs = () => {
    showAlert(true, 'all blogs loaded', 'success');
    setBlogs_16(blogData_16);
  };

  return (
    <Wrapper>
      {alert.show && <Alert_16 alert={alert} showAlert={showAlert} />}
      <section className='blogs'>
        <div className='section-title'>
          <h2>
            Blogs From Local Json2 -- {name}, {id}
          </h2>
        </div>
        <div className='blogs-center'>
          {blogs_16.map((item) => {
            const { id, title, descrip, category, img } = item;
            return (
              <Blog2_16
                key={id}
                id={id}
                title={title}
                descrip={descrip}
                category={category}
                img={img}
                removeItem={removeItem}
              />
            );
          })}
        </div>
        <div className='flex justify-center items-center gap-8 mt-8'>
          <button
            type='button'
            className='text-red-700 bg-red-200 hover:bg-red-300 capitalize px-4 py-2 text-[18px] rounded'
            onClick={clearAllBlogs}
          >
            Clear All Blogs
          </button>
          <button
            type='button'
            className='text-blue-700 bg-blue-200 hover:bg-blue-300 capitalize px-4 py-2 text-[18px] rounded'
            onClick={loadAllBlogs}
          >
            Load All Blogs
          </button>
        </div>
      </section>
    </Wrapper>
  );
};

export default BlogLocalJsonPage2_16;
