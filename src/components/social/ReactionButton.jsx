// import React from 'react'
// import { useDispatch } from 'react-redux'
// import { reactionAdded } from './socialSlice.js'


//     // "thumbsUp":'👍',
//     // "wow":'🦓',
//     // "heart":'🧟',
//     // "rocket":'👎',
//     // "coffee":'💤'   

// const reactionEmoji ={
//      "thumbsUp":'👍',
//     "wow":'😮',
//     "heart":'❤️',
//     "rocket":'🚀',
//     "coffee":'☕'   
// }


// const ReactionButton = ({post}) => {
//     const dispatch = useDispatch()

//     const reacttionButton = Object.entries(reactionEmoji).map(([name,emoji])=>{
//     return (
//         <button
//             key={name}
//             type='button'
//             className='reactionButton'
//             onClick={()=>dispatch(reactionAdded({postId:post.id,reaction:name}))}
//         >
//             {emoji} {post.reactions[name]}
//         </button>
//       )
//     })

//     return <div>{reacttionButton}</div>
// }

// export default ReactionButton




//==========================================================TWO==============================================================


import React from 'react'
import { useDispatch } from 'react-redux'
import { reactionAdded } from './socialSlice.js'


    // "thumbsUp":'👍',
    // "wow":'🦓',
    // "heart":'🧟',
    // "rocket":'👎',
    // "coffee":'💤'   

const reactionEmoji ={
     "thumbsUp":'👍',
    "wow":'😮',
    "heart":'❤️',
    "rocket":'🚀',
    "coffee":'☕'   
}


const ReactionButton = ({post}) => {
    const dispatch = useDispatch()

    const reacttionButton = Object.entries(reactionEmoji).map(([name,emoji])=>{
    return (
        <button
            key={name}
            type='button'
            className='reactionButton'
            onClick={()=>dispatch(reactionAdded({postId:post.id,reaction:name}))}
        >
            {emoji} {post.reactions[name]}
        </button>
      )
    })

    return <div>{reacttionButton}</div>
}

export default ReactionButton
