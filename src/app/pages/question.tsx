import Card from '../component/card';
import {
  ArrowLongLeftIcon,
  ArrowLongRightIcon,
  ExclamationTriangleIcon,
} from '@heroicons/react/24/outline';
import SideArrow from '../component/sideArrow';

const answerLeft = '1.2°C';
const answerRight = '4.2°C';
const combo = 2;

export default function Question() {
  return (
    <div className="h-screen bg-linear flex flex-col items-center gap-20 pt-20">
      <div className="flex flex-row gap-4 items-center">
        <ExclamationTriangleIcon className="w-[20px] h-[20px]" />
        <p className="text-black text-xl font-">
          Une de ces réponses a été générée par une IA
        </p>
        <ExclamationTriangleIcon className="w-[20px] h-[20px]" />
      </div>
      <div className="flex flex-row justify-evenly px-8 w-full">
        <SideArrow answerText={answerLeft}>
          <ArrowLongLeftIcon className="w-[64px] h-[64px]" />
        </SideArrow>
        <Card />
        <SideArrow answerText={answerRight}>
          <ArrowLongRightIcon className="w-[64px] h-[64px]" />
        </SideArrow>
      </div>
      <p className="text-black text-xl font-bold">COMBO x{combo}</p>
    </div>
  );
}
