import posts from '../data/posts'
import {database} from '../database/config'




export function startAddingPost(post) {
    return async (dispatch) => {
        try {
            await database.ref('posts').update({ [post.id]: post })
            dispatch(addPost(post))
        } catch (error) {
            console.log(error)
        }
    }
}

export function startLoadingPost() {
    
    return async (dispatch) => {
        //using .on() would ensure it is rereshed in real time
        const snapshot = await database.ref('posts').once('value')
        snapshot.forEach((childSnapshot) => {
            posts.push(childSnapshot.val())
        })
        dispatch(loadPosts(posts))
    }
}

export function startRemovingPost(index, id) {
    const updates = {
        [`posts/${id}`]: null,
        [`comments/${id}`]: null
       }

       return async (dispatch) => {
        try {
               await database.ref().update(updates)
               dispatch(removePost(index))
           } catch (error) {
               console.log(error)
           }
        }
}

export function startAddingComment(comment, postId) {
    return async (dispatch) => {
        await database.ref(`comment/${postId}`).push(comment)
        dispatch(addComment(comment, postId))
    }
}

export function startLoadingComments() {
    return (dispatch) => {
        return database.ref('comment').once('value').then((snapshot) => {
            let comment = {}
            snapshot.forEach((childSnapshot) => {
                comment[childSnapshot.key] = Object.values(childSnapshot.val())
            })
            dispatch(loadComments(comment))
        })
    }
}

export function loadComments(comment) {
    return {
        type: 'LOAD_COMMENTS',
        comment
    }
}
//remove

export function removePost(index) {
    return {
        //when the action goes to the reducer, it needs to specify to reducer what type of event is ocurring in the app
        type: 'REMOVE_POST',
        index: index
    }
}

//adding post

export function addPost(post) {
    return {
        type: 'ADD_POST',
        //post: post
        post
    }
}

export function addComment(comment, postId) {
    return {
        type: 'ADD_COMMENT',
        comment,
        postId
    }
}

export function loadPosts(posts) {
    return {
        type: 'LOAD_POSTS',
        posts
    }
}