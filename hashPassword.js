const bcrypt = require('bcrypt');

( async () => {
  const hashedPassword = await bcrypt.hash(process.argv[2], 12);
  
  const compareSuccess = await bcrypt.compare(process.argv[2], hashedPassword);
  
  if (compareSuccess) {
    console.log("Password successfully hashed")
    console.log(hashedPassword);
  } else {
    console.log("Something went wrong, hashed password does not compare successfully with provided password");
    return;
  };
})();