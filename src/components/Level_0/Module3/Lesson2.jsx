import ReactPlayer from 'react-player';
import AudioPlayer from 'react-h5-audio-player';
import 'react-h5-audio-player/lib/styles.css';
import { Image } from '@chakra-ui/react';

import smile from '../../image/smile.png';

export const Lesson2 = () => {
  return (
    <>
      <h2>2 УРОК - Как дела? Приветствие!</h2>
      <ul>
        <li>
          <h3>2.1 Посмотрите видео- запомните диалог приветствия!</h3>

          <ReactPlayer controls={true} url="https://youtu.be/UFTUPmj5LI8" />
        </li>
        <li>
          <h3>
            2.2 Послушайте два диалога. Распознайте "смайлики" у говорящих: Как
            у них дела?
          </h3>
          <AudioPlayer src="https://fs14.getcourse.ru/fileservice/file/download/a/115913/sc/325/h/f7cd702402f6310c17e7f32bcccdfc5c.mp3" />
        </li>
        <li>
          <h3>2.3 Строим диалог: "Как дела?"</h3>
          <ReactPlayer controls={true} url="https://youtu.be/i73iHvQqxSY" />
        </li>
        <li>
          <h3>
            2.4 Посмотрите видео и выпишите себе в блокнот все слова- которые
            помогут вам передать настроение
          </h3>
          <ReactPlayer controls={true} url="https://youtu.be/nstmCGxNghI" />
        </li>
        <li>
          <h3>2.5 Запомните фразы на немецком!</h3>
          <Image src={smile} alt="alphabet" margin={'0 auto'} />
        </li>
        <li>
          <h3>2.6 Выпишите себе все слова- благодарности! запомните их!</h3>
          <ReactPlayer controls={true} url="https://youtu.be/whUAGxesaQA" />
        </li>
        <li>
          <h3>
            2.7 Посмотрите видео- выпишите себе варианты Прощаний после встречи!
            запомните их!
          </h3>
          <ReactPlayer controls={true} url="https://youtu.be/1yV8H0OSU1A" />
        </li>
      </ul>
      <p>TEST !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!</p>
    </>
  );
};
