import React from 'react';
import { ArrowLongLeftIcon } from '@heroicons/react/24/outline';

interface SideArrowProps {
  answerText: string;
  children?: React.ReactNode;
}

export default function SideArrow({ answerText, children }: SideArrowProps) {
  return (
    <button className="flex flex-col gap-4 justify-center w-min items-center">
      <p className="text-xl font-semibold">{answerText}</p>
      {children && <div className="icon-container">{children}</div>}
    </button>
  );
}
