const products = [{
        "id": 1,
        "name": "Smartphone",
        "price": 699.99,
        "image": [{
                "alt": "Vans",
                "url": "https://s3.eu-central-1.amazonaws.com/bootstrapbaymisc/blog/24_days_bootstrap/vans.png"
            },
            {
                "alt": "Nike",
                "url": "https://encrypted-tbn1.gstatic.com/shopping?q=tbn:ANd9GcRXI6Yiu_o8f3O9loiCjaHP-UuynT77U3W1jNWjBRe23UPRajlcCup19biWtRwHUx1aDXAbw0BHMJpOWJhUny2zSpQwkZErcGa43VxDcRIhOtbJQO6FyZsscCzpa05AyQ&usqp=CAc"
            }
        ],
        "categories": [{
                "categoryId": 101,
                "categoryName": "Electronics"
            },
            {
                "categoryId": 102,
                "categoryName": "Smartphones"
            }
        ],
        "details": {
            "description": "Latest model with high-end specs.",
            "specs": [{
                    "specName": "Screen",
                    "specValue": "6.5 inch OLED"
                },
                {
                    "specName": "Battery",
                    "specValue": "4500 mAh"
                }
            ]
        }
    },
    {
        "id": 2,
        "name": "Laptop",
        "price": 1200.00,
        "image": [{
                "alt": "Vans",
                "url": "https://s3.eu-central-1.amazonaws.com/bootstrapbaymisc/blog/24_days_bootstrap/vans.png"
            },
            {
                "alt": "Nike",
                "url": "https://encrypted-tbn1.gstatic.com/shopping?q=tbn:ANd9GcRXI6Yiu_o8f3O9loiCjaHP-UuynT77U3W1jNWjBRe23UPRajlcCup19biWtRwHUx1aDXAbw0BHMJpOWJhUny2zSpQwkZErcGa43VxDcRIhOtbJQO6FyZsscCzpa05AyQ&usqp=CAc"
            }
        ],
        "categories": [{
                "categoryId": 101,
                "categoryName": "Electronics"
            },
            {
                "categoryId": 104,
                "categoryName": "Computers"
            }
        ],
        "details": {
            "description": "Powerful laptop suitable for both work and play.",
            "specs": [{
                    "specName": "CPU",
                    "specValue": "Intel i7"
                },
                {
                    "specName": "RAM",
                    "specValue": "16GB"
                }
            ]
        }
    }
]

export default products;