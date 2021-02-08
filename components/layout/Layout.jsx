import Head from 'next/head';
import Header from './Header.jsx';
import Sidebar from './Sidebar.jsx';

const SIDEBAR_HORIZONTAL_CLASSES = 'lg:w-80 md:w-40 md:mr-8';
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
      <main className={'lg:my-12 my-6 flex-wrap ' + FULL_HORIZONTAL_CLASSES}>
        <nav
          className={
            'mb-8 border-b lg:border-0 border-gray-200 pb-4 w-full ' +
            SIDEBAR_HORIZONTAL_CLASSES
          }
        >
          <Sidebar />
        </nav>
        <div className="flex-1">{children}</div>
      </main>
    </div>
  );
};

export default Layout;
