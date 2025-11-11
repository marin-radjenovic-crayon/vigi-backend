const { distributeVideos } = require('../utils');
const _ = require('lodash');

describe('distributeVideos', () => {
  test('distributes videos equally across the timeline 100 elements', () => {
    const timelinePreLivePost = [];
    for (let i = 1; i <= 100; i++) {
      timelinePreLivePost.push({
        templateId: i.toString(),
        template: 'wc_customranking',
        name: 'Custom Ranking',
        lng: 'de'
      });
    }

    const timelineSystemVideos = [
      {
        templateId: 'a',
        template: 'staticmedia',
        name: 'SYSTEM PRESSBOX en 1',
        lng: 'en'
      },
      {
        templateId: 'b',
        template: 'staticmedia',
        name: 'SYSTEM PRESSBOX en 2',
        lng: 'en'
      },
      {
        templateId: 'c',
        template: 'staticmedia',
        name: 'SYSTEM PRESSBOX en 3',
        lng: 'en'
      },
      {
        templateId: 'd',
        template: 'staticmedia',
        name: 'SYSTEM PRESSBOX en 4',
        lng: 'en'
      },
      {
        templateId: 'e',
        template: 'staticmedia',
        name: 'SYSTEM PRESSBOX de 1',
        lng: 'de'
      },
      {
        templateId: 'f',
        template: 'staticmedia',
        name: 'SYSTEM PRESSBOX de 2',
        lng: 'de'
      },
      {
        templateId: 'g',
        template: 'staticmedia',
        name: 'SYSTEM PRESSBOX de 3',
        lng: 'de'
      }
    ];

    const result = distributeVideos(timelinePreLivePost, timelineSystemVideos);

    // // Check if the first video is at the second position
    const lastVideo = _.findIndex(result, { name: 'SYSTEM PRESSBOX en 4' });
    expect(lastVideo).toEqual(78);
  });
  test('distributes videos equally across the timeline 20 elements', () => {
    const timelinePreLivePost = [];
    for (let i = 1; i <= 20; i++) {
      timelinePreLivePost.push({
        templateId: i.toString(),
        template: 'wc_customranking',
        name: 'Custom Ranking',
        lng: 'de'
      });
    }

    const timelineSystemVideos = [
      {
        templateId: 'a',
        template: 'staticmedia',
        name: 'SYSTEM PRESSBOX en 1',
        lng: 'en'
      },
      {
        templateId: 'b',
        template: 'staticmedia',
        name: 'SYSTEM PRESSBOX en 2',
        lng: 'en'
      },
      {
        templateId: 'c',
        template: 'staticmedia',
        name: 'SYSTEM PRESSBOX en 3',
        lng: 'en'
      },
      {
        templateId: 'd',
        template: 'staticmedia',
        name: 'SYSTEM PRESSBOX en 4',
        lng: 'en'
      },
      {
        templateId: 'e',
        template: 'staticmedia',
        name: 'SYSTEM PRESSBOX de 1',
        lng: 'de'
      },
      {
        templateId: 'f',
        template: 'staticmedia',
        name: 'SYSTEM PRESSBOX de 2',
        lng: 'de'
      },
      {
        templateId: 'g',
        template: 'staticmedia',
        name: 'SYSTEM PRESSBOX de 3',
        lng: 'de'
      }
    ];

    const result = distributeVideos(timelinePreLivePost, timelineSystemVideos);

   // console.log('result', result)

    // // Check if the first video is at the second position
    const lastVideo = _.findIndex(result, { name: 'SYSTEM PRESSBOX en 4' });
    expect(lastVideo).toEqual(18);
  });
});
