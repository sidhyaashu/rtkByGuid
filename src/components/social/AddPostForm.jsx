// import React,{useState} from 'react'
// import { useDispatch,useSelector } from 'react-redux'

// import { postAdd } from './socialSlice.js'


// const AddPostForm = () => {
//     const [title,setTitle] = useState('')
//     const [content,setContent] = useState('')
//     const [userId,setUserId] = useState('')

//     const onTitleChange =e=>setTitle(e.target.value)
//     const onContentChange =e=>setContent(e.target.value)
//     const onAuthorChange =e=>setUserId(e.target.value)

//     const dispatch = useDispatch()
//     const user = useSelector((state)=>state.user)

//     console.log(user)

//     const onSavePostClicked=()=>{
//         if(title && content){
//             dispatch(postAdd(title,content,userId))
//             setTitle('')
//             setContent('')
//         }
//     }

//     const userOptions=user.map((user)=>(
//         <option key={user.id} value={user.id}>
//             {user.name}
//         </option>
//     ))

//     const canSave = Boolean(title) && Boolean(content) && Boolean(userId)

//   return (
//     <section>
//         <h2>Add New Post</h2>
//         <form>
//             <label htmlFor="postTitle">Post Title :</label>
//             <input 
//             type="text" 
//             id='postTitle'
//             name='postTitle'
//             value={title}
//             onChange={onTitleChange}
//             />

//             <label htmlFor="postAuthor">Author :</label>
//             <select value={userId} onChange={onAuthorChange} id="postAuthor">
//                 <option value=""></option>
//                 {userOptions}
//             </select>

//             <label htmlFor="postContent">Content :</label>
//             <textarea 
//             type="text"
//             id='postContent'
//             name='postContent'
//             value={content}
//             onChange={onContentChange}
//             />

//             <button 
//             type='button' 
//             onClick={onSavePostClicked}
//             disabled={!canSave}
//             >submit</button>
//         </form>
      
//     </section>                                 
//   )
// }

// export default AddPostForm










//================================================================TWO=================================================================


import React,{useState} from 'react'
import { useDispatch,useSelector } from 'react-redux'

import { postAdd ,selectAllPosts} from './socialSlice.js'


const AddPostForm = () => {
    const [title,setTitle] = useState('')
    const [content,setContent] = useState('')
    const [userId,setUserId] = useState('')

    const onTitleChange =e=>setTitle(e.target.value)
    const onContentChange =e=>setContent(e.target.value)
    const onAuthorChange =e=>setUserId(e.target.value)

    const dispatch = useDispatch()
    const user = useSelector(selectAllPosts)

    console.log(user)

    const onSavePostClicked=()=>{
        if(title && content){
            dispatch(postAdd(title,content,userId))
            setTitle('')
            setContent('')
        }
    }

    const userOptions=user.map((user)=>(
        <option key={user.id} value={user.id}>
            {user.name}
        </option>
    ))

    const canSave = Boolean(title) && Boolean(content) && Boolean(userId)

  return (
    <section>
        <h2>Add New Post</h2>
        <form>
            <label htmlFor="postTitle">Post Title :</label>
            <input 
            type="text" 
            id='postTitle'
            name='postTitle'
            value={title}
            onChange={onTitleChange}
            />

            <label htmlFor="postAuthor">Author :</label>
            <select value={userId} onChange={onAuthorChange} id="postAuthor">
                <option value=""></option>
                {userOptions}
            </select>

            <label htmlFor="postContent">Content :</label>
            <textarea 
            type="text"
            id='postContent'
            name='postContent'
            value={content}
            onChange={onContentChange}
            />

            <button 
            type='button' 
            onClick={onSavePostClicked}
            disabled={!canSave}
            >submit</button>
        </form>
      
    </section>                                 
  )
}

export default AddPostForm
