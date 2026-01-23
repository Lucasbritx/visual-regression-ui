import { Header } from './components/Header';
import { Footer } from './components/Footer';
import { ComponentShowcase } from './components/ComponentShowcase';
import { ValidationForm } from './components/ValidationForm';

function App() {
  return (
    <div className="min-h-screen flex flex-col" data-testid="app">
      <Header />
      
      <main 
        className="flex-1 w-full px-4 sm:px-6 lg:px-8 py-8"
        data-testid="main-content"
      >
        <div className="max-w-7xl mx-auto space-y-12">
          <ComponentShowcase />
          
          <div className="border-t border-[var(--border-color)] pt-8">
            <ValidationForm />
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}

export default App;
