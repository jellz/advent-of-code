import input from './input';

const nums = input.split('\n').map(n => parseInt(n));
nums.forEach(n1 => {
	nums.forEach(n2 => {
		if (n1 + n2 === 2020) console.log(`Answer is ${n1 * n2}`);
	});
});
