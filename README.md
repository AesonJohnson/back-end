### Endpoints

| Request | URL | Description |
| --- | --- | --- |
| POST | /api/auth/register | register as a new user |
| POST | /api/auth/login | log in as existing user |
| GET | /api/plants | get all plants for all users |
| GET | /api/plants/:id | find plant by id |
| POST | /api/plants | add plant |
| PUT | /api/plants | update plant |
| DELETE | /api/plants/:id | delete plant |

### Table Requirements

#### Users
| Name | Type | Required | Unique | Notes | 
| --- | --- | --- | --- | --- |
| id | integer | yes | yes | User's ID |
| name | string | yes | no | User's full name |
| username | string | yes | yes | User's username (max 20 characters) |
| password | string | yes | no | User's password (max 20 characters) |
| email | string | no | yes | User's email |
| phone number | integer | no | yes | User's phone number |

#### Plants
| Name | Type | Required | Unique | Notes | 
| --- | --- | --- | --- | --- |
| id | integer | yes | yes | Plant's ID |
| plantname | string | yes | yes | Plant name (common) |
| plantspecies | string | yes | no | Plant name (scientific) |
| waterschedule | string | yes | no | Plant's water schedule |