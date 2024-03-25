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

def get_events():
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
    return set(event_links)

def get_event_details(event_link):
    page = requests.get(event_link, headers=headers) 
    soup = BeautifulSoup(page.content, "html.parser")
    # Title
    title = soup.find(class_="tribe-events-single-event-title").text
    # Content
    description = soup.find(class_="tribe-events-single-event-description")
    paragraphs = description.find_all('p')
    content = ""
    for paragraph in paragraphs:
        content += paragraph.text + "\n\n"
    # Date
    date_element = soup.find(class_="tribe-events-start-date")
    date = date_element['title'] if date_element else None
    # Time
    time_element = soup.find(class_="tribe-recurring-event-time")
    time = time_element.text if time_element else None
    # TODO: location
    return title, content, date, time

def create_post(title, content, date, time):
    # TODO: make post
    print(title, content, date, time)

if __name__ == "__main__":
    event_links = get_events()
    for event_link in event_links:
        title, content, date, time = get_event_details(event_link)
        create_post(title, content, date, time)
