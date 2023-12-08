import {Controller, Field, FormProvider, useForm} from "react-hook-form";
import {useEffect, useState} from "react";
import {Button, InputText, InputTextArea} from "@draco/ui";
import {useMutation} from "react-query";
import {apiClient} from "@draco/api-client";

export default function ModalCreateQuestions() {
  const [disabled, setDisabled] = useState(true)

  const methods = useForm({
    mode: 'onChange',
    defaultValues: {
      name: '',
      description: '',
      answer_one: '',
      answer_two: ''
    }
  })

  const createQuestion = useMutation(async (data: {
    name: string
    description: string
    answer_one: string
    answer_two: string
  }) => {
    const response = await apiClient.post('/questions/create')
      .payload({
        name: data.name,
        description: data.description,
        answer_one: data.answer_one,
        answer_two: data.answer_two
      })
      .build()

    return response.data
  })

  const onSubmit = methods.handleSubmit((data) => {
    createQuestion.mutate(data)
  })

  useEffect(() => {
    const subscribe = methods.watch((data) => {
      if (data.name && data.description && data.answer_one && data.answer_two) {
        setDisabled(false)
      } else {
        setDisabled(true)
      }
    })

    return () => subscribe.unsubscribe()
  }, [methods])



  return (
    <FormProvider {...methods}>
      <div className="p-4 flex flex-col">
        <h1 className="text-slate-800 font-semibold text-lg">Créer une question</h1>
        <div className="flex flex-col gap-3 py-4">
          <Controller
            name="name"
            control={methods.control}
            rules={{
              required: 'Please enter a value'
            }}
            render={({ field, fieldState: { error } }) => (
              <InputText
                label="Nom de la question"
                name={field.name}
                onChange={field.onChange}
                value={field.value}
                error={error?.message}
              />
            )}
          />

          <Controller
            name="description"
            control={methods.control}
            render={({ field, fieldState: { error } }) => (
              <InputTextArea
                label="Description de la question"
                name={field.name}
                value={field.value}
                onChange={field.onChange}
              />
            )}
          />

          <Controller
            name="answer_one"
            control={methods.control}
            rules={{
              required: 'Please enter a value'
            }}
            render={({ field, fieldState: { error } }) => (
              <InputText
                label="Nom de la réponse 1"
                name={field.name}
                onChange={field.onChange}
                value={field.value}
                error={error?.message}
              />
            )}
          />

          <Controller
            name="answer_two"
            control={methods.control}
            rules={{
              required: 'Please enter a value'
            }}
            render={({ field, fieldState: { error } }) => (
              <InputText
                label="Nom de la réponse 2"
                name={field.name}
                onChange={field.onChange}
                value={field.value}
                error={error?.message}
              />
            )}
          />

          <div className="flex justify-end">
            <Button
              disabled={disabled}
              loading={createQuestion.isLoading}
              onClick={onSubmit}
            >
              Créer la question
            </Button>
          </div>
        </div>
      </div>
    </FormProvider>
  )
}