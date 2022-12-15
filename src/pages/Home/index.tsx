import { Play } from "phosphor-react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import zod from "zod";

import {
  CountDownContainer,
  FormContainer,
  HomeContainer,
  MinutesAmountInput,
  Separator,
  StartCountDownButton,
  TaskInput,
} from "./styles";

const newCylceFormValidationSchema = zod.object({
  taks: zod.string().min(3, "Informe a tarefa"),
  minutesAmount: zod.number().min(5).max(60),
});

export function Home() {
  const { register, handleSubmit, watch } = useForm({
    resolver: zodResolver(newCylceFormValidationSchema),
  });

  function handleCreateNewCylcle(data: any) {}

  const task = watch("task");
  const minutesAmount = watch("minutesAmount");

  return (
    <HomeContainer>
      <form onSubmit={handleSubmit(handleCreateNewCylcle)} action="">
        <FormContainer>
          <label htmlFor="task">Vou trabalhar em</label>
          <TaskInput
            id="task"
            type="text"
            placeholder="Deia um nome para a sua tarefa"
            list="task-suggestions"
            {...register("task")}
          />

          <datalist id="task-suggestions">
            <option value="Projecto 1" />
            <option value="Projecto 2" />
            <option value="Projecto 3" />
            <option value="Projecto 4" />
          </datalist>

          <label htmlFor="minutesAmount">durante</label>
          <MinutesAmountInput
            id="minutesAmount"
            type="number"
            placeholder="00"
            step={5}
            min={5}
            max={60}
            {...register("minutesAmount", { valueAsNumber: true })}
          />

          <span>minutos</span>
        </FormContainer>

        <CountDownContainer>
          <span>0</span>
          <span>0</span>

          <Separator>:</Separator>

          <span>0</span>
          <span>0</span>
        </CountDownContainer>

        <StartCountDownButton disabled={!(task && minutesAmount)} type="submit">
          {" "}
          <Play size={24} />
          Começar
        </StartCountDownButton>
      </form>
    </HomeContainer>
  );
}
