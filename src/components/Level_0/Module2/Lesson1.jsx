import ReactPlayer from 'react-player';
import AudioPlayer from 'react-h5-audio-player';
import 'react-h5-audio-player/lib/styles.css';

import { Image } from '@chakra-ui/react';

import pronomen from '../../image/pronomen.jpg';
import ich from '../../image/ich.png';

export const Lesson1 = () => {
  return (
    <>
      <h2>1 УРОК - Личные местоимения -я.ты.он.она..</h2>
      <ul>
        <li>
          <h3>
            1.1 Посмотрите видео урок, запишите себе в блокнот все новые слова!
          </h3>
          <ReactPlayer
            controls={true}
            url="https://www.youtube.com/watch?v=7OKQ-oGtdbQ"
          />
        </li>
        <li>
          <h3>
            1.2 Перепишите пока себе в блокнот личные местоимения только из
            первой колонки!!!!! (остальные производные формы ждут нас позже){' '}
          </h3>
          <Image src={pronomen} alt="alphabet" margin={'0 auto'} />
          <ReactPlayer
            controls={true}
            url="https://www.youtube.com/watch?v=TkBMeBkLEfo"
          />
        </li>
        <li>
          <h3>
            1.З Попробуйте назвать личные местоимения в разброс, в зависимости
            от соотношения с существительным. Например:
          </h3>
          <p>der Bruder- er- он</p>
          <p>das Auto- es- оно</p>
          <p>die Mutter- sie- она</p>
          <p>die Eltern- sie- они</p>
        </li>
        <li>
          <h3>1.4 Послушайте аудио, повторяйте вслух!</h3>
          <AudioPlayer src="https://fs10.getcourse.ru/fileservice/file/download/a/115913/sc/194/h/97093f24fa60a48f8ee13cdae4133b55.mp4" />
        </li>
        <li>
          <h3>1.5 Прочитайте слова и запомните их!</h3>
          <p>Я – ich</p>
          <p>Я и ты – ich und du</p>
          <p>Мы оба / Мы обе – wir beide</p>
          <p>Он – er</p>
          <p>Он и она – er und sie</p>
          <p>Они оба – sie beide</p>
          <p>Мужчина – der Mann- er</p>
          <p>Женщина – die Frau- sie</p>
          <p>Ребёнок – das Kind- es</p>
          <p>Семья – eine Familie- sie</p>
          <p>Моя семья – meine Familie- sie</p>
          <p> Моя семья здесь – Meine Familie ist hier</p>
          <p>Я здесь – Ich bin hier</p>
          <p>Ты здесь – Du bist hier</p>
          <p>Он здесь и она здесь – Er ist hier und sie ist hier</p>
          <p>Мы здесь – Wir sind hier</p>
          <p>Вы здесь – Ihr seid hier</p>
          <p>Они все здесь – Sie sind alle hier</p>
        </li>
        <li>
          <h3>
            1.6 Перепишите в ваш блокнот склонение глагола- (жить) wohnen{' '}
          </h3>
          <p>Ich wohn + e – я живу</p>
          <p>Du wohn + st – ты живешь</p>
          <p>Er, sie, es wohn + t – он, она, оно живет</p>
          <p>Wir wohn + en – мы живем</p>
          <p>Ihr wohn + t – вы живете</p>
          <p>Sie, sie wohn + en – Вы живете, они живут</p>
        </li>
        <li>
          <h3>
            1.7 Посмотрите видео урок и запомните слова- Они нужны, если Вам
            нужно что-то переспросить.
          </h3>

          <ReactPlayer controls={true} url="https://youtu.be/y3qnFUT_zHY" />
          <Image src={ich} alt="alphabet" margin={'0 auto'} />
        </li>
        <li>
          <h3>1.8 Изучите тему- вспомогательный глагол БЫТЬ- SEIN</h3>
          <ReactPlayer controls={true} url="https://youtu.be/bgQT3eTreNs" />
          <ReactPlayer controls={true} url="https://youtu.be/tr9WDLdSBao" />
        </li>
      </ul>
    </>
  );
};
