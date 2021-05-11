import React from 'react';
import ReactDOM from 'react-dom';
import $ from 'jquery';
import Button from '@material-ui/core/Button';


class UserGithub extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            username: '',
            id: '',
            avatarUrl: '',
            githubtUrl: '',
            location: '',
            bio: '',
            blog: '',
        }
    }
    componentDidMount() {
        $.get(this.props.source, (result) => {
            console.log(result);
            const data = result;
            if (data) {
                this.setState({
                    username: data.name,
                    id: data.login,
                    githubtUrl: data.html_url,
                    avatarUrl: data.avatar_url,
                    location: data.location,
                    bio: data.bio,
                    blog: data.blog
                });
            }
        });
    }
    
    render() {
        return (
            <div>
                <img width="20%" height="20%" src={this.state.avatarUrl}/>
                <h3>Name :{this.state.username}</h3>
                <p>ID: {this.state.id}</p>
                <p>Location: {this.state.location}</p>
                <p>Bio: {this.state.bio}</p>
                <p>Blog: {this.state.blog}</p>
                <a href={this.state.githubtUrl}>Github Link</a>
            </div>
        );
    }
}
export default UserGithub;
// ReactDOM.render(
//     <UserGithub source="https://api.github.com/users/cjwu"/>,
//     document.getElementById('root')
//     );