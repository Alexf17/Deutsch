import ReactPlayer from 'react-player';
import 'react-h5-audio-player/lib/styles.css';
import { Image } from '@chakra-ui/react';

import why from '../../../image/why.png';

export const Lesson1 = () => {
  return (
    <>
      <h2>1 УРОК -Построение вопросительных предложений</h2>
      <ul>
        <li>
          <h3>1.1 Посмотрите видео урок. Повторяйте вслух все новые слова!</h3>
          <ReactPlayer controls={true} url="https://youtu.be/rkvDjRJdwT0" />
        </li>
        <li>
          <h3>
            1.2 Постройте вопросительные предложения по образцу! Начинайте
            вопрос всегда с глагола:
          </h3>
          <p>Пример (Beispiel):</p>
          <p>
            (du, gehen, heute, ins Kino)?- Gehst __du heute ins Kino?- Ты идёшь
            сегодня в кино?
          </p>
          <p>
            1. Вы живёте в Германии ? (ihr, wohnen, in Deutschland)- 1. ______
            ihr in Deutschland?
          </p>
          <p>
            2. Марина работает по вечерам? (arbeiten, Marina, Abends)? 2. _____
            Marina Abends?
          </p>
          <p>3. Он рисует портрет? ( malen. er) 3. _____ er ein Porträt? </p>
          <p>
            4. Родители живут в Баварии? ( Eltern, wohnen) 4. ____ Eltern in
            Bayern.
          </p>
          <p>
            5. Госпожа Бекер, Вы плаваете в бассейне? (schwimmen,Sie) 5. ______
            Sie im Schwimmbad?
          </p>
          <p>
            6. Отец часто играет в футбол? (der Vater, spielen, Fussbal,oft) 6.
            _____ der Vater Fussbal oft?{' '}
          </p>
        </li>
        <li>
          <h3>
            1.3 Постройте предложения на немецком, помните о правильных
            окончаниях глаголов. Чтобы задать вопрос- ставьте глагол всегда на
            первое место!
          </h3>
          <p>
            Образец: Мы идём на немецкий курс? (wir, gehen, zum
            Deutschkurs)-Gehen wir zum Deutschkurs?
          </p>
          <p>1. Ты плаваешь часто? (schwimmen, oft, du)- 1. </p>
          <p>2. Он много работает? (er, arbeiten, viel)- 2.</p>
          <p>3.Вы пишите немецкий? (Deutsch, ihr, schreiben)- 3</p>
          <p>4.Она часто пьёт чай? (oft, sie, trinken, Tee)- 4. </p>
          <p>5. Он рисует дома? (malen, zu Hause, er) - 5. </p>
          <p>6. Мы живём в Германии?(wohnen, wir, in Deutschland)- 6. </p>
        </li>
        <li>
          <h3>1.4 Выучите по картинке возможные варианты реагирования:</h3>
          <Image src={why} alt="alphabet" margin={'0 auto'} />
        </li>
        <li>
          <h3>1.5 Новые слова для запоминания:</h3>
          <p>работать- arbeiten</p>
          <p>дома- zu Hause</p>
          <p>чай- Tee</p>
          <p>Германия- Deutschland</p>
          <p>рисовать- malen</p>
          <p>писать- schreiben</p>
          <p>жить, проживать- wohnen</p>
          <p>родители- die Eltern</p>
          <p>много- viel</p>
          <p>сегодня- heute</p>
          <p>часто- oft</p>
          <p>по вечерам- Abends</p>
          <p>играть- spielen</p>
          <p>писать- schreiben</p>
        </li>
        <li>
          <h3>
            1.6 Посмотрите видео - выпишите все слова к теме "Благодарность"
            СПАСИБО!
          </h3>
          <ReactPlayer controls={true} url="https://youtu.be/whUAGxesaQA" />
        </li>
        <li>
          <h3>
            1.7 Посмотрите видео - запомните слова_ которые мы используем в
            качестве прощания!
          </h3>
          <ReactPlayer controls={true} url="https://youtu.be/1yV8H0OSU1A" />
        </li>
      </ul>
    </>
  );
};
