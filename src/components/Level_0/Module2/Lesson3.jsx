import ReactPlayer from 'react-player';

import 'react-h5-audio-player/lib/styles.css';
import { Image } from '@chakra-ui/react';

import weak from '../../image/weak.png';
import { Clue } from 'components/Сlue';

export const Lesson3 = () => {
  return (
    <>
      <h2>3 УРОК - Склонение глаголов на d t</h2>
      <ul>
        <li>
          <h3>3.1 Посмотрите видео. Запомните склонение глаголов</h3>

          <ReactPlayer controls={true} url="https://youtu.be/-Jnh7Dkk118" />
        </li>
        <li>
          <h3>
            3.2 Выпишите склонение глаголов на d t- запомните особенность этих
            глаголов- на du; er; sie; es; ihr- добавляем всегда Е!
          </h3>
          <Image src={weak} alt="alphabet" margin={'0 auto'} />
        </li>
        <li>
          <h3>3.3 Просклоняйте глагол:</h3>
          <p>reden (общаться, раговаривать)</p>
          <Clue message="ich rede-   du redest - er redet-  wir reden- ihr redet- Sie reden" />
          <p>baden ( купаться)</p>
          <Clue message="ich bade- du badest-er badet-wir baden-  ihr badet- Sie baden" />
          <p>schneiden ( разрезать, резать)</p>
          <Clue message="ich schneiden- du schneidest-  er schneidet-  wir  schneiden-  ihr schneidet -- Sie shneiden" />
          <p>arbeiten (работать)</p>
          <Clue message="ich arbeite -  du arbeitest -   er arbeitet -  wir arbeiten- ihr arbeitet-   Sie arbeiten" />
        </li>
        <li>
          <h3>
            3.4 Посмотрите виде- выпишите себе слова по теме "Извиниться"
            Используйте их в качестве "ПЕРЕСПРОСИТЬ"- если вы что-то не
            расслышали и хотите переспросить: "Entschuldigung"?
          </h3>
          <ReactPlayer controls={true} url="https://youtu.be/y3qnFUT_zHY" />
        </li>
        <p>TEST !!!</p>
      </ul>
    </>
  );
};
