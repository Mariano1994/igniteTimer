import { HandPalm, Play } from "phosphor-react";
import { createContext, useEffect, useState } from "react";

import {
  HomeContainer,
  StartCountDownButton,
  StopCountDownButton,
} from "./styles";
import { NewCycleForm } from "./NewCycleForm";
import { CountDown } from "./CountDown";
import { FormProvider, useForm } from "react-hook-form";
import * as zod from "zod";
import { zodResolver } from "@hookform/resolvers/zod";

interface Cycle {
  id: string;
  task: string;
  minuteAmount: number;
  startDate: Date;
  interruptedDate?: Date;
  finishedDate?: Date;
}

interface CycleContextType {
  activeCycle: Cycle | undefined;
  activeCycleId: string | null;
  amountSecondsPassed: number;
  markCurentCycleAsFinished: () => void;
  setSecondsPassed: (seconds: number) => void;
}

export const CycleContext = createContext({} as CycleContextType);

export function Home() {
  const [cycles, setCylcle] = useState<Cycle[]>([]);
  const [activeCycleId, setActiveCycleId] = useState<string | null>(null);
  const [amountSecondsPassed, setAmountSecondsPassed] = useState(0);

  const newCylceFormValidationSchema = zod.object({
    task: zod.string().min(3, "Informe a tarefa"),
    minutesAmount: zod.number().min(1).max(60),
  });

  type NewCyrcleFormData = zod.infer<typeof newCylceFormValidationSchema>;

  const newCycleform = useForm<NewCyrcleFormData>({
    resolver: zodResolver(newCylceFormValidationSchema),
    defaultValues: {
      task: "",
      minutesAmount: 0,
    },
  });

  const { handleSubmit, watch, reset } = newCycleform;

  const activeCycle = cycles.find((cycle) => cycle.id === activeCycleId);

  function handleCreateNewCylcle(data: NewCyrcleFormData) {
    const id = String(new Date().getTime());

    const newCycle: Cycle = {
      id,
      task: data.task,
      minuteAmount: data.minutesAmount,
      startDate: new Date(),
    };

    setCylcle((state) => [...state, newCycle]);
    setActiveCycleId(id);
    setAmountSecondsPassed(0);
    reset();
  }
  function markCurentCycleAsFinished() {
    setCylcle((state) =>
      state.map((cycle) => {
        if (cycle.id === activeCycleId) {
          return { ...cycle, finishedDate: new Date() };
        } else {
          return cycle;
        }
      })
    );
  }
  function setSecondsPassed(seconds: number) {
    setAmountSecondsPassed(seconds);
  }
  function handleInterruptedCycle() {
    setCylcle((state) =>
      state.map((cycle) => {
        if (cycle.id === activeCycleId) {
          return { ...cycle, interruptedDate: new Date() };
        } else {
          return cycle;
        }
      })
    );
    setActiveCycleId(null);
  }

  const task = watch("task");
  const minuteAmount = watch("minutesAmount");

  return (
    <HomeContainer>
      <form onSubmit={handleSubmit(handleCreateNewCylcle)} action="">
        <CycleContext.Provider
          value={{
            activeCycle,
            activeCycleId,
            markCurentCycleAsFinished,
            amountSecondsPassed,
            setSecondsPassed,
          }}
        >
          <FormProvider {...newCycleform}>
            <NewCycleForm />
          </FormProvider>
          <CountDown />
        </CycleContext.Provider>

        {activeCycle ? (
          <StopCountDownButton onClick={handleInterruptedCycle} type="button">
            {" "}
            <HandPalm size={24} />
            Interromper
          </StopCountDownButton>
        ) : (
          <StartCountDownButton
            disabled={!(task && minuteAmount)}
            type="submit"
          >
            {" "}
            <Play size={24} />
            Começar
          </StartCountDownButton>
        )}
      </form>
    </HomeContainer>
  );
}
