import { Header } from './components/Header.jsx';
import { Opinions } from './components/Opinions.jsx';
import { NewOpinion } from './components/NewOpinion.jsx';
import { OpinionsContextProvider } from './store/opinions-context.jsx';

function App() {
  return (
    <>
      <Header />
      <main>
        <OpinionsContextProvider>
          <NewOpinion />
          <Opinions />
        </OpinionsContextProvider>
      </main>
    </>
  );
}

export default App;
