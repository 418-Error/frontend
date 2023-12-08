import {useQuery} from "react-query";
import {apiClient} from "@draco/api-client";
import {QuestionEntity} from "@draco/interfaces";
import {PageQuestion} from "../ui/page-questions";
import {useEffect, useState} from "react";

export default function PageQuestionsFeature() {
  const [questions, setQuestions] = useState<QuestionEntity[]>([])
  const { data } = useQuery('questions', async () => {
    const resp = await apiClient.get<QuestionEntity[]>('/questions').build()

    return resp.data
  })

  useEffect(() => {
    if (data) {
      setQuestions(data)
    }

  }, [data]);

  return (
    <PageQuestion questions={questions} />
  )
}