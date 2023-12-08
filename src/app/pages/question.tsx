import Card from '../component/card';
import {
  ArrowLongLeftIcon,
  ArrowLongRightIcon,
  ExclamationTriangleIcon,
} from '@heroicons/react/24/outline';
import { DragDropContext, Droppable, Draggable } from 'react-beautiful-dnd';
import SideArrow from '../component/sideArrow';

const answerLeft = '1.2°C';
const answerRight = '4.2°C';
const combo = 2;

export default function Question() {
  const id = 1;

  const onDragEnd = ({destination, source}) => {
    console.log(destination);
  };
  return (
    <DragDropContext onDragEnd={onDragEnd}>
          <div
            className="h-screen bg-linear flex flex-col items-center gap-20 pt-20"
          >
            <div className="flex flex-row gap-4 items-center drag_container">
              <ExclamationTriangleIcon className="w-[20px] h-[20px]" />
              <p className="text-black text-xl font-">
                Une de ces réponses a été générée par une IA
              </p>
              <ExclamationTriangleIcon className="w-[20px] h-[20px]" />
            </div>
            <div className="flex flex-row justify-evenly px-8 w-full">
              <Droppable droppableId="left">
                {(provided) => (
                  <div
                    {...provided.droppableProps}
                    ref={provided.innerRef}
                  >
                    <SideArrow answerText={answerLeft}>
                      <ArrowLongLeftIcon className="w-[64px] h-[64px]" />
                    </SideArrow>
                  </div>
                )}
              </Droppable>
              <Droppable droppableId="card">
                {(provided) => (
                  <div
                    {...provided.droppableProps}
                    ref={provided.innerRef}
                  >
                    <Draggable
                      key="1"
                      draggableId={id.toString()}
                      index={id}
                    >
                      {(provided, snapshot) => (
                        <div
                          ref={provided.innerRef}
                          {...provided.draggableProps}
                          {...provided.dragHandleProps}
                        >
                          <Card/>
                          {provided.placeholder}
                        </div>
                      )}
                    </Draggable>
                    {provided.placeholder}
                  </div>
                )}
              </Droppable>
              <Droppable droppableId="right">
                {(provided) => (
                  <div
                    {...provided.droppableProps}
                    ref={provided.innerRef}
                  >
                    <SideArrow answerText={answerRight}>
                      <ArrowLongRightIcon className="w-[64px] h-[64px]" />
                    </SideArrow>
                  </div>
                )}
              </Droppable>
            </div>
            <p className="text-black text-xl font-bold">COMBO x{combo}</p>
          </div>
    </DragDropContext>
  );
}
