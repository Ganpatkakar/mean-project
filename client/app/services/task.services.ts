///<reference path="../../node_modules/@angular/http/src/http.d.ts"/>
import {Injectable} from '@angular/core';
import {Http, Headers} from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class TaskServices{

    currencyList = [];
    nextWeekData;
    nextMonthData;
    nextQuarterData;
    nextYearData;
    allProducts;
    allBrands;
    allChannels;
    allManufacturers;
    allProductTypes;
    allMetrics;
    allCategories;
    allAges;
    allRevenues;
    allSalesPoints;
    allCreditStores;
    bPlotData;
    bPlotsData;
    distValues;

    constructor(private http:Http){
        console.log('TaskServices Injectable available');
        this.currencyList = [
            {
                "cc": "AUD",
                "symbol": "$",
                "name": "Australian dollar"
            },
            {
                "cc": "BGN",
                "symbol": "BGN",
                "name": "Bulgarian lev"
            },
            {
                "cc": "BRL",
                "symbol": "R$",
                "name": "Brazilian real"
            },
            {
                "cc": "CAD",
                "symbol": "$",
                "name": "Canadian dollar"
            },
            {
                "cc": "CHF",
                "symbol": "Fr.",
                "name": "Swiss franc"
            },
            {
                "cc": "CNY",
                "symbol": "¥",
                "name": "Chinese/Yuan renminbi"
            },
            {
                "cc": "CZK",
                "symbol": "Kč",
                "name": "Czech koruna"
            },
            {
                "cc": "DKK",
                "symbol": "Kr",
                "name": "Danish krone"
            },
            {
                "cc": "GBP",
                "symbol": "£",
                "name": "British pound"
            },
            {
                "cc": "HRK",
                "symbol": "kn",
                "name": "Croatian kuna"
            },
            {
                "cc": "HUF",
                "symbol": "Ft",
                "name": "Hungarian forint"
            },
            {
                "cc": "IDR",
                "symbol": "Rp",
                "name": "Indonesian rupiah"
            },
            {
                "cc": "INR",
                "symbol": "₹",
                "name": "Indian rupee"
            },
            {
                "cc": "ILS",
                "symbol": "₪",
                "name": "Israeli new sheqel"
            },
            {
                "cc": "JPY",
                "symbol": "¥",
                "name": "Japanese yen"
            },
            {
                "cc": "KRW",
                "symbol": "W",
                "name": "South Korean won"
            },
            {
                "cc": "MXN",
                "symbol": "$",
                "name": "Mexican peso"
            },
            {
                "cc": "MYR",
                "symbol": "RM",
                "name": "Malaysian ringgit"
            },
            {
                "cc": "NOK",
                "symbol": "kr",
                "name": "Norwegian krone"
            },
            {
                "cc": "NZD",
                "symbol": "NZ$",
                "name": "New Zealand dollar"
            },
            {
                "cc": "PHP",
                "symbol": "₱",
                "name": "Philippine peso"
            },
            {
                "cc": "PLN",
                "symbol": "zł",
                "name": "Polish zloty"
            },
            {
                "cc": "RON",
                "symbol": "L",
                "name": "Romanian leu"
            },
            {
                "cc": "RUB",
                "symbol": "R",
                "name": "Russian ruble"
            },
            {
                "cc": "SEK",
                "symbol": "kr",
                "name": "Swedish krona"
            },
            {
                "cc": "SGD",
                "symbol": "S$",
                "name": "Singapore dollar"
            },
            {
                "cc": "TRY",
                "symbol": "TRY",
                "name": "Turkish new lira"
            },
            {
                "cc": "THB",
                "symbol": "฿",
                "name": "Thai baht"
            },
            {
                "cc": "USD",
                "symbol": "US$",
                "name": "United States dollar"
            },
            {
                "cc": "ZAR",
                "symbol": "R",
                "name": "South African rand"
            }
        ];

        this.nextWeekData = {
            "key": "Next Week",
            "children": [
                {
                    "key": "Product A",
                    "volume": -101,
                    "sales": 30,
                    "margins": 50,
                    "churn": 40,
                    "risk": "Medium",
                    "type": "Bad weather",
                    "location": "London",
                    "channel": "Channel A",
                    "period": "Next week",
                    "metrics": "Sales",
                    "impact": "10%",
                    "confirmation": "Alert",
                    "status": true,
                    "children": [
                        {"key": "oppurtunity", "value": 2},
                        {"key": "alert", "value": 1}
                    ]
                },
                {
                    "key": "Product B",
                    "volume": 35,
                    "sales": 35,
                    "margins": -101,
                    "churn": 45,
                    "risk": "Medium",
                    "type": "Bad weather",
                    "location": "London",
                    "channel": "Channel A",
                    "period": "Next week",
                    "metrics": "Sales",
                    "impact": "10%",
                    "confirmation": "Alert",
                    "status": false,
                    "children": [
                        {"key": "oppurtunity", "value": 1},
                        {"key": "alert", "value": 3}
                    ]
                },
                {
                    "key": "Product C",
                    "volume": 55,
                    "sales": 48,
                    "margins": 60,
                    "churn": -101,
                    "risk": "Medium",
                    "type": "Bad weather",
                    "location": "London",
                    "channel": "Channel A",
                    "period": "Next week",
                    "metrics": "Sales",
                    "impact": "5%",
                    "confirmation": "Alert",
                    "status": true,
                    "children": [
                        {"key": "oppurtunity", "value": 0},
                        {"key": "alert", "value": 1}
                    ]
                },
                {
                    "key": "Product D",
                    "volume": 29,
                    "sales": -101,
                    "margins": -101,
                    "churn": 4,
                    "risk": "Medium",
                    "type": "Bad weather",
                    "location": "London",
                    "channel": "Channel A",
                    "period": "Next week",
                    "metrics": "Sales",
                    "impact": "15%",
                    "confirmation": "Alert",
                    "status": false,
                    "children": [
                        {"key": "oppurtunity", "value": 2},
                        {"key": "alert", "value": 2}
                    ]
                },
                {
                    "key": "Product E",
                    "volume": 65,
                    "sales": -101,
                    "margins": 79,
                    "churn": -101,
                    "risk": "Medium",
                    "type": "Bad weather",
                    "location": "London",
                    "channel": "Channel A",
                    "period": "Next week",
                    "metrics": "Sales",
                    "impact": "25%",
                    "confirmation": "Alert",
                    "status": true,
                    "children": [
                        {"key": "oppurtunity", "value": 3},
                        {"key": "alert", "value": 3}
                    ]
                }
            ]
        };

        this.nextMonthData = {
            "key": "Next Month",
            "children": [
                {
                    "key": "Product A",
                    "volume": 25,
                    "sales": 30,
                    "margins": 50,
                    "churn": 40,
                    "risk": "Medium",
                    "type": "Bad weather",
                    "location": "London",
                    "channel": "Channel A",
                    "period": "Next month",
                    "metrics": "Sales",
                    "impact": "10%",
                    "confirmation": "Alert",
                    "status": true,
                    "children": [
                        {"key": "oppurtunity", "value": 0},
                        {"key": "alert", "value": 2}
                    ]
                },
                {
                    "key": "Product B",
                    "volume": 35,
                    "sales": 35,
                    "margins": 40,
                    "churn": 45,
                    "risk": "Medium",
                    "type": "Bad weather",
                    "location": "London",
                    "channel": "Channel A",
                    "period": "Next month",
                    "metrics": "Sales",
                    "impact": "10%",
                    "confirmation": "Alert",
                    "status": false,
                    "children": [
                        {"key": "oppurtunity", "value": 3},
                        {"key": "alert", "value": 1}
                    ]
                },
                {
                    "key": "Product C",
                    "volume": 55,
                    "sales": 35,
                    "margins": 60,
                    "churn": 49,
                    "risk": "Medium",
                    "type": "Bad weather",
                    "location": "London",
                    "channel": "Channel A",
                    "period": "Next month",
                    "metrics": "Sales",
                    "impact": "10%",
                    "confirmation": "Alert",
                    "status": true,
                    "children": [
                        {"key": "oppurtunity", "value": 0},
                        {"key": "alert", "value": 0}
                    ]
                },
                {
                    "key": "Product D",
                    "volume": 29,
                    "sales": 39,
                    "margins": 55,
                    "churn": 4,
                    "risk": "Medium",
                    "type": "Bad weather",
                    "location": "London",
                    "channel": "Channel A",
                    "period": "Next month",
                    "metrics": "Sales",
                    "impact": "10%",
                    "confirmation": "Alert",
                    "status": false,
                    "children": [
                        {"key": "oppurtunity", "value": 0},
                        {"key": "alert", "value": 0}
                    ]
                },
                {
                    "key": "Product E",
                    "volume": 65,
                    "sales": 36,
                    "margins": 79,
                    "churn": 60,
                    "risk": "Medium",
                    "type": "Bad weather",
                    "location": "London",
                    "channel": "Channel A",
                    "period": "Next month",
                    "metrics": "Sales",
                    "impact": "10%",
                    "confirmation": "Alert",
                    "status": true,
                    "children": [
                        {"key": "oppurtunity", "value": 3},
                        {"key": "alert", "value": 0}
                    ]
                }
            ]
        };

        this.nextQuarterData = {
            "key": "Next Quarter",
            "children": [
                {
                    "key": "Product A",
                    "volume": 25,
                    "sales": 30,
                    "margins": 50,
                    "churn": 40,
                    "risk": "Medium",
                    "type": "Bad weather",
                    "location": "London",
                    "channel": "Channel A",
                    "period": "Next quarter",
                    "metrics": "Sales",
                    "impact": "20%",
                    "confirmation": "Alert",
                    "status": true,
                    "children": [
                        {"key": "oppurtunity", "value": 0},
                        {"key": "alert", "value": 0}
                    ]
                },
                {
                    "key": "Product B",
                    "volume": 35,
                    "sales": 35,
                    "margins": 40,
                    "churn": 45,
                    "risk": "Medium",
                    "type": "Bad weather",
                    "location": "London",
                    "channel": "Channel A",
                    "period": "Next quarter",
                    "metrics": "Sales",
                    "impact": "10%",
                    "confirmation": "Alert",
                    "status": true,
                    "children": [
                        {"key": "oppurtunity", "value": 2},
                        {"key": "alert", "value": 1}
                    ]
                },
                {
                    "key": "Product C",
                    "volume": 55,
                    "sales": 35,
                    "margins": 60,
                    "churn": 49,
                    "risk": "Medium",
                    "type": "Bad weather",
                    "location": "London",
                    "channel": "Channel A",
                    "period": "Next quarter",
                    "metrics": "Sales",
                    "impact": "10%",
                    "confirmation": "Alert",
                    "status": false,
                    "children": [
                        {"key": "oppurtunity", "value": 3},
                        {"key": "alert", "value": 0}
                    ]
                },
                {
                    "key": "Product D",
                    "volume": 29,
                    "sales": 39,
                    "margins": 55,
                    "churn": 4,
                    "risk": "Medium",
                    "type": "Bad weather",
                    "location": "London",
                    "channel": "Channel A",
                    "period": "Next quarter",
                    "metrics": "Sales",
                    "impact": "10%",
                    "confirmation": "Alert",
                    "status": true,
                    "children": [
                        {"key": "oppurtunity", "value": 3},
                        {"key": "alert", "value": 3}
                    ]
                },
                {
                    "key": "Product E",
                    "volume": 65,
                    "sales": 36,
                    "margins": 79,
                    "churn": 60,
                    "risk": "Medium",
                    "type": "Bad weather",
                    "location": "London",
                    "channel": "Channel A",
                    "period": "Next quarter",
                    "metrics": "Sales",
                    "impact": "10%",
                    "confirmation": "Alert",
                    "status": true,
                    "children": [
                        {"key": "oppurtunity", "value": 1},
                        {"key": "alert", "value": 1}
                    ]
                }
            ]
        };

        this.nextYearData = {
            "key": "Next Year",
            "children": [
                {
                    "key": "Product A",
                    "volume": 25,
                    "sales": 30,
                    "margins": 50,
                    "churn": 40,
                    "risk": "Medium",
                    "type": "Bad weather",
                    "location": "London",
                    "channel": "Channel A",
                    "period": "Next year",
                    "metrics": "Sales",
                    "impact": "10%",
                    "confirmation": "Alert",
                    "status": false,
                    "children": [
                        {"key": "oppurtunity", "value": 3},
                        {"key": "alert", "value": 0}
                    ]
                },
                {
                    "key": "Product B",
                    "volume": 35,
                    "sales": 35,
                    "margins": 40,
                    "churn": 45,
                    "risk": "Medium",
                    "type": "Bad weather",
                    "location": "London",
                    "channel": "Channel A",
                    "period": "Next year",
                    "metrics": "Sales",
                    "impact": "10%",
                    "confirmation": "Alert",
                    "status": true,
                    "children": [
                        {"key": "oppurtunity", "value": 2},
                        {"key": "alert", "value": 1}
                    ]
                },
                {
                    "key": "Product C",
                    "volume": 55,
                    "sales": 35,
                    "margins": 60,
                    "churn": 49,
                    "risk": "Medium",
                    "type": "Bad weather",
                    "location": "London",
                    "channel": "Channel A",
                    "period": "Next year",
                    "metrics": "Sales",
                    "impact": "10%",
                    "confirmation": "Alert",
                    "status": true,
                    "children": [
                        {"key": "oppurtunity", "value": 0},
                        {"key": "alert", "value": 0}
                    ]
                },
                {
                    "key": "Product D",
                    "volume": 29,
                    "sales": 39,
                    "margins": 55,
                    "churn": 4,
                    "risk": "Medium",
                    "type": "Bad weather",
                    "location": "London",
                    "channel": "Channel A",
                    "period": "Next year",
                    "metrics": "Sales",
                    "impact": "10%",
                    "confirmation": "Alert",
                    "status": false,
                    "children": [
                        {"key": "oppurtunity", "value": 1},
                        {"key": "alert", "value": 1}
                    ]
                },
                {
                    "key": "Product E",
                    "volume": 65,
                    "sales": 36,
                    "margins": 79,
                    "churn": 60,
                    "risk": "Medium",
                    "type": "Bad weather",
                    "location": "London",
                    "channel": "Channel A",
                    "period": "Next year",
                    "metrics": "Sales",
                    "impact": "10%",
                    "confirmation": "Alert",
                    "status": true,
                    "children": [
                        {"key": "oppurtunity", "value": 0},
                        {"key": "alert", "value": 3}
                    ]
                }
            ]
        };

        this.allProducts = [
            {
                "product_name": "Pepsi",
                "strategy" : "None",
                "totalBudget": 10,
                "selectedCountry": "USA",
                "selectedChannel" : "BILLA",
                "selectedManufacturer" : "BEST FRUITS",
                "selectedBrand" : "ADIA TRADE EOOD",
                "selectedProductType" : "Lemonade",
                "selectedMetrics" : "Litre",
                "selectedCategory" : "A - Upper Class",
                "selectedAge" : "0 - 5",
                "selectedRevenue" : "Less than 15,000 GBP",
                "selectedCreditScore" : "Grade A : 800 - 818",
                "salectedSalesPoint" : "Tesco - Main Street",
                "selectedCity" : "New York",
                /*"strategy" : 'Strategy1',*/
                "nextWeek" : {
                    "totalBudget" : 0,
                    "emailMarketing" : 0,
                    "socialMedia" : 0,
                    "mobileMarketing" : 0,
                    "search" : 0,
                    "onlineDisplayAds" : 0,
                    "events" : 0,
                    "promotionDiscount" : 0,
                    "publicRelation" : 0,
                    "printAds" : 0,
                    "radioTvAds" : 0,
                    "directMail" : 0,
                    "salesTeam" : 0,
                    "temprature" : 0,
                    "inflation" : 0,
                    "nationalEvents" : "medium",
                    "localEvents" : "medium",
                    "sector" : "medium",
                    "brand1" : "medium",
                    "brand2" : "medium",
                    "brand3" : "medium"
                },
                "nextMonth" : {
                    "totalBudget" : 0,
                    "emailMarketing" : 0,
                    "socialMedia" : 0,
                    "mobileMarketing" : 0,
                    "search" : 0,
                    "onlineDisplayAds" : 0,
                    "events" : 0,
                    "promotionDiscount" : 0,
                    "publicRelation" : 0,
                    "printAds" : 0,
                    "radioTvAds" : 0,
                    "directMail" : 0,
                    "salesTeam" : 0,
                    "temprature" : 0,
                    "inflation" : 0,
                    "nationalEvents" : "medium",
                    "localEvents" : "medium",
                    "sector" : "medium",
                    "brand1" : "medium",
                    "brand2" : "medium",
                    "brand3" : "medium"
                },
                "nextQuarter" : {
                    "totalBudget" : 0,
                    "emailMarketing" : 0,
                    "socialMedia" : 0,
                    "mobileMarketing" : 0,
                    "search" : 0,
                    "onlineDisplayAds" : 0,
                    "events" : 0,
                    "promotionDiscount" : 0,
                    "publicRelation" : 0,
                    "printAds" : 0,
                    "radioTvAds" : 0,
                    "directMail" : 0,
                    "salesTeam" : 0,
                    "temprature" : 0,
                    "inflation" : 0,
                    "nationalEvents" : "medium",
                    "localEvents" : "medium",
                    "sector" : "medium",
                    "brand1" : "medium",
                    "brand2" : "medium",
                    "brand3" : "medium"
                },
                "nextYear" : {
                    "totalBudget" : 0,
                    "emailMarketing" : 0,
                    "socialMedia" : 0,
                    "mobileMarketing" : 0,
                    "search" : 0,
                    "onlineDisplayAds" : 0,
                    "events" : 0,
                    "promotionDiscount" : 0,
                    "publicRelation" : 0,
                    "printAds" : 0,
                    "radioTvAds" : 0,
                    "directMail" : 0,
                    "salesTeam" : 0,
                    "temprature" : 0,
                    "inflation" : 0,
                    "nationalEvents" : "medium",
                    "localEvents" : "medium",
                    "sector" : "medium",
                    "brand1" : "medium",
                    "brand2" : "medium",
                    "brand3" : "medium"
                }

            },
            {
                "product_name": "Tropicana",
                "totalBudget": 10,
                "selectedCountry": "USA",
                "selectedChannel" : "BILLA",
                "selectedManufacturer" : "BEST FRUITS",
                "selectedBrand" : "ADIA TRADE EOOD",
                "selectedProductType" : "Lemonade",
                "selectedMetrics" : "Litre",
                "selectedCategory" : "Category1",
                "selectedAge" : 1,
                "selectedRevenue" : "Revenue1",
                "selectedScore" : 10,
                "salectedSalesPoint" : "SalesPoint1",
                "strategy": 'hello',
                "nextWeek" : {
                    "totalBudget" : 0,
                    "emailMarketing" : 0,
                    "socialMedia" : 0,
                    "mobileMarketing" : 0,
                    "search" : 0,
                    "onlineDisplayAds" : 0,
                    "events" : 0,
                    "promotionDiscount" : 0,
                    "publicRelation" : 0,
                    "printAds" : 0,
                    "radioTvAds" : 0,
                    "directMail" : 0,
                    "salesTeam" : 0,
                    "temprature" : 0,
                    "inflation" : 0,
                    "nationalEvents" : "medium",
                    "localEvents" : "medium",
                    "sector" : "medium",
                    "brand1" : "medium",
                    "brand2" : "medium",
                    "brand3" : "medium"
                },
                "nextMonth" : {
                    "totalBudget" : 0,
                    "emailMarketing" : 0,
                    "socialMedia" : 0,
                    "mobileMarketing" : 0,
                    "search" : 0,
                    "onlineDisplayAds" : 0,
                    "events" : 0,
                    "promotionDiscount" : 0,
                    "publicRelation" : 0,
                    "printAds" : 0,
                    "radioTvAds" : 0,
                    "directMail" : 0,
                    "salesTeam" : 0,
                    "temprature" : 0,
                    "inflation" : 0,
                    "nationalEvents" : "medium",
                    "localEvents" : "medium",
                    "sector" : "medium",
                    "brand1" : "medium",
                    "brand2" : "medium",
                    "brand3" : "medium"
                },
                "nextQuarter" : {
                    "totalBudget" : 0,
                    "emailMarketing" : 0,
                    "socialMedia" : 0,
                    "mobileMarketing" : 0,
                    "search" : 0,
                    "onlineDisplayAds" : 0,
                    "events" : 0,
                    "promotionDiscount" : 0,
                    "publicRelation" : 0,
                    "printAds" : 0,
                    "radioTvAds" : 0,
                    "directMail" : 0,
                    "salesTeam" : 0,
                    "temprature" : 0,
                    "inflation" : 0,
                    "nationalEvents" : "medium",
                    "localEvents" : "medium",
                    "sector" : "medium",
                    "brand1" : "medium",
                    "brand2" : "medium",
                    "brand3" : "medium"
                },
                "nextYear" : {
                    "totalBudget" : 0,
                    "emailMarketing" : 0,
                    "socialMedia" : 0,
                    "mobileMarketing" : 0,
                    "search" : 0,
                    "onlineDisplayAds" : 0,
                    "events" : 0,
                    "promotionDiscount" : 0,
                    "publicRelation" : 0,
                    "printAds" : 0,
                    "radioTvAds" : 0,
                    "directMail" : 0,
                    "salesTeam" : 0,
                    "temprature" : 0,
                    "inflation" : 0,
                    "nationalEvents" : "medium",
                    "localEvents" : "medium",
                    "sector" : "medium",
                    "brand1" : "medium",
                    "brand2" : "medium",
                    "brand3" : "medium"
                }
            },
            {
                "product_name": "Pepsi-Cola",
                "totalBudget": 10,
                "selectedCountry": "USA",
                "selectedChannel" : "BILLA",
                "selectedManufacturer" : "BEST FRUITS",
                "selectedBrand" : "ADIA TRADE EOOD",
                "selectedProductType" : "Lemonade",
                "selectedMetrics" : "Litre",
                "selectedCategory" : "Category1",
                "selectedAge" : 1,
                "selectedRevenue" : "Revenue1",
                "selectedScore" : 10,
                "salectedSalesPoint" : "SalesPoint1",
                "strategy": 'Strategy1',
                "nextWeek" : {
                    "totalBudget" : 0,
                    "emailMarketing" : 0,
                    "socialMedia" : 0,
                    "mobileMarketing" : 0,
                    "search" : 0,
                    "onlineDisplayAds" : 0,
                    "events" : 0,
                    "promotionDiscount" : 0,
                    "publicRelation" : 0,
                    "printAds" : 0,
                    "radioTvAds" : 0,
                    "directMail" : 0,
                    "salesTeam" : 0,
                    "temprature" : 0,
                    "inflation" : 0,
                    "nationalEvents" : "medium",
                    "localEvents" : "medium",
                    "sector" : "medium",
                    "brand1" : "medium",
                    "brand2" : "medium",
                    "brand3" : "medium"
                },
                "nextMonth" : {
                    "totalBudget" : 0,
                    "emailMarketing" : 0,
                    "socialMedia" : 0,
                    "mobileMarketing" : 0,
                    "search" : 0,
                    "onlineDisplayAds" : 0,
                    "events" : 0,
                    "promotionDiscount" : 0,
                    "publicRelation" : 0,
                    "printAds" : 0,
                    "radioTvAds" : 0,
                    "directMail" : 0,
                    "salesTeam" : 0,
                    "temprature" : 0,
                    "inflation" : 0,
                    "nationalEvents" : "medium",
                    "localEvents" : "medium",
                    "sector" : "medium",
                    "brand1" : "medium",
                    "brand2" : "medium",
                    "brand3" : "medium"
                },
                "nextQuarter" : {
                    "totalBudget" : 0,
                    "emailMarketing" : 0,
                    "socialMedia" : 0,
                    "mobileMarketing" : 0,
                    "search" : 0,
                    "onlineDisplayAds" : 0,
                    "events" : 0,
                    "promotionDiscount" : 0,
                    "publicRelation" : 0,
                    "printAds" : 0,
                    "radioTvAds" : 0,
                    "directMail" : 0,
                    "salesTeam" : 0,
                    "temprature" : 0,
                    "inflation" : 0,
                    "nationalEvents" : "medium",
                    "localEvents" : "medium",
                    "sector" : "medium",
                    "brand1" : "medium",
                    "brand2" : "medium",
                    "brand3" : "medium"
                },
                "nextYear" : {
                    "totalBudget" : 0,
                    "emailMarketing" : 0,
                    "socialMedia" : 0,
                    "mobileMarketing" : 0,
                    "search" : 0,
                    "onlineDisplayAds" : 0,
                    "events" : 0,
                    "promotionDiscount" : 0,
                    "publicRelation" : 0,
                    "printAds" : 0,
                    "radioTvAds" : 0,
                    "directMail" : 0,
                    "salesTeam" : 0,
                    "temprature" : 0,
                    "inflation" : 0,
                    "nationalEvents" : "medium",
                    "localEvents" : "medium",
                    "sector" : "medium",
                    "brand1" : "medium",
                    "brand2" : "medium",
                    "brand3" : "medium"
                }
            },
            {
                "product_name": "Coca-Cola",
                "totalBudget": 10,
                "selectedCountry": "USA",
                "selectedChannel" : "BILLA",
                "selectedManufacturer" : "BEST FRUITS",
                "selectedBrand" : "ADIA TRADE EOOD",
                "selectedProductType" : "Lemonade",
                "selectedMetrics" : "Litre",
                "selectedCategory" : "Category1",
                "selectedAge" : 1,
                "selectedRevenue" : "Revenue1",
                "selectedScore" : 10,
                "salectedSalesPoint" : "SalesPoint1",
                "strategy": 'hello',
                "nextWeek" : {
                    "totalBudget" : 0,
                    "emailMarketing" : 0,
                    "socialMedia" : 0,
                    "mobileMarketing" : 0,
                    "search" : 0,
                    "onlineDisplayAds" : 0,
                    "events" : 0,
                    "promotionDiscount" : 0,
                    "publicRelation" : 0,
                    "printAds" : 0,
                    "radioTvAds" : 0,
                    "directMail" : 0,
                    "salesTeam" : 0,
                    "temprature" : 0,
                    "inflation" : 0,
                    "nationalEvents" : "medium",
                    "localEvents" : "medium",
                    "sector" : "medium",
                    "brand1" : "medium",
                    "brand2" : "medium",
                    "brand3" : "medium"
                },
                "nextMonth" : {
                    "totalBudget" : 0,
                    "emailMarketing" : 0,
                    "socialMedia" : 0,
                    "mobileMarketing" : 0,
                    "search" : 0,
                    "onlineDisplayAds" : 0,
                    "events" : 0,
                    "promotionDiscount" : 0,
                    "publicRelation" : 0,
                    "printAds" : 0,
                    "radioTvAds" : 0,
                    "directMail" : 0,
                    "salesTeam" : 0,
                    "temprature" : 0,
                    "inflation" : 0,
                    "nationalEvents" : "medium",
                    "localEvents" : "medium",
                    "sector" : "medium",
                    "brand1" : "medium",
                    "brand2" : "medium",
                    "brand3" : "medium"
                },
                "nextQuarter" : {
                    "totalBudget" : 0,
                    "emailMarketing" : 0,
                    "socialMedia" : 0,
                    "mobileMarketing" : 0,
                    "search" : 0,
                    "onlineDisplayAds" : 0,
                    "events" : 0,
                    "promotionDiscount" : 0,
                    "publicRelation" : 0,
                    "printAds" : 0,
                    "radioTvAds" : 0,
                    "directMail" : 0,
                    "salesTeam" : 0,
                    "temprature" : 0,
                    "inflation" : 0,
                    "nationalEvents" : "medium",
                    "localEvents" : "medium",
                    "sector" : "medium",
                    "brand1" : "medium",
                    "brand2" : "medium",
                    "brand3" : "medium"
                },
                "nextYear" : {
                    "totalBudget" : 0,
                    "emailMarketing" : 0,
                    "socialMedia" : 0,
                    "mobileMarketing" : 0,
                    "search" : 0,
                    "onlineDisplayAds" : 0,
                    "events" : 0,
                    "promotionDiscount" : 0,
                    "publicRelation" : 0,
                    "printAds" : 0,
                    "radioTvAds" : 0,
                    "directMail" : 0,
                    "salesTeam" : 0,
                    "temprature" : 0,
                    "inflation" : 0,
                    "nationalEvents" : "medium",
                    "localEvents" : "medium",
                    "sector" : "medium",
                    "brand1" : "medium",
                    "brand2" : "medium",
                    "brand3" : "medium"
                }
            }
        ];

        this.allBrands = [
            "ADIA TRADE EOOD",
            "AGROFINA",
            "AIRPORT SOFIA",
            "ALVES OOD",
            "ARA RETAIL EOOD",
            "AVANGARD TRADE OOD",
            "BELISIMA",
            "BILLA",
            "BMS GROUP",
            "BRATYA GOSHEVI OOD",
            "BRATYA LILOVY OOD",
            "BRILIANT-24 EOOD",
            "BRILIANT-33 EOOD",
            "BRILIANT-34 EOOD",
            "BRILIANT-35 EOOD",
            "BROUN BULGARIA EOOD",
            "BTVMEDIA",
            "BULGARTABAK",
            "BURGER POINT",
            "BURGERGROUP",
            "CBA",
            "CINEMACHIKEN",
            "CINEMAROADHOUSE",
            "CREDIT NOTES",
            "DAMYANOV EOOD",
            "DANYA",
            "DETELINA OOD",
            "DEVIN EXPRESS OOD",
            "DEVIN GALA EOOD",
            "DEXKOM OOD PERNIK",
            "DIALA 04 OOD",
            "EKO",
            "EL EI LOGISTIK OOD",
            "EOOD BONITA-66",
            "EOOD CHINAR",
            "EOOD HARY GREEVES",
            "EOOD HRANS KOMERS",
            "ET GEORGI GAYDOV",
            "ET NADYA-TEMENUZHKA KOCHEVA",
            "ET PLAM-69 P.PETROV",
            "ET RADKO OVCHEPOLSKI",
            "ET SADITIN MOLAALI",
            "ET TROYA 2000-PL.TRAYANOV G",
            "ET VASKO-V.DELIVERSKI",
            "ET VENCISLAV SRADKOV",
            "ET VIA NEON - MARIA PENEVA",
            "FANTASTIKO",
            "FILI 2004 EOOD",
            "FIZZY",
            "FOOD COMERCE TRADING EOOD",
            "FRESH DRINKS EOOD",
            "FRODO MARKET",
            "GATORADE",
            "HAPPY LADY EOOD",
            "HIP GROUP EOOD",
            "HIT HYPERMARKET",
            "KATIA-VOSPIR TROSHANOV ET",
            "KAUFLAND",
            "KFC AMREST",
            "KOMETA III  OOD",
            "KOMPACT 12",
            "KONSUMATIV WINTER EOOD",
            "KRID EOOD",
            "LIDL",
            "LIGHTS OOD",
            "LIPTON",
            "LUKOIL",
            "MACDONALDS",
            "MALEV EOOD",
            "MARTI MAR EOOD",
            "MBM",
            "MBM GROUP OOD",
            "METRO",
            "MONI 95 OOD",
            "NATO",
            "NIKOL COMERCE OOD",
            "NULL",
            "OBEDINENA KOMPANIA VARNA OOD",
            "OMV",
            "OOD GALA TREYD",
            "OOD KIRKOV 2000",
            "OOD LORY",
            "OOD TOP DRINX",
            "OTHERS",
            "PATO EOOD",
            "PEPSI",
            "PICCADILY",
            "PRIMA-ATANASOV OOD",
            "PRISUN",
            "PROMARKET OOD",
            "RADO OOD",
            "RADONIK EOOD",
            "RECORD EOOD",
            "RITUM 2015 EOOD",
            "ROCKSTAR",
            "SALES",
            "SALKO OOD",
            "SAMARA 98 AD",
            "SHELL",
            "TEODORO BABAROV ET-KLIO KOMERS",
            "TERUM 2002 EOOD",
            "TETA EOOD",
            "TOMET TOSHO METODIEV ET     ",
            "TPK BRIZ",
            "TRILENIUM OOD",
            "TV DAR",
            "VALENTINO EOOD",
            "VARNA DRINKS NEW",
            "VERDI",
            "VILTON 2 OOD",
            "VMV EOOD",
            "VPMARKET",
            "WATER",
            "WIZZAIR"
        ];

        this.allChannels = [
            "BILLA",
            "BRILIANT",
            "BULGARTABAK",
            "CARREFOUR",
            "CBA",
            "DIALA 04 OOD",
            "EKO",
            "ET TROYA 2000-PL.TRAYANOV G",
            "ET VENCISLAV SRADKOV",
            "EUROPA",
            "FANTASTIKO",
            "FORNETTI",
            "FRESH DRINKS EOOD",
            "HIP GROUP",
            "HIP GROUP EOOD",
            "HIT HYPERMARKET",
            "KAKAO",
            "KAUFLAND",
            "KFC",
            "KFC ",
            "KFC AMREST",
            "KRID EOOD",
            "LIDL",
            "LUKOIL",
            "MERCATOR",
            "METRO",
            "NATO",
            "NULL",
            "OMV",
            "OOD TOP DRINX",
            "OPTIMAX TUR OOD",
            "OTHER",
            "PENNY",
            "PICCADILY",
            "PLUS BULGARIA",
            "PRAKTIKER",
            "PROMARKET OOD",
            "SALES",
            "TEHNO TRADE 09 OOD",
            "TEODORO BABAROV ET-KLIO KOMERS",
            "TETA EOOD",
            "VARNA DRINKS NEW",
            "VPMARKET"
        ];

        this.allManufacturers = [
            "BEST FRUITS",
            "COCA - COLA",
            "DEVIN",
            "GORNA BANYA",
            "MASPEX",
            "NOVA TREID",
            "OTHER",
            "QUADRANT"
        ];

        this.allProductTypes = ["Lemonade", "Mountain Lightning", "Orangette", "Pineapple", "Raspberry" ];

        this.allMetrics = ["Litre", "RC"];

        this.allCategories = ["A - Upper Class", "B - Middle Class", "C1 - Lower Middle class", "C2 - Skilled working class", "D - Working class", "E - Lowest level of subsistence"];

        this.allAges = ["0 - 5", "6 - 12", "13 - 18", "19 - 25", "26 - 35", "36 - 45", "46 - 60", "60+"];

        this.allRevenues = ["Less than 15,000 GBP",
            "15,000 GBP - 19,999 GBP",
            "20,000 GBP - 29,999 GBP",
            "30,000 GBP - 39,999 GBP",
            "40,000 GBP - 49,999 GBP",
            "More than 50,000 GBP"];

        this.allSalesPoints = ["Tesco - Main Street",
            "Tesco - Piccadilly Circus",
            "Asda - Edgware Road",
            "Asda - Corner Street",
            "Sainsbury - Paddington",
            "Sainsbury - Earls Court"];

        this.allCreditStores = ["Grade A : 800 - 818",
            "Grade B : 750 - 799",
            "Grade C : 700 - 749",
            "Grade D : 650 - 699",
            "Grade E : 600 - 649",
            "Grade F : 550 - 590",
            "Grade G : 500 - 549",
            "Grade H : 334 - 499"]

        this.bPlotData = {
            name: "Presun",
            prediction: [3294, 4319, 6587, 8000, 12121, 13676, 16754, 17270, 17633, 18712]
        };

        this.bPlotsData = [
            {
                name: "stg-a",
                prediction: [4000, 5070, 7343, 7943, 8669, 9136, 9385, 9879, 10546, 20000]
            },
            {
                name: "stg-b",
                prediction: [5354, 6725, 7446, 8238, 8675, 9323, 9365, 9395, 10899, 15000]
            },
            {
                name: "stg-c",
                prediction: [3294, 4319, 6587, 8000, 12121, 13676, 16754, 17270, 17633, 18712]
            },
            {
                name: "stg-d",
                prediction: [5116, 5125, 5629, 5752, 5828, 5995, 6014, 7557, 8905, 20000]
            },
            {
                name: "stg-e",
                prediction: [3294, 4319, 6587, 8000, 12121, 13676, 16754, 17270, 17633, 18712]
            },
            {
                name: "stg-f",
                prediction: [5116, 5125, 5629, 5752, 5828, 4000, 6014, 7557, 8905, 20000]
            }
        ];

        this.distValues = [11,8,5,14,12,10,6,4,7,14,5,4,];

    }
    getTasks(){
        return this.http.get('http://localhost:3001/api/tasks').map(res => res.json());
    }
    addTask(task){
        var headers = new Headers();
        headers.append('Content-Type', 'application/json');

        return this.http.post('http://localhost:3001/api/task', JSON.stringify(task), {headers : headers})
            .map(res => res.json());
    }
    removeTask(removetaskId){
        return this.http.delete('http://localhost:3001/api/task/'+removetaskId)
    }

    updateTask(task){
        var headers = new Headers();
        headers.append('Content-Type', 'application/json');
        console.log(task);
        return this.http.put('http://localhost:3001/api/task/'+task._id, JSON.stringify(task), {headers : headers})
            .map(res => res.json());
    }

    getCurrencyCountry (fromValues){
        return this.http.get('http://api.fixer.io/latest?base='+fromValues).map(res => res.json());
    }

    getAllProducts (){
        return this.allProducts;
    }
}
