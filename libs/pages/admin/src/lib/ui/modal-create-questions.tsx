import {Controller, FormProvider, useForm} from "react-hook-form";
import {useEffect, useState} from "react";
import {InputText} from "@draco/ui";

export default function ModalCreateQuestions() {
  const [disabled, setDisabled] = useState(true)

  const methods = useForm({
    mode: 'onChange',
    defaultValues: {
      name: '',
      description: ''
    }
  })

  const onSubmit = methods.handleSubmit((data) => {
    console.log(data)
  })

  useEffect(() => {
    const subscribe = methods.watch((data) => {
      if (data.name) {
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
        <div>
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
        </div>
      </div>
    </FormProvider>
  )
}