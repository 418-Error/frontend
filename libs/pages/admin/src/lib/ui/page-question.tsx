import {useDispatch, useSelector} from "react-redux";
import {AppDispatch} from "@draco/store";
import {useEffect} from "react";
import {fetchQuestions, getQuestionState} from "@draco/domains/questions";

export function PageQuestion () {
  const dispatch = useDispatch<AppDispatch>()

  useEffect(() => {
    dispatch(fetchQuestions())
  }, [dispatch])

  const questions = useSelector(getQuestionState)

  useEffect(() => {
    console.log(questions)
  }, [questions]);

  return (
    <div>
      <h1>Questions</h1>

    </div>
  )
}