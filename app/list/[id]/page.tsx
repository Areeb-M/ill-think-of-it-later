import StoreProvider from '@/app/lib/store/StoreProvider';
import {ListView} from './ListView';

export default function Page({params}: {params: {id: string}}) {
  return (
    <main className="mx-auto h-screen flex flex-col">
      <StoreProvider>
        <ListView id={params.id} />
      </StoreProvider>
    </main>
  );
}
