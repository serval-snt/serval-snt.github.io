import requests
import json

params = {
    "organization": "SNT",
    "department": "SerVal",
    "_locale": "user"
}

url = "https://www.uni.lu/snt-en/wp-json/ulux-people/v1/list"

response = requests.get(url, params=params)
json_data = response.json()
n_people = json_data['totalResults']
people = json_data['people']

for _ in range(10, n_people, 10):
    # 10 people max. are provided
    params['searchAfter'] = ','.join(map(str, json_data["searchAfter"]))
    response = requests.get(url, params=params)
    json_data = response.json()
    people.extend(json_data['people'])

groups = {p["positionDescription"] for p in people}

for group in groups:
    print(f"<h2>{group}</h2>")
    print("<ul>")
    for p in people:
        if p["positionDescription"] == group:
            if p['academicTitle']:
                print(f"    <li>{p['academicTitle']} {p['firstName']} {p['lastName']}</li>")
            else:
                print(f"    <li>{p['firstName']} {p['lastName']}</li>")
    print("</ul>\n")