import {QuestionEntity} from "@draco/interfaces";
import {Skeleton, TableHeadProps, TableRow} from "@draco/ui";

export interface TableRowQuestionsProps {
  data: QuestionEntity
  dataHead: TableHeadProps<QuestionEntity>[]
  columnsWidth?: string
  isLoading?: boolean
}


export function TableRowQuestions(props: TableRowQuestionsProps) {
  const {
    data,
    dataHead,
    columnsWidth = `repeat(${dataHead.length},minmax(0,1fr))`,
    isLoading
  } = props

  return (
    <TableRow
      link={`/admin/questions/${data.id}`}
      filter={[]}
      data={data}
      columnsWidth={columnsWidth}
      disabled={isLoading}
    >
      <>
        <div className="flex items-center px-4">
          <div className="ml-3 mr-3 text-slate-800 text-md">
            <Skeleton show={isLoading} width={100} height={16}>
              <div>
                { data.name }
              </div>
            </Skeleton>
          </div>
        </div>
        <div className="ml-4">
          { data.is_active ? (
            <span className="inline-flex items-center rounded-md bg-green-50 px-2 py-1 text-xs font-medium text-green-700 ring-1 ring-inset ring-green-600/20">
              Vraie
            </span>
          ): (
            <span className="inline-flex items-center rounded-md bg-red-50 px-2 py-1 text-xs font-medium text-red-700 ring-1 ring-inset ring-red-600/10">
              Fausse
            </span>
          )}
        </div>
      </>
    </TableRow>
  )
}