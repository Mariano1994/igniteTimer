import { HandPalm, Play } from "phosphor-react";
import { createContext, useContext, useEffect, useState } from "react";

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
import { CycleContext } from "../../context/CyclesContext";

export function Home() {
  const { activeCycle, createNewCycle, interruptCurrentCycle } =
    useContext(CycleContext);
  const newCylceFormValidationSchema = zod.object({
    task: zod.string().min(3, "Informe a tarefa"),
    minutesAmount: zod.number().min(5).max(60),
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

  function handleCeateNewCycle(data: NewCyrcleFormData) {
    createNewCycle(data);
    reset();
  }

  const task = watch("task");
  const minuteAmount = watch("minutesAmount");

  return (
    <HomeContainer>
      <form onSubmit={handleSubmit(handleCeateNewCycle)} action="">
        <FormProvider {...newCycleform}>
          <NewCycleForm />
        </FormProvider>
        <CountDown />

        {activeCycle ? (
          <StopCountDownButton onClick={interruptCurrentCycle} type="button">
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
