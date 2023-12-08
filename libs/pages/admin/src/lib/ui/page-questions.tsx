import {QuestionEntity} from "@draco/interfaces";
import {Button, Modal, Table, TableHeadProps} from "@draco/ui";
import {useState} from "react";
import {IconAwesomeEnum} from "@draco/enums";
import {TableRowQuestions} from "./table-row-questions";
import ModalCreateQuestions from "./modal-create-questions";

export interface PageQuestionsProps {
  questions: QuestionEntity[]
}

export function PageQuestion({ questions }: PageQuestionsProps) {
  const [open, setOpen] = useState(false)

  const columnWidth = '30% 20% 10% 10% 20%'

  const tableHead: TableHeadProps<QuestionEntity>[] = [
    {
      title: 'Name',
      className: 'px-4 py-3 w-full',
    },
    {
      title: 'Actif',
    },
  ]
  return (
    <div className="p-8">
      <div className="flex item-start justify-between">
        <div className="flex flex-col gap-3">
          <h1 className="font-title">Questions</h1>
          <p className="text-sm text-gray-700">
            Ajoutez, recherchez et gérez vos questions à un seul et même endroit.
          </p>
        </div>

        <div>
          <Button
            iconLeft={IconAwesomeEnum.PLUS}
            iconLeftClassName="w-5"
            onClick={() => {
              setOpen(true)
            }}
          >
            Créer un goodie
          </Button>

          <Modal externalOpen={open} setExternalOpen={() => setOpen(false)} buttonClose={true}>
            <ModalCreateQuestions />
          </Modal>
        </div>
      </div>

      { questions && (
        <div className="pt-10">
          <Table
            dataHead={tableHead}
            data={questions}
            filter={[]}
            className="mt-2 bg-white rounded-sm flex-grow overflow-y-auto min-h-0"
            columnsWidth={columnWidth}
          >
            <div>
              {questions.map((currentData: QuestionEntity, index: number) => (
                <TableRowQuestions
                  key={index}
                  data={currentData}
                  dataHead={tableHead}
                  columnsWidth={columnWidth}
                  isLoading={false}
                />
              ))}
            </div>
          </Table>
        </div>
      )}
    </div>
  )
}