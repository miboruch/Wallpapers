import React, { useEffect } from 'react';
import './App.css';
import { connect } from 'react-redux';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { ThunkDispatch } from 'redux-thunk';
import { bindActionCreators } from 'redux';
import Layout from './components/Layout';
import LandingPage from './pages/LandingPage';
import CurrentSlideContextProvider from './providers/CurrentSlideContext';
import { AppActions } from './types/actionTypes';
import { fetchCategoryImages } from './actions/categoryImagesAction';
import PhotosPage from './pages/PhotosPage';
import SearchContextProvider from './providers/SearchContext';
import PhotoPage from './pages/PhotoPage';
import { fetchSavedSuccess, loadLikedImages } from './actions/savedImagesAction';
import SavedImagesTemplate from './components/templates/SavedImagesTemplate/SavedImagesTemplate';

const App: React.FC<LinkDispatchProps> = ({ fetchCategory, fetchSavedSuccess }) => {
  if (!localStorage.getItem('liked')) {
    localStorage.setItem('liked', JSON.stringify([]));
  }

  useEffect(() => {
    fetchCategory();
  }, []);

  useEffect(() => {
    fetchSavedSuccess(loadLikedImages());
  }, []);

  return (
    <CurrentSlideContextProvider>
      <SearchContextProvider>
        <Layout>
          <Router>
            <SavedImagesTemplate>
              <Switch>
                <Route path='/' exact component={LandingPage} />
                <Route path='/photos-page/:query' exact component={PhotosPage} />
                <Route path='/photo-page/:id' exact component={PhotoPage} />
              </Switch>
            </SavedImagesTemplate>
          </Router>
        </Layout>
      </SearchContextProvider>
    </CurrentSlideContextProvider>
  );
};

interface LinkDispatchProps {
  fetchCategory: () => void;
  fetchSavedSuccess: (values: any[]) => void;
}

const mapDispatchToProps = (dispatch: ThunkDispatch<any, any, AppActions>): LinkDispatchProps => {
  return {
    fetchCategory: bindActionCreators(fetchCategoryImages, dispatch),
    fetchSavedSuccess: bindActionCreators(fetchSavedSuccess, dispatch)
  };
};

export default connect(null, mapDispatchToProps)(App);
