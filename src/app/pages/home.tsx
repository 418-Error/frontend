import {
  AcademicCapIcon,
  QuestionMarkCircleIcon,
} from '@heroicons/react/24/outline';
import { Link } from 'react-router-dom';

export default function Home() {
  return (
    <div className="h-screen bg-white flex flex-row items-center gap-20 p-20">
      <Link
        to={'/questions'}
        className="bg-dark-gray p-14 flex flex-col gap-8 justify-center items-center text-white rounded-xl"
      >
        <div className="flex flex-row items-center justify-center gap-[10px]">
          <AcademicCapIcon className="w-[64px] h-[64px]" />
          <p className="w-1/2">Teste ta culture écologique !</p>
        </div>
        <div className="text-center flex justify-center">
          <p className="w-1/3">
            Réalise ce test en quelques minutes et tente de gagner un badge
            exclusif !
          </p>
        </div>
      </Link>
      <Link
        className="bg-dark-gray p-14 flex flex-col gap-8 justify-center items-center text-white rounded-xl"
        to={'/home'}
      >
        <div className="flex flex-row items-center justify-center gap-[10px]">
          <QuestionMarkCircleIcon className="w-[64px] h-[64px]" />
          <p className="w-1/2">Des questions ? N’hésite pas !</p>
        </div>
        <div className="text-center flex justify-center">
          <p className="w-1/3">
            Tu peux poser des questions à notre IA, elle se fera un plaisir de
            te répondre !
          </p>
        </div>
      </Link>
    </div>
  );
}
