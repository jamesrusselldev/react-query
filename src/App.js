import "./App.css";
import { ReactQueryDevtools } from 'react-query/devtools';
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import { QueryClient, QueryClientProvider } from "react-query";
import SuperheroesPage from "./components/Superheroes.page";
import RQSuperheroesPage from "./components/RQSuperheroes.page";
import HomePage from "./components/Home.page";
import { RQSuperheroPage } from './components/RQSuperhero.page';
import ParallelQueriesPage from "./components/ParallelQueries.page";

function App() {
  const queryClient = new QueryClient();
  return (
    <div className="App">
      <QueryClientProvider client={queryClient}>
        <Router>
          <div>
            <nav>
              <ul>
                <li>
                  <Link to="/">Home</Link>
                </li>
                <li>
                  <Link to="/super-heroes">Traditional Superheroes</Link>
                </li>
                <li>
                  <Link to="/rq-super-heroes">RQ Super Heroes</Link>
                </li>
                <li>
                  <Link to="/rq-parallel">RQ Parallel Queries</Link>
                </li>
              </ul>
            </nav>
            <Routes>
              <Route path="/rq-super-heroes/:heroID" element={<RQSuperheroPage />} />
              <Route path="/rq-parallel" element={<ParallelQueriesPage/>}/>
              <Route path="/super-heroes" element={<SuperheroesPage />} />
              <Route path="/rq-super-heroes" element={<RQSuperheroesPage />} />
              <Route path="/" element={<HomePage />} />
            </Routes>
          </div>
        </Router>
        <ReactQueryDevtools initialIsOpen={false} position='bottom-right'/>
      </QueryClientProvider>
    </div>
  );
}

export default App;
