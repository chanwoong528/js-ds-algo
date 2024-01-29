import { checkAnagram } from "./index";

test('checkAnagram test: ', () => {
  let checkAnagram_s1 = "aaaa";
  let checkAnagram_s2 = "aaa";
  let checkAnagram_s11 = "abced";
  let checkAnagram_s22 = "decba";
  let checkAnagram_s111 = "bbbb";
  let checkAnagram_s222 = "bbbb";
  expect(checkAnagram(checkAnagram_s1, checkAnagram_s2)).toBe(false)
  expect(checkAnagram(checkAnagram_s11, checkAnagram_s22)).toBe(true)
  expect(checkAnagram(checkAnagram_s111, checkAnagram_s222)).toBe(true)
})
