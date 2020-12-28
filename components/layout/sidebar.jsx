import Link from 'next/link';

const SidebarSection = ({ heading, items }) => {
  return (
    <div className="sidebar-section w-full">
      <h3>{heading}</h3>
      <div>
        {Object.keys(items).map((database) => (
          <span class="block">
            <Link href={items[database].url}>
              <a>{items[database].name}</a>
            </Link>
          </span>
        ))}
      </div>
    </div>
  );
};

const Sidebar = ({ structure }) => {
  return (
    <div>
      {Object.keys(structure).map((connection) => (
        <SidebarSection
          heading={structure[connection].name}
          items={structure[connection].databases}
          key={structure[connection].name}
        />
      ))}
    </div>
  );
};

export default Sidebar;
