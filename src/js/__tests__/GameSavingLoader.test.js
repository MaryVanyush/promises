import json from '../parser';
import read from '../reader';
import GameSavingLoader from '../GameSavingLoader';

jest.setTimeout(10000);

test('check clase GameSavingLoader', async () => {
  const expected = {
    id: 9,
    created: 1546300800,
    userInfo: {
      id: 1,
      name: 'Hitman',
      level: 10,
      points: 2000,
    },
  };
  await expect(GameSavingLoader.load(read()).then((saving) => {
    try {
      return GameSavingLoader.load(json(saving));
    } catch (error) {
      throw new Error(error);
    }
  }).then((saving) => JSON.parse(saving))).resolves.toEqual(expected);
});
