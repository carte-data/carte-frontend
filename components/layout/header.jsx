import Link from 'next/link';
import SearchBox from './searchbox.jsx';
import { useRouter } from 'next/router';

const NavLink = ({ text, url, active }) => {
  return (
    <Link href={url}>
      <a
        className={
          'text-gray-800 hover:text-blue-400 transition-colors mx-3 py-2 rounded-md font-medium duration-75' +
          (active ? ' grad-underline' : '')
        }
      >
        {text}
      </a>
    </Link>
  );
};

const Header = () => {
  const links = [
    { text: 'Home', url: '/', isActive: (pathname) => pathname == '/' },
    {
      text: 'Datasets',
      url: '/dataset',
      isActive: (pathname) => pathname.startsWith('/dataset'),
    },
  ];

  const router = useRouter();

  return (
    <header className="h-20 mx-auto px-12 sm:px-6 lg:px-32 flex flex-row">
      <nav className="flex flex-row w-full">
        <div className="logo flex-none align-self-center w-60 flex items-center">
          <Link href="/">
            <a className="">
              <img
                src="/img/ligature.svg"
                className="w-auto h-12"
                alt="Carte logo"
              />
            </a>
          </Link>
        </div>
        <nav className="py-6 flex items-center flex-row justify-end flex-grow border-b border-gray-300">
          <SearchBox className="flex-grow" />
          {links.map((link) => (
            <NavLink
              text={link.text}
              url={link.url}
              key={link.text}
              active={link.isActive(router.pathname)}
            />
          ))}
        </nav>
      </nav>
    </header>
  );
};

export default Header;
