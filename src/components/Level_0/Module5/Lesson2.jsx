import ReactPlayer from 'react-player';
import AudioPlayer from 'react-h5-audio-player';
import 'react-h5-audio-player/lib/styles.css';
import { Image } from '@chakra-ui/react';

import phone from '../../image/phone.png';
import type from '../../image/type.png';
import tel from '../../image/tel.png';

export const Lesson2 = () => {
  return (
    <>
      <h2>2 УРОК -Как обменяться номерами телефонов</h2>
      <ul>
        <li>
          <h3>2.1 Посмотрите видео урок по теме: Как обменяться контактами?</h3>

          <ReactPlayer controls={true} url="https://youtu.be/K7HqUEJ26qQ" />
        </li>
        <li>
          <h3>
            2.2 Послушайте диалог и запишите номер собеседника: Выберите
            правтлтный ответ: А, В или С?
          </h3>
          <AudioPlayer src="https://fs14.getcourse.ru/fileservice/file/download/a/115913/sc/150/h/3c579b606e3e5294605cba52c0d6fa88.mp3" />
          <Image src={phone} alt="alphabet" margin={'0 auto'} />
        </li>
        <li>
          <h3>2.3 Послушайте 2 диалога- запишите номера телефонов.</h3>
          <AudioPlayer src="https://fs11.getcourse.ru/fileservice/file/download/a/115913/sc/142/h/bd414a4e669ca54e7478a070e02c19a7.mp3" />
        </li>
        <li>
          <h3>
            2.4 Schreiben Sie! Послушайте аудио файлы и запишите номера
            телефонов собеседника! Включите повтор и распознате только цифры!
            Запишите!
          </h3>
          <AudioPlayer src="https://fs08.getcourse.ru/fileservice/file/download/a/115913/sc/149/h/6c87bb7424633ca16e753b1e619ce65b.mp3" />
          <Image src={type} alt="alphabet" margin={'0 auto'} />
        </li>
        <li>
          <h3>
            2.5 Запомните самую главную фразу при обмене контактами : КАКОЙ у
            тебя... "Wie ist dein-..? Послушайте аудио файл и выберите
            правильный номер: А, Б или С?
          </h3>
          <Image src={tel} alt="alphabet" margin={'0 auto'} />
          <AudioPlayer src="https://fs02.getcourse.ru/fileservice/file/download/a/115913/sc/237/h/b3b32b94c2412dcb1a9367c76d46f9da.mp3" />
        </li>
      </ul>
    </>
  );
};
