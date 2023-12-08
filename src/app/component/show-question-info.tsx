import {AnswerEntity, QuestionEntity} from "@draco/interfaces";
import {useEffect, useState} from "react";

export interface ShowQuestionInfoProps {
  question: QuestionEntity
  answer: AnswerEntity
}

export function ShowQuestionInfo({ question, answer }: ShowQuestionInfoProps) {
  const [goodAnswer, setGoodAnswer] = useState<AnswerEntity | null>(null)

  useEffect(() => {
    question.answers.map((answer) => {
      if (answer.is_valid) {
        setGoodAnswer(answer)
      }
    })
  }, [question])

  return (
    <div className="py-16 px-12 bg-[#40394A] rounded-xl shadow-lg">
      <div className="w-full text-center flex flex-col gpa-4 pb-12 w-2/3 mx-auto">
        <span className="text-center ">
          {answer.is_valid ? (
            <span className="text-green-400 text-center">Bonne réponse</span>
          ) : (
            <span className="text-primary">Mauvaise réponse</span>
          )}
        </span>
        <h2 className="text-white text-3xl font-semibold">{ question.name}</h2>
      </div>

      <div>
        {answer.is_valid ? (
          <div className="text-green-500">Vous avez répondu: {answer.name}</div>
        ) : (
          <div className="flex flex-col gap-2">
            <span className="text-primary">Vous avez répondu: {answer.name}</span>
            { goodAnswer && (
              <span className="text-green-500">La bonne réponse était: {goodAnswer.name}</span>
            )}
          </div>
        )}

      </div>


      <div className="pt-8 flex flex-col gap-2">
        <span className="text-white underline">Explications</span>
        <p className="text-slate-400">{question.description}</p>
      </div>

    </div>
  )
}