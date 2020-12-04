import input from './input';

let valid = 0;
input.split('\n').forEach(l => {
	let r = l.split('-');
	const min = parseInt(r[0]);
	const max = parseInt(r[1].split(' ')[0]);
	const letter = r[1].split(' ')[1][0];
	const pass = r[1].split(':')[1].trim();

	const occurrences = pass.match(new RegExp(letter, 'g'))?.length ?? 0;
	if (occurrences >= min && occurrences <= max) valid++;
});

console.log(`Answer is ${valid}`);