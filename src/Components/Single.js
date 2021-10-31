import React, {Component} from "react"
import Photo from './Photo'
import Comments from './Comments'

class Single extends Component {
    render () {
        //match is the object passed with params
        const {match, posts} = this.props
        const id = Number(match.params.id)
        const post = posts.find((post) => post.id === id)
        //can map over an empty array, to avoid error using ||
        const comments = this.props.comments[id] || []
        const index = this.props.posts.findIndex((post) => post.id === id)
        console.log(post)
        if ((this.props.loading) === true) {
            return <div className="loader">...loading</div>
        } else if (post){

        
        return <div className='single-photo'>

            <Photo post={post} {...this.props} index={index}/>
            <Comments startAddingComment={this.props.startAddingComment} comments={comments} id = {id}/>

               </div>
        }  else {
            return <h1>No Post Found</h1>
        }      
    }
}

export default Single