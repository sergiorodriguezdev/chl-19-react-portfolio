import Header from './components/Header';
import Nav from './components/Nav';
import Page from './components/Page'
import Footer from './components/Footer';

function App() {
  return (
    <div>
      {/* Header */}
      <Header>
      </Header>
      <Nav>

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
