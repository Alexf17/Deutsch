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

function Table4() {
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
            <Td>работать</Td>
            <Td>arbeiten</Td>
          </Tr>
          <Tr>
            <Td>рисовать</Td>
            <Td>malen</Td>
          </Tr>
          <Tr>
            <Td>Родители</Td>
            <Td>Eltern</Td>
          </Tr>
          <Tr>
            <Td>бассейн</Td>
            <Td>schwimmbad</Td>
          </Tr>
          <Tr>
            <Td>плавать </Td>
            <Td>schwimmen</Td>
          </Tr>
          <Tr>
            <Td>играть</Td>
            <Td>spielen</Td>
          </Tr>
          <Tr>
            <Td>футбол </Td>
            <Td>fussbal</Td>
          </Tr>
          <Tr>
            <Td>посещать</Td>
            <Td>besuchen</Td>
          </Tr>
          <Tr>
            <Td>друзья </Td>
            <Td>freunde</Td>
          </Tr>
          <Tr>
            <Td>письмо </Td>
            <Td>brief</Td>
          </Tr>
          <Tr>
            <Td>сегодня </Td>
            <Td>heute</Td>
          </Tr>
          <Tr>
            <Td>оставаться</Td>
            <Td>bleiben</Td>
          </Tr>
          <Tr>
            <Td>мечтать</Td>
            <Td>träumen</Td>
          </Tr>
          <Tr>
            <Td>громко</Td>
            <Td>laut</Td>
          </Tr>
          <Tr>
            <Td>искать</Td>
            <Td>suchen</Td>
          </Tr>
          <Tr>
            <Td>часто</Td>
            <Td>oft</Td>
          </Tr>
          <Tr>
            <Td>приходить</Td>
            <Td>kommen</Td>
          </Tr>
          <Tr>
            <Td>учить</Td>
            <Td>lernen</Td>
          </Tr>
          <Tr>
            <Td>говорить</Td>
            <Td>sagen</Td>
          </Tr>
          <Tr>
            <Td>спрашивать</Td>
            <Td>fragen</Td>
          </Tr>
          <Tr>
            <Td>исправлять</Td>
            <Td>korrigieren</Td>
          </Tr>
          <Tr>
            <Td>продавать</Td>
            <Td>verkaufen</Td>
          </Tr>
          <Tr>
            <Td>стоит(о цене)</Td>
            <Td>kosten</Td>
          </Tr>
          <Tr>
            <Td>Евро</Td>
            <Td>Euro</Td>
          </Tr>
          <Tr>
            <Td>книга</Td>
            <Td>das Buch</Td>
          </Tr>
          <Tr>
            <Td>покупать</Td>
            <Td>kaufen</Td>
          </Tr>
          <Tr>
            <Td>отвечать </Td>
            <Td>antworten</Td>
          </Tr>
        </Tbody>
      </Table>
    </TableContainer>
  );
}

function Table5() {
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
            <Td>Привет, здравствуйте </Td>
            <Td>Hallo </Td>
            <Td>"халлё"</Td>
          </Tr>
          <Tr>
            <Td>Привет (в Австрии и Южной Германии) </Td>
            <Td>Gruss Gott </Td>
            <Td>"глюс гот(т)"</Td>
          </Tr>
          <Tr>
            <Td>До свидания </Td>
            <Td>Auf Wiedersehen </Td>
            <Td>"ауфидерзейн"</Td>
          </Tr>
          <Tr>
            <Td>До скорого </Td>
            <Td>Bis bald / Bis später </Td>
            <Td>"бис бальт / бис шпэтэ"</Td>
          </Tr>
          <Tr>
            <Td>Пока</Td>
            <Td>Tschuss </Td>
            <Td>"чу(ю)с"</Td>
          </Tr>
          <Tr>
            <Td>Доброе утро </Td>
            <Td>Guten Morgen </Td>
            <Td>"гутен морген"</Td>
          </Tr>
          <Tr>
            <Td>Добрый день </Td>
            <Td>Guten Tag </Td>
            <Td>"гутен таг"</Td>
          </Tr>
          <Tr>
            <Td>Добрый вечер </Td>
            <Td>Guten Abend </Td>
            <Td>"гутен абенд"</Td>
          </Tr>
          <Tr>
            <Td>Спокойной ночи </Td>
            <Td>Gute Nacht </Td>
            <Td>"гутэ нахт"</Td>
          </Tr>
          <Tr>
            <Td>Всего хорошего </Td>
            <Td>Alles gute </Td>
            <Td>"алес гутэ"</Td>
          </Tr>
        </Tbody>
      </Table>
    </TableContainer>
  );
}

