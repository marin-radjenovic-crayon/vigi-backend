const { getLiveMatch } = require('../route.controller');

jest.mock('ioredis', () => {
  return jest.fn().mockImplementation(() => {
    return {
      get: jest.fn(),
      set: jest.fn(),
      quit: jest.fn(),
      on: jest.fn(),
      incr: jest.fn(),
    };
  });
});

jest.mock('@/src/models/feeds_data', () => ({
  findOne: jest.fn(),
  updateOne: jest.fn(),
}));

describe('getLiveMatch function', () => {
  let req, res;

  beforeEach(() => {
    // Mock the req and res objects
    const MatchRealMadridRealBetis = '5u3wx1ukwc8ezs3iztiha7bx0';
    req = {
      params: {
        mid: MatchRealMadridRealBetis
      }
    };
    res = {
      status: jest.fn().mockReturnThis(),
      json: jest.fn()
    };
  });

  it('should return success response with match data', async () => {
    // Call the function
    await getLiveMatch(req, res);

    expect(res.status).toHaveBeenCalledWith(200);
    // const response = res.json;
    const response = res.json.mock.calls[0][0];

    expect(response.matchDetails).toBeDefined();
    expect(response.matchDetailsExtra).toBeDefined();
    expect(response.matchInfo).toBeDefined();

    expect(response).toEqual(
      expect.objectContaining({
        matchInfo: expect.objectContaining({
          id: expect.any(String),
          coverageLevel: expect.any(String),
          date: expect.any(String),
          time: expect.any(String),
          localDate: expect.any(String),
          localTime: expect.any(String),
          week: expect.any(String),
          postMatch: expect.any(String),
          numberOfPeriods: expect.any(Number),
          periodLength: expect.any(Number),
          var: expect.any(String),
          lastUpdated: expect.any(String),
          description: expect.any(String),
          sport: expect.objectContaining({
            id: expect.any(String),
            name: expect.any(String),
          }),
          ruleset: expect.objectContaining({
            id: expect.any(String),
            name: expect.any(String),
          }),
          competition: expect.objectContaining({
            id: expect.any(String),
            name: expect.any(String),
            knownName: expect.any(String),
            sponsorName: expect.any(String),
            competitionCode: expect.any(String),
            competitionFormat: expect.any(String),
            country: expect.objectContaining({
              id: expect.any(String),
              name: expect.any(String),
            }),
          }),
          tournamentCalendar: expect.objectContaining({
            id: expect.any(String),
            startDate: expect.any(String),
            endDate: expect.any(String),
            name: expect.any(String),
          }),
          stage: expect.objectContaining({
            id: expect.any(String),
            formatId: expect.any(String),
            startDate: expect.any(String),
            endDate: expect.any(String),
            name: expect.any(String),
          }),
          contestant: expect.arrayContaining([
            expect.objectContaining({
              id: expect.any(String),
              name: expect.any(String),
              shortName: expect.any(String),
              officialName: expect.any(String),
              code: expect.any(String),
              position: expect.any(String),
              country: expect.objectContaining({
                id: expect.any(String),
                name: expect.any(String),
              }),
            }),
          ]),
          venue: expect.objectContaining({
            id: expect.any(String),
            neutral: expect.any(String),
            longName: expect.any(String),
            shortName: expect.any(String),
          }),
        }),
        matchDetails: expect.objectContaining({
          periodId: expect.any(Number),
          matchStatus: expect.any(String),
          winner: expect.any(String),
          matchLengthMin: expect.any(Number),
          matchLengthSec: expect.any(Number),
          period: expect.arrayContaining([
            expect.objectContaining({
              id: expect.any(Number),
              start: expect.any(String),
              end: expect.any(String),
              lengthMin: expect.any(Number),
              lengthSec: expect.any(Number),
              announcedInjuryTime: expect.any(Number),
            }),
          ]),
          scores: expect.objectContaining({
            ht: expect.objectContaining({
              home: expect.any(Number),
              away: expect.any(Number),
            }),
            ft: expect.objectContaining({
              home: expect.any(Number),
              away: expect.any(Number),
            }),
            total: expect.objectContaining({
              home: expect.any(Number),
              away: expect.any(Number),
            }),
          }),
        }),
        matchDetailsExtra: expect.objectContaining({
          attendance: expect.any(String),
          matchOfficial: expect.arrayContaining([
            expect.objectContaining({
              id: expect.any(String),
              type: expect.any(String),
              firstName: expect.any(String),
              lastName: expect.any(String),
              shortFirstName: expect.any(String),
              shortLastName: expect.any(String),
            }),
          ]),
        }),
      })
    );    
  }, 20000);
});
