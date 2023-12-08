import {useQuery} from "react-query";
import {apiClient} from "@draco/api-client";
import {useEffect} from "react";
import {useNavigate} from "react-router";
import {QuestionEntity} from "@draco/interfaces";

export default function QuestionsGeneral () {
  const navigate = useNavigate()

  const { data: question, error, isError } = useQuery(['questions'], async () => {
    const response = await apiClient.get<QuestionEntity>('/questions/unanswered').build()

    return response.data
  }, {
    staleTime: 1000,
    retry: false
  })


  useEffect(() => {
    if (question) {
      navigate(`/questions/${question.id}`)
    }
  }, [question])

  return (
    <div className="pt-20">
      Page des questions

      { isError && (
        <div>
          Plus de questions pour vous
        </div>
      )}
    </div>
  )
}