import ReactPlayer from 'react-player';
import AudioPlayer from 'react-h5-audio-player';
import 'react-h5-audio-player/lib/styles.css';

import { Image } from '@chakra-ui/react';

import abc from '../../../image/abc.jpg';
import { Clue } from 'components/Сlue';

export const Lesson1 = () => {
  return (
    <>
      <h2>1 УРОК - Алфавит</h2>
      <h3>
        Внимание! Более подробный разбор тем вводного урока даны в отдельном
        МИНИ- курсе для начинающих "С нуля- АО"- рекомендуется сначала изучить
        все эти темы там, т.к. здесь уже краткий повтор
      </h3>
      <ul>
        <li>
          <h3>1.1 Прослушайте аудио - Алфавит. Повторяйте вслух!</h3>
          <AudioPlayer src="https://fs09.getcourse.ru/fileservice/file/download/a/115913/sc/333/h/0ab89e4ca8c32cbbd6c7b556c1038d8d.mp3" />
        </li>
        <li>
          <h3>1.2 Запомните название букв в АЛФАВИТЕ!</h3>
          <Image src={abc} alt="alphabet" margin={'0 auto'} />
        </li>
        <li>
          <h3>
            1.З Выберете правильный ответ - как пишутся паспортные данные
            Госпожи Ковальской?
          </h3>
          <p>
            Послушайте диалог и выпишите, как называют по буквам
            (buchstabieren)!
          </p>
          <AudioPlayer src="https://fs08.getcourse.ru/fileservice/file/download/a/115913/sc/148/h/6b5c9a8a44f331e9d2501da18889e03c.mp3" />

          <Clue message="Kowalska Magdalena" />
        </li>
        <li>
          <h3>
            1.4 Назовите ваше имя и фамилию по буквам! Buchstabieren Sie bitte!
          </h3>
          <AudioPlayer src="https://fs11.getcourse.ru/fileservice/file/download/a/115913/sc/214/h/42dfc5b12945ef76d6f526e297bf238f.m4a" />

          <ReactPlayer controls={true} url="https://youtu.be/F_y4nZybZVY" />
        </li>
      </ul>
    </>
  );
};
