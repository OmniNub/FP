//find and filter rooms with 2 beds 2 bedroom
//address country set to brazil

db.listingsAndReviews.find({
    "address.country": "Brazil"
})


db.animals.insertOne(
    {
        name: "poo poo",
        age: "6",
        breed: "maltipoo"

    }
)


//Hands on 1

db.companies.find(
    {founded_year: 2006},
    {name:1,founded_year:1}
)

db.companies.find(
    {
        founded_year: { $gt: 2000 }
    },
    {name:1,founded_year:1}
)

db.companies.find(
    {
        founded_year: ({ $gt: 1900 }, {$lt: 2010})
    },
    {name:1,founded_year:1}
)


db.companies.find(
    {
        "ipo": {$ne:null}, 
        "ipo.valuation_amount": { $gt: 100000000},

    } ,
    {
        "name":1, 
        "ipo.valuation_amount": 1,
        "ipo.valuation_currency_code": 1
    }
)

db.companies.find(
    {
        "ipo": {$ne: null},
        "ipo.valuation_amount": { $gt: 100000000},
        "ipo.valuation_currency_code": "USD"

    },
    {
        "name":1,
        "ipo.valuation_amount": 1,
        "ipo.valuation_currency_code": 1
    }
)


//Hands on 2

db.inspections.find(
    {
        "result": {$ne: "No Violation Issued"}
    },
    {
        "business_name": 1
    }
)

db.inspections.find(
    {
        "result": {$ne: "No Violation Issued"},
        "address.city": "NEW YORK"
    },{
        "business_name": 1,
        "address.city": 1
    }

)

db.inspections.countDocuments(
    {
        "address.city": "NEW YORK"
    }
)

db.inspections.countDocuments(
    {
        "address.city": "RIDGEWOOD",
        "result": "No Violation Issued"
    }
)


// Hands on 3

db.accounts.find(
    {
        "products": "InvestmentStock"
    },{
        "account_id": 1,
        "products": 1
    }
)

db.accounts.find(
    {
        "products": ("InvestmentStock","Commodity")
    },{
        "account_id": 1,
        "products": 1
    }
)

db.accounts.find(
    {
        $or: [{"products": "Commodity"},{"products": "CurrencyService"}]
    },{
        "account_id": 1,
        "products": 1
    }
)

db.accounts.find(
    {
        "products": {$not: {$eq:"CurrencyService"}}
    },{
        "account_id": 1,
        "products": 1
    }
)

db.accounts.find(
    {
        "products": ("InvestmentStock", "InvestmentFund"),
        "limit": { $gt: 1000}
    },{
        "account_id": 1,
        "products": 1,
        "limit": 1
    }
)


//Hands on 4

db.sales.find(
    {
        $or: [{"storeLocation": "Denver"}, {"storeLocation": "Seattle"}]
    },{
        "storeLocation": 1,
        "items": 1
    }
)

db.sales.find(
    {
        "storeLocation": "Denver",
        "customer.satisfaction": { $gte:3}
    },{
        "items": 1,
        "storeLocation": 1,
        "customer.satisfaction":1
    }
)

db.sales.find(
    {
        $or: [{"storeLocation":"Denver","purchaseMethod":"Online"},{"storeLocation":"Seattle","purchaseMethod":"Phone"}]
    },
    {
        "storeLocation":1,
        "purchaseMethod":1
    }
)

db.sales.find(
    {
        "couponUsed": false
    }
)

db.sales.find(
    {
        "items.name": "envelopes", "items.envelopes.quantity": {$gte: 9}
    },{
        "items": 1
    }
)

db.sales.find(
    {
        "items.name": {$in:["envelopes"]},"couponUsed": false
        },{
        "items.name": 1,
        "couponUsed": 1
    }
)

//Hands on 5

db.students.insertMany([
    {
        "Name": "Jane Doe",
        "Age": 13,
        "Subjects": ["Defense Against the Dark Arts", "Charms", "History of Magic"],
        "Date Enrolled": "13th May 2016"
    },{
        "Name": "James Verses",
        "Age": 14,
        "Subjects": ["Transfiguration", "Alchemy"],
        "Date Enrolled": "15th June 2015"
    },{
        "Name": "Jonathan Goh",
        "Age": 12,
        "Subjects": ["Divination", "Study of Ancient Runes"],
        "Date Enrolled": "16th April 2017"
    }
])


db.food.insertMany([
    {
        "Name": "Hamburger",
        "Price": 8,
        "Halal": "False"
    },{
        "Name": "Prata",
        "Price": 1.20,
        "Halal": "True"
    },{
        "Name": "Hokkien Mee",
        "Price": 3.6,
        "Halal": "True"
    }
])

db.food.updateOne(
    {
        "Name": "Hokkien Mee"
    },
    {
        $set: {"Halal": "False"}
    }
)

//Hands on 6

db.students.updateMany(
    {},
    {$inc:{Age: 1}}
)

db.students.updateOne(
    {
        "Name": "Jonathan Goh"
    },
    {
        $set: {"Date Enrolled": "2018 13th May"}
    }
)

db.students.updateOne(
    {
        "Name": "James Verses"
    },{
        $set: {"Age": 13}
    }
)

db.students.updateOne(
    {
        "Name": "Jane Doe"
    },{
        $set: {"Name": "Jane Doe Jr","Age": 11}
    }
)