import { Container } from "./styles";

export const TransactionsTable = () => {
  return (
    <Container>
      <table>
        <thead>
          <tr>
            <th>Title</th>
            <th>Price</th>
            <th>Category</th>
            <th>Date</th>
          </tr>
        </thead>

        <tbody>
          <tr>
            <td>sdasdasd</td>
            <td className="deposit">23123</td>
            <td>asdasdas</td>
            <td>22/01/2022</td>
          </tr>
          <tr>
            <td>sdasdasd</td>
            <td className="withdraw">- 23123</td>
            <td>asdasdas</td>
            <td>22/01/2022</td>
          </tr>
        </tbody>
      </table>
    </Container>
  );
};
