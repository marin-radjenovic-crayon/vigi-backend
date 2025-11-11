const axios = require('axios');
const { waitFor } = require('@babel/core/lib/gensync-utils/async');
const _ = require('lodash');
const { Parser } = require('json2csv');
const { join, basename } = require('node:path');
const fs = require('fs').promises; // Node.js File System module with Promises
const sleep = require('util').promisify(setTimeout);
// require('dotenv').config(); // If you're using dotenv for environment variables

const baseUrl = 'http://[[STREAMER_DOMAIN]]:4000';
const apiKey = 'AUTH-$2000$-VIGITAL';

// Function to read streams from the JSON file
async function readStreamsFromFile(filePath) {
  try {
    const data = await fs.readFile(filePath, 'utf8');
    return JSON.parse(data);
  } catch (error) {
    console.error('Error reading streams file:', error);
    process.exit(1);
  }
}

// Function to stop a stream
async function stopStream({ streamId, streamer }) {
  try {
    const targetStreamerUrl = baseUrl.replace('[[STREAMER_DOMAIN]]', streamer);
    const response = await axios.post(
      `${targetStreamerUrl}/streams/docker/stop`,
      { id: `${streamId}` },
      {
        headers: {
          'x-api-key': apiKey,
          'Content-Type': 'application/json'
        }
      }
    );
    console.log(`Stopped: ${streamId}`, response.data);
    return response?.data;
  } catch (error) {
    console.error(`Error stopping ${streamId}:`, error.response?.data || error.message);
  }
}

// Function to start a stream
async function startStream({ streamId, url, streamer, scte35 = false }) {
  try {
    const targetStreamerUrl = baseUrl.replace('[[STREAMER_DOMAIN]]', streamer);
    const response = await axios.post(
      `${targetStreamerUrl}/streams/docker/start`,
      {
        id: streamId,
        url,
        scte35
      },
      {
        headers: {
          'x-api-key': apiKey,
          'Content-Type': 'application/json'
        }
      }
    );
    console.log(`Started: ${streamId}`, response.data);
    return response?.data;
  } catch (error) {
    console.error(`Error starting ${streamId}:`, error.response?.data || error.message);
  }
}

async function saveResponsesToFile(filePath, data) {
  try {
    // Convert the data object to a JSON string with indentation for readability
    const jsonData = JSON.stringify(data, null, 2);
    await fs.writeFile(filePath, jsonData, 'utf8');
    console.log(`Responses saved to ${filePath}`);
  } catch (error) {
    console.error('Error saving responses to file:', error);
  }
}

async function parseInputJsonToCsv() {
  try {
    // Read streams from JSON file
    const streams = await readStreamsFromFile(join(__dirname, 'streams-prod.json'));

    // Process the streams to remove '&ads=true' from URLs
    const processedStreams = streams.map(stream => {
      if (stream.url && stream.url.includes('&ads=true')) {
        stream.url = stream.url.replace('&ads=true', '');
      }
      return stream;
    });

    // Convert to CSV
    const parser = new Parser();
    const csv = parser.parse(processedStreams);

    // Define the output directory and file path
    const outputDir = join(__dirname, './');
    const outputFilePath = join(outputDir, basename('production_streams') + '.csv');

    // Write CSV to file
    await fs.writeFile(outputFilePath, csv);

    console.log(`CSV file created at: ${outputFilePath}`);
  } catch (error) {
    console.error('Error saving responses to file:', error);
  }
}

async function restartStreams() {
  const streams = await readStreamsFromFile(join(__dirname, 'streams-prod.json')); // Ensure this reads the stream info correctly
  const operations = streams.map(async ({ streamId, url, streamer, scte35 }) => {
    // Stop the stream
    await stopStream({
      streamId,
      streamer
    });
    console.log(`Stream ${streamId} stopped. Waiting for a while before restarting...`);

    await sleep(15000);

    const startResponse = await startStream({
      streamId,
      url,
      streamer,
      scte35
    });
    console.log(`Stream ${streamId} started.`);

    return {
      streamId,
      startResponse
    };
  });

  // const responses = await Promise.all(operations);

  // await saveResponsesToFile('responses.json', responses);
  console.log('All streams have been processed.');
}

module.exports = {
  restartStreams,
  parseInputJsonToCsv
};
