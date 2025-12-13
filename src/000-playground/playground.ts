const getNever = () => {
  throw new Error("This function never returns");
};

const fn = (input: never) => {};

fn(getNever());

const str: string = getNever();
