const somethingDangerous = () => {
  if (Math.random() > 0.5) {
    throw new Error("Something went wrong");
  }

  return "all good";
};

try {
  somethingDangerous();
} catch (error) {
  // Narrow the error using the instanceof operator
  // Basically check if the error is an instance of the Error class
  if (error instanceof Error) {
    console.error(error.message);
  } else {
    throw error;
  }
}
