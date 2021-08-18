import cron from 'node-cron';
import Parser, { Item } from 'rss-parser';
import { AxiosClient } from './axiosClient';
process.stdin.resume();

let client:AxiosClient;

const parser = new Parser();
parser.parseURL("http://meteo.arso.gov.si/uploads/probase/www/observ/surface/text/en/observation_si_latest.rss")
    .then(r => r.items.forEach(async i => await publishRequest(i)));

const publishRequest = async (item:Item) => {
    let data = JSON.stringify([{ "text": item.link}])
    let url = `http://localhost:5000/publish/${item.guid}`;
    client = new AxiosClient(data, url, "POST");
    await client.Call();
}

cron.schedule('5 * * * * *', () => {
  
});

