import { useEffect, useState } from "react";
import { api } from "../../services/api";
import { Container } from "./styles";

export const TransactionsTable = () => {
  const [transactions, setTransactions] = useState([]);

  useEffect(() => {
    api.get("/transactions").then((response) => console.log(response.data));
  }, []);

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
