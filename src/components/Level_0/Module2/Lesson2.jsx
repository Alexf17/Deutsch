import ReactPlayer from 'react-player';
import AudioPlayer from 'react-h5-audio-player';
import 'react-h5-audio-player/lib/styles.css';
import { Image } from '@chakra-ui/react';

import prasent from '../../image/prasen.png';
import { Clue } from 'components/Сlue';

export const Lesson2 = () => {
  return (
    <>
      <h2>2 УРОК- Как правильно склонять слабые глаголы</h2>
      <ul>
        <li>
          <h3>
            2.1 Посмотрите видео урок. Запомните окончания глаголов по лицам.
          </h3>

          <ReactPlayer controls={true} url="https://youtu.be/yP3GEFPta1s" />
        </li>
        <li>
          <h3>
            2.2 Перепишите себе в блокнот правило склонения глаголов по лицам.
          </h3>
          <Image src={prasent} alt="alphabet" margin={'0 auto'} />
        </li>
        <li>
          <h3>
            2.3 Проспрягайте в вашем блокноте минимум 5-10 слов по образцу в
            таблице , чтобы запомнить окончания:
          </h3>
          <p>Brauchen- нуждаться</p>
          <p>Kommen- приходить</p>
          <p>Heissen- называться</p>
          <p>Bringen- приносить</p>
          <p>Fotografieren- фотографировать</p>
          <p>Kaufen- покупать</p>
        </li>
        <li>
          <h3>
            2.4 Послушайте аудио и запомните склонение глаголов читать (lesen)и
            писать (schreiben) -повторяйте вслух!
          </h3>
          <AudioPlayer src="https://fs14.getcourse.ru/fileservice/file/download/a/115913/sc/372/h/2cbaea18ba49dd1bd8d7c09508e332ad.mp4" />
        </li>
        <li>
          <h3>
            2.5 Постройте предложения по-немецки, изменяя глагол в зависимости
            от лица:
          </h3>
          <p>1. Я иду- gehen </p>
          <Clue message="ich gehe" />
          <p>2. Он пишет -schreiben</p>
          <Clue message="er schreibt" />
          <p>3. Мы живём -wohnen</p>
          <Clue message="wr wohnen" />
          <p>4. Вы пришли- kommen</p>
          <Clue message="Sie kommen" />
          <p>5. Я покупаю- kaufen</p>
          <Clue message="ich kaufe" />
        </li>
      </ul>
    </>
  );
};
