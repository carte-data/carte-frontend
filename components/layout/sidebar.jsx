import { useContext } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { StructureContext } from '../../lib/structure-context';

const SIDEBAR_HIGHLIGHT_COLOUR = 'text-green-500';

const SidebarSublink = ({ label, url }) => {
  const router = useRouter();
  const isActive = url === router.asPath;
  return (
    <div className="mb-0.5">
      <Link href={url}>
        <a
          className={
            'hover:text-blue-400 font-light ' +
            (isActive ? SIDEBAR_HIGHLIGHT_COLOUR : 'text-gray-600')
          }
        >
          {label}
        </a>
      </Link>
    </div>
  );
};

const SidebarSection = ({ heading, items, key, expandCurrent }) => {
  return (
    <div className="sidebar-section w-full" key={key}>
      <h3 className="font-medium text-xl my-2 text-gray-800">{heading}</h3>
      <div className="items-level-2 pl-4">
        {Object.values(items).map((item) => (
          <div key={item.name}>
            <Link href={item.url}>
              <a
                className={
                  'hover:text-blue-400 text-lg ' +
                  (item.expanded ? SIDEBAR_HIGHLIGHT_COLOUR : 'text-gray-700')
                }
              >
                {item.name}
              </a>
            </Link>
            {item.expanded && expandCurrent ? (
              <div className="sublinks pl-4 mt-2 mb-4 border-l border-gray-200">
                {Object.values(item.items).map((subItem) => (
                  <SidebarSublink
                    label={subItem.name}
                    url={subItem.url}
                  />
                ))}
              </div>
            ) : (
              ''
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

SidebarSection.defaultProps = {
  expandCurrent: false
}

const Sidebar = () => {
  const structure = useContext(StructureContext);

  return (
    <div className="fadeout-right items-level-1">
      {Object.values(structure).map((item) => (
        <SidebarSection
          heading={item.name}
          items={item.items}
          key={item.name}
        />
      ))}
    </div>
  );
};

export default Sidebar;
