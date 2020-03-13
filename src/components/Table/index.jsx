import React from 'react';

import { Container } from './styles';

export default function Table() {
  return (
    <Container>
      <table>
        <thead>
          <tr>
            <th scope="col">PPP</th>
            <th scope="col">PPP</th>
            <th scope="col">PPP</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <th scope="row">/aa/</th>
            <td>555</td>
            <td>555</td>
          </tr>
          <tr>
            <th scope="row">/aa/</th>
            <td>555</td>
            <td>555</td>
          </tr>
        </tbody>
      </table>
    </Container>
  );
}
