import puppeteer from "puppeteer-core";

async function main()
{
	const browserWSURL = "ws://localhost:9222/devtools/browser/ae206222-77bd-4cee-8f90-f60f7531aeec";
	console.info(`Going to connect to browser ${browserWSURL}`)
	const browser = await puppeteer.connect({
		browserWSEndpoint: browserWSURL,
		defaultViewport: null
	});
	const pages = await browser.pages();
	const youtubePage = pages.filter(page => page.url().startsWith("https://www.youtube.com/"))[0];
	if (!youtubePage) return;
	console.info(await youtubePage.title())
	const link = await youtubePage.$("a[href=\\/feed\\/explore]");
	await link?.click();
}

main();
