import ReactPlayer from 'react-player';

import 'react-h5-audio-player/lib/styles.css';
import { Image } from '@chakra-ui/react';

import sprechen from '../../../image/sprechen.png';
import geben from '../../../image/geben.png';
import lesen from '../../../image/lesen.png';
import strong from '../../../image/strong.png';

export const Lesson5 = () => {
  return (
    <>
      <h2>5 УРОК - Как задать вопрос</h2>
      <h3>
        Внимание! Более подробный разбор тем вводного урока даны в отдельном
        курсе для начинающих "С нуля- АО"- рекомендуется сначала изучить все эти
        темы там, т.к. здесь уже краткий повтор.
      </h3>
      <ul>
        <li>
          <h3>
            5.1 Посмотрите видео урок по теме: Построение вопросительных
            предложений
          </h3>
          <ReactPlayer controls={true} url="https://youtu.be/rkvDjRJdwT0" />
        </li>
        <li>
          <h3>5.2 Посмотрите видео урок по теме "Сильные глаголы</h3>
          <ReactPlayer controls={true} url="https://youtu.be/tq1oy181Agw" />
        </li>
        <li>
          <h3>5.3 Перепишите в ваш блокнот спряжение глагола ГОВОРИТЬ.</h3>
          <p>Постройте вопрос: Ты говоришь на немецком?</p>

          <Image src={sprechen} alt="alphabet" margin={'0 auto'} />
        </li>
        <li>
          <h3>5.4 Запомните склонение глагола ДАВАТЬ!.</h3>
          <p>Как вы скажите: ОН даёт.</p>
          <Image src={geben} alt="alphabet" margin={'0 auto'} />
        </li>
        <li>
          <h3>
            5.5 Глагол ЧИТАТЬ тоже неправильный. Запомните переход в корне E - i
          </h3>
          <Image src={lesen} alt="alphabet" margin={'0 auto'} />
        </li>
        <li>
          <h3>
            5.6 Перепишите таблицу и запомните особые формы глаголов во 2 и 3
            лице.
          </h3>
          <Image src={strong} alt="alphabet" margin={'0 auto'} />
        </li>
        <li>
          <h3>5.7 Рекомендуемые слова и выражения:</h3>
          <ul>
            <li>Familienname, Name- фамилия</li>
            <li>Vorname - имя</li>
            <li>hören - слушать</li>
            <li>sprechen - говорить</li>
            <li>lernen -учить/изучать</li>
            <li>kommen(aus) - приехать от куда-то (из)</li>
            <li>wohnen - жить</li>
            <li>arbeiten - работать</li>
            <li>sagen - говорить</li>
            <li>freuen - радоваться</li>
            <li>korrigieren - исправлять (ошибки)</li>
            <li>fragen - спрашивать</li>
            <li>kosten - стоить (сколько?)</li>
            <li>wie - как</li>
            <li>woher - от куда</li>
            <li>ergänzen - отметить (задание)</li>
          </ul>
          <ul>
            <li>lesen- читать</li>
            <li>Land - страна</li>
            <li>Stadt - город</li>
            <li>Sprachen - языки </li>
            <li>der Artzt - врач</li>
            <li>der Freund(in) - друг/ подруга</li>
            <li>die Lehrer(in) - учитель/ учительница</li>
            <li>das Fenster - окно</li>
            <li>groß/klein - большой/ маленький</li>
            <li>das Kind - ребенок</li>
            <li>die Schule - школа</li>
            <li>die Tochter - дочь</li>
            <li>der Vater - отец</li>
            <li>zu Hause - дома </li>
            <li>schon- уже</li>
            <li>hier - здесь</li>
          </ul>
        </li>
        <p>
          Изучите на онлайн платформе 1-5 уроки🏃🏼‍♀️🏃🏼‍♀️🇩🇪🇩🇪 После этого пришлите
          голосовые ответы к заданиям на проверку: 1️⃣ измените по лицам глагол
          «понимать» verstehen ( я понимаю, ты понимаешь и т.д) 2️⃣ разложите по
          буквам Вашу фамилию: ( buchstabieren Sie bitte) Mein Name ist … 3️⃣
          сформулируйте вопросы: - ты пьёшь воду? ( trinken, Wasser) - она живёт
          в Берлине? ( in Berlin, wohnen) - Вы учите немецкий? ( lernen, Sie,
          Deutsch) Желаю всем прекрасного дня ТЕСТ после вводного урока
        </p>
      </ul>
    </>
  );
};
