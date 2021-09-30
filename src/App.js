import './App.css';
import { useEffect } from 'react';
import Feed from './components/Feed';
import Main from './components/Main';
import Menu from './components/Menu';
import { connect } from 'react-redux';
import { fetchTweets, postTweet, fetchFeed } from './redux/actions/actions';

const mapStateToProps = (state) => ({
  tweets: state.tweet,
  feeds: state.feeds
})

const mapDispatchToProps = (dispatch) => ({
  fetchTweets: () => dispatch(fetchTweets()),
  postTweet: (content) => dispatch(postTweet(content)),
  fetchFeed: () => dispatch(fetchFeed())
})

const App = (props) => {

  useEffect(() => {
    props.fetchTweets();
    props.fetchFeed();
  }, [])

  return (

    <div className="flex justify-center w-100 gap-4 mx-auto ">
      <Menu />
      <Main
        tweets={props.tweets}
        postTweet={props.postTweet}
        fetchTweets={props.fetchTweets}
      />
      <Feed
        feeds={props.feeds}
      />
    </div>

  );
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
