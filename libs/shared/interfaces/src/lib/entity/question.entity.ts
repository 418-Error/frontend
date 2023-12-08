import {AnswerEntity} from "./answer.entity";

export interface QuestionEntity {
  id: string
  name: string
  is_active: boolean
  description: string
  created_at: string
  updated_at: string
  answers: AnswerEntity[]
}
