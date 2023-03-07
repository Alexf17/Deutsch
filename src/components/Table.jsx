import {
  Table,
  Thead,
  Tbody,
  Tr,
  Th,
  Td,
  TableContainer,
} from '@chakra-ui/react';

function Table1() {
  return (
    <TableContainer>
      <Table
        variant="striped"
        colorScheme="teal"
        size="sm"
        margin={'0 auto'}
        maxW={'container.md'}
      >
        <Thead>
          <Tr>
            <Th>сh-</Th>
            <Th>sch-</Th>
            <Th>tsch-</Th>
            <Th>sp-</Th>
            <Th>st-</Th>
          </Tr>
        </Thead>
        <Tbody>
          <Tr>
            <Td>kochen</Td>
            <Td>Entschuldigung</Td>
            <Td>Tschechien</Td>
            <Td>sprechen</Td>
            <Td>stehen</Td>
          </Tr>
          <Tr>
            <Td>machen</Td>
            <Td>Englisch</Td>
            <Td>Deutsch</Td>
            <Td>Sport</Td>
            <Td>steigen</Td>
          </Tr>
          <Tr>
            <Td>ich</Td>
            <Td>Polnisch</Td>
            <Td>tschüss</Td>
            <Td>spazieren</Td>
            <Td>Strasse</Td>
          </Tr>
          <Tr>
            <Td>nicht</Td>
            <Td>schreiben</Td>
            <Td>Tschechov</Td>
            <Td>sparen</Td>
            <Td>Stress</Td>
          </Tr>
        </Tbody>
      </Table>
    </TableContainer>
  );
}

function Table2() {
  return (
    <TableContainer>
      <Table
        variant="striped"
        colorScheme="teal"
        size="sm"
        margin={'0 auto'}
        maxW={'container.md'}
      >
        <Tbody>
          <Tr>
            <Td>Извините</Td>
            <Td>Entschuldigung</Td>
            <Td>"энтшульдигунг"</Td>
          </Tr>
          <Tr>
            <Td>писать</Td>
            <Td>schreiben</Td>
            <Td>"шрайбэн"</Td>
          </Tr>
          <Tr>
            <Td>стоять</Td>
            <Td>stehen</Td>
            <Td>"штэен"</Td>
          </Tr>
          <Tr>
            <Td>готовить</Td>
            <Td>kochen</Td>
            <Td>"кохэн"</Td>
          </Tr>
          <Tr>
            <Td>делать</Td>
            <Td>machen</Td>
            <Td>"махэн"</Td>
          </Tr>
          <Tr>
            <Td>пока!</Td>
            <Td>Tschüss!</Td>
            <Td>"чуусс!"</Td>
          </Tr>
          <Tr>
            <Td>подниматься</Td>
            <Td>steigen</Td>
            <Td>"штайгэн"</Td>
          </Tr>
          <Tr>
            <Td>экономить, сберегать</Td>
            <Td>sparen</Td>
            <Td>"шпарэн"</Td>
          </Tr>
          <Tr>
            <Td>нет</Td>
            <Td>nicht</Td>
            <Td>"нихьт"</Td>
          </Tr>
        </Tbody>
      </Table>
    </TableContainer>
  );
}

function Table3() {
  return (
    <TableContainer>
      <Table
        variant="striped"
        colorScheme="teal"
        size="sm"
        margin={'0 auto'}
        maxW={'container.md'}
      >
        <Tbody>
          <Tr>
            <Td>Ребёнок шумный</Td>
            <Td>Das Kind ist laut</Td>
            <Td>"Дас кинд ист лаут"</Td>
          </Tr>
          <Tr>
            <Td>Еда хорошая</Td>
            <Td>Das Essen ist gut</Td>
            <Td>"Дас эссен ист гут"</Td>
          </Tr>
          <Tr>
            <Td>Собака больная</Td>
            <Td>Der Hund ist krank</Td>
            <Td>"Дер хунд ист кранк"</Td>
          </Tr>
          <Tr>
            <Td>Фильм плохой</Td>
            <Td>Der Film ist schlecht</Td>
            <Td>"Дер фильм ист шлехьт"</Td>
          </Tr>
          <Tr>
            <Td>Родители в Берлине</Td>
            <Td>Die eltern sind in Berlin </Td>
            <Td>"Дие эльтерн зинд ин Берлин"</Td>
          </Tr>
          <Tr>
            <Td>Друг в отпуске</Td>
            <Td>Der Freund ist im Urlaub</Td>
            <Td>"Дер фройнд ист им Урлауб"</Td>
          </Tr>
          <Tr>
            <Td>Мы дома</Td>
            <Td>Wir sind zu Hause</Td>
            <Td>"Вир зинд цу хаузе"</Td>
          </Tr>
          <Tr>
            <Td>Ты умный</Td>
            <Td>Du bist klug</Td>
            <Td>"Ду бист клюг"</Td>
          </Tr>
          <Tr>
            <Td>Я счастлив</Td>
            <Td>Ich bin glücklich</Td>
            <Td>"Ихь бин глюклихь"</Td>
          </Tr>
        </Tbody>
      </Table>
    </TableContainer>
  );
}

export { Table1, Table2, Table3 };
