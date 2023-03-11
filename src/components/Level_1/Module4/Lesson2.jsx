import ReactPlayer from 'react-player';
import AudioPlayer from 'react-h5-audio-player';
import 'react-h5-audio-player/lib/styles.css';
import { Image } from '@chakra-ui/react';

import malls from '../../../image/malls.png';
import comp from '../../../image/comp.png';
import was from '../../../image/was-costet.png';
import velo from '../../../image/velo.png';
import cost from '../../../image/cost.png';
import tv from '../../../image/tv.png';
import los from '../../../image/los.png';

import { Table10 } from 'components/Table';
import { Clue } from 'components/Сlue';

export const Lesson2 = () => {
  return (
    <>
      <h2>2 УРОК - Как вести диалог при покупке?</h2>
      <ul>
        <li>
          <h3>
            2.1 Посмотрите видео по теме урока. Повторяйте вслух слова из
            диалога:
          </h3>
          <ReactPlayer controls={true} url="https://youtu.be/vQfL_H9iceM" />
        </li>
        <li>
          <h3>
            2.2 Посмотрите видео- обязательно выпишите все важные слова-синонимы
            к теме!!! Эти слова все будут встречаться на ТЕСТЕ А1 в Гете
            Институте
          </h3>
          <ReactPlayer controls={true} url="https://youtu.be/dO_N9TinngM" />
        </li>
        <li>
          <h3>2.3 (дополнительное задание) Запомните названия магазинов:</h3>
          <Image src={malls} alt="alphabet" margin={'0 auto'} />

          <ReactPlayer controls={true} url="https://youtu.be/YD9LPeXp46I" />
        </li>
        <li>
          <h3>2.4 Запомните основные фразы для диалога покупки!</h3>
          <Table10 />
        </li>
        <li>
          <h3>2.5 Выпишите и запомните некоторые предметы.</h3>
          <Image src={comp} alt="alphabet" margin={'0 auto'} />
        </li>
        <li>
          <h3>2.6 Послушайте 3 диалога к упражнению ниже. </h3>
          <p>Определите: 1.Что покупают? 2.Сколько стоит? 3. Берут или нет?</p>
          <AudioPlayer src="https://fs09.getcourse.ru/fileservice/file/download/a/115913/sc/116/h/fe9b1ea34462c8504ff173869c19e682.mp3" />
          <Image src={was} alt="alphabet" margin={'0 auto'} />
          <p>Dialog 1</p>
          <Clue message="-sie kauft die Lampe.  Die lampe kostet nur 20 Euro. es ist sehr teuer. (женщина планирует купить лампуб- она стоит ТОЛЬКО 20 евро. Это очень дорого- то есть не берёт!)" />
          <p>Dialog 2</p>
          <Clue message="-sie sieht einen Drücker. er kostet nur 5 Euro. Er ist kaputt (er funktioniert nicht)  -  Посмотри ка ! Этот принтер такой дешёвый- он стоит всего 5 евро- наверное, он поломан)- то есть не берут принтер!" />
          <p>Dialog 3</p>
          <Clue message="-der Fernseher kostet 180 E; Er kostet sehr viel. Sie kauft für 140 Euro" />
        </li>
        <li>
          <h3>2.7 Выпишите и запомните некоторые предметы.</h3>
          <ReactPlayer controls={true} url="https://youtu.be/bFFjDiajsoU" />
        </li>
        <li>
          <h3>
            2.8 Ситуация : "Вы ищите в интернете дешёвый велосипед " На каком
            сайте вы сможете найти: а или б?
          </h3>
          <Image src={velo} alt="alphabet" margin={'0 auto'} />
          <Clue message="правильно сайт А" />
        </li>
        <li>
          <h3>2.9 Запомните слова и выражения!</h3>
          <p>• Евро (валюта) — Euro (ойро)</p>
          <p>• Сколько стоит ...? — Was kostet ...?</p>
          <p>• Я ищу ... (нуждаюсь) — Ich brauche... (ихь браухэ...)</p>
          <p>• Я ищу ... — Ich suche (ихь зухэ)</p>
          <p>
            • Я хочу, я бы желал ... — Ich m?chte… (ихь мёхтэ…). Например, в
            кафе: Ich m?chte ein Hamburger fur zwei euro — Я хочу (один)
            гамбургер за два евро
          </p>
          <p>• Дайте мне ... — Geben Sie mir... (гебен зи мир...)</p>
          <p>• Дорогой — teuer (тойе(р))</p>
          <p>• Дешевый — billig (биллихь)</p>
          <p>• Размер (обежды, обуви) — Grösse (грёсэ); Nummer (нуммер)</p>
          <p>• Больше — grösser (грёсе)</p>
          <p>• Меньше — kleiner (кляйне)</p>
          <p>• Примерочная — Anprobekabine (апробекабине)</p>
          <p>• Это слишком дорого — Das ist zu teuer (дас ист цу тойер)</p>
          <p>
            • Есть это другого размера (цвета)? — Gibt es das in einer anderen
            GruBe (Farbe)? (Гибт эс дас ин айне андерен грюбе (фарбе))?
          </p>
          <p>• Я беру (покупаю) это — Ich nehme es (ихь неме эс)</p>
          <p>
            • Kreditkarte — кредитка, карта (если покупали билет по карте, то,
            кроме билета, могут попросить предъявить карточку и паспорт, чтобы
            владелец карты и предъявитель билета совпадали)
          </p>
          <p>• Счет, чек — Rechnung (рехьнунг)</p>
          <p>
            • У вас есть батарейки? — Haben Sie Batterien? (Хабен зи баттериен)?
          </p>

          <ReactPlayer controls={true} url="https://youtu.be/AtVdTuyrXJg" />
        </li>
        <li>
          <h3>
            2.10 Послушайте 2 раза аудио файл. Выберите правильный ответ: А, В,
            С?
          </h3>
          <p>Сколько стоит пальто der Mantel?</p>
          <AudioPlayer src="https://fs11.getcourse.ru/fileservice/file/download/a/115913/sc/286/h/38c02eed48db3ac3928cd91bd3c2f219.mp3" />

          <Image src={cost} alt="alphabet" margin={'0 auto'} />
          <Clue message="правильно C" />
        </li>
        <li>
          <h3>
            2.11 Послушайте 6 диалогов ( 1 пример+ 5 заданий) Ответьте на
            вопросы ДА или Нет
          </h3>
          <Image src={tv} alt="alphabet" margin={'0 auto'} />
          <p>Ножницы дешёвые?</p>
          <AudioPlayer src="https://fs09.getcourse.ru/fileservice/file/download/a/115913/sc/203/h/bb1c755f9adbfe3843906a365d33379d.mp3" />
          <Clue message="да! ( не звучит слово billig; aber nicht viel; Schnäpchen" />
          <p>Телевизор поломанный?</p>
          <AudioPlayer src="https://fs09.getcourse.ru/fileservice/file/download/a/115913/sc/31/h/8d3ecf27625df81ddface1cde4c68efe.mp3" />
          <Clue message="falsch!  Der Fernseher funktioniert gut" />
          <p>Радио дешевое?</p>
          <AudioPlayer src="https://fs10.getcourse.ru/fileservice/file/download/a/115913/sc/283/h/1ae9d0eb9e03d1a943d0c4d8a1d685e4.mp3" />
          <Clue message="richtig ) preiswert = billig" />
          <p>Женщина покупает велосипед?</p>
          <AudioPlayer src="https://fs10.getcourse.ru/fileservice/file/download/a/115913/sc/59/h/b7f19bb260355e396bc465082f9605b8.mp3" />
          <Clue message="richtig! Ich nehme oder Ich kaufe  oder Ich bezahle ( да, она берёт то есть покупает или она может сказать " Я плачу")" />
          <p>Лампа работает нормально - да? или нет?</p>
          <AudioPlayer src="https://fs11.getcourse.ru/fileservice/file/download/a/115913/sc/437/h/950ebc7beb06abe94af7391d2bd9fb7c.mp3" />
          <Clue message="richtig! ja, klar Да, конечно работает" />
          <p>Женщина берёт холодильник?</p>
          <AudioPlayer src="https://fs07.getcourse.ru/fileservice/file/download/a/115913/sc/483/h/0ce927dcb742dff95cd6cbde3c07e0dd.mp3" />
          <Clue message="falsch!  es ist teuer" />
        </li>
        <li>
          <h3>
            2.12 Посмотрите видео по теме образования прилагательных с частичкой -los
          </h3>
          <ReactPlayer controls={true} url="https://youtu.be/tQ2vYDi_1FI" />

          <Image src={los} alt="alphabet" margin={'0 auto'} />

        </li>
        <li>
          <h3>
            2.13 Запомните слово KUNDE - KUNDIN
            перевод может быть разным- в зависимости от ситуации:
          </h3>
          <ReactPlayer controls={true} url="https://youtu.be/mXlo4KW7I7s" />

        </li>
        <p>1️⃣ диалог:
          - добрый день) это телевизор?
          - нет, это не телевизор, это- монитор.
          - он работает?
          - да, он работает хорошо.
          - сколько он стоит?
          - он стоит 215 евро;
          - о! Дорого! Нет, я не покупаю.

          2️⃣ назовите все слова- синонимы к слову « дёшево»

          3️⃣ карточки: любой вопрос- ответ к словам:
          - nehmen;
          - kaufen;
          - möchten
        </p>
      </ul>
    </>
  );
};
