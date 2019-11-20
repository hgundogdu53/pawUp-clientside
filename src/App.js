import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import MainNav from './components/MainNav/MainNav';
import LandingPage from './components/LandingPage/LandingPage';
import PostsHomePage from './components/PostsHomePage/PostsHomePage';
import Post from './components/Post/Post'
import AddPostNav from './components/AddPostNav/AddPostNav';
import config from './config';
import ApiContext from './ApiContext';
import MyPosts from './components/MyPosts/MyPosts';
import LoginForm from './components/LoginForm/LoginForm';
import TokenService from './services/token-service';
import UpdatePost from './components/UpdatePost/UpdatePost';
import Profile from './components/Profile/Profile';
import UpdateUser from './components/UpdateUser/UpdateUser';
import AuthApiService from './services/auth-api-service';
import SignUpForm from './components/SignUpForm/SignUpForm';
import HamburgerNav from './components/HamburgerNav/HamburgerNav';
import './App.css';

class App extends Component {
  state = {
    posts: [],
    post_id: null,
    logged_in: false,
    logInError: null,
    signUpError: null,
  }


  componentDidMount() {
    const options = {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json'
      }
    };
    fetch(`${config.API_ENDPOINT}/posts`, options)
      .then(res => {
        if (res.ok) {
          return res.json();
        }
        else {
          throw new Error('Something went wrong.');
        }
      })
      .then(postInput => {
        this.setState({ posts: postInput })
      })
      .catch(error => {
        console.error({ error })
      })
    if (this.state.logged_in) {
      this.getUser();
    }
  }

  getMyPosts() {
    const options = {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${TokenService.getAuthToken()}`
      }
    }
    fetch(`${config.API_ENDPOINT}/posts/myPosts`, options)
      .then(res => {
        if (res.ok) {
          return res.json();
        }
        else {
          throw new Error('Something went wrong');
        }
      })
      .then(postInput => {
        this.setState({ myPosts: postInput })
      })
      .catch(err => {
        console.error({ err })
      })
  }

  handleSubmit = (event) => {
    event.preventDefault();
    const post = {
      pet_name: event.target.pet_name.value,
      age: event.target.age.value,
      types_of_pet: event.target.types_of_pet.value,
      hobbies: event.target.hobbies.value
    }

    fetch(`${config.API_ENDPOINT}/posts`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `bearer ${TokenService.getAuthToken()}`
      },
      body: JSON.stringify(post),
    })
      .then((res) => {
        if (!res.ok)
          return res.json().then(e => Promise.reject(e))
        return res.json()
      })
      .then(post => {
        this.addPost(post);
        const form = document.getElementById('post-form')
        form.reset();
        window.location.href = 'posts'
      })
      .catch(err => {
        console.error({ err })
      })
  }

  handleDeletePost = post_id => {
    fetch(`${config.API_ENDPOINT}/posts/${post_id}`, {
      method: 'DELETE',
      headers: {
        'Authorization': `bearer ${TokenService.getAuthToken()}`
      }
    })
      .then(res => {
        if (!res.ok)
          return res.json().then(e => Promise.reject(e))
        return res.json()
      })
      .then(() => {
        this.setState({
          posts: this.state.posts.filter(post => post.id !== post_id)
        })
      })
      .catch(err => {
        console.error({ err })
      })
  }

  handleDeleteUser = user_id => {
    fetch(`${config.API_ENDPOINT}/users/user`, {
      method: 'DELETE',
      headers: {
        'Authorization': `bearer ${TokenService.getAuthToken()}`
      }
    })
      .then(res => {
        if (!res.ok)
          return res.json().then(e => Promise.reject(e))
        return res.json()
      })
      .then(() => {
        this.setState({ posts: this.state.posts.filter(post => post.id !== user_id) })
        TokenService.clearAuthToken()
        window.location.href = '/posts'
      })
  }

  loginUser = e => {
    e.preventDefault();
    const { login_email, login_password } = e.target

    AuthApiService.postLogin({
      email: login_email.value,
      password: login_password.value
    })
      .then(res => {
        login_email.value = ''
        login_password.value = ''
        TokenService.saveAuthToken(res.authToken);
        this.setState({ logged_in: true });
        window.location.href = '/posts'
      })
      .catch(err => {
        this.setState({ logInError: err })
      })
  }

  handleUpdate = (post_id, e) => {
    e.preventDefault();

    const updatedPost = {
      pet_name: e.target.pet_name.value,
      types_of_pet: e.target.types_of_pet.value,
      email: e.target.email.value,
      hobbies: e.target.hobbies.value
    }

    fetch(`${config.API_ENDPOINT}/posts/${post_id}`, {
      method: 'PATCH',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `bearer ${TokenService.getAuthToken()}`
      },
      body: JSON.stringify(updatedPost)
    })
      .then(res => {
        if (res.ok) {
          window.location.href = '/myPosts'
        }
        else {
          return res.json().then(err => {
            throw err;
          })
        }
      });
  }

  handleLogout = () => {
    TokenService.clearAuthToken()
  }

  addPost = (post) => {
    this.setState({
      posts: [...this.state.posts, post]
    })
  }

  setPostId = post_id => {
    this.setState({ post_id })
  }

  /*
    renderNavRoutes() {
      return (
        <>
          <Route
            exact
            path="/"
            component={MainNav}
          />
          <Route
            path="/posts"
            component={HamburgerNav}
          />
          <Route
            path="/myposts"
            component={HamburgerNav}
          />
          <Route
            path="/edit"
            component={HamburgerNav}
          />
          <Route
            path="/login"
            component={HamburgerNav}
          />
          <Route
            path="/profile"
            component={HamburgerNav}
          />
          <Route
            path="/editProfile"
            component={HamburgerNav}
          />
          <Route
            path="/signup"
            component={HamburgerNav}
          />
          <Route
            path="/addPost"
            component={AddPostNav}
          />
        </>
      )
    }
  
    renderMainRoutes() {
      return (
        <>
          <Route
            exact
            path="/"
            component={LandingPage}
          />
          <Route
            path="/posts"
            component={PostsHomePage}
          />
          <Route
            path="/myposts"
            component={MyPosts}
          />
          <Route
            path="/edit"
            component={UpdatePost}
          />
          <Route
            path="/login"
            component={LoginForm}
          />
          <Route
            path="/profile"
            component={Profile}
          />
          <Route
            path="/editProfile"
            component={UpdateUser}
          />
          <Route
            path="/addPost"
            component={Post}
          />
          <Route
            path='/signup'
            component={SignUpForm}
          />
        </>
      )
    }
    render() {
      const value = {
        posts: this.state.posts,
        addPost: this.handleSubmit,
        deletePost: this.handleDeletePost,
        logOut: this.handleLogout,
  
      }
  
      return (
        <ApiContext.Provider value={value}>
          <div className='App'>
            <nav className='App_nav'>
              {this.renderNavRoutes()}
            </nav>
            <header className='App_header'>
              <h1>
                <Link to='/'>PawUp</Link>
                {' '}
              </h1>
            </header>
            <main className='App_main'>
              {this.renderMainRoutes()}
            </main>
          </div>
        </ApiContext.Provider>
      )
    }
  }
  
  export default App
  */
  render() {
    const value = {
      posts: this.state.posts,
    }

    return (
      <div className="App" >
        <header className="header">
          <Route exact path="/" render={(props) => <MainNav {...props} handleLogout={this.handleLogout} logged_in={this.state.logged_in} />} />
          <Route path="/posts" render={(props) => <HamburgerNav {...props} handleLogout={this.handleLogout} />} />
          <Route path="/myPosts" render={(props) => <HamburgerNav {...props} handleLogout={this.handleLogout} />} />
          <Route path="/edit" render={(props) => <HamburgerNav {...props} handleLogout={this.handleLogout} />} />
          <Route path="/login" render={(props) => <HamburgerNav {...props} handleLogout={this.handleLogout} />} />
          <Route path="/profile" render={(props) => <HamburgerNav {...props} handleLogout={this.handleLogout} />} />
          <Route path="/editProfile" render={(props) => <HamburgerNav {...props} handleLogout={this.handleLogout} />} />
          <Route path="/signup" render={(props) => <HamburgerNav {...props} handleLogout={this.handleLogout} />} />
          <Route path="/addPost" render={(props) => <AddPostNav {...props} handleLogout={this.handleLogout} />} />
        </header>
        <div className='App_main'>
          <ApiContext.Provider value={value}>
            <Route exact path="/" render={(props) => <LandingPage {...props} posts={this.state.posts} addUser={event => this.handleUserSubmit(event)} signUpError={this.state.signUpError} />} />
            <Route exact path='/myPosts' render={(props) => <MyPosts {...props} setId={(post_id) => this.setPostId(post_id)} handleDeletePost={post_id => this.handleDeletePost(post_id)} />} />
            <Route exact path='/edit' render={(props) => <UpdatePost {...props} posts={this.state.posts} postId={this.state.post_id} updatePost={(e) => this.handleUpdate(this.state.post_id, e)} />} />
            <Route exact path='/login' render={(props) => <LoginForm {...props} loginUser={(event) => (this.loginUser(event))} error={this.state.logInError} />} />
            <Route exact path='/editProfile' component={UpdateUser} />
            <Route exact path='/posts' render={(props) => <PostsHomePage {...props} posts={this.state.posts} />} />
            <Route exact path='/addPost' render={(props) => <Post {...props} addPost={(event) => this.handleSubmit(event)} />} />
            <Route exact path='/profile' render={(props) => <Profile {...props} deleteUser={(user_id) => this.handleDeleteUser(user_id)} />} />
            <Route exact path='/signup' component={SignUpForm} />
          </ApiContext.Provider>
        </div>
      </div>
    );
  }

}
export default App;


