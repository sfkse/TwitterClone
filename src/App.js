import './App.css';
import { useEffect } from 'react';
import Feed from './components/Feed';
import Main from './components/Main';
import Menu from './components/Menu';
import { connect } from 'react-redux';
import { fetchTweets, postTweet, fetchFeed, fetchFollow, addInteraction } from './redux/actions/actions';

const mapStateToProps = (state) => ({
  tweets: state.tweet,
  feeds: state.feeds,
  follow: state.follow
})

const mapDispatchToProps = (dispatch) => ({
  fetchTweets: () => dispatch(fetchTweets()),
  postTweet: (content) => dispatch(postTweet(content)),
  addInteraction: (interaction, type, id) => dispatch(addInteraction(interaction, type, id)),
  fetchFeed: () => dispatch(fetchFeed()),
  fetchFollow: () => dispatch(fetchFollow())
})

const App = (props) => {

  useEffect(() => {
    props.fetchTweets();
    props.fetchFeed();
    props.fetchFollow()
  }, [])

  return (

    <div className="flex  justify-center lg:w-100 gap-4 mx-auto">
      <Menu />
      <Main
        tweets={props.tweets}
        addInteraction={props.addInteraction}
        postTweet={props.postTweet}
      />
      <Feed
        feeds={props.feeds}
        follow={props.follow}
      />
    </div>

  );
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
