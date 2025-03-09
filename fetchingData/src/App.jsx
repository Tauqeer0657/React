import {useState, useEffect} from 'react';
import axios from 'axios';

const App = () => {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchPosts = async () => {
      try {
      const response = await axios.get('https://jsonplaceholder.typicode.com/posts');
      setPosts(response.data);
      setLoading(false);
      }catch (error) {
      setError(error.message);
      setLoading(false);
      }
    }
    fetchPosts();
  }, []);

  if(loading){
    return <h2>Loading ...</h2>
  }

  if(error){
    return <h2>Error : {error} </h2>
  }

  return (
    <div className='main-container'>
      <h2 className='heading'>Posts</h2>
      <ul className='container'>
        {posts.map((post) => 
          <li key = {post.id} >
            <h3>{post.title}</h3>
            <p>{post.body}</p>
          </li>
        )}
      </ul>
      
    </div>
  )
}

export default App























// import { useState, useEffect } from 'react'
// import axios from 'axios';

// function App() {
//   const [posts, setPosts] = useState([]);
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState(null);

//   useEffect(() => {
//     axios.get('https://jsonplaceholder.typicode.com/posts')
//     .then(response => {
//       console.log(response);
//       console.log(response.data);
//       setPosts(response.data);
//       setLoading(false);
//     })
//     .catch(error => {
//       setError(error.message);
//       setLoading(false);
//     });

//   }, []);

//   if(loading){
//     return <h2>Loading ...</h2>
//   }

//   if(error){
//     return <h2>Error: {error} </h2>
//   }

//   return (
//     <div>
//       <h2>Posts</h2>
//       <ul>
//         {posts.map((post) => 
//           <li key = {post.id}>
//             <h3>{post.title}</h3>
//             <p>{post.body}</p>
//           </li>
//         )}
//       </ul>

//     </div>
//   )
// }

// export default App
