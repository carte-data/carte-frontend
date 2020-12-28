import Header from './header.jsx';
import Sidebar from './sidebar.jsx';

const PageLayout = ({ children, sidebarStructure }) => {
  return (
    <div className="w-full mx-auto">
      <Header />
      <main>
        <div className="my-12 sm:px-6 mx-auto px-12 sm:px-6 lg:px-32 flex flex-row">
          <nav class="lg:w-60 w-full">
            <Sidebar structure={sidebarStructure} />
          </nav>
          <div class="flex-grow">
            {children}
          </div>
        </div>
        <div className=""/>
      </main>
    </div>
  );
};

export default PageLayout;