function Table6() {
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
            <Td>Как тебя зовут? </Td>
            <Td>Wie heißt du? </Td>
          </Tr>
          <Tr>
            <Td>Как Вас зовут? </Td>
            <Td>Wie ist Ihr Name? </Td>
          </Tr>
          <Tr>
            <Td>Меня зовут Дима. Иванов </Td>
            <Td>Mein Name ist Dima. Ivanov </Td>
          </Tr>
          <Tr>
            <Td>Очень приятно. </Td>
            <Td>Sehr angenehm. </Td>
          </Tr>
          <Tr>
            <Td>Откуда Вы? </Td>
            <Td>Woher kommen Sie? </Td>
          </Tr>
          <Tr>
            <Td>Я из России. </Td>
            <Td>Ich komme aus Ukraine </Td>
          </Tr>
          <Tr>
            <Td>Вы впервые в Германии. </Td>
            <Td>Sind Sie das erste Mal in Deutschland. </Td>
          </Tr>
          <Tr>
            <Td>Я первый раз здесь. </Td>
            <Td>Ich bin das erste Mal hier. </Td>
          </Tr>
        </Tbody>
      </Table>
    </TableContainer>
  );
}

function Table7() {
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
            <Td>lesen </Td>
            <Td>читать</Td>
          </Tr>
          <Tr>
            <Td>sehen </Td>
            <Td>видеть</Td>
          </Tr>
          <Tr>
            <Td>essen </Td>
            <Td>кушать</Td>
          </Tr>
          <Tr>
            <Td>nehmen </Td>
            <Td>брать </Td>
          </Tr>
          <Tr>
            <Td>sprechen </Td>
            <Td>говорить</Td>
          </Tr>
          <Tr>
            <Td>helfen </Td>
            <Td>помогать</Td>
          </Tr>
          <Tr>
            <Td>empfelen </Td>
            <Td>советовать</Td>
          </Tr>
          <Tr>
            <Td>treffen </Td>
            <Td>встречать (кого-то)</Td>
          </Tr>
          <Tr>
            <Td> nehmen </Td>
            <Td>брать</Td>
          </Tr>
          <Tr>
            <Td>sein </Td>
            <Td>быть</Td>
          </Tr>
          <Tr>
            <Td> der Steckbrief </Td>
            <Td>письмо</Td>
          </Tr>
          <Tr>
            <Td>raten </Td>
            <Td>угадывать</Td>
          </Tr>
          <Tr>
            <Td>ordnen </Td>
            <Td>упопядочить</Td>
          </Tr>
          <Tr>
            <Td> woher </Td>
            <Td>от куда</Td>
          </Tr>
          <Tr>
            <Td> wer </Td>
            <Td>кто</Td>
          </Tr>
          <Tr>
            <Td> liegen </Td>
            <Td>находится (местность) лежать</Td>
          </Tr>
          <Tr>
            <Td>geben </Td>
            <Td>давать</Td>
          </Tr>
        </Tbody>
      </Table>
    </TableContainer>
  );
}

function Table8() {
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
            <Td>Нет, спасибо </Td>
            <Td>Nein, danke </Td>
          </Tr>
          <Tr>
            <Td>Спасибо, не надо </Td>
            <Td>Danke, nicht nötig </Td>
          </Tr>
          <Tr>
            <Td>Никак не могу </Td>
            <Td>Das geht wirklich nicht </Td>
          </Tr>
          <Tr>
            <Td>К сожалению </Td>
            <Td>Leider </Td>
          </Tr>
          <Tr>
            <Td>К сожалению, нет </Td>
            <Td>Leider, nicht </Td>
          </Tr>
          <Tr>
            <Td>Жаль </Td>
            <Td>Tut mir leid / Schade </Td>
          </Tr>
          <Tr>
            <Td>К превеликому сожалению </Td>
            <Td>Es tut mir leider </Td>
          </Tr>
          <Tr>
            <Td>Извините, к сожалению, я Вам не могу помочь </Td>
            <Td>Entschuldigen Sie, ich kann Ihnen leider nicht helfen </Td>
          </Tr>
        </Tbody>
      </Table>
    </TableContainer>
  );
}

