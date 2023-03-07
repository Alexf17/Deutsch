import React from 'react';
import {
  Box,
  Button,
  Portal,
  Popover,
  PopoverTrigger,
  PopoverContent,
  PopoverBody,
} from '@chakra-ui/react';

export const Clue = ({ message }) => {
  const initRef = React.useRef();
  return (
    <Popover closeOnBlur={false} placement="left" initialFocusRef={initRef}>
      {({ isOpen }) => (
        <>
          <PopoverTrigger>
            <Button size="xs" width="150px">
              {isOpen ? 'скрыть' : 'посмотреть'} ответ
            </Button>
          </PopoverTrigger>
          <Portal>
            <PopoverContent>
              <PopoverBody>
                <Box>{message}</Box>
              </PopoverBody>
            </PopoverContent>
          </Portal>
        </>
      )}
    </Popover>
  );
};
