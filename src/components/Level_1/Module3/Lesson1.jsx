import ReactPlayer from 'react-player';
import AudioPlayer from 'react-h5-audio-player';
import 'react-h5-audio-player/lib/styles.css';
import { Table1, Table2 } from '../Table';
import { Image, Checkbox, Stack, AspectRatio } from '@chakra-ui/react';

import zwei from '../../../image/null.png';
import num from '../../../image/num.png';
import num1 from '../../../image/num1.png';
import beisp from '../../../image/beisp.png';
import richtig from '../../../image/richtig.png';
import { Clue } from 'components/Сlue';
import { Table6 } from 'components/Table';

export const Lesson1 = () => {
  return (
    <>
      <h2>1 УРОК - Цифры</h2>

      <ul>
        <li>
          <h3>1.1 Посмотрите видео урок! Повторяйте каждое число три раза!</h3>
          <ReactPlayer controls={true} url="https://youtu.be/NiVi209J4aM" />
        </li>
        <li>
          <h3>1.2 Послушайте аудио файл! Повторяйте цифры вслух от 0- до 12</h3>
          <AudioPlayer src="https://fs09.getcourse.ru/fileservice/file/download/a/115913/sc/480/h/c8e2d5da9ae0faab4974bcca48e1f76a.mp3" />
        </li>
        <li>
          <h3>
            1.З Перепишите цифры от 0-12 в блокнот, запомните правописание:
          </h3>
          <Image src={zwei} alt="alphabet" margin={'0 auto'} />
        </li>
        <li>
          <h3>1.4 Переведите цифры на немецком!</h3>
          <p>три </p>
          <p>одиннадцать </p>
          <p>семь </p>
          <p>десять </p>
          <p>двенадцать </p>
          <p>шесть </p>
          <p>четыре </p>
          <p>восемь </p>
          <p>пять </p>
          <p>девять </p>
          <p>один </p>
        </li>
        <li>
          <h3>1.5 Посмотрите видео урок по теме: Цифры от 21-99:</h3>
          <ReactPlayer controls={true} url="https://youtu.be/ybqi8DG42E4" />
          <ReactPlayer controls={true} url="https://youtu.be/CwHL8COVezU" />
        </li>
        <li>
          <h3>
            1.6 Послушайте аудио к тексту ниже и повторяйте вслух! от 13- 200!
          </h3>

          <AudioPlayer src="https://fs09.getcourse.ru/fileservice/file/download/a/115913/sc/250/h/d22eb7598eba387fd323e225fc5af456.mp3" />
        </li>
        <li>
          <h3>1.7 Пропишите правильно название каждого числа из текста:</h3>
          <Image src={num} alt="alphabet" margin={'0 auto'} />
          <Image src={num1} alt="alphabet" margin={'0 auto'} />
        </li>
        <li>
          <h3>1.8 Запомните цифры до 900:</h3>
          <p>Второй интервал для запоминания- от 13-19.</p>
          <p>Используйте при образовании этих чисел суффикс -zehn!!</p>
          <p>13- dreizehn</p>
          <p>14-vierzehn</p>
          <p>15-fünfzehn</p>
          <p>16-sechzehn</p>
          <p>17-siebzehn</p>
          <p>18- achtzehn</p>
          <p>19-neunzehn</p>
          <p>Третий интервал: 20-90</p>
          <p>Запомните суффикс -zig!</p>
          <p>20- zwanzig</p>
          <p>30- dreißig</p>
          <p>40- vierzig</p>
          <p>50 -fünfzig</p>
          <p>60 -sechzig</p>
          <p>70- siebzig</p>
          <p>80- achtzig</p>
          <p>90- neunzig</p>
          <p>Последний интервал: 100-900</p>
          <p>Запомните слово HUNDERT!!</p>
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
        <li>
          <h3>
            1.9 Послушайте 2 раза аудио файл (модель Теста в Гёте Институте){' '}
          </h3>
          <p>Выберите правильный ответ: А, В, С?</p>
          <p>В какой комнате проходит регистрация на курс? </p>
          <p>
            Распознайте только цифры- (не обязательно пока переводить весь
            диалог).
          </p>
          <p>
            Важное слово- регистрироваться где-либо (sich anmelden- ANMELDUNG)
          </p>
          <AudioPlayer src="https://fs10.getcourse.ru/fileservice/file/download/a/115913/sc/67/h/83ec28972444f9ea8e12a8076b15c648.mp3" />

          <Image src={beisp} alt="alphabet" margin={'0 auto'} />
          <Clue message="das Zimmernummer einhundert einundsechsig-  161- ответ С" />
        </li>
        <li>
          <h3>
            1.10 Послушайте 5 диалогов (нулевое задание- это пример BEISPIEL){' '}
          </h3>
          <p>
            Вам нужно услышать написанную цифру и выбрать правильный ответ- ДА
            или НЕТ?
          </p>
          <p>richtig- перевод "ПРАВИЛЬНО"</p>
          <p>falsch- перевод "НЕПРАВИЛЬНО"</p>

          <AudioPlayer src="https://fs02.getcourse.ru/fileservice/file/download/a/115913/sc/300/h/14bc6e3434d9ac5bb7f1b86664fffa68.mp3" />
          <Image src={richtig} alt="alphabet" margin={'0 auto'} />
          <Clue message="1.falsch    2.falsch   3.richtig   4.falsch   5.richtig" />
        </li>
        <p>
          1️⃣ назовите ваш номер телефона ( двухзначными числами) Meine
          Handynummer ist… 2️⃣ измените по лицам глагол «Ехать» fahren 3️⃣
          назовите числа: 341, 515, 830, 112
        </p>
      </ul>
    </>
  );
};
