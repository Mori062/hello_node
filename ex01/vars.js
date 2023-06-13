'use strict';

main()

function main() {
	const s = '42';
	const n = 42;
	const o = {"42": 42};
	const b = true;

	console.log(`${s} is a ${typeof s}.`);
	console.log(`${n} is a ${typeof n}.`);
	console.log(`42 is an ${typeof o}.`);
	console.log(`${o} is an ${typeof o}.`);
	console.log(`${b} is a ${typeof b}.`);
	console.log(`${undefined} is an ${typeof undefined}.`);
}