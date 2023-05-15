""" function exampleOne(a) {
  if (typeof a === 'number'){
    if(a - Math.floor(a) !== 0) {
      throw new Error('정수를 입력해야 합니다.');
    }
}else {
  throw new Error('정수를 입력해야 합니다.')
}
return a;
} """

def exampleOne(a):
  if type(a) == int:
    if a - int(a) != 0 :
      raise ValueError('정수를 입력해야 합니다.')
  else:
    raise ValueError('정수를 입력해야 합니다.')
  return a 

print(exampleOne(3))
#print(exampleOne(3.2))