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
	TYPE_1: 0,
	TYPE_2: 0,
	TYPE_3: 0,
	TYPE_4: 0,
	TYPE_5: 0,
	TYPE_6: 0,
	TYPE_7: 0,
	TYPE_8: 0,
	TYPE_9: 0,
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

// 객체를 정렬하는 함수
// export const sortObjectByValue = (obj: Test): Test => {
// 	const entries = Object.entries(obj);

// 	// value 값에 따라 배열을 정렬
// 	const sortedEntries = entries.sort(
// 		([, valueA], [, valueB]) => valueA - valueB,
// 	);

// 	// 정렬된 배열을 다시 객체로 변환
// 	return Object.fromEntries(sortedEntries) as Test;
// };
