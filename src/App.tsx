import './App.css';
import VideoList from './component/ui/Video/VideoList';
import Header from './component/ui/header/Header';
import Sidebar from './component/ui/sidebar/Sidebar';

function App() {
  return (
    <div className="app">
      <Header />
      <div className='main-content'>
        <Sidebar />
        <VideoList />
      </div>
    </div>
  );
}

export default App;
