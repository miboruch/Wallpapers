import React, { useEffect } from 'react';
import './App.css';
import { connect } from 'react-redux';
import Layout from './components/Layout';
import LandingPage from './pages/LandingPage';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import CurrentSlideContextProvider from './providers/CurrentSlideContext';
import { ThunkDispatch } from 'redux-thunk';
import { AppActions } from './types/actionTypes';
import { bindActionCreators } from 'redux';
import { fetchCategoryImages } from './actions/categoryImagesAction';
import PhotosPage from './pages/PhotosPage';

const App: React.FC<LinkDispatchProps> = ({ fetchCategory }) => {
  useEffect(() => {
    fetchCategory();
  }, []);

  return (
    <CurrentSlideContextProvider>
      <Layout>
        <Router>
          <Switch>
            <Route path='/' exact component={LandingPage} />
            <Route path='/photos-page/:query' exact component={PhotosPage} />
          </Switch>
        </Router>
      </Layout>
    </CurrentSlideContextProvider>
  );
};

interface LinkDispatchProps {
  fetchCategory: () => void;
}

const mapDispatchToProps = (dispatch: ThunkDispatch<any, any, AppActions>): LinkDispatchProps => {
  return {
    fetchCategory: bindActionCreators(fetchCategoryImages, dispatch)
  };
};

export default connect(null, mapDispatchToProps)(App);
