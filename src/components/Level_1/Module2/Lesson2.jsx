import ReactPlayer from 'react-player';
import AudioPlayer from 'react-h5-audio-player';
import 'react-h5-audio-player/lib/styles.css';
import { Image, Checkbox, Stack, AspectRatio } from '@chakra-ui/react';

import sprechen from '../../../image/sprechen.png';
import sehen from '../../../image/sehen.png';
import nehmen from '../../../image/nehmen.png';
import geben from '../../../image/geben.png';
import formul from '../../../image/formul.png';
import horen from '../../../image/horen.png';
import strong from '../../../image/strong.png';
import ich from '../../../image/ich-du.png';
import { Clue } from 'components/Сlue';
import { Table7 } from 'components/Table';

export const Lesson2 = () => {
  return (
    <>
      <h2>2 УРОК - Как запомнить неправильные глаголы?</h2>
      <ul>
        <li>
          <h3>2.1 Посмотрите видео урок по теме: Неправильные глаголы!</h3>
          <ReactPlayer controls={true} url="https://youtu.be/tq1oy181Agw" />
        </li>
        <li>
          <h3>
            2.2 Перепишите таблицу и запомните правило изменения гласной в корне
            (DU,ER,SIE,Es) в распространённых глаголах:
          </h3>
          <h4>Говорить:</h4>
          <Image src={sprechen} alt="alphabet" margin={'0 auto'} />
          <ReactPlayer controls={true} url="https://youtu.be/R-J_hNxyapI" />
          <p>Составьте диалог :</p>
          <p> Вы говорите по-немецки? | Sprechen Sie Deutsch? </p>
          <p> Ты говоришь по немецки? | Sprichst du Deutsch? </p>
          <p> Я не говорю по-немецки. | Ich spreche kein Deutsch </p>
          <p>Я немного говорю по-немецки. | Ich spreche ein bisschen Deutsch</p>

          <h4>Смотреть, видеть:</h4>
          <Image src={sehen} alt="alphabet" margin={'0 auto'} />

          <h4>Брать:</h4>
          <Image src={nehmen} alt="alphabet" margin={'0 auto'} />

          <h4>Давать:</h4>
          <Image src={geben} alt="alphabet" margin={'0 auto'} />
        </li>
        <li>
          <h3>2.3 Посмотрите видео- запомните 2 группы сильных глаголов!</h3>
          <ReactPlayer controls={true} url="https://youtu.be/sac2V--86uw" />
        </li>
        <li>
          <h3>
            2.4 Посмотрите обучающее видео и выпишите в ваш блокнот все
            неправильные глаголы- у которых в корне изменяется гласная E-I
          </h3>
          <ReactPlayer controls={true} url="https://youtu.be/VEGG_9BRo0g" />
        </li>
        <li>
          <h3>
            2.5 Посмотрите обучающее видео и выпишите в ваш блокнот все
            неправильные глаголы- у которых в корне изменяется гласная A- Ä
          </h3>
          <ReactPlayer controls={true} url="https://youtu.be/Pu7AXkPgfoU" />
        </li>
        <li>
          <h3>2.6 Послушайте и запомните названия иностранных языков:</h3>

          <AudioPlayer src="https://fs08.getcourse.ru/fileservice/file/download/a/115913/sc/257/h/4cca36e798845397ab741dc3fce66da4.ogg" />
          <Image src={formul} alt="alphabet" margin={'0 auto'} />
        </li>
        <li>
          <h3>2.7 Послушайте аудио и дополните формуляр выше:</h3>

          <AudioPlayer src="https://fs10.getcourse.ru/fileservice/file/download/a/115913/sc/113/h/0dbcd8365e7d39271d805928c8bf0287.mp3" />
        </li>
        <li>
          <h3>
            2.8 Представьте 5 человек, используйте глаголы (heissen, kommen,
            wohnen, sprechen):
          </h3>
          <p>Образец: Sie heisst Kim </p>
          <p>Sie kommt aus Korea </p>
          <p>Sie wohnt in Seoul </p>
          <p>Sie spricht Koreanish und Chinesisch </p>
        </li>
        <li>
          <h3>2.9 Послушайте аудио файл для контроля:</h3>

          <AudioPlayer src="https://fs10.getcourse.ru/fileservice/file/download/a/115913/sc/30/h/1aad7d802ea61a00f5171802558318a7.ogg" />
        </li>
        <li>
          <h3>2.10 Прочитайте текст вслух 3 раза. Переведите устно!</h3>
          <Image src={horen} alt="alphabet" margin={'0 auto'} />
        </li>
        <li>
          <h3>
            2.11 Послушайте аудио файл к тексту для контроля произношения:
          </h3>

          <AudioPlayer src="https://fs07.getcourse.ru/fileservice/file/download/a/115913/sc/150/h/b2d56e0511158b6ade58cff6822857a4.mp3" />
        </li>
        <li>
          <h3>
            2.12 Перепишите таблицу- запомните правило изменения сильных
            глаголов!
          </h3>

          <Image src={strong} alt="alphabet" margin={'0 auto'} />
        </li>
        <li>
          <h3>
            2.13 Скачайте и распечатайте таблицу неправильных глаголов!
            Сверяйтесь с написанием сильных глаголов по второй колонке
            (Präsens-пока запоминайте только в настоящем времени). Выберите
            только те глаголы, которые вы чаще всего используете!
          </h3>
          <a href="https://deutschonlinekurs.getcourse.ru/pl/fileservice/user/file/download/h/e28490e3efb5fdf00f67e9d2eb5167a2.doc">
            Нажмите для скачивания
          </a>
        </li>
        <li>
          <h3>
            2.14 Поставьте в правильной форме глаголы, помните о смене гласной
            буквы в корне ( е-i) du,er,sie,es!
          </h3>
          <p>Sveta _____ Russisch (sprechen (говорить))</p>
          <Clue message="sie spricht" />
          <p>Mein Vater _____ Bücher (geben (давать))</p>
          <Clue message="er gibt" />
          <p>Du _____ ein Brot (nehmen (брать))</p>
          <Clue message="du nimmst" />
          <p>Er _____ eine Zeitung (lesen (читать))</p>
          <Clue message="er liesst" />
          <p>Herr Strauß _____ Wurst gern (essen (кушать))</p>
          <Clue message="er isst" />
          <p>Maria _____ deine Schwester (sehen (видеть))</p>
          <Clue message="sie sieht" />
          <p>_____ Sie Deutsch? (sprechen (говорить))</p>
          <Clue message="Sprechen Sie" />
        </li>
        <li>
          <h3>2.15 Вставьте глаголы в правильной форме (дополнительно)</h3>
          <p>
            Помните об изменении гласной в корне и не забывайте в конце ставить
            правильное окончание!
          </p>
          <p>Petra _____ ein Buch. (lesen ( читать))</p>
          <Clue message="sie liest" />
          <p>Ich _____ einen Kater. (sehen (видеть))</p>
          <Clue message="ich sehe" />
          <p>Frau Müller _____ einen Salat. (essen (кушать))</p>
          <Clue message="sie isst" />
          <p>Ich _____ ein Buch. (nehmen (взять,брать))</p>
          <Clue message="ich nehme" />
          <p>_____ du Deutsch? . (sprechen (говорить))</p>
          <Clue message="Sprichst du?" />
          <p>Er _____ seiner Familie. (helfen (помогать))</p>
          <Clue message="er hilft" />
          <p>Die Lehrerin _____ das Kino . (empfelen (советовать))</p>
          <Clue message="sie empfiehlt" />
          <p>Rudolf _____ Morgen seine Frau. (treffen (встречаться с ..))</p>
          <Clue message="er trifft" />
          <p>Meine Schwester _____ eine CD . (nehmen (брать))</p>
          <Clue message="sie nimmt" />
          <p>Paul _____ gerne das Brot. (essen (кушать))</p>
          <Clue message="er isst" />
          <p>Meine Oma _____ meinem Opa. (helfen (помогать))</p>
          <Clue message="sie hilft" />
          <p>Ich _____ Monika ,und du?. (sein (быть,есть))</p>
          <Clue message="ich bin" />
          <Image src={ich} alt="alphabet" margin={'0 auto'} />
        </li>
        <li>
          <h3>2.16 Запомните новые слова и выражения:</h3>
          <p>
            1. Не говорю [хорошо] по -немецки | Ich spreche nicht [so gut]
            Deutsch
          </p>
          <p>2. Ты говоришь по- русски? | Sprichst du Russisch? </p>
          <p>3. Кто говорит на русском? | Wer spricht Russisch ? </p>
          <p>4. Вы говорите по-русски? | Sprechen sie Russisch? </p>
          <p>5. Не понимаю | Ich verstehe das nicht </p>
          <p>6. Помогите! | Hilfe! </p>

          <Table7 />
        </li>
        <p>
          1️⃣ измените глагол sehen по лицам😀 (я вижу/ ты видишь и т/д/) 2️⃣
          диалог: - что ты берёшь? ( nehmen) - я беру чай; - как ты говоришь на
          немецком? - я говорю хорошо ( sprechen, gut) 3️⃣ диалог: - добрый день,
          как у Вас дела? - отлично, классно, замечательно 😀 (перечислите все
          слова "хорошо"), а у Вас? - так себе ТЕСТ после модуля 1
        </p>
      </ul>
    </>
  );
};
