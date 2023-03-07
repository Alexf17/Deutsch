import ReactPlayer from 'react-player';
import AudioPlayer from 'react-h5-audio-player';
import 'react-h5-audio-player/lib/styles.css';

export const Lesson3 = () => {
  return (
    <>
      <h2>3 УРОК - Произношение и чтение гласных</h2>
      <ul>
        <li>
          <h3>
            3.1 Посмотрите видео урок по теме " Как читать и произносить гласные
            в немецком языке"
          </h3>

          <ReactPlayer
            controls={true}
            url="https://www.youtube.com/watch?v=F5WjWvq7Q3s"
          />
        </li>
        <li>
          <h3>
            3.2 Послушайте аудио на произношение гласных в немецком языке.
            Повторяйте вслух!
          </h3>

          <AudioPlayer src="https://fs11.getcourse.ru/fileservice/file/download/a/115913/sc/219/h/ee10d27be57ba33f039042107cb4dfc1.mp3" />
        </li>
        <li>
          <h3>
            3.3 Посмотрите видео урок и запомните правило, что буква "h" после
            гласных никогда не произносится. Она служит для того, чтобы сделать
            гласную перед ней ударной и чтобы удлинить её.
          </h3>
          <ReactPlayer
            controls={true}
            url="https://www.youtube.com/watch?v=7Ywd0Ql-eX8"
          />
        </li>
        <li>
          <h3>
            3.4 Посмотрите видео и запомните правило произношения дифтонгов ÄU
            und EU
          </h3>
          <ReactPlayer
            controls={true}
            url="https://www.youtube.com/watch?v=ZItldrwp_eI"
          />
        </li>
        <li>
          <h3>
            3.5 Прочитайте по-немецки вслух все слова, которые вы видите ниже:
          </h3>
          <p>Kochen- готовить</p>
          <p>Gehen- идти</p>
          <p>Sehen- видеть</p>
          <p>Fahren- ехать</p>
          <p>Kopieren- копировать</p>
          <p>Wohnen- проживать,жить</p>
          <p>Schuhe- обувь</p>
          <p>Kühl- прохладно</p>
          <p>Der Stuhl-стул</p>
          <p>Stehen - стоять</p>
        </li>
        <li>
          <h3>
            3.6 Послушайте аудио файл на произношение дифтонгов ei; eu; ie; au
          </h3>
          <AudioPlayer src="https://fs08.getcourse.ru/fileservice/file/download/a/115913/sc/109/h/a73dd2233671b8d5e9027490cc58f3f9.mp3" />
        </li>
        <li>
          <h3>3.7 Прочитайте вслух слова.</h3>
          <p>heissen -называться</p>
          <p>mein - мой</p>
          <p>nein - нет</p>
          <p>Deutsch- немецкий</p>
          <p>aus -из</p>
          <p>Frau -женщина</p>
          <p>Paul -Пауль</p>
        </li>
        <li>
          <h3>
            3.8 Послушайте аудио файл на произношение умляутов: "ü" und "ö".
            Повторяйте вслух!
          </h3>
          <AudioPlayer src="https://fs11.getcourse.ru/fileservice/file/download/a/115913/sc/194/h/e1a20454639c8a5d90e783dade6f23b4.mp3" />
        </li>
        <li>
          <h3>
            3.9 Прочитайте вслух несколько раз! Не думайте пока о переводе слов,
            слушайте свой голос- проверяйте ваше произношение с аудио файлом
            выше.
          </h3>
          <p>Üben - делать упражнения</p>
          <p>Fünf - пять</p>
          <p>Gemüse - овощи</p>
          <p>Mit Gemüse - с овощами</p>
          <p>Frühstücken - завтракать</p>
          <p>In München frühstücken - завтракать в Мюнхене</p>
          <p>Ein Menü kochen - готовить блюда</p>
          <p>Üben das Ü - упражняться со звуком Ü</p>
          <p>In München und Zürich- в Мюнхене и в Цюрихе</p>
          <p>Natürlich! -Конечно!</p>
          <p>Fünf Minuten - пять минут</p>
        </li>
        <li>
          <h3>
            3.10 Послушайте аудио на произношение умляута Ö. Повторяйте вслух!
          </h3>
          <AudioPlayer src="https://fs09.getcourse.ru/fileservice/file/download/a/115913/sc/368/h/ba269dbaa216efd9aae9b3b42e176c00.mp3" />
          <p>Schön - красиво, хорошо, замечательно, превосходно</p>
          <p>Danke schön- спасибо огромное!</p>
          <p>Möchten - хотелось бы</p>
          <p>Öl - масло</p>
          <p>Mit Öl - с маслом</p>
          <p>Brötchen - булочка</p>
          <p>Zwölf Brötchen - двенадцать булочек</p>
          <p>Möchten Sie brötchen - Вы хотели бы булочку?</p>
          <p>Ja, zwölf Brötchen, bitte- Да, 12 булочек пожалуйста</p>
          <p>Salat mit Öl - салат с маслом</p>
          <p>Mit Zitrone und Öl - с лимоном и маслом</p>
        </li>
      </ul>
    </>
  );
};
