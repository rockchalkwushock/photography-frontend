# API DOCUMENTATION

### Get A Specific Category
#### HTTP Request
```plaintext
GET http://localhost:3000/category/<CATEGROY>
```
#### URL Parameters
| Parameter | Description
| :-------------| :------------- |
| CATEGORY | The category to retrieve.
```bash
curl -X GET "http://localhost:3000/category/family"
```
#### Response
```json
{
  "error": false,
  "category": {
    "_id": "58b1eedf70740d40bd29b50b",
    "name": "family",
    "__v": 0,
    "photos": []
  },
  "message": "family found!"
}
```