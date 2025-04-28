import { HomeSreen } from './screens/HomeSreen';
import { Layout } from './layout/Layout';
import { Providers } from './providers/Providers';

function App() {
  return (
    <div className="App">
      <Providers>
        <Layout>
          <HomeSreen/>
        </Layout>
      </Providers>
    </div>
  );
}

export default App;
