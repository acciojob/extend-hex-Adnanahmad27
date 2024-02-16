const extendHex = (shortHex) => {
  //write your code here
	let res = '#';
	let i = 0;
	if(shortHex.length === 4){
		i++;
	}
	while (i < shortHex.length) {
		let char = shortHex.charAt(i);
		res += char + char;
		i++;
	}
	return res;
};

// Do not change the code below.
const shortHex = prompt("Enter Short Hex.");
alert(extendHex(shortHex));
