import ReactPlayer from 'react-player';
import AudioPlayer from 'react-h5-audio-player';
import 'react-h5-audio-player/lib/styles.css';
import { Image, Checkbox, Stack, AspectRatio } from '@chakra-ui/react';

import abc from '../../image/abc.jpg';
import dialog from '../../image/dialog.png';
import check from '../../image/check.png';

export const Lesson2 = () => {
  return (
    <>
      <Image src={abc} alt="alphabet" margin={'0 auto'} />
      <h2>2 УРОК - АЛФАВИТ, Произношение буквы -V-</h2>
      <ul>
        <li>
          <h3>
            2.1 Послушайте аудио файл, повторяйте вслух названия букв. <br />
            Запомните алфавит!
          </h3>
          <AudioPlayer src="https://fs08.getcourse.ru/fileservice/file/download/a/115913/sc/333/h/0ab89e4ca8c32cbbd6c7b556c1038d8d.mp3" />

          <ReactPlayer
            controls={true}
            url="https://www.youtube.com/watch?v=F_y4nZybZVY"
          />
        </li>
        <li>
          <h3>
            2.2 Запомните важное слово "ВUCHSTABIEREN"- используем, когда нужно
            разложить слово по буквам. Послушайте диалог и выберите правильный
            ответ Фамилии и имени Госпожи Ковальской.
          </h3>
          <Image src={dialog} alt="alphabet" margin={'0 auto'} />

          <p>Familienname:</p>
          <Stack spacing={5} direction="row">
            <Checkbox colorScheme="red">Kowalla</Checkbox>
            <Checkbox colorScheme="red">Koala</Checkbox>
            <Checkbox colorScheme="red">Kowalska</Checkbox>
          </Stack>
          <p>Vorname:</p>
          <Stack spacing={5} direction="row">
            <Checkbox colorScheme="green">Maria</Checkbox>
            <Checkbox colorScheme="green">Magdalena</Checkbox>
            <Checkbox colorScheme="green">Lena</Checkbox>
          </Stack>

          <AudioPlayer src="https://fs08.getcourse.ru/fileservice/file/download/a/115913/sc/333/h/0ab89e4ca8c32cbbd6c7b556c1038d8d.mp3" />
        </li>
        <li>
          <h3>
            2.3 Hören Sie- послушайте 4 диалога и запишите правильно Фамилии
            (Name) и Имена (Vorname). Прослушайте несколько раз для контроля
            правильности написания.
          </h3>
          <AudioPlayer src="https://fs02.getcourse.ru/fileservice/file/download/a/115913/sc/47/h/d13d4d415cc9b76a941444807315cb74.mp3" />
          <Image src={check} alt="alphabet" margin={'0 auto'} />
        </li>
        <li>
          <h3>
            2.4 Посмотрите видео урок! Проговаривайте вслух все слова!Смотрите
            несколько раз!
          </h3>
          <ReactPlayer
            controls={true}
            url="https://www.youtube.com/watch?v=_xwZzzt2YtA"
          />
        </li>
        <li>
          <h3>2.5 Посмотрите написание слов! Перепишите в блокнот!</h3>

          <AspectRatio maxW="560px" ratio={1}>
            <iframe
              title="video"
              src="https://player02.getcourse.ru/sign-player/?json=eyJ2aWRlb19oYXNoIjoiNmY0M2IyZjM0ZmMyZjQ4MzM4YzQ0MGU2ODZiY2UxN2YiLCJ1c2VyX2lkIjoyODE2NTExMTMsImlwIjoiOTUuMjIzLjcxLjE2MiIsInRpbWUiOjE2Nzc4ODA5NjcsInBheWxvYWQiOiJ1XzI4MTY1MTExMyIsInVpX2xhbmd1YWdlIjoicnUifQ==&s=eb69b9f214de63e40db594912e4083fa"
              allowFullScreen
            />
          </AspectRatio>
        </li>
        <li>
          <h3>2.6 Прочитайте слова вслух- произносите букву "V" как "Ф"!</h3>
          <p>Versuchen - пытаться </p>
          <p>Vater- папа</p>
          <p>Verkaufen- продавть</p>
          <p>Verdiennen- зарабатывать</p>
          <p>Vorspeise- закуски</p>
          <p>Vermieten-сдавать в аренду</p>
        </li>
      </ul>
    </>
  );
};
