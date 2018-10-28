import Property from './Property';

const CONTENT_ID = '410924257';
const KEY = 'test1';

describe('Property', () => {
  it('should handle load and save', async () => {
    const prop = await Property.load(CONTENT_ID, KEY);
    console.log('old value', prop.value());
    prop.value().test = 'test ABC';
    prop.value().test2 = { g: 'g', h: 'h' };
    await prop.save();
    console.log('intermediate val', (await Property.load(CONTENT_ID, KEY)).value());

    prop.value().test = 'test ABCD';
    prop.value().test2 = { g: 'g', h: 'h', i: 'i' };
    await prop.save();

    console.log('final val', (await Property.load(CONTENT_ID, KEY)).value());
  });
});
