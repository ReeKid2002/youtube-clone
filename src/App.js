import './App.css';
import Header from './components/Header/Header';
import SideBar from './components/SideBar/SideBar';
import SearchPage from './components/SearchPage/SearchPage';
import RecommendedVideos from './components/RecommendedVideo/RecommendedVideos';
import {BrowserRouter ,Routes, Route} from 'react-router-dom';
function App() {
  return (
    <div className="app">
      <BrowserRouter>
        <Header/>
        <Routes>
          <Route path='/' element={
          <div> 
            <div className='app__page'>
              <SideBar />
              <RecommendedVideos />
            </div>
          </div>
          }/>
          <Route path='/search/:searchTerm' element={
          <div> 
            <div className='app__page'>
              <SideBar />
              <SearchPage/>
            </div>
          </div>
          } />
        </Routes>
      </BrowserRouter>
      {/* */}
    </div>
  );
}

export default App;