function Table9() {
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
            <Td>стиральная машина </Td>
            <Td>die Waschmaschine</Td>
            <Td>автоматическая стиральная машина</Td>
            <Td>der Waschautomat</Td>
          </Tr>
          <Tr>
            <Td>сушильная машина для белья- </Td>
            <Td>der Wäschetrockner</Td>
            <Td>холодильник</Td>
            <Td>der Kühlschrank</Td>
          </Tr>
          <Tr>
            <Td>морозильная камера</Td>
            <Td>der Gefrierschrank, die Gefriertruhe</Td>
            <Td>микроволновая печь</Td>
            <Td>die Mikrowelle</Td>
          </Tr>
          <Tr>
            <Td>кофеварка</Td>
            <Td>die Kaffeemaschine</Td>
            <Td>автомат для приготовления кофе под давлением</Td>
            <Td>der Kaffeeautomat</Td>
          </Tr>
          <Tr>
            <Td>электрический чайник</Td>
            <Td>der Wasserkocher</Td>
            <Td>яйцеварка</Td>
            <Td>der Eierkocher</Td>
          </Tr>
          <Tr>
            <Td>тостер</Td>
            <Td>der Toaster</Td>
            <Td>газовая плита </Td>
            <Td>der Gasherd</Td>
          </Tr>
          <Tr>
            <Td>мясорубка</Td>
            <Td>der Fleischwolf</Td>
            <Td>фритюрница</Td>
            <Td>die Fritteuse</Td>
          </Tr>
          <Tr>
            <Td>блендер</Td>
            <Td>der Stabmixer, das Stabmixgerät</Td>
            <Td>ручной миксер</Td>
            <Td>das Mixgerät, der Handmixer</Td>
          </Tr>
          <Tr>
            <Td>измельчитель для продуктов </Td>
            <Td>der Zerkleinerer</Td>
            <Td>кухонный комбайн</Td>
            <Td>die Küchenmaschine</Td>
          </Tr>
          <Tr>
            <Td>хлебопечка, автомат для выпекания хлебо-булочных изделий</Td>
            <Td>der Brotbackautomat</Td>
            <Td>приспособление для нарезки продуктов</Td>
            <Td>die Schneidemaschine</Td>
          </Tr>
          <Tr>
            <Td>соковыжималка</Td>
            <Td>der Entsafter</Td>
            <Td>утюг</Td>
            <Td>das Bügeleisen</Td>
          </Tr>
          <Tr>
            <Td>утюг с отпариванием</Td>
            <Td>das Dampfbügeleisen</Td>
            <Td>телевизор</Td>
            <Td>der Fernseher</Td>
          </Tr>
          <Tr>
            <Td>пылесос</Td>
            <Td>der Staubsauger</Td>
            <Td>вентилятор, вентиляторы</Td>
            <Td>der Ventilator, die Ventilatoren</Td>
          </Tr>
          <Tr>
            <Td>кондиционер </Td>
            <Td>die Klimaanlage</Td>
            <Td>швейная машина</Td>
            <Td>die Nähmaschine</Td>
          </Tr>
          <Tr>
            <Td>фен для волос</Td>
            <Td>der Haartrockner</Td>
            <Td>машинка для стрижки волос</Td>
            <Td>der Haarschneider</Td>
          </Tr>
          <Tr>
            <Td>электробритва</Td>
            <Td>der Netz-Rasierer</Td>
            <Td>электрическая зубная щетка</Td>
            <Td>elektrische Zahnbürste</Td>
          </Tr>
          <Tr>
            <Td>телефонный аппарат</Td>
            <Td>das Telefongerät</Td>
            <Td>ноутбук</Td>
            <Td>das Notebook</Td>
          </Tr>
          <Tr>
            <Td>компьютер</Td>
            <Td>der Computer</Td>
            <Td>колонки</Td>
            <Td>die Lautsprecher</Td>
          </Tr>
          <Tr>
            <Td>радио-будильник</Td>
            <Td>das Uhrenradio</Td>
            <Td>музыкальный центр</Td>
            <Td>die Stereo-Anlage</Td>
          </Tr>
          <Tr>
            <Td>проигрыватель DVD-дисков </Td>
            <Td>der DVD</Td>
            <Td>наушники </Td>
            <Td>die Kopfhörer</Td>
          </Tr>
        </Tbody>
      </Table>
    </TableContainer>
  );
}

function Table10() {
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
            <Td>Сколько стоит? </Td>
            <Td>Was kostet? </Td>
          </Tr>
          <Tr>
            <Td>Я это беру </Td>
            <Td>Ich nehme es </Td>
          </Tr>
          <Tr>
            <Td>Я это покупаю </Td>
            <Td>Ich kaufe das</Td>
          </Tr>
          <Tr>
            <Td>Я заплачу ( то есть беру) </Td>
            <Td>Ich bezahle </Td>
          </Tr>
          <Tr>
            <Td>До свидания </Td>
            <Td>Auf Wiedersehen </Td>
          </Tr>
          <Tr>
            <Td>Да </Td>
            <Td>Ja </Td>
          </Tr>
          <Tr>
            <Td>Нет </Td>
            <Td>Nein </Td>
          </Tr>
        </Tbody>
      </Table>
    </TableContainer>
  );
}

export {
  Table1,
  Table2,
  Table3,
  Table4,
  Table5,
  Table6,
  Table7,
  Table8,
  Table9,
  Table10,
};
