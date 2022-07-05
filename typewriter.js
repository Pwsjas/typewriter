const typeWriter = (str) => {
  let time = 50;
  for (const char of str) {
    setTimeout(() => {
      process.stdout.write(char);
    }, time);
    time += 50;
  }

  setTimeout(() => {
    process.stdout.write('\n');
  }, time);
};

const sentence = 'hello there from lighthouse labs';
typeWriter(sentence);