import requests

# set up the request parameters
params = {
  'api_key': 'demo',
  'amazon_domain': 'amazon.com',
  'type': 'product',
  'asin': 'B073JYC4XM'
}

# make the http GET request to Rainforest API
api_result = requests.get('https://api.rainforestapi.com/request', params)

# print the JSON response from Rainforest API
print(json.dumps(api_result.json()))