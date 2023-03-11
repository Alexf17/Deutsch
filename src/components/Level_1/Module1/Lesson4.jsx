import ReactPlayer from 'react-player';
import AudioPlayer from 'react-h5-audio-player';
import 'react-h5-audio-player/lib/styles.css';
import { Image } from '@chakra-ui/react';

import weaker from '../../../image/weaker.png';
import weak from '../../../image/weak.png';

import { Clue } from 'components/Сlue';
import { Table4, Table5 } from 'components/Table';

export const Lesson4 = () => {
  return (
    <>
      <h2>4 УРОК - Как построить предложение</h2>
      <ul>
        <li>
          <h3>
            4.1 Посмотрите видео урок ( более подробное описание смотрите в
            водном курсе А0 "С нуля")
          </h3>
          <ReactPlayer controls={true} url="https://youtu.be/yP3GEFPta1s" />
        </li>
        <li>
          <h3>4.2 Перепишите в ваш блокнот склонение слабых глаголов:</h3>
          <Image src={weaker} alt="alphabet" margin={'0 auto'} />
        </li>
        <li>
          <h3>
            4.3 Посмотрите видео и запомните правила склонения глаголов. у
            которых корень заканчивается на букву d или t!
          </h3>
          <ReactPlayer controls={true} url="https://youtu.be/-Jnh7Dkk118" />

          <Image src={weak} alt="alphabet" margin={'0 auto'} />
        </li>
        <li>
          <h3>
            4.4 Послушайте аудио файл.Склонение глаголов читать (lesen) и писать
            (schreiben) - повторяйте вслух!
          </h3>
          <AudioPlayer src="https://fs07.getcourse.ru/fileservice/file/download/a/115913/sc/372/h/2cbaea18ba49dd1bd8d7c09508e332ad.mp4" />
        </li>
        <li>
          <h3>
            4.5 Просклоняйте в вашем блокноте 5-10 любых глаголов, чтобы
            запомнить окончания по лицам:
          </h3>
          <p>
            kochen, heissen, bringen, malen, fragen, antworten, bekommen,
            vermieten, baden, arbeiten.
          </p>
        </li>
        <li>
          <h3>
            4.6 Впишите глаголы в пробелы, не забывайте про правильные
            окончания!
          </h3>
          <p>1. Ich ______ aus Russland ,und du?. - kommen (приехать из..)</p>
          <Clue message="komme" />
          <p>2. Er ______ in Deutschland. - wohnen (жить,проживать)</p>
          <Clue message="wohnt" />
          <p>3. Frau Müller ______ in Moskau. - arbeiten (работать)</p>
          <Clue message="arbeitet" />
          <p>4. Wir ______ Spanisch. - lernen (учить)</p>
          <Clue message="lernen" />
          <p>5. Maria ______ schnell. - sagen (говорить)</p>
          <Clue message="sagt" />
          <p>6. Ich ______ Sabina. - fragen (спрашивать)</p>
          <Clue message="frage" />
          <p>7. Die Lehrerin ______ den Satz. - korrigieren (исправлять)</p>
          <Clue message="korrigiert" />
          <p>8. Michael ______ ein Handy. - verkaufen (продавать)</p>
          <Clue message="verkauft" />
          <p>9. Das Buch ______ 5 Euro. - kosten (стоить-сколько стоит?)</p>
          <Clue message="kostet" />
          <p>10. Ich ______ ein Auto. -kaufen (покупать)</p>
          <Clue message="kaufe" />
        </li>
        <li>
          <h3>4.7 Прослушайте аудио файл для проверки</h3>
          <AudioPlayer src="https://fs14.getcourse.ru/fileservice/file/download/a/115913/sc/254/h/b398b5966ecb95c33f11f2c59eab6d08.ogg" />
        </li>
        <li>
          <h3>4.8 Поставьте глаголы в пробелах в правильной форме:</h3>

          <p>1.Марина работает только по вечерам. Marina ____ nur abends.</p>
          <Clue message="arbeitet" />
          <p>2.Он рисует портрет. Er ________ ein Porträt.</p>
          <Clue message="malt" />
          <p>3.Мои родители живут в Баварии. Meine Eltern ____ in Bayern.</p>
          <Clue message="wohnen" />
          <p>4.Мы плаваем в бассейне. Wir ____ im Schwimmbad.</p>
          <Clue message="schwimmen" />
          <p>5.Отец играет в футбол. Der Vater ____ Fussbal.</p>
          <Clue message="spielt" />
          <p>6.Маркус пишет письмо. Markus ____ den Brief.</p>
          <Clue message="schreibt" />
          <p>7.Мы навещаем друзей. Wir ____ Freunde.</p>
          <Clue message="besuchen" />
          <p>8.Где ты остаешься сегодня? Wo ____ du heute?</p>
          <Clue message="bleibst" />
          <p>9.Вы часто мечтаете? ____ ihr oft?</p>
          <Clue message="träumt" />
          <p>10.Ты делаешь салат. Du ____ einen Salat.</p>
          <Clue message="kochst" />
          <p>11.Анна и Ольга идут в кино. Sie ____ ins Kino.</p>
          <Clue message="gehen" />
          <p>12.Он говорит громко. Er ____ laut.</p>
          <Clue message="spricht" />
          <p>13.Дети ищут шоколад. Kinder ____ die Schokolade.</p>
          <Clue message="suchen" />
          <p>14.Ты пьешь кофе? ____ du Kaffee?</p>
          <Clue message="trinkst" />
        </li>
        <li>
          <h3>4.9 Проверьте выполненное упражнение, прослушав аудио файл:</h3>
          <AudioPlayer src="https://fs14.getcourse.ru/fileservice/file/download/a/115913/sc/496/h/66f169691538279f743821ed98e1fb23.ogg" />
        </li>
        <li>
          <h3>4.10 Выпишите новые слова и запомните:</h3>
          <Table4 />
        </li>
        <li>
          <h3>
            4.11 Рекомендуемые слова и выражения- Послушайте фразы для
            Приветствия и Прощания:
          </h3>
          <AudioPlayer src="https://fs08.getcourse.ru/fileservice/file/download/a/115913/sc/194/h/dd76fb65388330ae78cbdc1e103c3358.mp4" />
          <Table5 />
        </li>
      </ul>
    </>
  );
};
