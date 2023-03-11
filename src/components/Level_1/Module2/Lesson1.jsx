import ReactPlayer from 'react-player';
import AudioPlayer from 'react-h5-audio-player';
import 'react-h5-audio-player/lib/styles.css';
import { Table1, Table2 } from '../Table';
import { Image, Checkbox, Stack, AspectRatio } from '@chakra-ui/react';

import warum from '../../../image/warum.png';
import wie from '../../../image/wie.png';
import sie from '../../../image/sie.png';
import { Clue } from 'components/Сlue';
import { Table6 } from 'components/Table';

export const Lesson1 = () => {
  return (
    <>
      <h2>1 УРОК - Знакомимся, представляемся Wie? Woher? Wo?</h2>

      <ul>
        <li>
          <h3>
            1.1 Посмотрите обучающее видео- выпишите слова-приветсвия Запомните
            их!
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
          <h3>1.2 Посмотрите видео урок по теме "Знакомство"</h3>
          <ReactPlayer controls={true} url="https://youtu.be/Vl_pDHbIhxg" />
        </li>
        <li>
          <h3>1.З Перепишите в блокнот и запомните вопросительные слова:</h3>
          <Image src={warum} alt="alphabet" margin={'0 auto'} />

          <ReactPlayer controls={true} url="https://youtu.be/_pePp00MnaA" />
        </li>
        <li>
          <h3>1.4 Перепишите диалог вставив слова по смыслу:</h3>
          <Image src={wie} alt="alphabet" margin={'0 auto'} />
        </li>
        <li>
          <h3>1.5 Послушайте аудио файл для проверки: </h3>
          <AudioPlayer src="https://fs09.getcourse.ru/fileservice/file/download/a/115913/sc/258/h/6ba98da9b26938ef1952f594fac7b0a4.mp3" />
        </li>
        <li>
          <h3>1.6 Запомните спряжение глагола "называться" "зовут"</h3>

          <ReactPlayer controls={true} url="https://youtu.be/0-1jsUxuT3Y" />
        </li>
        <li>
          <h3>
            1.7 Напишите в блокноте диалог знакомства, используя слова ниже:
          </h3>
          <p>Wie heißt du/heißen Sie/heißt ihr? </p>
          <p>– Как тебя/Вас зовут?</p>
          <p>Ich heiße...</p>
          <p>– Меня зовут...</p>
          <p>Wie alt bist du/ Wie alt sind Sie? </p>
          <p>– Сколько тебе/Вам лет?</p>
          <p>Ich bin ... (Jahre alt). </p>
          <p>– Мне ... (год/года/лет).</p>
          <p>Wo wohnst du_ Wo wohnen Sie? </p>
          <p>– Где ты живёшь/Вы живёте?</p>
          <p>Ich wohne in...</p>
          <p>– Я живу в...</p>
          <p>Woher kommst du-- Woher kommen Sie?</p>
          <p>– Откуда ты/Вы?</p>
          <p>Ich komme aus... </p>
          <p>– Я из...</p>
        </li>
        <li>
          <h3>1.8 Посмотрите видео урок - КАК представить себя?</h3>

          <ReactPlayer controls={true} url="https://youtu.be/FGJUY5uHb34" />
        </li>
        <li>
          <h3>1.9 Вставьте в диалоги обращение "ВЫ" или "ты":</h3>

          <Image src={sie} alt="alphabet" margin={'0 auto'} />
        </li>
        <li>
          <h3>1.10 Послушайте аудио файл и перескажите диалог знакомства: </h3>

          <AudioPlayer src="https://fs11.getcourse.ru/fileservice/file/download/a/115913/sc/457/h/90e07294520730318305a60fc55ae8a7.mp3" />
        </li>
        <li>
          <h3>
            1.11 Задайте вопросы! На первое место поставьте вопросительное
            слово:Wie? Woher? Wo? Перепишите в блокнот.
          </h3>
          <p>1. Как тебя зовут ? - ___ heisst du?</p>
          <Clue message="Wie" />
          <p>2. Откуда ты приехал? - ____ kommst du?</p>
          <Clue message="Woher" />
          <p>3. Где ты живёшь? - ____ wohnst du? </p>
          <Clue message="Wo" />
          <p>4. Как вас зовут? - Wie ____ Sie?</p>
          <Clue message="heissen" />
          <p>5.Откуда Вы приехали? - Woher ___ Sie?</p>
          <Clue message="kommen" />
          <p>6. Где Вы живёте? - Wo ____ Sie?</p>
          <Clue message="wohnen" />
        </li>
        <li>
          <h3>
            1.12 Послушайте аудио- повторяйте вслух. Запомните название стран.
          </h3>

          <AudioPlayer src="https://fs07.getcourse.ru/fileservice/file/download/a/115913/sc/136/h/4e624ab3f2203bdfeb97845477bb0042.mp4" />
        </li>
        <li>
          <h3>
            1.13 Вставьте по смыслу глаголы в правильной форме. Позиция- на
            втором месте. Перепишите в блокнот.
          </h3>
          <p>1. Petra ____ aus Spanien. </p>
          <Clue message="kommt" />
          <p>2. Ich ____ Angelika. </p>
          <Clue message="hisse" />
          <p>3. Frau Müller ____ in Poland. </p>
          <Clue message="wohnt" />
          <p>4.Ich ____ aus Russland. </p>
          <Clue message="komme" />
          <p>5. ____ du in Berlin? </p>
          <Clue message="wohnst" />
          <p>6. Er____ Thomas. </p>
          <Clue message="heisst" />
          <p>7. Die Lehrerin ____ aus Indien. </p>
          <Clue message="kommt" />
          <p>8. ____ Rudolf aus Deutschland? </p>
          <Clue message="kommt" />
          <p>9. Meine Schwester ____ Sabine. </p>
          <Clue message="heisst" />
          <p>10. Paul und Frank ____ aus Belgien. </p>
          <Clue message="kommen" />
          <p>11. Meine Oma ____ Klara. </p>
          <Clue message="heisst" />
          <p>12.Ich ____ Monika ,und du?. </p>
          <Clue message="heisse" />
        </li>
        <li>
          <h3>1.14 Запомните слова и выражения по теме знакомство.</h3>
          <Table6 />
          <ReactPlayer controls={true} url="https://youtu.be/uUDWR2L1AOA" />
        </li>
        <li>
          <h3>
            1.15 Выпишите и запомните вежливые слова! Используйте их в конце
            встречи и в ПИСЬМЕ на ТЕСТЕ в Гете Институте!
          </h3>
          <ReactPlayer controls={true} url="https://youtu.be/whUAGxesaQA" />
        </li>
        <li>
          <h3>1.16 Новые слова для запоминания:</h3>
          <ul>
            <li>работать- arbeiten</li>
            <li>дома- zu Hause</li>
            <li>чай- tee</li>
            <li>Германия- Deutschland</li>
            <li>рисовать- malen</li>
            <li>писать- schreiben</li>
            <li>жить, проживать- wohnen</li>
            <li>родители- die Eltern</li>
            <li>много- viel</li>
            <li>сегодня- heute</li>
            <li>часто- oft</li>
            <li>по вечерам- Abends</li>
            <li>играть- spielen</li>
            <li>писать- schreiben</li>
            <li>учить- lernen</li>
          </ul>
          <ul>
            <li>ходить- gehen</li>
            <li>когда?- Wann?</li>
            <li>ребёнок- das Kind</li>
            <li>папа- der Vater</li>
            <li>жить- wohnen</li>
            <li>понимаешь- verstehst</li>
            <li>мама- die Mutter</li>
            <li>немецкий курс - Deutschkurs</li>
            <li>писать- schreiben</li>
            <li>правильно- richtig</li>
            <li>Как поживаете? - Wie geht' s? </li>
            <li>Спасибо, хорошо - Danke, gut </li>
            <li>Спасибо - Danke </li>
            <li>Большое спасибо | Vielen Dank </li>
            <li>Хорошо | Gut </li>
          </ul>
          <ReactPlayer controls={true} url="https://youtu.be/y3qnFUT_zHY" />
        </li>
        <li>
          <h3>
            1.17 Устная часть ТЕСТА А1 в Гете Институте!!! Послушайте аудио с
            фразами для знакомства. Повторяйте вслух.
          </h3>
          <AudioPlayer src="https://fs09.getcourse.ru/fileservice/file/download/a/115913/sc/194/h/dd76fb65388330ae78cbdc1e103c3358.mp4" />
        </li>
        <li>
          <h3>
            1.18 Посмотрите обучающее видео и напишите письменно рассказ о себе
          </h3>
          <ReactPlayer controls={true} url="https://youtu.be/_Q5dx1zyzNg" />
        </li>
        <p>
          1️⃣ диалог: - как Вас зовут? - меня зовут… - откуда Вы приехали? - я
          приехала из ( aus) назовите вашу страну - Где Вы живёте? - я живу в (
          in) назовите ваш город
        </p>
        <p>
          2️⃣ постройте вопросительные предложения: - где ты учишь немецкий? -
          как ты работаешь? - где Вы пьёте кофе?
        </p>
      </ul>
    </>
  );
};
