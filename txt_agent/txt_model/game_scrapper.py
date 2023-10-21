import asyncio
import time
import requests
from bs4 import BeautifulSoup

async def game_scrapper(url, browseObjs):
    page = requests.get(url)

    time.sleep(2)

    soup = BeautifulSoup(page.content, "html.parser")
    print(soup)

    
    results = soup.find_all("span")
    print(results)

    for result in results:
        print(f"Text {result.idx}")
        print(result.text)

async def main():
    browseObjs = ["span", "span .FinishedInput"]  # Make sure your selectors are correct
    await game_scrapper('https://pr-if.org/play/lostpig/', browseObjs)
    #html = await html_read('https://pr-if.org/play/lostpig/')
asyncio.get_event_loop().run_until_complete(main())
