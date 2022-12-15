import { HistoryContainer, HistoryList, StatusFlag } from "./styles";

export function History() {
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
            <tr>
              <td>Tarefa</td>
              <td>20 minutos</td>
              <td>Ha cerca de 2 meses</td>
              <td>
                <StatusFlag statusColor="green"> Concluido</StatusFlag>
              </td>
            </tr>

            <tr>
              <td>Tarefa</td>
              <td>20 minutos</td>
              <td>Ha cerca de 2 meses</td>
              <td>
                <StatusFlag statusColor="red"> Interrompido</StatusFlag>
              </td>
            </tr>

            <tr>
              <td>Tarefa</td>
              <td>20 minutos</td>
              <td>Ha cerca de 2 meses</td>
              <td>
                <StatusFlag statusColor="red"> Interrompido</StatusFlag>
              </td>
            </tr>

            <tr>
              <td>Tarefa</td>
              <td>20 minutos</td>
              <td>Ha cerca de 2 meses</td>
              <td>
                <StatusFlag statusColor="yellow"> Em progresso</StatusFlag>
              </td>
            </tr>

            <tr>
              <td>Tarefa</td>
              <td>20 minutos</td>
              <td>Ha cerca de 2 meses</td>
              <td>
                <StatusFlag statusColor="yellow"> Em progresso</StatusFlag>
              </td>
            </tr>

            <tr>
              <td>Tarefa</td>
              <td>20 minutos</td>
              <td>Ha cerca de 2 meses</td>
              <td>
                <StatusFlag statusColor="yellow"> Em progresso</StatusFlag>
              </td>
            </tr>

            <tr>
              <td>Tarefa</td>
              <td>20 minutos</td>
              <td>Ha cerca de 2 meses</td>
              <td>
                <StatusFlag statusColor="green"> Concluido</StatusFlag>
              </td>
            </tr>
          </tbody>
        </table>
      </HistoryList>
    </HistoryContainer>
  );
}
