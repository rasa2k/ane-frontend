import { BrowserRouter } from 'react-router-dom';
import PageBody from '../PageBody/PageBody';
import PageHeader from '../PageHeader/PageHeader';

function App() {
  return (
    <>
      <BrowserRouter basename={process.env.PUBLIC_URL}>
        <PageHeader appName="AnE-Frontend" />
        <PageBody />
      </BrowserRouter>
    </>
  );
}

export default App;
