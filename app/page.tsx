import StoreProvider from './lib/store/StoreProvider';
import AddListButton from './ui/buttons/add-list';
import {SettingsIcon} from './ui/icons';
import ListsNav from './ui/lists-nav';
import NavBar from './ui/navbar';

export default function Home() {
  return (
    <main className="mx-auto h-screen flex flex-col">
      <NavBar
        start={
          <button className="btn btn-ghost btn-circle">
            <SettingsIcon />
          </button>
        }
        center={"I'll Think of it Later"}
        end={
          <StoreProvider>
            <AddListButton />
          </StoreProvider>
        }
      />
      <div className="container mx-auto grow flex flex-col bg-base-200 overflow-auto no-scrollbar">
        <StoreProvider>
          <ListsNav />
        </StoreProvider>
      </div>
    </main>
  );
}
