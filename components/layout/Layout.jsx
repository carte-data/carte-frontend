import Header from './Header.jsx';
import Sidebar from './Sidebar.jsx';

const Layout = ({ children }) => {
  return (
    <div className="w-full mx-auto">
      <Header />
      <main>
        <div className="my-12 sm:px-6 mx-auto px-12 sm:px-6 lg:px-32 flex flex-row w-full flex-wrap">
          <nav className="lg:w-80 w-1/3 md:w-50 mb-8 border-b md:border-0 border-gray-200 pb-4 w-full">
            <Sidebar />
          </nav>
          <div className="flex-grow">{children}</div>
        </div>
      </main>
    </div>
  );
};

export default Layout;
