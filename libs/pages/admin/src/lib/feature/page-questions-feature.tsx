import {PageQuestion} from '../ui/page-question'
import {useDispatch} from "react-redux";
import {useEffect} from "react";
import {AppDispatch} from "@draco/store";
import {fetchQuestions} from "@draco/domains/questions";

export function PageQuestionsFeature() {
  const dispatch = useDispatch<AppDispatch>()

  useEffect(() => {
    console.log("test")
    dispatch(fetchQuestions())
      .unwrap()
      .then((data) => {
        console.log(data)
      })
  }, [dispatch]);

  useEffect(() => {
    console.log("test")
  }, [])

  return (
    <div>
      <PageQuestion />
    </div>
  )
}