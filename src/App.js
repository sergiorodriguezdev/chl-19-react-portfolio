import React, { useState, useEffect } from "react";
import Header from "./components/Header";
import Nav from "./components/Nav";
import Page from "./components/Page";
import Footer from "./components/Footer";

function App() {
  // List of page name values
  const pages = ["aboutme", "portfolio", "contact", "resume"];
  // Declare a state variable to track the current page that is displayed.
  //  Its default value is 'aboutme'
  const [currentPage, setCurrentPage] = useState(pages[0]);
  
  // Set initial page title on load, the page title is updated dynamically elsewhere
  useEffect(() => {
    document.title = `Sergio Rodriguez - About Me`;
  }, []);

  return (
    <div>
      {/* Header */}
      <Header />

      {/* Navbar - pass the state variable 'currentPage' and its setter function as props */}
      <Nav currentPage={currentPage} setCurrentPage={setCurrentPage} />
      
      {/* Main content section */}
      <main className="container">
        {/* Page component - pass the state variable 'currentPage' as a prop */}
        <Page currentPage={currentPage} />
      </main>
      
      {/* Footer */}
      <Footer />
    </div>
  );
}

export default App;
