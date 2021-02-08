import Head from 'next/head';
import Header from './Header.jsx';
import Sidebar from './Sidebar.jsx';

const SIDEBAR_HORIZONTAL_CLASSES = 'lg:w-80 w-full md:w-50';
const FULL_HORIZONTAL_CLASSES = 'mx-auto px-6 lg:px-32 flex flex-row w-full';

const Layout = ({ children, title }) => {
  return (
    <div className="w-full mx-auto">
      <Head>
        <title>{title ? title + ' | Carte' : 'Carte'}</title>
      </Head>
      <Header
        horizontalClassName={FULL_HORIZONTAL_CLASSES}
        sidebarClassName={SIDEBAR_HORIZONTAL_CLASSES}
      />
      <main className={'my-12 flex-wrap ' + FULL_HORIZONTAL_CLASSES}>
        <nav
          className={
            'mb-8 border-b lg:border-0 border-gray-200 pb-4 ' +
            SIDEBAR_HORIZONTAL_CLASSES
          }
        >
          <Sidebar />
        </nav>
        <div className="flex-grow">{children}</div>
      </main>
    </div>
  );
};

export default Layout;
