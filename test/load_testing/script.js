import http from 'k6/http';
import { check } from 'k6';

export let options = {
  stages: [
    {
      duration: '5s',
      target: 1000
    } // below normal load
  ]
};
export default function () {
  let url = `http://localhost:3000`;
  let response = http.get('http://localhost:3000');
  check(response, {
    'Status was 200': r => r.status == 200,
    'Transaction time was below 1000ms': r => r.timings.duration < 1000
  });
}
