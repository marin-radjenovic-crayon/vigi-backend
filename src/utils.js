const fs = require('fs');
const path = require('path');

const mockedDataDir = path.resolve('test/MockedData');

// Function to save API response to a file
const saveResponseToFile = (filePath, data) => {
  fs.writeFileSync(filePath, JSON.stringify(data, null, 2));
};

// Function to check if the saved response exists
function getMockResponse(url) {
  const cleanedUrl = removeProtocol(url);
  const fileName = getLastElementFromUrl(cleanedUrl) + ".json";
  const dirName = getBeginningPartFromUrl(cleanedUrl);
  const filePath = mockedDataDir + "/" + dirName + "/" + fileName;

  if (fs.existsSync(filePath)) {
    return JSON.parse(fs.readFileSync(filePath, 'utf-8'));
  }

  return false;
};

function saveMockResponse(url, response) {
  const cleanedUrl = removeProtocol(url);
  const fileName = getLastElementFromUrl(cleanedUrl) + ".json";
  const dirName = mockedDataDir + "/" + getBeginningPartFromUrl(cleanedUrl);
  const filePath = dirName + "/" + fileName;

  if (!fs.existsSync(dirName)) {
    fs.mkdirSync(dirName, { recursive: true }); // Create directory and any necessary parent directories
  }

  try {
    const jsonRes = JSON.stringify(response, null, 2);
    fs.writeFileSync(filePath, jsonRes);
    LOGGER.info(`#saveMockResponse write: ${filePath}`);
  } catch (error) {
    console.error('Error writing file:', error);
  }

  return false;
};

// Function to load the cached response
const loadResponseFromFile = (filePath) => {
  return JSON.parse(fs.readFileSync(filePath, 'utf-8'));
};

function removeProtocol(url) {
  return url.replace(/^https?:\/\//, '');
}

function getLastElementFromUrl(url) {
  const parts = url.split('/');
  return parts[parts.length - 1] || parts[parts.length - 2];
}

function getBeginningPartFromUrl(url) {
  const parts = url.split('/');
  // Remove the last element
  parts.pop(); // This removes the last element from the array
  return parts.join('/'); // Join the remaining parts back into a string
}

module.exports = {
  getMockResponse,
  saveMockResponse,
};
