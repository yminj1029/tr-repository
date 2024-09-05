import { atom } from 'jotai';

export interface Test {
	TYPE_1: number;
	TYPE_2: number;
	TYPE_3: number;
	TYPE_4: number;
	TYPE_5: number;
	TYPE_6: number;
	TYPE_7: number;
	TYPE_8: number;
	TYPE_9: number;
}

export interface typeNumberData {
	typeNumber: number;
	result: number;
}

// 기본 값이 있는 atom 생성
export const testAtom = atom<Test>({
	TYPE_1: 10,
	TYPE_2: 20,
	TYPE_3: 30,
	TYPE_4: 10,
	TYPE_5: 20,
	TYPE_6: 30,
	TYPE_7: 10,
	TYPE_8: 20,
	TYPE_9: 30,
});

testAtom.debugLabel = 'testAtom';

// 특정 키의 값을 업데이트하는 atom
export const updateTestAtom = atom(
	null,
	(get, set, newValue: typeNumberData) => {
		const currentState = get(testAtom);

		const dynamicObject = {
			[`TYPE_${newValue.typeNumber}`]: newValue.result,
		};

		set(testAtom, { ...currentState, ...dynamicObject });
	},
);
