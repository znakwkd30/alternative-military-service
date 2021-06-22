import * as request from 'request-promise';
import * as xml from 'fast-xml-parser';
import * as dotenv from 'dotenv';
import * as path from 'path';

dotenv.config({
    path: path.resolve(process.cwd(), process.env.NODE_ENV === 'prod' ? '.env' : '.env.dev'),
});

export async function requestAndParseXml(url: string) {
    const result = await request(url);

    const { response } = await xml.parse(result);
    const { body } = response;
    const {
        items: { item },
    } = body;

    return item;
}

export function buildURL(path: string, rows: number, page: number) {
    const url =
        process.env.API_URL +
        path +
        '?numOfRows=' +
        rows +
        '&pageNo=' +
        page +
        '&ServiceKey=' +
        process.env.MILITARY_SERVICE_KEY;

    return url;
}
