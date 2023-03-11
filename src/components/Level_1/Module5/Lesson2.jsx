import ReactPlayer from 'react-player';
import AudioPlayer from 'react-h5-audio-player';
import 'react-h5-audio-player/lib/styles.css';

export const Lesson2 = () => {
  return (
    <>
      <h2>2 УРОК - Как правильно читать и произносить?</h2>
      <ul>
        <li>
          <h3>2.1 Правила чтения в немецком языке</h3>
          <ReactPlayer controls={true} url="https://youtu.be/6NVGXhP5KNc" />
          <h5>
            Основное правило чтения на немецком языке для туриста: как пишется,
            так и читается. Какие буквы видите, такие и читаете:
          </h5>
          <p>• Musik — не «мьюзик», а «музик»</p>
          <p>• Garage — не «гэражь», а «гараже»</p>
          <p>• Museum — не «мьюзиум», а «музеум»</p>
          <p>
            • и т.д. Не делайте немецкие слова английскими, читайте, как есть.
          </p>
          <h5>
            Но есть буквосочетания и буквы, читающиеся не как в английском
            языке:
          </h5>
          <p>• ch — «х», например, ich («ихь») — я</p>
          <p>• sch — «ш», Schwarzkopf — шварцкопф</p>
          <p>• ie — «и»</p>
          <p>
            • ei — «ай», Rammstein — «Рамштайн», «Raiffeisenbank» — «Райффайзен
            банк»
          </p>
          <p>
            • Буква v — читается как «ф», вспоминаем Volkswagen — Фольксваген
            (Das Auto — здесь тоже пример чтения «ауто», не «авто»), народный
            автомобиль (Volk — народ, вспоминаем: фольклор — народное творчество
            и сразу Voklsteater в Вене — народный театр)
          </p>
          <p>
            • Буква s — «з», вcпоминаем Siemens, но это не «Сименс», а «Зименс»
          </p>
          <p>• Буква z — «ц», например, Zwinger</p>
          <p>• ja, jo — «я», «ё, йо»</p>
        </li>
        <li>
          <h3>2.2 Посмотрите видео урок по теме - произношение согласных</h3>
          <ReactPlayer controls={true} url="https://youtu.be/MKwbYP8YK_U" />
        </li>
        <li>
          <h3>2.3 Посмотрите видео урок по теме - произношение буквы -V-</h3>
          <ReactPlayer controls={true} url="https://youtu.be/_xwZzzt2YtA" />
        </li>
        <li>
          <h3>2.4 Посмотрите видео урок по теме- звук !Ш!</h3>
          <ReactPlayer controls={true} url="https://youtu.be/83GqAxsriLU" />
        </li>
        <li>
          <h3>2.5 Посмотрите видео урок по теме - произношение гласных</h3>
          <ReactPlayer controls={true} url="https://youtu.be/7Ywd0Ql-eX8" />
          <ReactPlayer controls={true} url="https://youtu.be/3q2q7PxtqU0" />
          <ReactPlayer controls={true} url="https://youtu.be/ZItldrwp_eI" />
        </li>
        <li>
          <h3>2.6 Произнесите слова вслух в сопровождении аудио-файла</h3>
          <p>
            sprechen, sehen, bleiben, nehmen, kochen, fotografieren, verstehen,
            fahren, verbringen, heissen, sein
          </p>
          <AudioPlayer src="https://fs11.getcourse.ru/fileservice/file/download/a/115913/sc/106/h/2cf30e761fa498214909de377e29cb50.m4a" />
        </li>
      </ul>
    </>
  );
};
