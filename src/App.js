import Header from './components/Header';
import Nav from './components/Nav';
import Page from './components/Page'
import Footer from './components/Footer';

function App() {

  const pages = ['aboutme', 'portfolio', 'contact', 'resume'];

  return (
    <div>
      {/* Header */}
      <Header>
      </Header>
      <Nav currentPage={pages[0]}>

      </Nav>
      {/* Content */}
      <main className='container'>
        <Page></Page>
      </main>

      <Footer />
    </div>
  );
}

export default App;
