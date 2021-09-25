import './App.css';
import { useEffect } from 'react';
import Feed from './components/Feed';
import Main from './components/Main';
import Menu from './components/Menu';
import { connect } from 'react-redux';
import { listTweet, postTWeet } from './redux/actions/actions';

const mapStateToProps = (state) => ({
  tweets: state.tweet
})

const mapDispatchToProps = (dispatch) => ({
  listTweet: () => dispatch(listTweet()),
  postTweet: (author, username, content) => dispatch(postTWeet())
})

const App = (props) => {

  useEffect(() => {
    props.listTweet()
  }, [])

  return (

    <div className="flex container max-w-6xl mx-auto ">
      <Menu />
      <Main tweets={props.tweets} listTweet={props.listTweet} />
      <Feed />
    </div>

  );
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
