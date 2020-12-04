import input from './input';

let valid = 0;
input.split('\n').forEach(l => {
	let r = l.split('-');
	const pos1 = parseInt(r[0]) - 1; // no zero index in input
	const pos2 = parseInt(r[1].split(' ')[0]) - 1;
	const letter = r[1].split(' ')[1][0];
	const pass = r[1].split(':')[1].trim();

	const pos1present = pass[pos1] === letter;
	const pos2present = pass[pos2] === letter;
	if ((pos1present && !pos2present) || (!pos1present && pos2present)) valid++;
});

console.log(`Answer is ${valid}`);