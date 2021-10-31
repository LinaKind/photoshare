import postsList from '../data/posts'
import { combineReducers } from 'redux'

function comments(state=[], action) {
    switch (action.type) {
        case 'ADD_COMMENT': 
        
        if (!state[action.postId]) {
            return {...state, [action.postId]: [action.comment]}
        } else {
            //adding on to existing comments
            return {...state, [action.postId]: [...state[action.postId], action.comment]}
        } 

        case 'LOAD_COMMENTS': return action.comment
        default: return state
    }
    return state
}

function posts(state = postsList, action) {
        
        switch (action.type) {
            case 'REMOVE_POST': return [...state.slice(0, action.index), ...state.slice(action.index + 1)]
            case 'ADD_POST': return [...state, action.post]
            case 'LOAD_POSTS': return action.posts
            default: return state
        }

}

const rootReducer = combineReducers({comments, posts})

export default rootReducer