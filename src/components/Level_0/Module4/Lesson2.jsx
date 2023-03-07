import ReactPlayer from 'react-player';
import AudioPlayer from 'react-h5-audio-player';
import 'react-h5-audio-player/lib/styles.css';

export const Lesson2 = () => {
  return (
    <>
      <h2>2 УРОК - Как представиться?</h2>
      <ul>
        <li>
          <h3>2.1 Посмотрите видео- Запомните диалог знакомства!</h3>

          <ReactPlayer controls={true} url="https://youtu.be/Vl_pDHbIhxg" />
        </li>
        <li>
          <h3>
            2.2 Послушайте аудио 2 раза. Повторяйте вслух! Запомните вопросы
            обращения на Sie- вежливо
          </h3>
          <AudioPlayer src="https://fs10.getcourse.ru/fileservice/file/download/a/115913/sc/152/h/3781c48751206d6aebd8ad746bf389a0.mp3" />
        </li>
        <li>
          <h3>
            2.3 Послушайте аудио 2 раза. Повторяйте вслух! Запомните вопросы
            обращения на du- неформальное общение
          </h3>
          <AudioPlayer src="https://fs11.getcourse.ru/fileservice/file/download/a/115913/sc/138/h/de5d531c3c17d5c9a6d014fe86342151.mp3" />
          <ReactPlayer controls={true} url="https://youtu.be/FGJUY5uHb34" />
        </li>
      </ul>
      <p>TEST !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!</p>
    </>
  );
};
