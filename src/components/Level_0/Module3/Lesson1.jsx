import ReactPlayer from 'react-player';
import AudioPlayer from 'react-h5-audio-player';
import 'react-h5-audio-player/lib/styles.css';
import { Image } from '@chakra-ui/react';
import { Table, Tbody, Tr, Td, TableContainer } from '@chakra-ui/react';

import sein from '../../image/sein.png';
import { Clue } from 'components/Сlue';

export const Lesson1 = () => {
  return (
    <>
      <h2>1 УРОК -Как рассказать о себе.Представиться.</h2>
      <ul>
        <li>
          <h3>
            1.1 Учимся здороваться и приветствовать друг друга на немецком языке
          </h3>
          <ReactPlayer controls={true} url="https://youtu.be/QgraVklady0" />
          <p>Привет! - Hallo!</p>
          <p>Добрый день! - Guten Tag!</p>
          <p>
            Добрый день! (характерно для юга Германии, Австрии) -Grüss Gott!
          </p>
          <p>Доброе утро! -Guten Morgen!</p>
          <p>Добрый вечер! - Guten Abend!</p>
          <p>Спокойной ночи! - Gute Nacht!</p>
          <p>Пока! -Tschüss!</p>
          <p>Добро пожаловать! С приездом! -- Herzlich willkommen!</p>
          <p>Пока! - Servus!</p>
          <p>До свидания! -Auf Wiedersehen!</p>
          <p>
            До скорой встречи! До скорого! Пока!Bis bald! Bis nachher! Bis
            später! Bis dann!
          </p>
          <p>До вечера (до завтра)! - Bis Abend (bis morgen)!</p>
          <p>Удачи (дословно: удовольствий)! - Viel Spass!</p>
          <p>Всего хорошего! - Alles Gute!</p>
        </li>
        <li>
          <h3>
            1.2 Посмотрите видео урок по теме " Учимся себя представлять"-
            устная часть Теста А1 в Гете Институте
          </h3>

          <ReactPlayer controls={true} url="https://youtu.be/_Q5dx1zyzNg" />
        </li>
        <li>
          <h3>
            1.3 Выпишите в блокнот склонение глагола "Быть" и запомните его!
          </h3>
          <Image src={sein} alt="alphabet" margin={'0 auto'} />
        </li>
        <li>
          <h3>1.4 Послушайте аудио- повторяйте вслух!</h3>
          <AudioPlayer src="https://fs09.getcourse.ru/fileservice/file/download/a/115913/sc/297/h/5a6761dbf574dde02ad8fef681613ef2.mp4" />
        </li>
        <li>
          <h3>
            1.5 Вставьте, пожалуйста, в пропуски правильную форму глагола SEIN:
          </h3>

          <p>Образец:</p>
          <p>Ich bin in Charkov.</p>
          <p>Du _______ in Deutschland.</p>
          <Clue message="du bist" />
          <p>Er ______ mein Bruder.</p>
          <Clue message="er ist" />
          <p>Wir _______ in Bremen.</p>
          <Clue message="wir sind" />
          <p>Du ______ in Berlin.</p>
          <Clue message="du bist" />
        </li>
        <li>
          <h3>
            1.6 Послушайте аудио с фразами при знакомстве и прощании. Повторяйте
            вслух!
          </h3>
          <AudioPlayer src="https://fs11.getcourse.ru/fileservice/file/download/a/115913/sc/194/h/dd76fb65388330ae78cbdc1e103c3358.mp4" />
        </li>
        <li>
          <h3>1.7 Запомните глагол heißen - "Меня зовут"</h3>
          <ReactPlayer controls={true} url="https://youtu.be/0-1jsUxuT3Y" />
          <p>ich heisse</p>
          <p>du heisst</p>
          <p>er heisst</p>
          <p>wir heissen</p>
          <p>ihr heisst</p>
          <p>Sie heissen</p>
        </li>
        <li>
          <h3>
            1.8 Посмотрите видео и запомните правильное значение слова NAME!
          </h3>
          <ReactPlayer controls={true} url="https://youtu.be/uUDWR2L1AOA" />
          <p>имя: mein Vorname ist...</p>
          <p>фамилия: Name; Nachname; Familienname</p>
        </li>
        <li>
          <h3>
            1.9 Запомните слова- которые описывают ваше семейное положение!
            Выберите соответствие с вашими данными:
          </h3>
          <TableContainer>
            <Table variant="simple">
              <Tbody>
                <Tr>
                  <Td>холост, не замужем</Td>
                  <Td>Ich bin ledig</Td>
                </Tr>
                <Tr>
                  <Td>в браке</Td>
                  <Td>Ich bin verheiratet</Td>
                </Tr>
                <Tr>
                  <Td>в разводе</Td>
                  <Td>Ich bin geschieden</Td>
                </Tr>
                <Tr>
                  <Td>вдова-вдовец</Td>
                  <Td>Ich bin verwitwet</Td>
                </Tr>
              </Tbody>
            </Table>
          </TableContainer>
        </li>
      </ul>
    </>
  );
};
