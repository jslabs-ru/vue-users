import '@babel/polyfill';
import path from 'path';
import chai, { expect } from 'chai';
import chaiMatch from 'chai-match';
import puppeteer from 'puppeteer';
import cheerio from 'cheerio';
import { fork } from 'child_process';
import runCommand from './utils/runCommand';

chai.use(chaiMatch);

const PORT = 5000;
const BASE_URL = `http://localhost:${PORT}`;
const PAGE_ROOT_SELECTOR = '.page-root';

let browser, page, appProcess;

describe('Routing system', () => {
    before(async () => {
        appProcess = fork(path.resolve(__dirname, '..', '..', 'server-prod.js'));
        browser = await puppeteer.launch({
            headless: true,
            args: [
                '--no-sandbox',
                '--disable-setuid-sandbox',
            ]
        });
        page = await browser.newPage();
    });

    it('should run appProcess', async () => {
        expect(appProcess).to.be.ok;
    });

    it('should open main page', async () => {
        await page.goto(`${BASE_URL}/`);
        await page
            .waitForSelector(PAGE_ROOT_SELECTOR, {visible: true})
            .then(async () => {
                const html = await page.content();

                const $ = cheerio.load(html, { decodeEntities: false });
                const elements = $(PAGE_ROOT_SELECTOR);

                if(elements[0]) {
                    const text = $(elements[0]).text();
                    expect(text).to.match(/MAIN - Home page/);
                } else {
                    console.log(`Not found selector: ${PAGE_ROOT_SELECTOR}`);
                }
            })
            .catch(error => {
                console.log('ERR:', error);
            })
    });

    after(async () => {
        await page.close();
        await browser.close();
        appProcess.send('shutdown');
        process.exit();
    });
});
