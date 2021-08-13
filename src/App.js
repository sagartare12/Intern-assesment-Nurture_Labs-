
import React from 'react'
import Navbar from './components/Navbar'
import Searchbox from './components/Searchbox'
import Sidebar from './components/Sidebar'
import Tracktable from './components/Tracktable'
function App() {
  return (
    <div className="App">
      <Sidebar />
      <div className="sub_main">
      <Navbar />
      <Searchbox />
      <Tracktable />
      </div>
    </div>
  );
}

export default App;
