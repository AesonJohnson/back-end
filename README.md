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

#### Plants