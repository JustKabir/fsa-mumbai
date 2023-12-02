const crypto = require('crypto');
const bcrypt = require('bcrypt');

// Function to convert text to SHA-256 hash
function sha256(text) {
  const hash = crypto.createHash('sha256');
  hash.update(text);
  return hash.digest('hex');
}

// Function to hash text using bcrypt
async function bcryptHash(text) {
  const saltRounds = 10;
  const hashedText = await bcrypt.hash(text, saltRounds);
  return hashedText;
}

// Example usage
const plaintext = 'password';

// SHA-256 hashing
const sha256Hash = sha256(plaintext);
console.log(`SHA-256 Hash: ${sha256Hash}`);

// Bcrypt hashing
bcryptHash(plaintext)
  .then((bcryptHash) => {
    console.log(`Bcrypt Hash: ${bcryptHash}`);
  })
  .catch((error) => {
    console.error(`Bcrypt hashing failed: ${error}`);
  });
