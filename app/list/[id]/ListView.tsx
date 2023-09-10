'use client';
import {useAppSelector} from '@/app/lib/hooks/hooks';
import NavBar from '@/app/ui/navbar';
import ReturnButton from '@/app/ui/buttons/return';
import {useRouter} from 'next/navigation';
import {useEffect} from 'react';

export function ListView({id}: {id: string}) {
  const state = useAppSelector(state => state.lists);
  const lists = state.lists;
  const list = lists.getById(id);

  if (!list) {
    const router = useRouter();
    useEffect(() => {
      router.back();
    }, []);
    return <div></div>;
  }

  return (
    <div className="container mx-auto h-fit">
      <NavBar start={<ReturnButton />} center={list.name} />
    </div>
  );
}
