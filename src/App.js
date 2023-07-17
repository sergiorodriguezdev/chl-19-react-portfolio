import React, {useState} from "react";
import Header from './components/Header';
import Nav from './components/Nav';
import Page from './components/Page'
import Footer from './components/Footer';

function App() {

  const pages = ['aboutme', 'portfolio', 'contact', 'resume'];
  const [currentPage, setCurrentPage] = useState(pages[0]);

  return (
    <div>
      {/* Header */}
      <Header>
      </Header>
      <Nav currentPage={currentPage} setCurrentPage={setCurrentPage}>

      </Nav>
      {/* Content */}
      <main className='container'>
        <Page currentPage={currentPage}></Page>
      </main>

      <Footer />
    </div>
  );
}

export default App;
