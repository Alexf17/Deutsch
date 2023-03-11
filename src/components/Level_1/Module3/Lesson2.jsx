import ReactPlayer from 'react-player';
import AudioPlayer from 'react-h5-audio-player';
import 'react-h5-audio-player/lib/styles.css';
import { Image, Checkbox, Stack, AspectRatio } from '@chakra-ui/react';

import sein from '../../../image/sein2.png';
import und from '../../../image/und.png';
import guten from '../../../image/guen.png';
import mir from '../../../image/mir.png';
import mochten from '../../../image/mochten.png';
import dialog from '../../../image/dialog1.png';

import dialog2 from '../../../image/dialog2.png';
import ich from '../../../image/ich-du.png';
import { Clue } from 'components/Сlue';
import { Table7, Table8 } from 'components/Table';

export const Lesson2 = () => {
  return (
    <>
      <h2>2 УРОК - Расширенный диалог знакомств</h2>
      <ul>
        <li>
          <h3>2.1 Повторите глагол БЫТЬ -"sein"</h3>
          <ReactPlayer controls={true} url="https://youtu.be/bgQT3eTreNs" />
          <Image src={sein} alt="alphabet" margin={'0 auto'} />
        </li>
        <li>
          <h3>2.2 Посмотрите видео урок по теме :"Как дела?"</h3>

          <ReactPlayer controls={true} url="https://youtu.be/i73iHvQqxSY" />
        </li>
        <li>
          <h3>2.3 Запомните фразы!</h3>
          <Image src={und} alt="alphabet" margin={'0 auto'} />
        </li>
        <li>
          <h3>
            2.4 Посмотрите видео урок. Повторяйте вслух! выпишите себе все новые
            слова.
          </h3>
          <ReactPlayer controls={true} url="https://youtu.be/UFTUPmj5LI8" />
        </li>
        <li>
          <h3>2.5 Запомните фразы для диалога, перепишите в блокнот: Ä</h3>
          <Image src={guten} alt="alphabet" margin={'0 auto'} />
        </li>
        <li>
          <h3>
            2.6 Послушайте 4 диалога и нарисуйте смайлики, как дела у
            персонажей?:
          </h3>

          <AudioPlayer src="https://fs07.getcourse.ru/fileservice/file/download/a/115913/sc/280/h/15255f1722dafc7ef3db80bece0108f5.mp4" />
        </li>
        <li>
          <h3>
            2.7 Запомните формы личных местоимений в Дательном падеже (кому? )
          </h3>

          <Image src={mir} alt="alphabet" margin={'0 auto'} />
        </li>
        <li>
          <h3>2.8 Посмотрите видео урок по теме: Модальный глагол möchten</h3>
          <ReactPlayer controls={true} url="https://youtu.be/h-DHGqoydx0" />
        </li>
        <li>
          <h3>
            2.9 Перепишите в блокнот склонение глагола möchten и запомните его!
          </h3>

          <Image src={mochten} alt="alphabet" margin={'0 auto'} />
        </li>
        <li>
          <h3>2.10 Продолжаем общение-(предлагаем напиток): </h3>
          <p>
            Напишите ваш вопрос- когда вы кому-то предлагаете напиток со словами
            ниже!
          </p>
          <p>Используйте любой глагол на выбор! (trinken, möchten, nehmen)</p>
        </li>
        <li>
          <h3>
            2.11 Послушайте аудио- это варианты того, как приветствовать друг
            друга на ТЫ или Вы, как спросить о делах и ка предложить что-то
            попить!
          </h3>

          <AudioPlayer src="https://fs11.getcourse.ru/fileservice/file/download/a/115913/sc/325/h/f7cd702402f6310c17e7f32bcccdfc5c.mp3" />
          <Image src={dialog} alt="alphabet" margin={'0 auto'} />
        </li>
        <li>
          <h3>
            Запишите в блокнот полный диалог знакомства по лицам, использую
            выражения из таблицы ниже!
          </h3>

          <Image src={dialog2} alt="alphabet" margin={'0 auto'} />
        </li>
        <li>
          <h3>2.13 Запомните новые слова и выражения:</h3>
          <p>Отказ</p>
          <Table8 />
        </li>

        <p>
          1️⃣ диалог: - ты в Германии? ( in Deutschland) - да, я в Берлине. - где
          ты живёшь? ( wohnen) - я живу в центре ( im Zentrum) - откуда ты
          приехал? ( откуда ты родом)? - я пришла из ….( назовите Вашу страну)
          2️⃣ диалог: - привет, как у тебя дела? - отлично, а у тебя? - супер! Ты
          хотел бы кофе? ( Kaffee, möchten) - да, с удовольствием ( gern) - ты
          берёшь кофе с молоком ( mit Milch, nehmen) - да, я беру с молоком и с
          сахаром ( mit Zucker) 3️⃣ - где ты? ( sein, du) - я есть дома (zu
          Hause)
        </p>
      </ul>
    </>
  );
};
