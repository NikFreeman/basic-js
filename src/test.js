function isMAC48Address(n) {
  //throw new NotImplementedError('Not implemented');
  // remove line with error and write your code here
  let regexp = /^[0-9a-f]{2}(-[0-9a-f]{2}){5}$/i;
  return regexp.test(n);
}

console.log(isMAC48Address("00-1B-63-84-45-E6"));
