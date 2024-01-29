export const checkAnagram = (str1, str2) => {
  if (str1.length !== str2.length) return false
  let obj1 = {}

  for (let i = 0; i < str1.length; i++) {
    !obj1[str1[i]] ? obj1[str1[i]] = 1 : obj1[str1[i]] = obj1[str1[i]] + 1
  }

  for (let j = 0; j < str2.length; j++) {
    if (!obj1[str2[j]]) return false
    if (obj1[str2[j]] > 0) {
      obj1[str2[j]] = obj1[str2[j]] - 1
    }
  }
  // if (!Object.keys(obj1).every(key => obj1[key] === 0)) return false -> dont have to do this just need to check if 2 array have same length
  //Object.keys(obj1) => O(n) && every(key => obj1[key] === 0) => O(n) ==>> O(2n)
  return true
}




