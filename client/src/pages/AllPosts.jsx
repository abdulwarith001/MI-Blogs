import React, { useEffect, useState } from 'react'
import Wrapper from '../assets/wrappers/AllPosts'
import AllPost from '../components/AllPosts'
const AllPosts = () => {
  const [total, setTotal] = useState('')
  const [errorMsg, setErrorMsg] = useState('')
  const [successMsg, setSuccessMsg] = useState('')

  return (
    <Wrapper>
      {total && <h4>{total} posts was found</h4>}
      {errorMsg && <div className="alert alert-danger">{errorMsg}</div>}
      {successMsg && <div className="alert alert-success">{successMsg}</div>}

      <article>
        <AllPost
          setTotal={setTotal}
          setErrorMsg={setErrorMsg}
          setSuccessMsg={setSuccessMsg}
        />
      </article>
    </Wrapper>
  );
}

export default AllPosts