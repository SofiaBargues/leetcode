/**
 * @param {string} word
 * @return {boolean}
 */
var isValid = function (word) {
  const consonants = new Set(
    b,
    c,
    d,
    f,
    g,
    h,
    j,
    k,
    l,
    m,
    n,
    p,
    q,
    r,
    s,
    t,
    v,
    w,
    x,
    y,
    z,
    B,
    C,
    D,
    F,
    G,
    H,
    J,
    K,
    L,
    M,
    N,
    P,
    Q,
    R,
    S,
    T,
    V,
    W,
    X,
    Y,
    Z
  );
  const vowels = new Set(a, e, i, o, u, A, E, I, O, U);

  if (word.length < 3) return false;
  let vowel = false;
  let consonant = false;
  for (const char of word) {
    if (consonants.has(char)) consonant = true;
    else if (vowels.has(char)) vowel = true;
    else if (!isInterger(char)) return false;
  }

  return vowel && consonant;
};
