const pageScraper = require('./pageScraper');
async function scrapeAll(browserInstance: any){
	let browser;
	try{
		browser = await browserInstance;
		await pageScraper.scraper(browser);	
	}
	catch(err){
		console.log("Could not resolve the browser instance => ", err);
	}
  finally{
    //await browser.close();
  }
}

module.exports = (browserInstance: any) => scrapeAll(browserInstance)
