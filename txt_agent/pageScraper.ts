const fs = require('fs');
const readline = require('readline');
const scraperObject = {
  url: 'https://pr-if.org/play/lostpig/',
  async scraper(browser: any) {
    let page = await browser.newPage();
    console.log(`Navigating to ${this.url}...`);
    await page.goto(this.url);
    // Initiate the process
    await getUserInput();
    async function getUserInput() {
      // Wait for the required DOM to be rendered
      await page.waitForSelector('span');
      
      // Get span data
      let data = await page.$$eval('span', (spans:any) => spans.map((span:any) => { return span.textContent; }));
      console.log("Here are the elements: ", data);
      
      // Write data to a JSON file
      fs.writeFileSync('output/output.json', JSON.stringify(data, null, 4));
      // Create readline interface
      let rl = readline.createInterface({ input: process.stdin, output: process.stdout });
      rl.question('Please enter text to type into input field: ', async (inputText:string) => {
        // Close the Readline interface
        rl.close();
        // Type the user's input into the input field
        await page.type('input.TextInput', inputText);
        // Simulate Enter key press to submit the form 
        await page.keyboard.press('Enter');
        // Wait for the page to absorb the key press event (you can adjust this value, or remove if it's not necessary)
        await page.waitForTimeout(1000);
        
        // Repeat the process
        await getUserInput();
      });
    }
  }
}
module.exports = scraperObject;
