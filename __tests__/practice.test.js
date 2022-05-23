import { plus } from '../src/calculate';

describe("더하기 테스트",()=>{
    it("test", ()=>{
        expect(plus(3,4)).toEqual(7);
        expect(plus(3,1)).not.toStrictEqual(7);
    })
});

