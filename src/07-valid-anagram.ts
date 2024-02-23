function isAnagram(s: string, t: string): boolean {
  return s.split("").sort().join("") == t.split("").sort().join("");
}

function isAnagram2(s: string, t: string): boolean {
  if (s.length != t.length) {
    return false;
  }

  const seen = new Map<string, number>();
  s.split("").forEach((char) => {
    const charCount = seen.get(char)
    if (charCount) {
      seen.set(char, charCount + 1);
    } else {
      seen.set(char, 1);
    }
  });

  for (let i = 0; i < t.length; i++) {
    const char = t[i];
    if (seen.has(char)) {
      const count = seen.get(char);
      if (!count) {
        return false;
      } else {
        seen.set(char, count - 1);
      }
    } else {
      return false;
    }
  }

  return true;
}

const A_CHAR_CODE = "a".charCodeAt(0);

function isAnagram3(s: string, t: string) {
  let array = Array(26).fill(0);

  if (s.length != t.length) return false;

  for (let i = 0; i < s.length; i++) {
    array[s.charCodeAt(i) - A_CHAR_CODE]++;

    array[t.charCodeAt(i) - A_CHAR_CODE]--;
  }

  for (let i = 0; i < 26; i++) {
    if (array[i] != 0) return false;
  }

  return true;
}
