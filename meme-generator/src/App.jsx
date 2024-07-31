import "./css/null.css";
import "./css/App.css";

import Header from "./components/Header";
import Form from "./components/Form";

function App() {
  return (
    <>
      <Header />
      <main className="main">
        <div className="main__container">
          <Form />
        </div>
      </main>
    </>
  );
}

export default App;
