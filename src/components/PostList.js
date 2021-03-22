import React from 'react';
import { connect } from 'react-redux';
import {fetchPosts, fetchPostsAndUsers} from '../actions';
import UserHeader from './UserHeader';

class PostList extends React.Component {

    componentDidMount(){
        //this.props.fetchPosts();
        this.props.fetchPostsAndUsers();
    }

    renderList () {
        return this.props.post.map((singlePost) => {
            return(
                <div className = 'item' key = {singlePost.id}>
                    <i className='large middle aligned icon user' />
                    <div className='content'>
                        <div className='description'>
                            <h2>{singlePost.title}</h2>
                            <p>{singlePost.body}</p>
                        </div>
                        <UserHeader userId = {singlePost.userId} />
                    </div>
                </div>
            )
        })
    }

    render() {
        console.log(this.props.post);
        
        return (
            <div className = 'ui relaxed divided list'>
                {this.renderList()}
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return { post : state.posts};
}

//export default connect(mapStateToProps, {fetchPosts : fetchPosts})(PostList);

export default connect(mapStateToProps , {fetchPostsAndUsers : fetchPostsAndUsers})(PostList);