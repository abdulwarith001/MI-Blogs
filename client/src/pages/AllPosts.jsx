import React, { useEffect, useState } from 'react'
import Wrapper from '../assets/wrappers/AllPosts'
import AllPost from '../components/AllPosts'
import { useGetOwnerBlogMutation } from '../slices/blogApiSlice'
import Loader from '../components/Loading'
const AllPosts = () => {
  const [get_blogs, { isLoading }] = useGetOwnerBlogMutation();
  const [response, setResponse] = useState([])
  const [total, setTotal] = useState('')

  const getBlogs = async () => {
    try {
      const res = await get_blogs().unwrap()
      setResponse(res.data);
      setTotal(res.total)
    } catch (error) {
      console.log(error)
    }
  }

  useEffect(() => {
    getBlogs()
  }, [])
  return (
    <Wrapper>
      {isLoading && <Loader text="Loading your posts" />}
      <h4>{total} posts was found</h4>

      <article>
        {response.map((blog) => {
          const { title, image, content, _id } = blog;
          return (
            <AllPost
              title={title}
              image={image.url}
              content={content}
              id={_id}
              key={_id}
            />
          );
        })}
      </article>
    </Wrapper>
  );
}

export default AllPosts