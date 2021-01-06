import Link from 'next/link';

const PartSeparator = ({ url }) => (
  <span className="text-gray-400 text-sm"> / </span>
);

const PartSegment = ({ url, children }) => (
  <span className="text-gray-500 hover:text-blue-300 inline-block rounded">
    {url ? (
      <Link href={url} passHref>
        <a>{children}</a>
      </Link>
    ) : (
      children
    )}
  </span>
);

const Breadcrumbs = ({ parts }) => {
  return (
    <div className="mb-6">
      {parts.length > 0 ? (
        <PartSegment url={parts[0].url}>{parts[0].name}</PartSegment>
      ) : (
        ''
      )}
      {parts.slice(1).map((part) => [
          <PartSeparator />,
          <PartSegment url={part.url}>{part.name}</PartSegment>
      ])}
    </div>
  );
};

export default Breadcrumbs;
