import ReactPlayer from 'react-player';
import AudioPlayer from 'react-h5-audio-player';
import 'react-h5-audio-player/lib/styles.css';

import { Image } from '@chakra-ui/react';

import number from '../../image/number.png';

export const Lesson1 = () => {
  return (
    <>
      <h2>1 УРОК - Тема ЦИФРЫ от 1- 900</h2>
      <ul>
        <li>
          <h3>1.1 Посмотрите несколько раз видео. Повторяйте вслух цифры!</h3>
          <ReactPlayer controls={true} url="https://youtu.be/NiVi209J4aM" />
        </li>
        <li>
          <h3>1.2 Учимся считать цифры от 21-99</h3>

          <ReactPlayer controls={true} url="https://youtu.be/ybqi8DG42E4" />
        </li>
        <li>
          <h3>
            1.З Перепишите, пожалуйста, в Ваши красивые блокноты цифры и
            постарайтесь их хорошо запомнить!!
          </h3>
          <Image src={number} alt="alphabet" margin={'0 auto'} />

          <ReactPlayer controls={true} url="https://youtu.be/CwHL8COVezU" />
        </li>
        <li>
          <h3>1.4 Послушайте аудио файл и назовите цифры от 0 до 12:</h3>
          <AudioPlayer src="https://fs10.getcourse.ru/fileservice/file/download/a/115913/sc/480/h/c8e2d5da9ae0faab4974bcca48e1f76a.mp3" />
        </li>
        <li>
          <h3>1.5 Выпишите себе в блокнот цифры на немецком!</h3>
          <p>три _____</p>
          <p>одиннадцать ____</p>
          <p>семь _____</p>
          <p>десять _____</p>
          <p>три _____</p>
          <p>двенадцать ____</p>
          <p>шесть _____</p>
          <p>четыре ____</p>
          <p>восемь ____</p>
          <p>пять ____</p>
          <p>девять ____</p>
          <p>один _____</p>
        </li>
        <li>
          <h3>1.6 Послушайте аудио файл:</h3>
          <AudioPlayer src="https://fs10.getcourse.ru/fileservice/file/download/a/115913/sc/211/h/07dfa6b1b99bf2648264f9e354e91c5e.mp3" />
        </li>
        <li>
          <h3>1.7 Запомните цифры до 900:</h3>
          <h5>Второй интервал для запоминания- от 13-19.</h5>
          <h5>Используйте при образовании этих чисел суффикс -zehn!!</h5>
          <p>13- dreizehn</p>
          <p>14-vierzehn</p>
          <p>15-fünfzehn</p>
          <p>16-sechzehn</p>
          <p>17-siebzehn</p>
          <p>18- achtzehn</p>
          <p>19-neunzehn</p>
          <h5>Третий интервал: 20-90</h5>
          <h5>Запомните суффикс -zig!</h5>
          <p>20- zwanzig</p>
          <p>30- dreizig</p>
          <p>40- vierzig</p>
          <p>50 -fünfzig</p>
          <p>60 -sechzig</p>
          <p>70- siebzig</p>
          <p>80- achtzig</p>
          <p>90- neunzig</p>
          <h5>Последний интервал: 100-900</h5>
          <h5>Запомните слово HUNDERT!!</h5>
          <p>100- ein Hundert</p>
          <p>200- zwei Hundert</p>
          <p>300- drei Hundert</p>
          <p>400- vier Hundert</p>
          <p>500-fünf Hundert</p>
          <p>600-sechs Hundert</p>
          <p>700-sieben Hundert</p>
          <p>800-acht Hundert</p>
          <p>900- neun Hundert</p>
        </li>
      </ul>
    </>
  );
};
