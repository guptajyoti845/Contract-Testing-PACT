import {getSchool} from '../../../apis/ids';
// import providerBuilder, {PROVIDER, CONSUMER} from '../../helpers/pactSetup';
import {schoolRequest, schoolResponse} from "./pact.fixture";
import {pactWith} from 'jest-pact';

const path = require('path');

export const CONSUMER = 'ED-SHOWCASE-UI';
export const PROVIDER = 'ED-SHOWCASE-SERVICE'; // There could be other providers but for the moment this is the only one.

// const provider = providerBuilder(PROVIDER);

// beforeAll(() => {
//     return provider.setup().then((opts) => {
//         process.env.API_PORT = opts.port;
//     });
// });
//
// afterAll(() => provider.finalize());
//
// afterEach(() => provider.verify());

pactWith({
    cors: true,
    log: path.resolve(process.cwd(), 'logs', 'pact.log'),
    loglevel: 'DEBUG',
    dir: path.resolve(process.cwd(), 'pacts'),
    spec: 2,
    pactfileWriteMode: 'update',
    consumer: CONSUMER,
    provider: PROVIDER,
    host: 'localhost',
}, provider => {
    describe('school endpoint', () => {
            beforeEach(async () => {

                const interaction = {
                    state: 'i have a school',
                    ...schoolRequest,
                    willRespondWith: schoolResponse
                };
                await provider.addInteraction(interaction);
            });

            it('generate contract', async () => {
                const response = await getSchool(
                    {schoolId: '0d2bf746-ae98-4bb4-a807-8c2db6d2852d'},
                    'mockToken',
                    {
                        baseUrl: `${provider.mockService.baseUrl}/ids/v1`,
                    },
                );
                expect(response.status).toEqual(200);
            });
        }
    );
});

//
//
// describe('GET School', () => {
//   beforeEach(async () => {
//     const interaction = {
//       state: 'i have a school',
//       ...schoolRequest,
//       willRespondWith: schoolResponse
//     };
//     await provider.addInteraction(interaction);
//   });
//
//   it('generate contract', async () => {
//     const response = await getSchool(
//       { schoolId: '0d2bf746-ae98-4bb4-a807-8c2db6d2852d' },
//       'mockToken',
//       {
//         baseUrl: `${provider.mockService.baseUrl}/ids/v1`,
//       },
//     );
//     expect(response.status).toEqual(200);
//   });
// });
