import { useFormContext } from "react-hook-form";
import { FormContainer, TaskInput, MinutesAmountInput } from "./styles";

import { useContext } from "react";
import { CycleContext } from "..";

export function NewCycleForm() {
  const { activeCycle } = useContext(CycleContext);
  const { register } = useFormContext();

  return (
    <FormContainer>
      <label htmlFor="task">Vou trabalhar em</label>
      <TaskInput
        id="task"
        type="text"
        placeholder="Deia um nome para a sua tarefa"
        disabled={!!activeCycle}
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
        min={1}
        max={60}
        disabled={!!activeCycle}
        {...register("minutesAmount", { valueAsNumber: true })}
      />

      <span>minutos</span>
    </FormContainer>
  );
}
