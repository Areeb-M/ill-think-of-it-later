import {useRouter} from 'next/navigation';
import {ReturnIcon} from '../icons';

export default function ReturnButton() {
  const router = useRouter();
  return (
    <button className="btn btn-ghost btn-circle" onClick={() => router.back()}>
      <ReturnIcon />
    </button>
  );
}
