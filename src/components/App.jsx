import { ChakraProvider, theme } from '@chakra-ui/react';
import { Lesson5 } from './Level_1/Module1/Lesson5';
import { Lesson2 } from './Level_1/Module2/Lesson2';
// import { Lesson1 } from './Module3/Lesson1';
// import { Lesson2 } from './Module3/Lesson2';
// import { Lesson1 } from './Level_0/Module4/Lesson1';
// import { Lesson3 } from './Level_1/Module1/Lesson3';
// import { Lesson1 } from './Module2/Lesson1';
// import { Lesson2 } from './Module2/Lesson2';
// import { Lesson3 } from './Module2/Lesson3';
// import { Lesson1 } from './Module1/Lesson1';
// import { Lesson2 } from './Module1/Lesson2';
// import { Lesson3 } from './Module1/Lesson3';

export const App = () => {
  return (
    <ChakraProvider theme={theme}>
      {/* <Lesson1 /> */}
      {/* <Lesson2 /> */}
      {/* <Lesson3 /> */}
      {/* <Lesson1 /> */}
      {/* <Lesson2 /> */}
      {/* <Lesson3 /> */}
      {/* <Lesson1 /> */}
      {/* <Lesson2 /> */}
      {/* <Lesson1 /> */}
      {/* <Lesson3 /> */}
      {/* <Lesson5 /> */}
      <Lesson2 />
    </ChakraProvider>
  );
};
