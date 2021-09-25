import './App.css';
import Feed from './components/Feed';
import Main from './components/Main';
import Menu from './components/Menu';
import { connect } from 'react-redux';
import { listTweet } from './redux/actions/actions';

const mapStateToProps = (state) => ({
  tweets: state.tweet
})

const mapDispatchToProps = (dispatch) => ({
  listTweet: () => dispatch(listTweet())
})

const App = (props) => {

  return (

    <div className="flex container max-w-6xl mx-auto ">
      <Menu />
      <Main tweets={props.tweets} listTweet={props.listTweet} />
      <Feed />
    </div>

  );
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
