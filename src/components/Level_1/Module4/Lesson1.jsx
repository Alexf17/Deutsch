import ReactPlayer from 'react-player';
import AudioPlayer from 'react-h5-audio-player';
import 'react-h5-audio-player/lib/styles.css';

import { Image } from '@chakra-ui/react';

import article from '../../../image/article.png';
import noarticle from '../../../image/no-article.png';
import noarticle2 from '../../../image/no-article2.png';
import { Clue } from 'components/Сlue';
import { Table9 } from 'components/Table';

export const Lesson1 = () => {
  return (
    <>
      <h2>1 УРОК - Артикли существительных (ein/ kein). Личные местоимения</h2>
      <h3>
        Внимание! Более подробный разбор тем вводного урока даны в отдельном
        МИНИ- курсе для начинающих "С нуля- АО"- рекомендуется сначала изучить
        все эти темы там, т.к. здесь уже краткий повтор
      </h3>
      <ul>
        <li>
          <h3>1.1 Посмотрите видео по теме АРТИКЛИ:</h3>
          <ReactPlayer controls={true} url="https://youtu.be/4uV5POg5l-o" />
        </li>
        <li>
          <h3>1.2 Правило: Особенность немецких существительных</h3>
          <p>• (все слова, которые отвечают на вопрос КТО? ЧТО?)</p>
          <p>• все существительные пишутся с заглавной буквы</p>
          <p>• у слов есть рода, которые влияют на окончания прилагательных</p>
          <p>
            • есть падежи, которые тоже «дают» новые окончания другим словам
          </p>
          <p>
            • у слов есть определенные и неопределенные артикли, которые
            меняются по родам и падежам
          </p>
          <p>
            • В немецком языке не бывает просто дерева. Может быть либо ein Baum
            [айн баум] - одно (какое-либо) дерево, либо der Baum [дэа баум] - то
            (самое) дерево
          </p>
          <p>
            • Другими словами, перед всеми существительными стоит служебное
            слово, которое выражает его определенность или неопределенность –
            определенный или неопределенный артикль. В приведенном выше примере:
            ein – неопределенный артикль, а der – определенный артикль (мужского
            рода).{' '}
          </p>
        </li>
        <li>
          <h3>1.З Различные типы артиклей (определённый и неопределённый):</h3>

          <Image src={article} alt="alphabet" margin={'0 auto'} />
        </li>
        <li>
          <h3>1.4 Посмотрите видео урок по теме "АРТИКЛИ"</h3>

          <ReactPlayer controls={true} url="https://youtu.be/mJCDBamBgEI" />
        </li>
        <li>
          <h3>
            1.5 Правило - запомните ситуации, в которых НИКОГДА не будет
            использоваться артикль!
          </h3>
          <Image src={noarticle} alt="alphabet" margin={'0 auto'} />
        </li>
        <li>
          <h3>
            1.6 Отрицательные АРТИКЛИ kein keine! Посмотрите видео по теме
            урока.
          </h3>
          <ReactPlayer controls={true} url="https://youtu.be/HDnGod34oQE" />
          <ReactPlayer controls={true} url="https://youtu.be/GBiaW2gSoek" />
        </li>
        <li>
          <h3>
            1.7 Потренируйте использование отрицательных артиклей kein-
            keine!Прочитайте вслух 3 диалога А; B; C.
          </h3>
          <Image src={noarticle2} alt="alphabet" margin={'0 auto'} />
        </li>
        <li>
          <h3>
            1.8 Послушайте диалоги к заданию выше, распознайте артикли на слух:
          </h3>
          <AudioPlayer src="https://fs09.getcourse.ru/fileservice/file/download/a/115913/sc/248/h/0248663bfdf500bbe94d042f9bcfd679.mp3" />
          ;
        </li>
        <li>
          <h3>
            1.9 Существительные мужского рода с окончанием -er и женского рода
            на -erin.
          </h3>
          <p>
            Посмотрите видео на тему "ОБРАЗОВАНИЕ существительных мужского рода"
          </p>
          <ReactPlayer controls={true} url="https://youtu.be/2P4fhfXZNLw" />
        </li>
        <li>
          <h3>
            1.10 Запомните способы образования существительных женского рода/
          </h3>

          <ReactPlayer controls={true} url="https://youtu.be/AFLNuDraahg" />
        </li>
        <li>
          <h3>1.11 Посмотрите урок- как построить сложные слова.</h3>

          <ReactPlayer controls={true} url="https://youtu.be/a-oC1y8oFyA" />
          <ul>
            <li>der Drucker - принтер</li>
            <li>das Handy - мобильный телефон</li>
            <li>der Fernseher - телевизор</li>
            <li>der Kuli - ручка шариковая</li>
            <li>der Bleistift - карандаш</li>
            <li>das Heft - тетрадь</li>
            <li>das Wörterbuch - словарь</li>
            <li>Die Schere - ножницы</li>
            <li>der Herd - плита</li>
            <li>der Wasserkocher - чайник</li>
            <li>das Bügeleisen - утюг</li>
            <li>die Kaffeemaschiene - кофе машина</li>
            <li>die Waschmaschiene - стиральная машина</li>
            <li>der Stuhl - стул</li>
            <li>der Tisch - стол</li>
            <li>die Lampe - лампа</li>
            <li>kosten - стоить (сколько?)</li>
            <li>nur - только</li>
            <li>kaputt - поломано</li>
            <li>möchte - хотеть,хочу</li>
          </ul>
          <ul>
            <li>neu - новый</li>
            <li>sehr viel - очень много</li>
            <li>der Preis - стоимость,цена</li>
            <li>teuer - дорого</li>
            <li>billig - дешево</li>
            <li>der Käufer(in) - покупатель,покупательница</li>
            <li>der Verkäufer(in) - продавец,продавщица</li>
            <li>wenig - мало</li>
            <li>zahlen - платить</li>
            <li>die Qualität - качество</li>
            <li>gebraucht - Б/У</li>
            <li>funktioniert(nicht) - работает (не)</li>
            <li>schön - красиво</li>
            <li>kaputt - поломано</li>
            <li>prima - прекрасно</li>
            <li>praktisch - практично</li>
            <li>fast - почти</li>
            <li>die Brille - очки</li>
            <li>toll - прекрасно</li>
            <li>der Flohmarkt - блошиный рынок</li>
          </ul>
        </li>
        <li>
          <h3>1.13 Дополнительная лексика ( по желанию)</h3>
          <Table9 />
        </li>
        <p>
          1️⃣ диалог: - это 📕 книга? - нет, это не книга. Это рабочая тетрадь.
          2️⃣ постройте предложения с отрицанием: - он не читает ( lesen) - он не
          читает газету ( eine Zeitung) - он не читает быстро ( schnell) 3️⃣
          прочитайте и переведите длинные слова: - Büroarbeitstisch; -
          Schulhofspielplatz; - Kindersportstuhl 😅😅😂😂🇩🇪🇩🇪
        </p>
      </ul>
    </>
  );
};
