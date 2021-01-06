import Header from './header.jsx';
import Sidebar from './sidebar.jsx';

const PageLayout = ({ children }) => {
  return (
    <div className="w-full mx-auto">
      <Header />
      <main>
        <div className="my-12 sm:px-6 mx-auto px-12 sm:px-6 lg:px-32 flex flex-row">
          <nav className="lg:w-80 w-full">
            <Sidebar />
          </nav>
          <div className="flex-grow">{children}</div>
        </div>
      </main>
    </div>
  );
};

export default PageLayout;
