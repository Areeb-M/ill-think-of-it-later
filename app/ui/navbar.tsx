import {ReactNode} from 'react';

export default function NavBar({
  start,
  center,
  end,
}: {
  start?: ReactNode;
  center?: ReactNode;
  end?: ReactNode;
}): ReactNode {
  return (
    <div className="container mx-auto h-fit">
      <div className="navbar bg-base-100">
        <div className="navbar-start">{start}</div>
        <div className="navbar-center normal-case text-xl">{center}</div>
        <div className="navbar-end">{end}</div>
      </div>
    </div>
  );
}
