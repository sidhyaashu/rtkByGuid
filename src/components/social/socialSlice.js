// =============================================================ONE =============================================================


// import { createSlice, nanoid } from "@reduxjs/toolkit";
// import { sub } from 'date-fns'

// const initialState =[
//     {
//         id:'1',
//         title:"Hi one",
//         content:"content one",
//         date:sub(new Date(),{minutes:10}).toISOString(),
//         reactions:{
//             thumbsUp:0,
//             wow:0,
//             heart:0,
//             rocket:0,
//             coffee:0
//         }
//     },
// ]

// const socialSlice =createSlice({
//     name:"social",
//     initialState,
//     reducers:{
//         postAdd:{
//             reducer:(state,action)=>{
//                 state.push(action.payload)
//             },
//             prepare:(title,content,userId)=>{
//                 return{
//                     payload:{
//                         id:nanoid(),
//                         title,
//                         content,
//                         date:new Date().toISOString(),
//                         userId,
//                         reactions:{
//                             thumbsUp:0,
//                             wow:0,
//                             heart:0,
//                             rocket:0,
//                             coffee:0
//                         }
//                     }
//                 }
//             }
//         },
//         reactionAdded:(state,action)=>{
//             const { postId,reaction } = action.payload
//             const existingPost = state.find(post => post.id === postId)
//             if(existingPost){
//                 existingPost.reactions[reaction]++
//             }
//         }
//     }
// })


// export const { postAdd,reactionAdded } = socialSlice.actions
// export default socialSlice.reducer







// ==================================================================TWO ==================================================================



import { createSlice, nanoid,createAsyncThunk } from "@reduxjs/toolkit";
import { sub } from 'date-fns'
const POSTS_URL = 'https://jsonplaceholder.typicode.com/posts'
import axios from 'axios'

const initialState ={
    posts:[],
    status:'idle',
    error
}


export const fetchPosts = createAsyncThunk('posts/fetchPosts',async ()=>{
    try {
        const response = await axios.get(POSTS_URL)
        return [...response.data]
    } catch (err) {
        return err.message
    }
})

const socialSlice =createSlice({
    name:"posts",
    initialState,
    reducers:{
        postAdd:{
            reducer:(state,action)=>{
                state.posts.push(action.payload)
            },
            prepare:(title,content,userId)=>{
                return{
                    payload:{
                        id:nanoid(),
                        title,
                        content,
                        date:new Date().toISOString(),
                        userId,
                        reactions:{
                            thumbsUp:0,
                            wow:0,
                            heart:0,
                            rocket:0,
                            coffee:0
                        }
                    }
                }
            }
        },
        reactionAdded:(state,action)=>{
            const { postId,reaction } = action.payload
            const existingPost = state.posts.find(post => post.id === postId)
            if(existingPost){
                existingPost.reactions[reaction]++
            }
        }
    },
    extraReducers:(builder)=>{
        builder
        .addCase(fetchPosts.pending,(state,action)=>{
            state.status = 'loading'
        })
        .addCase(fetchPosts.fulfilled,(state,action)=>{
            state.status = 'succeeded'
            let min = 1;
            const loadedPost = action.payload.map(post=>{
                post.date = sub(new Date(),{minutes:min++}).toISOString()
                    post.reactions= {
                            thumbsUp:0,
                            wow:0,
                            heart:0,
                            rocket:0,
                            coffee:0
                    }
                    return post
            })
            //Add any fetched posts to the array
            state.posts = state.posts.concat(loadedPost)
        })
        .addCase(fetchPosts.rejected,(state,action)=>{
            state.status = 'failed'
            state.error = action.error.message
        })
    }
})


export const selectAllPosts = (state)=>state.posts.posts
export const getPostStatus = (state)=>state.posts.status
export const getPostError = (state)=>state.posts.error



export const { postAdd,reactionAdded } = socialSlice.actions
export default socialSlice.reducer


