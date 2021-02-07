import '@babel/polyfill';
import path from 'path';
import chai, { expect } from 'chai';
import chaiMatch from 'chai-match';
import puppeteer from 'puppeteer';
import cheerio from 'cheerio';
import { fork } from 'child_process';
import sleep from 'sleep';
import runCommand from './utils/runCommand';

chai.use(chaiMatch);

const PORT = 5000;
const BASE_URL = `http://localhost:${PORT}`;
const PAGE_ROOT_SELECTOR = '.page-root';
const HEADLESS = true; /* change to false in demonstration mode */

let browser, page, appProcess;

describe('Routing system', () => {
    before(async () => {
        appProcess = fork(path.resolve(__dirname, '..', '..', 'server-prod.js'));
        browser = await puppeteer.launch({
            headless: HEADLESS,
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
                    if(!HEADLESS) sleep.sleep(2);
                } else {
                    console.log(`Not found selector: ${PAGE_ROOT_SELECTOR}`);
                }
            })
            .catch(error => {
                console.log('ERR:', error);
            })
    });

    it('should open playground page with render function example & check css class after button click', async () => {
        await page.goto(`${BASE_URL}/playground/render_function`);
        await page
            .waitForSelector(PAGE_ROOT_SELECTOR, {visible: true})
            .then(async () => {
                await page.evaluate(() => {
                    const elements = document.getElementsByClassName('btn-click-me');
                    const button = elements[0];
                    if(button) {
                        var i = 0;
                        while(i < 9) {
                            button.click();
                            i++
                        }
                    }
                });

                await page
                    .waitForSelector('.message-container--blue', {visible: true})
                    .then(() => {
                        expect(true).to.be.ok;
                        if(!HEADLESS) sleep.sleep(2);
                    })
                    .catch(error => {
                        console.log('ERROR', error);
                    });
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
