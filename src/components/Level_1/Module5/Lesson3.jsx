import ReactPlayer from 'react-player';
import AudioPlayer from 'react-h5-audio-player';
import 'react-h5-audio-player/lib/styles.css';
import { Image } from '@chakra-ui/react';

import sein from '../../../image/sein.png';
import bin from '../../../image/bin.png';

import { Clue } from 'components/Сlue';
import { Table3 } from 'components/Table';

export const Lesson3 = () => {
  return (
    <>
      <h2>3 УРОК - Как сказать:"Я есть..", "Ты есть.."</h2>
      <ul>
        <li>
          <h3>
            3.1 Выпишите в ваш блокнот таблицу спряжения вспомогательного
            глагола SEIN. Запомните все формы!
          </h3>
          <Image src={sein} alt="alphabet" margin={'0 auto'} />
        </li>
        <li>
          <h3>3.2 Посмотрите обучающее видео по теме "Глагол SEIN"</h3>
          <ReactPlayer controls={true} url="https://youtu.be/bgQT3eTreNs" />
          <ReactPlayer controls={true} url="https://youtu.be/tr9WDLdSBao" />
        </li>
        <li>
          <h3>
            3.3 Попробуйте назвать формы глагола "Быть" в разброс: ты есть. он
            есть. я есть. она есть. вы есть..
          </h3>
          <Image src={bin} alt="alphabet" margin={'0 auto'} />
        </li>
        <li>
          <h3>3.4 Задание - Вставьте правильную форму глагола sein</h3>
          <p>1. Ich _____ Arzt. (я есть врач)</p>
          <Clue message="bin" />
          <p>2. Er _____ mein Freund. (он мой друг)</p>
          <Clue message="ist" />
          <p>3. Sie _____ Lehrerin. (Вы учительница)</p>
          <Clue message="sind" />
          <p>4. Wir _____ in Berlin. (мы есть в Берлине )</p>
          <Clue message="sind" />
          <p>5. Du _____ im Kino. (ты есть в кино)</p>
          <Clue message="bist" />
          <p>6. Ich _____ intelligent. (я умный)</p>
          <Clue message="bin" />
          <p>7. Das Fenster _____ gross. (окно большое) (оно)</p>
          <Clue message="ist" />
          <p>8. Die Kinder _____ in der Schule. (дети в школе) (они)</p>
          <Clue message="sind" />
          <p>9. Meine Tochter _____ klein. (моя дочка маленькая) (она)</p>
          <Clue message="ist" />
          <p>10. Der Vater _____ nicht zu Hause. (папа не дома) (он)</p>
          <Clue message="ist" />
          <p>11. Ihr _____ schon hier. (вы уже здесь)</p>
          <Clue message="sed" />
        </li>
        <li>
          <h3>
            3.5 Проверьте выполнение задания, нажмите на воспроизведение звука и
            подкорректируйте ваши ответы выше:
          </h3>

          <AudioPlayer src="https://fs07.getcourse.ru/fileservice/file/download/a/115913/sc/258/h/e696efc70427739710c6fbb913df7fac.mp4" />
        </li>
        <li>
          <h3>3.6 Вставьте глагол sein в правильной формe:</h3>
          <p>1. Ты злой? ______ du sauer?</p>
          <Clue message="bist" />
          <p>2. Я сегодня болею. ich ______ heute krank.</p>
          <Clue message="bin" />
          <p>3. Она горда. sie ______ stolz.</p>
          <Clue message="ist" />
          <p>4. Мы счастливы. Wir ______ glücklich.</p>
          <Clue message="sind" />
          <p>5. Он болен? ______ er krank?</p>
          <Clue message="ist" />
          <p>6. Я в отпуске. Ich ______ im Urlaub.</p>
          <Clue message="bin" />
          <p>7. Сколько тебе лет? Wie alt ______ du?</p>
          <Clue message="bist" />
          <p>8. Cобачка милая. Der Hund ______ süß.</p>
          <Clue message="ist" />
          <p>9. Вы в Италии? ______ ihr in Italien?</p>
          <Clue message="seid" />
          <p>10. Ты уверен? ______ du sicher?</p>
          <Clue message="bist" />
          <p>11. Она умная. Sie ______ klug.</p>
          <Clue message="ist" />
        </li>
        <li>
          <h3>3.7 Выпишите в блокнот новые слова и запомните их:</h3>
          <p>Больной- krank</p>
          <p>Кислый, злой, недовольный- sauer</p>
          <p>Гордый- stolz</p>
          <p>Счастливый- glücklich</p>
          <p>Быть в отпуске- im Urlaub sein</p>
          <p>Сколько лет? - Wie alt....</p>
          <p>Сладкий, милый, хорошенький- süß</p>
          <p>Уверен, точно- sicher</p>
          <p>Умная - klug- intelligent</p>
          <p>Громкий- laut</p>
          <p>Быстрая- schnell</p>
          <p>Хорошо- gut</p>
          <p>Плохо- schlecht</p>
        </li>
        <li>
          <h3>
            3.8 Составьте предложения по образцу, используя слова ниже+
            правильную форму глагола "Быть". Помните, что глагол стоит всегда на
            2 месте!
          </h3>
          <h5>Образец: ( schnell. das Auto, sein.) - Das Auto ist schnell.</h5>
          <p>1. Ребёнок (есть) очень шумный - Das Kind, laut, sein- </p>
          <p>2. Еда (есть) хорошая - Das Essen; gut; sein -</p>
          <p>3. Собака (есть) больная- Der Hund; krank; sein- </p>
          <p>4. Фильм (есть) плохой- Der Film, schlecht, sein- </p>
          <p>5. Родители (есть) в Берлине- Die Eltern, in Berlin, sein</p>
          <p>6. Друг (есть) в отпуске.- Der Freund, im Urlaub; sein-</p>
          <p>7. Мы (есть) дома.- Wir, zu Hause; sein-</p>
          <p>8. Ты (есть)( умный).- Du; klug, sein-</p>
          <p>9. Я (есть) счастлив. - Ich, glücklich, sein-</p>
        </li>
        <li>
          <h3>
            3.9 Послушайте аудио файл для контроля выполненного задания выше:
          </h3>
          <AudioPlayer src="https://fs02.getcourse.ru/fileservice/file/download/a/115913/sc/240/h/ab60782cdc37b10dd41a8ed7d98e3075.ogg" />
        </li>
        <li>
          <h3>3.10 Проверьте выполненное упражнение выше</h3>
          <Table3 />
        </li>
      </ul>
    </>
  );
};
