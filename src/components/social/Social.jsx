// =================================================ONE===================================================

// import React from 'react'
// import './social.css'
// import { useSelector } from 'react-redux'
// import AddPostForm from './AddPostForm'
// import PostAuthor from "./PostAuthor";
// import TimeAgo from './TimeAgo';
// import ReactionButton from './ReactionButton';

// const Social = () => {
//     const posts = useSelector(state=>state.post)

//     const orderedOfPost = posts.slice().sort((a,b)=>b.date.localeCompare(a.date))

//     const renderPosts = orderedOfPost.map(post=>(
//         <article key={post.id} >
//             <h3>{post.title}</h3>
//             <p>{post.content.substring(0,100)}</p>
//             <p className='postCredit' >
//               <PostAuthor userId={post.userId}/>
//               <TimeAgo timestamp={post.date} />
//             </p>
//             <ReactionButton post={post}/>
//         </article>
//     ))

//   return (
//     <div>
//         <AddPostForm/>
//         <h2>Posts</h2>
//         { renderPosts }
      
//     </div>
//   )
// }

// export default Social












//=============================================TWO===================================================


import React,{useEffect} from 'react'
import './social.css'
import { useSelector,useDispatch } from 'react-redux'
import { selectAllPosts,getPostError,getPostStatus,fetchPosts } from './socialSlice.js'
import PostExcerpt from './PostExcerpt';


const Social = () => {
    const dispatch = useDispatch()
    
    const posts = useSelector(selectAllPosts)
    const postStatus = useSelector(getPostStatus)
    const error = useSelector(getPostError)
    useEffect(()=>{
      if(postStatus ==='idle'){
        dispatch(fetchPosts())
      }
    },[postStatus,dispatch])

    // const orderedOfPost = posts.slice().sort((a,b)=>b.date.localeCompare(a.date))

    let content
    if(postStatus ==='loading'){
      content = <p>"Loading...."</p>
    }else if(postStatus === 'succeeded'){
      const orderedPost = posts.slice().sort((a,b)=>b.date.localeCompare(a.date))
      content = orderedPost.map(post=><PostExcerpt key={post.id} post={post}/>)
    }else if(postStatus === 'failed'){
      content = <p>{error}</p>
    }

  return (
    <section>
        <h2>Posts</h2>
        {content}
    </section>
  )
}

export default Social
