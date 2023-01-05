import React, { FC } from 'react';
// Api
import { fetchCharacter } from './api';
// Components
import { Card } from './components/Card';
// Types
import { Character } from './api';
// Styles
import { Wrapper } from './App.styles';

export const App: FC = () => {
  return (
    <Wrapper>
      <p>Start here!</p>
    </Wrapper>
  );
};
