/**
 * Generate an amount of entities based on the faker data provided.
 */
export default (fakeEntity: any, howMany: number, overwrites?: {}) => {
  const generateFakeEntity = (): any =>
    overwrites ? { ...fakeEntity(), ...overwrites } : fakeEntity();

  if (howMany < 1) {
    throw new TypeError(`Very funny, but I can't generate ${howMany} mocked items.`);
  }

  if (howMany > 101) {
    throw new TypeError(`We both know you don't need ${howMany} mocked items.`);
  }

  if (howMany === 1) return generateFakeEntity();

  const mockedArr = [];

  for (let i = 0; i < howMany; i++) {
    mockedArr.push(generateFakeEntity());
  }

  return mockedArr;
};
