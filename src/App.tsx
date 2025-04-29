import { HomeSreen } from './screens/HomeSreen';
import { Layout } from './layout/Layout';
import { Providers } from './providers/Providers';

function App() {
  return (
    <div className="bg-meadow-900 text-tapa-50">
      <Providers>
        <Layout>
          <HomeSreen/>
        </Layout>
      </Providers>
    </div>
  );
}

export default App;
