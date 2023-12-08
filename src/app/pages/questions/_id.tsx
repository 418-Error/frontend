import {useNavigate, useParams} from "react-router"
import {DragDropContext, Draggable, Droppable} from "react-beautiful-dnd"
import {useMutation, useQuery} from "react-query"
import {apiClient} from "@draco/api-client"
import {AnswerEntity, QuestionEntity} from "@draco/interfaces"
import {useEffect, useState} from "react"
import {ArrowLongLeftIcon, ArrowLongRightIcon} from "@heroicons/react/24/outline"
import SideArrow from "../../component/sideArrow"
import Card from "../../component/card"
import {Button, ButtonStyle} from "@draco/ui"
import {ShowQuestionInfo} from "../../component/show-question-info";

const combo = 2
export default function PageQuestion() {
  const { questionId = ''} = useParams()

  const navigate = useNavigate()

  const [answers, setAnswers] = useState<any[]>([])
  const [voted, setVoted] = useState<boolean>(false)
  const [selectedAnswer, setSelectedAnswer] = useState<AnswerEntity | null>(null)

  const { data: question } = useQuery(['question', questionId], async () => {
    const response = await apiClient.get<QuestionEntity>(`/questions/${questionId}`).build()

    return response.data
  })

  const voteAnswer = useMutation(async (id) => {
    const response = await apiClient.post(`/answers/${id}/vote`).build()

    return response.data
  }, {
    onSuccess(data) {
      setVoted(true)
    },
    onError() {
      window.location.href = '/questions'
    }
  })

  function onDragEnd ({ destination, source }: any) {
    console.log(destination.droppableId)
    if (destination.droppableId !== 'card') {
      voteAnswer.mutate(destination.droppableId)
      setSelectedAnswer(answers.find((item) => item.id === destination.droppableId))
    }

  }

  useEffect(() => {
    if (question && question.answers.length === 2) {
      setAnswers(question.answers)
    }
  }, [question])

  return (
    <DragDropContext onDragEnd={onDragEnd}>
      <div className="h-screen bg-linear gap-20 pt-40">
        { voted && selectedAnswer && question ? (
          <div className="max-w-6xl mx-auto">
            <ShowQuestionInfo
              question={question}
              answer={selectedAnswer}
            />

            <div className="w-full mt-12">
              <Button
                onClick={() => {
                  navigate("/questions")
                }}
                className="w-full"
                style={ButtonStyle.STROKED}

              >
                Question suivante
              </Button>
            </div>
          </div>
        ): (
          <div>
            { question && answers.length ? (
              <div className="flex flex-col items-center gap-20">
                <div className="flex flex-row justify-evenly px-8 w-full">
                  <Droppable droppableId={answers[0].id}>
                    {(provided: any) => (
                      <div
                        {...provided.droppableProps}
                        ref={provided.innerRef}
                      >
                        <SideArrow answerText={answers[0].name}>
                          <ArrowLongLeftIcon className="w-[64px] h-[64px]" />
                        </SideArrow>
                      </div>
                    )}
                  </Droppable>

                  <Droppable droppableId="card">
                    {(provided: any) => (
                      <div
                        {...provided.droppableProps}
                        ref={provided.innerRef}
                      >
                        <Draggable
                          key="1"
                          draggableId={questionId.toString()}
                          index={1}
                        >
                          {(provided: any, snapshot: any) => (
                            <div
                              ref={provided.innerRef}
                              {...provided.draggableProps}
                              {...provided.dragHandleProps}
                            >
                              <Card question={question} />
                              {provided.placeholder}
                            </div>
                          )}
                        </Draggable>
                        {provided.placeholder}
                      </div>
                    )}
                  </Droppable>

                  <Droppable droppableId={answers[1].id}>
                    {(provided: any) => (
                      <div
                        {...provided.droppableProps}
                        ref={provided.innerRef}
                      >
                        <SideArrow answerText={answers[1].name}>
                          <ArrowLongRightIcon className="w-[64px] h-[64px]" />
                        </SideArrow>
                      </div>
                    )}
                  </Droppable>

                </div>
                <p className="text-black text-xl font-bold">COMBO x{combo}</p>

              </div>
            ) : (
              <div>Pas de goodie</div>
            )}
          </div>
        )}

      </div>


    </DragDropContext>
  )
}