import React from 'react'
import Photo from './Photo'
import {Link} from 'react-router-dom'

function PhotoWall (props) {
    return <div>
            <Link  to="/AddPhoto" className="addIcon"> </Link>
                <div className="photoGrid">
                    {props.posts
                    .sort(function(x, y) {
                        return y.id - x.id
                    })
                    .map((post, index) => <Photo key={index} post={post} {...props} index={index}/>)}
                </div>

           </div>
    
}

export default PhotoWall