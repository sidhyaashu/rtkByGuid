// import { useSelector } from 'react-redux'

// const PostAuthor =({userId})=>{
//     const users = useSelector(state=>state.user)

//     const author = users.find(user=>user.id === userId)

//     return <span>By {author? author.name :'Unknown author'}</span>
// }

// export default PostAuthor





//=================================================TWO==========================================================


import { useSelector } from 'react-redux'
import { selectAllPosts } from './socialSlice.js'

const PostAuthor =({userId})=>{
    const users = useSelector(selectAllPosts)

    const author = users.find(user=>user.id === userId)

    return <span>By {author? author.name :'Unknown author'}</span>
}

export default PostAuthor