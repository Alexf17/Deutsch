import ReactPlayer from 'react-player';
import AudioPlayer from 'react-h5-audio-player';
import 'react-h5-audio-player/lib/styles.css';
import { Image } from '@chakra-ui/react';

import handy from '../../../image/handy.png';
import formular from '../../../image/formular.png';
import wie from '../../../image/wie2.png';
import telefon from '../../../image/telefon.png';

import { Clue } from 'components/Сlue';
import { Table3 } from 'components/Table';

export const Lesson3 = () => {
  return (
    <>
      <h2>3 УРОК - Обмен контактами и номерами телефона</h2>
      <ul>
        <li>
          <h3>3.1 Посмотрите видео урок по теме: Как обменяться контактами?</h3>
          <ReactPlayer controls={true} url="https://youtu.be/K7HqUEJ26qQ" />
        </li>
        <li>
          <h3>3.2 Послушайте диалог и запишите номер собеседника!</h3>
          <p>
            Запомните важное слово- die Vorwahl - это код провайдера связи
            (Водафон, МТС, Киевстар...) или телефонный индификатор населённого
            пункта ( Берлин 030, Киев 044...)
          </p>
          <Image src={handy} alt="alphabet" margin={'0 auto'} />

          <AudioPlayer src="https://fs02.getcourse.ru/fileservice/file/download/a/115913/sc/142/h/bd414a4e669ca54e7478a070e02c19a7.mp3" />
          <Clue message="1 диалог  0175 2569138" />
          <Clue message="2 диалог  0173 9768541" />
        </li>
        <li>
          <h3>3.3 Заполните формуляр на себя:</h3>
          <Image src={formular} alt="alphabet" margin={'0 auto'} />
          <Clue message="1. Ваша фамилия    2.Ваше имя   3. Страна      4. Город      5.На каких языках Вы говорите" />
        </li>
        <li>
          <h3>3.4 Задайте вопросы на немецком:</h3>
          <Image src={wie} alt="alphabet" margin={'0 auto'} />
          <h4>
            !!!! ВАЖНО!! ACHTUNG!! запомните шаблон в немецком языке- когда нам
            нужно задать по-русски вопрос "КАКОЙ", то нужно использовать только
            WIE IST!!!!!!
          </h4>
          <p>Какой у тебя адрес?</p>
          <Clue message="Wie ist deine Adresse?" />
          <p>Какая Ваша страна</p>
          <Clue message="Wie ist Ihr Land?  oder Woher kommen Sie?" />
          <p>Какой у Вас номер телефона?</p>
          <Clue message="Wie ist Ihre Handynummer?" />
          <p>Какая у тебя дата рождения?</p>
          <Clue message="Wie ist dein Geburtsdatum?" />
          <p>Какая Ваша фамилия?</p>
          <Clue message="Wie ist Ihr Name?" />
          <p>Какой твой электронный адрес?</p>
          <Clue message="Wie ist deine Email-Adresse?" />
        </li>
        <li>
          <h3>
            3.5 Вставьте личное местоимение- будет зависеть от окончания
            глагола!
          </h3>
          <p>• … bin</p>
          <Clue message="ich bin" />
          <p>• … bist</p>
          <Clue message="du bist" />
          <p>• … ist</p>
          <Clue message="er-sie-es  ist" />
          <p>• … kommen</p>
          <Clue message="wir kommen" />
          <p>• … seid</p>
          <Clue message="ihr seid" />
          <p>• … machst</p>
          <Clue message="du machst" />
          <p>• … lesen</p>
          <Clue message="sie- Sie lesen" />
        </li>
        <li>
          <h3>3.6 Запомните приветственные фразы на немецком!</h3>
          <p>Добрый день. | Guten tag. </p>
          <p>Добрый день! | Grüß gott! </p>
          <p>Здравствуйте! | Servus! </p>
          <p>Привет! | Moin moin! </p>
          <p>Привет! | Moin! </p>
          <p>Привет! | Hallo </p>
          <p>Как дела? | Wie geht’s? </p>
          <p>Спасибо, хорошо. | Danke, gut</p>
          <p>Доброе утро | Guten morgen </p>
          <p>Добрый вечер | Guten abend </p>
          <p>До скорого. | Bis bald. </p>
          <p>Удачи | Viel gluck/viel erfolg. </p>
          <p>Хорошо провести вечер | Schönen Abend noch </p>
          <p>Спокойной ночи | Gute nacht </p>
        </li>
        <li>
          <h3>
            3.7 Послушайте диалог и выберите правильный номер телефона: А, В или
            С? (Симуляция модель Теста А1 в Гёте Институте)
          </h3>
          <AudioPlayer src="https://fs11.getcourse.ru/fileservice/file/download/a/115913/sc/150/h/3c579b606e3e5294605cba52c0d6fa88.mp3" />
          <Image src={telefon} alt="alphabet" margin={'0 auto'} />

          <Clue message="Lösung- B" />
        </li>
        <p>
          1️⃣ диалог: на Вы «Sie“ - какой у Вас почтовый индекс? ( Postleitzahl)
          - мой индекс ….. - какой Ваш адрес? - мой адрес…. 2️⃣ диалог на ТЫ «du”
          - какой твой номер мобильного? - мой номер …. 3️⃣ карточки!
          Сформулируйте вопрос и ответ к словам: - Vorwahl; - Wohnort ( место
          жительства); - Name
        </p>
      </ul>
    </>
  );
};
