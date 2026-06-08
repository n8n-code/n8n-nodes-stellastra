import type { INodeProperties } from 'n8n-workflow';

export const defaultDescription: INodeProperties[] = [
		{
			"displayName": "Operation",
			"name": "operation",
			"type": "options",
			"noDataExpression": true,
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					]
				}
			},
			"options": [
				{
					"name": "POST Post Review",
					"value": "POST Post Review",
					"action": "Posts the user's review to Stellastra",
					"description": "Posts the user's review to Stellastra",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/post-review"
						}
					}
				}
			],
			"default": ""
		},
		{
			"displayName": "POST /post-review",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"POST Post Review"
					]
				}
			}
		},
		{
			"displayName": "User Email",
			"name": "user_email",
			"required": true,
			"description": "User's email to which the review verification will be sent. ",
			"default": {
				"user_email": "johnsmith@companyxyz.com"
			},
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "user_email",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"POST Post Review"
					]
				}
			}
		},
		{
			"displayName": "User Name",
			"name": "user_name",
			"description": "The user's name, defaults to empty string \"\".  Thus, if this is omitted, the email to the user will not use the user's name. ",
			"default": {
				"user_name": "John"
			},
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "user_name",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"POST Post Review"
					]
				}
			}
		},
		{
			"displayName": "Rating",
			"name": "rating",
			"required": true,
			"description": "The user's star rating, must be a single integer from [1, 2, 3, 4, 5]",
			"default": {
				"rating": 5
			},
			"type": "options",
			"options": [
				{
					"name": "1",
					"value": 1
				},
				{
					"name": "2",
					"value": 2
				},
				{
					"name": "3",
					"value": 3
				},
				{
					"name": "4",
					"value": 4
				},
				{
					"name": "5",
					"value": 5
				}
			],
			"routing": {
				"send": {
					"type": "query",
					"property": "rating",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"POST Post Review"
					]
				}
			}
		},
		{
			"required": true,
			"displayName": "Rating",
			"name": "rating",
			"type": "number",
			"default": 5,
			"routing": {
				"send": {
					"property": "rating",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"POST Post Review"
					]
				}
			}
		},
		{
			"required": true,
			"displayName": "User Email",
			"name": "user_email",
			"type": "string",
			"default": "johnsmith@usercompanyxyz.com",
			"routing": {
				"send": {
					"property": "user_email",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"POST Post Review"
					]
				}
			}
		},
		{
			"displayName": "User Name",
			"name": "user_name",
			"type": "string",
			"default": "John",
			"routing": {
				"send": {
					"property": "user_name",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"POST Post Review"
					]
				}
			}
		},
		{
			"displayName": "Basic Auth (Base64)",
			"name": "security_basicauth",
			"type": "string",
			"default": "",
			"description": "Basic auth header, a base64 encoding of the auth_email and key, with a simple colon separating. \n\n1. base64(auth_email + \":\" + key)\n2. base64(\"johnsmith@yourcompany.com:77rOjc2Y2UyYTliMDFjMTY2ODMyNTIyYjAyNDE4YjRi)\n3. ImpvaG5zbWl0aEB5b3VyY29tcGFueS5jb206NzdyT2pjMlkyVXlZVGxpTURGak1UWTJPRE15TlRJeVlqQXlOREU0WWpSaQ==\n\nThis may already be handled by your HTTPS request library, for example, the Python \"requests\" library allows for , auth=(admin_email, key), while Axios for Node JS allows auth to be specified as {auth:{username: your_auth_email, password: key}}. ",
			"required": false,
			"routing": {
				"request": {
					"headers": {
						"Authorization": "={{ 'Basic ' + $value }}"
					}
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"POST Post Review"
					]
				}
			}
		},
];
