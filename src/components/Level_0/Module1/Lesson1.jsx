import ReactPlayer from 'react-player';
import AudioPlayer from 'react-h5-audio-player';
import 'react-h5-audio-player/lib/styles.css';
import { Table1, Table2 } from '../../Table';

export const Lesson1 = () => {
  return (
    <>
      <h2>1 УРОК - Правила произношения ch-? sch-? tsch-? chs-?</h2>
      <ul>
        <li>
          <h3>1.1 Посмотрите видео урок по теме ПРОИЗНОШЕНИЕ!</h3>
          <ReactPlayer
            controls={true}
            url="https://www.youtube.com/embed/6NVGXhP5KNc"
          />
        </li>
        <li>
          <h3>1.2 Изучите основные правила чтения в немецком языке:</h3>
          <p>
            Основное правило чтения на немецком языке: как пишется, так и
            читается. Какие буквы видите, такие и читаете: Musik — не «мьюзик»,
            а «музик» Garage — не «гэражь», а «гараже» Museum — не «мьюзиум», а
            «музеум» и т.д. Не делайте немецкие слова английскими, читайте, как
            есть. Но есть буквосочетания и буквы, читающиеся не как в английском
            языке:ch — «х», например, ich («ихь») — я sch — «ш», Schwarzkopf —
            шварцкопф ie — «и» ei — «ай», Rammstein — «Рамштайн»,
            «Raiffeisenbank» — «Райффайзен банк» Буква v — читается как «ф»,
            вспоминаем Volkswagen — Фольксваген (Das Auto — здесь тоже пример
            чтения «ауто», не «авто»), народный автомобиль (Volk — народ,
            вспоминаем: фольклор — народное творчество и сразу Voklsteater в
            Вене — народный театр) Буква s — «з», вcпоминаем Siemens, но это не
            «Сименс», а «Зименс» Буква z — «ц», например, Zwinger ja, jo — «я»,
            «ё, йо»
          </p>
        </li>
        <li>
          <h3>
            1.З Посмотрите видео урок и научитесь правильно писать и читать
            буквосочетания
          </h3>
          <ReactPlayer
            controls={true}
            url="https://www.youtube.com/embed/MKwbYP8YK_U"
          />
        </li>
        <li>
          <h3>
            1.4 Перепишите в блокнот правила написания и произношения звуков!
          </h3>
          <ReactPlayer
            controls={true}
            url="https://www.youtube.com/embed/83GqAxsriLU"
          />
        </li>
        <li>
          <h3>1.5 Напишите в ваш блокнот перевод слов на немецкий:</h3>
          <p>
            Спорт- <br /> Улица- <br /> Стресс- <br /> Школа- <br /> Говорить-
          </p>
        </li>
        <li>
          <h3>1.6 Послушайте аудио файл - повторяйте вслух!</h3>
          <AudioPlayer src="https://fs07.getcourse.ru/fileservice/file/download/a/115913/sc/318/h/fb8c448759eb6c95813d625ff4efb4ee.mp3" />
        </li>
        <li>
          <h3>1.7.Повторите написание и произношение буквосочетаний</h3>
          <Table1 />
          <ReactPlayer
            controls={true}
            url="https://www.youtube.com/watch?v=hrO0F9N-mmw"
          />
        </li>
        <li>
          <h3>
            8. Попробуем диктант? &#128580; Послушайте аудио- нажимайте на стоп
            после каждого слова и записываем в блокнот то, что уже знаем!
            &#128519; -сh, -ig.
          </h3>

          <AudioPlayer src="https://fs11.getcourse.ru/fileservice/file/download/a/115913/sc/160/h/66565a1ae634ec45d898a8bc7c8504a7.mp3" />
        </li>
        <li>
          <h3>
            9. Произнесите вслух слова из аудио файла выше! ich, möchten, nicht,
            zwanzig, sprechen, ich möchte bitte Milch.
          </h3>
        </li>
        <li>
          <h3>10.Запомните слова и выражения:</h3>
          <Table2 />
        </li>
        <ReactPlayer
          controls={true}
          url="https://www.youtube.com/watch?v=3q2q7PxtqU0"
        />
      </ul>
    </>
  );
};
