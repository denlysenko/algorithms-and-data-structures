const substrSearch = (str, substr) => {
  const end = str.length - substr.length;

  for (let i = 0; i < end; i++) {
    let found = true;

    for (let j = 0; j < substr.length; j++) {
      if (substr[j] !== str[i + j]) {
        found = false;
        break;
      }
    }

    if (found) {
      return i;
    }
  }

  return -1;
};

// O(n * m)
