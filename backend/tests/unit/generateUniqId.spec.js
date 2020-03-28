const generateUniqId = require('../../src/utils/generateUniqId');

describe('Generate Uniq Id', () => {
    it('shoul generate an unique ID', () => {
        const id = generateUniqId();

        expect(id).toHaveLength(8);
    });
});