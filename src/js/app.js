import json from './parser';
import read from './reader';
import GameSavingLoader from './GameSavingLoader';

GameSavingLoader.load(read()).then((saving) => {
  try {
    return GameSavingLoader.load(json(saving));
  } catch (error) {
    throw new Error(error);
  }
}).then((saving) => {
  const gameSaving = JSON.parse(saving);
  return gameSaving;
}, (error) => {
  throw new Error(error);
});
