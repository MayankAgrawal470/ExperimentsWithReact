import React from 'react';
import { connect } from 'react-redux';
import { fetchUser } from '../actions';

class UserHeader extends React.Component {
    componentDidMount(){
        this.props.fetchUser(this.props.userId);
    }


    render() {
        // re-written this logic to mapStateToProps.
        // const user = this.props.users.find((user) => user.id === this.props.userId);

        const {user} = this.props;
        if(!user){
            return null;
        }

        return (
        <div className = 'header'>
            {user.name}
        </div>
        );
    }
}

// props whci are passed to this component is accessed through ownProps inside mapsStateToProps function.
const mapStateToProps = (state, ownProps) => {
    return {
        // users: state.users
        user : state.users.find((user) => user.id === ownProps.userId)
    };
}

export default connect(mapStateToProps, {fetchUser: fetchUser})(UserHeader);