import { useContext } from "react";
import { CycleContext } from "../../context/CyclesContext";
import { HistoryContainer, HistoryList, StatusFlag } from "./styles";
import { formatDistanceToNow } from "date-fns";
import ptBR from "date-fns/locale/pt-BR";

export function History() {
  const { cycles } = useContext(CycleContext);
  return (
    <HistoryContainer>
      <h1>Meus historicos</h1>
      <HistoryList>
        <table>
          <thead>
            <tr>
              <th>Tarefa</th>
              <th>Duracao</th>
              <th>Inicio</th>
              <th>Status</th>
            </tr>
          </thead>

          <tbody>
            {cycles.map((cycle) => {
              return (
                <tr key={cycle.id}>
                  <td>{cycle.task}</td>
                  <td>{cycle.minuteAmount} muinutes</td>
                  <td>
                    {formatDistanceToNow(cycle.startDate, {
                      addSuffix: true,
                      locale: ptBR,
                    })}
                  </td>

                  <td>
                    {cycle.finishedDate && (
                      <StatusFlag statusColor="green"> Concluido</StatusFlag>
                    )}

                    {cycle.interruptedDate && (
                      <StatusFlag statusColor="red"> Interrompido</StatusFlag>
                    )}

                    {!cycle.finishedDate && !cycle.interruptedDate && (
                      <StatusFlag statusColor="yellow">
                        {" "}
                        Em progresso
                      </StatusFlag>
                    )}
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </HistoryList>
    </HistoryContainer>
  );
}
