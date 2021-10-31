import React, {Component} from 'react'
import Title from "./Title"
import PhotoWall from './PhotoWall'
import AddPhoto from './AddPhoto'
import {Route, Link} from 'react-router-dom'
import {removePosts} from '../redux/actions'
import Single from './Single'

class Main extends Component {
    constructor() {
        super()

        
    }

    state = { loading: true }
    componentDidMount() {
        this.props.startLoadingPost().then(() => {
            this.setState({loading: false})
        })
        this.props.startLoadingComments()
    }

    /*componentDidUpdate(prevProps, prevState ) {
       //alert('re-render')
       console.log(prevState.posts)
       console.log(this.state)
    }*/

    render () {
        console.log(this.props)
        return (
        <div>
            <h1>
                <Link to="/">Photo Share</Link>
            </h1>
                <div>
                    <Route exact path="/" render={() => (
                        <div>
                        
                        {/*Passing everything down wiht ES6 spread operator*/}
                        <PhotoWall {...this.props}/>
                        </div>
    
                    )}/>
                </div>
                

                   
                    <Route path="/AddPhoto" render={({history}) =>(
                        <AddPhoto {...this.props}/>
                    )}/>
                
                    <Route path="/single/:id" render = {(params) => (
                        <Single loading={this.state.loading} {...this.props}  {...params} />
                    )} />

        </div>
            
        )}
}


export default Main