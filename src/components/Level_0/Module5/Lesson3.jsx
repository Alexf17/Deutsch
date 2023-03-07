import ReactPlayer from 'react-player';
import AudioPlayer from 'react-h5-audio-player';

import 'react-h5-audio-player/lib/styles.css';
import { Image } from '@chakra-ui/react';

import choice from '../../image/choice.png';
import a from '../../image/true.png';
import b from '../../image/false.png';

export const Lesson3 = () => {
  return (
    <>
      <h2>3 УРОК - Сколько стоит? Was kostet das?</h2>

      <ul>
        <li>
          <ReactPlayer controls={true} url="https://youtu.be/vQfL_H9iceM" />
        </li>
        <li>
          <h3>
            3.1 Послушайте три диалога. Распознайте стоимость покупки- Вам нужно
            услышать цифру.
          </h3>
          <AudioPlayer src="https://fs09.getcourse.ru/fileservice/file/download/a/115913/sc/116/h/fe9b1ea34462c8504ff173869c19e682.mp3" />
        </li>
        <li>
          <h3>3.2 Запомните отличие слова РАБОТАТЬ в немецком языке.</h3>
          <ReactPlayer controls={true} url="https://youtu.be/bFFjDiajsoU" />
        </li>
        <li>
          <h3>
            3.3 Определите стоимость словарика ( das Wörterbuch) и во втором
            диалоге- сколько стоит варочная плита, печка ( der Herd)?
          </h3>
          <AudioPlayer src="https://fs11.getcourse.ru/fileservice/file/download/a/115913/sc/156/h/8439762e50aa87b72a3f4fbe75c4e273.mp3" />
        </li>
        <li>
          <h3>
            3.4 Послушайте аудио файлы и ответьие на вопрос: " В какой комнате
            проходит немецкий курс? Выберите правильный ответ : А, В, С?
          </h3>
          <Image src={choice} alt="alphabet" margin={'0 auto'} />
          <AudioPlayer src="https://fs07.getcourse.ru/fileservice/file/download/a/115913/sc/465/h/90a80897df379812302bb3475e0e9000.mp3" />
        </li>
        <li>
          <h3>
            Послушайте 5 диалогов- выберите правильный ответ! Вам нужно услышать
            написанную в задании цифру и сделать выбор- ДА Richtig? или НЕТ-
            Falsch?
          </h3>
          <AudioPlayer src="https://fs14.getcourse.ru/fileservice/file/download/a/115913/sc/300/h/14bc6e3434d9ac5bb7f1b86664fffa68.mp3" />
          <Image src={a} alt="alphabet" margin={'0 auto'} />
        </li>
        <li>
          <h3>
            Послушайте диалог- Ответьте на вопрос: Сколько стоит мобильный
            телефон? Выберите правильный ответ: А или В?
          </h3>
          <AudioPlayer src="https://fs09.getcourse.ru/fileservice/file/download/a/115913/sc/92/h/07349e5e001c0f4c15f6157d13057fff.mp3" />
          <Image src={b} alt="alphabet" margin={'0 auto'} />

          <p>TEST!!!!!!!!!!!!!</p>
        </li>
      </ul>
    </>
  );
};
