import StoreProvider from './lib/store/StoreProvider';
import AddListButton from './ui/add-list-button';
import {SettingsIcon} from './ui/icons';
import ListsNav from './ui/lists-nav';

export default function Home() {
  return (
    <main className="mx-auto h-screen flex flex-col bg-gray-500">
      <div className="flex flex-col mx-auto h-full aspect-[9/16]">
        <div className="container mx-auto h-fit">
          <div className="navbar bg-base-100">
            <div className="navbar-start">
              <button className="btn btn-ghost btn-circle">
                <SettingsIcon />
              </button>
            </div>
            <div className="navbar-center normal-case text-xl">
              {"I'll Think of it Later"}
            </div>
            <div className="navbar-end">
              <StoreProvider>
                <AddListButton />
              </StoreProvider>
            </div>
          </div>
        </div>
        <div className="container mx-auto grow flex flex-col bg-base-200 overflow-auto no-scrollbar">
          <StoreProvider>
            <ListsNav />
          </StoreProvider>
        </div>
      </div>
    </main>
  );
}
