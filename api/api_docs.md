# API DOCUMENTATION

### Get All Categories
#### HTTP Request
```plaintext
GET http://localhost:3000/category
```
```bash
curl -X GET "http://localhost:3000/category"
```
#### Response
```json
{
  "error": false,
  "categories": [
    {
      "_id": "58b1eedf70740d40bd29b50b",
      "name": "family",
      "__v": 0,
      "photos": []
    }
  ],
  "message": "Categories retrieved."
}
```
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
### Creating A Category
#### HTTP Request
```plaintext
POST http://localhost:3000/category
```
```bash
curl -X POST "http://localhost:3000/category"
```
#### Response
```json
{
  "category": {
    "__v": 0,
    "name": "family",
    "_id": "58b20ab4329eca4d2dc14c2e",
    "photos": []
  },
  "error": false,
  "message": "family created!"
}
```
### Adding An ImageUrl
#### HTTP Request
```plaintext
POST http://localhost:3000/category/<CATEGORY>
```
```bash
curl -X POST "http://localhost:3000/category/family"
```
#### Response
```json
{
  "error": false,
  "category": {
    "_id": "58b1eedf70740d40bd29b50b",
    "name": "family",
    "__v": 0,
    "photos": [
      "http://res.cloudinary.com/cloudname/image/upload/v1485968368/image.jpg"
    ]
  },
  "message": "Photo successfully added!"
}
```