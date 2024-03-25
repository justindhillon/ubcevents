from datetime import date, timedelta
import requests
from bs4 import BeautifulSoup

headers = {
    "Accept": "text/html,application/xhtml+xml,application/xml;q=0.9,image/avif,image/webp,*/*;q=0.8",
    "Accept-Encoding": "gzip, deflate, br",
    "Accept-Language": "en-US,en;q=0.5",
    "Sec-Fetch-Dest": "document",
    "Sec-Fetch-Mode": "navigate",
    "Sec-Fetch-Site": "cross-site",
    "Sec-Fetch-User": "?1",
    "Upgrade-Insecure-Requests": "1",
    "User-Agent": "Mozilla/5.0 (X11; Linux x86_64; rv:121.0) Gecko/20100101 Firefox/121.0",
    "X-Amzn-Trace-Id": "Root=1-659f58c5-4de24ef7384486270161f185"
}

if __name__ == "__main__":
    event_links = []
    # Iterate over the next 7 days
    for i in range(7):
        current_date = date.today() + timedelta(days=i)
        url = "https://events.ubc.ca/events/" + str(current_date)
        page = requests.get(url, headers=headers) 
        soup = BeautifulSoup(page.content, "html.parser")
        events = soup.find_all(rel="bookmark")
        for event in events:
            event_link = event['href']
            event_links.append(event_link) 
    # Remove Duplicates
    event_links = set(event_links)
    print(event_links)
