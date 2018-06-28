import { routerRedux } from 'dva/router';
import { message } from 'antd';
import { fakeSubmitForm } from '../services/api';
const mock = {
  data : {
    list:[
      {
        date:'2018-04-28',
        id:1,
        key:1,
        sale_300 : 4,
        sale_600 : 0,
        sale_1000 : 2,
        toySales : 0,
        trainsetSales :0,
        ceramicsSales : 0,
        throughTicketSales : 0,
        singleSales : 360,
        destroySales : 226,
        grossEarnings : 2560,
        user : '陈三日',
        point : 0,
        other : 0
      },
      {
        date:'2018-04-29',
        id:2,
        key:2,
        sale_300 : 15,
        sale_600 : 0,
        sale_1000 : 1,
        toySales : 239,
        trainsetSales :0,
        ceramicsSales : 0,
        throughTicketSales : 0,
        singleSales : 1350,
        destroySales : 440,
        grossEarnings : 11829,
        user : '陈三日',
        point : 0,
        other : 0
      },
      {
        date:'2018-04-30',
        id:3,
        key:3,
        sale_300 : 26,
        sale_600 : 1,
        sale_1000 : 0,
        toySales : 250,
        trainsetSales :0,
        ceramicsSales : 0,
        throughTicketSales : 0,
        singleSales : 1421,
        destroySales : 1334,
        grossEarnings : 10352,
        user : '陈三日',
        point : 0,
        other : 0
      },
      {
        date:'2018-05-01',
        id:4,
        key:4,
        sale_300 : 24,
        sale_600 : 0,
        sale_1000 : 2,
        toySales : 322,
        trainsetSales :0,
        ceramicsSales : 0,
        throughTicketSales : 0,
        singleSales : 1530,
        destroySales : 981,
        grossEarnings : 11152,
        user : '陈三日',
        point : 0,
        other : 0
      },
      {
        date:'2018-05-02',
        id:5,
        key:5,
        sale_300 : 4,
        sale_600 : 0,
        sale_1000 : 0,
        toySales : 0,
        trainsetSales :0,
        ceramicsSales : 0,
        throughTicketSales : 0,
        singleSales : 205,
        destroySales : 1070,
        grossEarnings : 1885,
        user : '陈三日',
        point : 0,
        other : 0
      },
      {
        date:'2018-05-03',
        id:6,
        key:6,
        sale_300 : 4,
        sale_600 : 1,
        sale_1000 : 1,
        toySales : 322,
        trainsetSales :0,
        ceramicsSales : 0,
        throughTicketSales : 0,
        singleSales : 80,
        destroySales : 198,
        grossEarnings : 2780,
        user : '陈三日',
        point : 0,
        other : -100
      },
      {
        date:'2018-05-04',
        id:7,
        key:7,
        sale_300 : 6,
        sale_600 : 0,
        sale_1000 : 0,
        toySales : 47.2,
        trainsetSales :0,
        ceramicsSales : 0,
        throughTicketSales : 0,
        singleSales : 445,
        destroySales : 2070,
        grossEarnings : 2562,
        user : '陈三日',
        point : 0,
        other : 0
      },
      {
        date:'2018-05-05',
        id:8,
        key:8,
        sale_300 : 22,
        sale_600 : 0,
        sale_1000 : 0,
        toySales : 158,
        trainsetSales :0,
        ceramicsSales : 0,
        throughTicketSales : 0,
        singleSales : 880,
        destroySales : 4808,
        grossEarnings : 9438,
        user : '陈三日',
        point : 0,
        other : 0
      },
      {
        date:'2018-05-06',
        id:9,
        key:9,
        sale_300 : 8,
        sale_600 : 2,
        sale_1000 : 2,
        toySales : 0,
        trainsetSales :0,
        ceramicsSales : 0,
        throughTicketSales : 168,
        singleSales : 947,
        destroySales : 984,
        grossEarnings : 8303,
        user : '陈三日',
        point : 0,
        other : 0
      },
      {
        date:'2018-05-07',
        id:10,
        key:10,
        sale_300 : 7,
        sale_600 : 0,
        sale_1000 : 0,
        toySales : 129,
        trainsetSales :0,
        ceramicsSales : 0,
        throughTicketSales : 0,
        singleSales : 240,
        destroySales : 446,
        grossEarnings : 3169,
        user : '陈三日',
        point : 0,
        other : 0
      },
      {
        date:'2018-05-08',
        id:11,
        key:11,
        sale_300 : 5,
        sale_600 : 0,
        sale_1000 : 2,
        toySales : 0,
        trainsetSales :190,
        ceramicsSales : 0,
        throughTicketSales : 0,
        singleSales : 310,
        destroySales : 626,
        grossEarnings : 4310,
        user : '陈三日',
        point : 0,
        other : 0
      },
      {
        date:'2018-05-09',
        id:12,
        key:12,
        sale_300 : 6,
        sale_600 : 1,
        sale_1000 : 1,
        toySales : 0,
        trainsetSales :90,
        ceramicsSales : 0,
        throughTicketSales : 0,
        singleSales : 260,
        destroySales : 461,
        grossEarnings : 3930,
        user : '陈三日',
        point : 0,
        other : 0
      },
      {
        date:'2018-05-10',
        id:13,
        key:13,
        sale_300 : 5,
        sale_600 : 0,
        sale_1000 : 0,
        toySales : 0,
        trainsetSales :60,
        ceramicsSales : 0,
        throughTicketSales : 0,
        singleSales : 260,
        destroySales : 503,
        grossEarnings : 2840,
        user : '陈三日',
        point : 0,
        other : 0
      },
      {
        date:'2018-05-11',
        id:14,
        key:14,
        sale_300 : 7,
        sale_600 : 1,
        sale_1000 : 1,
        toySales : 92,
        trainsetSales :210,
        ceramicsSales : 0,
        throughTicketSales : 0,
        singleSales : 460,
        destroySales : 771,
        grossEarnings : 5072,
        user : '陈三日',
        point : 0,
        other : 0
      },
      {
        date:'2018-05-12',
        id:15,
        key:15,
        sale_300 : 21,
        sale_600 : 1,
        sale_1000 : 1,
        toySales : 262,
        trainsetSales :610,
        ceramicsSales : 0,
        throughTicketSales : 0,
        singleSales : 1450,
        destroySales : 2206,
        grossEarnings : 10272,
        user : '陈三日',
        point : 0,
        other : 0
      },
      {
        date:'2018-05-13',
        id:16,
        key:16,
        sale_300 : 30,
        sale_600 : 0,
        sale_1000 : 3,
        toySales : 228,
        trainsetSales :660,
        ceramicsSales : 174,
        throughTicketSales : 0,
        singleSales : 1884,
        destroySales : 2711,
        grossEarnings : 15692,
        user : '陈三日',
        point : 0,
        other : 0
      },
      {
        date:'2018-05-14',
        id:17,
        key:17,
        sale_300 : 6,
        sale_600 : 0,
        sale_1000 : 2,
        toySales : 168,
        trainsetSales :80,
        ceramicsSales : 58,
        throughTicketSales : 0,
        singleSales : 382,
        destroySales : 699,
        grossEarnings : 5026,
        user : '陈三日',
        point : 0,
        other : 0
      },
      {
        date:'2018-05-15',
        id:18,
        key:18,
        sale_300 : 5,
        sale_600 : 0,
        sale_1000 : 0,
        toySales : 0,
        trainsetSales :160,
        ceramicsSales : 0,
        throughTicketSales : 0,
        singleSales : 280,
        destroySales : 602,
        grossEarnings : 1780,
        user : '陈三日',
        point : 0,
        other : 0
      },
      {
        date:'2018-05-16',
        id:19,
        key:19,
        sale_300 : 3,
        sale_600 : 0,
        sale_1000 : 0,
        toySales : 188,
        trainsetSales :100,
        ceramicsSales : 0,
        throughTicketSales : 0,
        singleSales : 420,
        destroySales : 534,
        grossEarnings : 1508,
        user : '陈三日',
        point : 0,
        other : 0
      },
      {
        date:'2018-05-17',
        id:20,
        key:20,
        sale_300 : 8,
        sale_600 : 1,
        sale_1000 : 1,
        toySales : 70,
        trainsetSales :170,
        ceramicsSales : 0,
        throughTicketSales : 0,
        singleSales : 60,
        destroySales : 724,
        grossEarnings : 4280,
        user : '陈三日',
        point : 0,
        other : 0
      },
      {
        date:'2018-05-18',
        id:21,
        key:21,
        sale_300 : 4,
        sale_600 : 0,
        sale_1000 : 0,
        toySales : 19,
        trainsetSales :70,
        ceramicsSales : 38,
        throughTicketSales : 0,
        singleSales : 198,
        destroySales : 960,
        grossEarnings : 1417,
        user : '陈三日',
        point : 0,
        other : 0
      },
      {
        date:'2018-05-19',
        id:22,
        key:22,
        sale_300 : 16,
        sale_600 : 0,
        sale_1000 : 1,
        toySales : 86,
        trainsetSales :550,
        ceramicsSales : 0,
        throughTicketSales : 168,
        singleSales : 1845,
        destroySales : 2526,
        grossEarnings : 8409,
        user : '陈三日',
        point : 0,
        other : 0
      },
      {
        date:'2018-05-20',
        id:23,
        key:23,
        sale_300 : 23,
        sale_600 : 2,
        sale_1000 : 2,
        toySales : 142,
        trainsetSales :40,
        ceramicsSales : 68,
        throughTicketSales : 0,
        singleSales : 1288,
        destroySales : 3048,
        grossEarnings : 11800,
        user : '陈三日',
        point : 0,
        other : 0
      },
      {
        date:'2018-05-21',
        id:24,
        key:24,
        sale_300 : 2,
        sale_600 : 0,
        sale_1000 : 0,
        toySales : 0,
        trainsetSales :80,
        ceramicsSales : 0,
        throughTicketSales : 0,
        singleSales : 290,
        destroySales : 546,
        grossEarnings : 1860,
        user : '陈三日',
        point : 0,
        other : 0
      },
      {
        date:'2018-05-22',
        id:25,
        key:25,
        sale_300 : 8,
        sale_600 : 0,
        sale_1000 : 0,
        toySales : 0,
        trainsetSales :130,
        ceramicsSales : 38,
        throughTicketSales : 0,
        singleSales : 238,
        destroySales : 1048,
        grossEarnings : 2638,
        user : '陈三日',
        point : 0,
        other : 0
      },
      {
        date:'2018-05-23',
        id:26,
        key:26,
        sale_300 : 4,
        sale_600 : 0,
        sale_1000 : 0,
        toySales : 0,
        trainsetSales :100,
        ceramicsSales : 0,
        throughTicketSales : 0,
        singleSales : 250,
        destroySales : 1002,
        grossEarnings : 1450,
        user : '陈三日',
        point : 0,
        other : 0
      },
      {
        date:'2018-05-24',
        id:27,
        key:27,
        sale_300 : 4,
        sale_600 : 0,
        sale_1000 : 0,
        toySales : 35,
        trainsetSales :60,
        ceramicsSales : 0,
        throughTicketSales : 0,
        singleSales : 85,
        destroySales : 633,
        grossEarnings : 1320,
        user : '陈三日',
        point : 0,
        other : 0
      },
      {
        date:'2018-05-25',
        id:28,
        key:28,
        sale_300 : 7,
        sale_600 : 0,
        sale_1000 : 1,
        toySales : 0,
        trainsetSales :50,
        ceramicsSales : 0,
        throughTicketSales : 0,
        singleSales : 220,
        destroySales : 628,
        grossEarnings : 3070,
        user : '陈三日',
        point : 0,
        other : 0
      },
      {
        date:'2018-05-26',
        id:29,
        key:29,
        sale_300 : 17,
        sale_600 : 1,
        sale_1000 : 0,
        toySales : 138,
        trainsetSales :380,
        ceramicsSales : 0,
        throughTicketSales : 0,
        singleSales : 1770,
        destroySales : 2546,
        grossEarnings : 7908,
        user : '陈三日',
        point : 0,
        other : 0
      },
      {
        date:'2018-05-27',
        id:30,
        key:30,
        sale_300 : 17,
        sale_600 : 0,
        sale_1000 : 1,
        toySales : 206,
        trainsetSales :70,
        ceramicsSales : 0,
        throughTicketSales : 0,
        singleSales : 540,
        destroySales : 2080,
        grossEarnings : 6846,
        user : '陈三日',
        point : 0,
        other : 0
      },
      {
        date:'2018-05-28',
        id:31,
        key:31,
        sale_300 : 5,
        sale_600 : 0,
        sale_1000 : 0,
        toySales : 43,
        trainsetSales :20,
        ceramicsSales : 0,
        throughTicketSales : 0,
        singleSales : 140,
        destroySales : 766,
        grossEarnings : 2103,
        user : '陈三日',
        point : 0,
        other : 0
      },
      {
        date:'2018-05-29',
        id:32,
        key:32,
        sale_300 :3,
        sale_600 : 0,
        sale_1000 : 0,
        toySales : 0,
        trainsetSales :150,
        ceramicsSales : 0,
        throughTicketSales : 0,
        singleSales : 320,
        destroySales : 1135,
        grossEarnings : 1220,
        user : '陈三日',
        point : 0,
        other : 0
      },
      {
        date:'2018-05-30',
        id:33,
        key:33,
        sale_300 : 3,
        sale_600 : 0,
        sale_1000 : 0,
        toySales : 810,
        trainsetSales :190,
        ceramicsSales : 0,
        throughTicketSales : 0,
        singleSales : 310,
        destroySales : 1497,
        grossEarnings : 2020,
        user : '陈三日',
        point : 0,
        other : 0
      },
      {
        date:'2018-05-31',
        id:34,
        key:34,
        sale_300 : 3,
        sale_600 : 0,
        sale_1000 : 0,
        toySales : 214,
        trainsetSales :70,
        ceramicsSales : 0,
        throughTicketSales : 0,
        singleSales : 140,
        destroySales : 624,
        grossEarnings : 1254,
        user : '陈三日',
        point : 0,
        other : 0
      },
      {
        date:'2018-06-01',
        id:35,
        key:35,
        sale_300 : 35,
        sale_600 : 1,
        sale_1000 : 1,
        toySales : 340,
        trainsetSales :510,
        ceramicsSales : 0,
        throughTicketSales : 0,
        singleSales : 1970,
        destroySales : 3812,
        grossEarnings : 14410,
        user : '陈三日',
        point : 0,
        other : 0
      },
      {
        date:'2018-06-02',
        id:36,
        key:36,
        sale_300 : 16,
        sale_600 : 1,
        sale_1000 : 0,
        toySales : 260,
        trainsetSales :480,
        ceramicsSales : 0,
        throughTicketSales : 0,
        singleSales : 1615,
        destroySales : 3694,
        grossEarnings : 7275,
        user : '陈三日',
        point : 0,
        other : 0
      },
      {
        date:'2018-06-03',
        id:37,
        key:37,
        sale_300 : 16,
        sale_600 : 0,
        sale_1000 : 0,
        toySales : 0,
        trainsetSales :300,
        ceramicsSales : 68,
        throughTicketSales : 0,
        singleSales : 817,
        destroySales : 2432,
        grossEarnings : 5617,
        user : '陈三日',
        point : 0,
        other : 0
      },
      {
        date:'2018-06-04',
        id:38,
        key:38,
        sale_300 : 5,
        sale_600 : 0,
        sale_1000 : 0,
        toySales : 152,
        trainsetSales :50,
        ceramicsSales : 38,
        throughTicketSales : 0,
        singleSales : 208,
        destroySales : 646,
        grossEarnings : 1860,
        user : '陈三日',
        point : 0,
        other : 0
      },
      {
        date:'2018-06-05',
        id:39,
        key:39,
        sale_300 : 2,
        sale_600 : 0,
        sale_1000 : 0,
        toySales : 752,
        trainsetSales :100,
        ceramicsSales : 0,
        throughTicketSales : 0,
        singleSales : 250,
        destroySales : 1542,
        grossEarnings : 930,
        user : '陈三日',
        point : 0,
        other : 0
      },
      {
        date:'2018-06-06',
        id:40,
        key:40,
        sale_300 : 10,
        sale_600 : 0,
        sale_1000 : 0,
        toySales : 686,
        trainsetSales :100,
        ceramicsSales : 0,
        throughTicketSales : 0,
        singleSales : 230,
        destroySales : 980,
        grossEarnings : 4016,
        user : '陈三日',
        point : 0,
        other : 0
      },
      {
        date:'2018-06-07',
        id:41,
        key:41,
        sale_300 : 3,
        sale_600 : 0,
        sale_1000 : 0,
        toySales : 63,
        trainsetSales :100,
        ceramicsSales : 0,
        throughTicketSales : 0,
        singleSales : 330,
        destroySales : 736,
        grossEarnings : 1633,
        user : '陈三日',
        point : 0,
        other : 0
      },
      {
        date:'2018-06-08',
        id:42,
        key:42,
        sale_300 : 5,
        sale_600 : 0,
        sale_1000 : 0,
        toySales : 23,
        trainsetSales :170,
        ceramicsSales : 0,
        throughTicketSales : 0,
        singleSales : 0,
        destroySales : 1432,
        grossEarnings : 1693,
        user : '陈三日',
        point : 0,
        other : 0
      },
      {
        date:'2018-06-09',
        id:43,
        key:43,
        sale_300 : 12,
        sale_600 : 0,
        sale_1000 : 0,
        toySales : 138,
        trainsetSales :200,
        ceramicsSales : 0,
        throughTicketSales : 0,
        singleSales : 1395,
        destroySales : 4314,
        grossEarnings : 5603,
        user : '陈三日',
        point : 0,
        other : 0
      },
      {
        date:'2018-06-10',
        id:44,
        key:44,
        sale_300 : 13,
        sale_600 : 1,
        sale_1000 : 0,
        toySales : 0,
        trainsetSales :270,
        ceramicsSales : 38,
        throughTicketSales : 0,
        singleSales : 1638,
        destroySales : 3218,
        grossEarnings : 6408,
        user : '陈三日',
        point : 0,
        other : 0
      },
      {
        date:'2018-06-11',
        id:45,
        key:45,
        sale_300 : 3,
        sale_600 : 1,
        sale_1000 : 0,
        toySales : 79,
        trainsetSales :20,
        ceramicsSales : 0,
        throughTicketSales : 0,
        singleSales : 90,
        destroySales : 769,
        grossEarnings : 1989,
        user : '陈三日',
        point : 0,
        other : 0
      },
      {
        date:'2018-06-12',
        id:46,
        key:46,
        sale_300 : 4,
        sale_600 : 0,
        sale_1000 : 0,
        toySales : 79,
        trainsetSales :120,
        ceramicsSales : 0,
        throughTicketSales : 0,
        singleSales : 90,
        destroySales : 930,
        grossEarnings : 1499,
        user : '陈三日',
        point : 0,
        other : 0
      },
      {
        date:'2018-06-13',
        id:47,
        key:47,
        sale_300 : 5,
        sale_600 : 0,
        sale_1000 : 0,
        toySales : 0,
        trainsetSales :80,
        ceramicsSales : 0,
        throughTicketSales : 0,
        singleSales : 180,
        destroySales : 1601,
        grossEarnings : 2090,
        user : '陈三日',
        point : 0,
        other : 0
      },
      {
        date:'2018-06-14',
        id:48,
        key:48,
        sale_300 : 1,
        sale_600 : 0,
        sale_1000 : 0,
        toySales : 0,
        trainsetSales :70,
        ceramicsSales : 0,
        throughTicketSales : 0,
        singleSales : 50,
        destroySales : 378,
        grossEarnings : 400,
        user : '陈三日',
        point : 0,
        other : 0
      },
      {
        date:'2018-06-15',
        id:49,
        key:49,
        sale_300 : 3,
        sale_600 : 0,
        sale_1000 : 1,
        toySales : 727,
        trainsetSales :110,
        ceramicsSales : 0,
        throughTicketSales : 2,
        singleSales : 405,
        destroySales : 1141,
        grossEarnings : 3478,
        user : '陈三日',
        point : 0,
        other : 0
      },
      {
        date:'2018-06-16',
        id:50,
        key:50,
        sale_300 : 5,
        sale_600 : 4,
        sale_1000 : 2,
        toySales :379,
        trainsetSales :390,
        ceramicsSales : 0,
        throughTicketSales : 0,
        singleSales : 795,
        destroySales : 2709,
        grossEarnings : 7444,
        user : '陈三日',
        point : 0,
        other : 0
      },
      {
        date:'2018-06-17',
        id:51,
        key:51,
        sale_300 : 9,
        sale_600 : 3,
        sale_1000 : 0,
        toySales : 69,
        trainsetSales :210,
        ceramicsSales : 38,
        throughTicketSales : 0,
        singleSales : 1010,
        destroySales : 2528,
        grossEarnings : 5827,
        user : '陈三日',
        point : 0,
        other : 0
      },
      {
        date:'2018-06-18',
        id:52,
        key:52,
        sale_300 : 14,
        sale_600 : 0,
        sale_1000 : 1,
        toySales : 241,
        trainsetSales :180,
        ceramicsSales : 0,
        throughTicketSales : 0,
        singleSales : 540,
        destroySales : 2408,
        grossEarnings : 6171,
        user : '陈三日',
        point : 0,
        other : 0
      },
      {
        date:'2018-06-19',
        id:53,
        key:53,
        sale_300 : 9,
        sale_600 : 2,
        sale_1000 : 0,
        toySales : 81,
        trainsetSales :270,
        ceramicsSales : 0,
        throughTicketSales : 0,
        singleSales : 730,
        destroySales : 2992,
        grossEarnings : 4951,
        user : '陈三日',
        point : 0,
        other : 0
      },
      {
        date:'2018-06-20',
        id:54,
        key:54,
        sale_300 : 18,
        sale_600 : 1,
        sale_1000 : 0,
        toySales : 886,
        trainsetSales :170,
        ceramicsSales : 0,
        throughTicketSales : 0,
        singleSales : 270,
        destroySales : 2643,
        grossEarnings : 7126,
        user : '陈三日',
        point : 0,
        other : 0
      },
      {
        date:'2018-06-21',
        id:55,
        key:55,
        sale_300 : 1,
        sale_600 : 0,
        sale_1000 : 0,
        toySales : 0,
        trainsetSales :30,
        ceramicsSales : 0,
        throughTicketSales : 0,
        singleSales : 340,
        destroySales : 891,
        grossEarnings : 670,
        user : '陈三日',
        point : 0,
        other : 0
      },
      {
        date:'2018-06-22',
        id:56,
        key:56,
        sale_300 : 2,
        sale_600 : 0,
        sale_1000 : 0,
        toySales : 0,
        trainsetSales :120,
        ceramicsSales : 58,
        throughTicketSales : 0,
        singleSales : 210,
        destroySales : 864,
        grossEarnings : 988,
        user : '陈三日',
        point : 0,
        other : 0
      },
      {
        date:'2018-06-23',
        id:57,
        key:57,
        sale_300 : 8,
        sale_600 : 0,
        sale_1000 : 0,
        toySales : 71,
        trainsetSales :420,
        ceramicsSales : 156,
        throughTicketSales : 0,
        singleSales : 650,
        destroySales : 1954,
        grossEarnings : 3467,
        user : '陈三日',
        point : 0,
        other : 0
      },
      {
        date:'2018-06-24',
        id:58,
        key:58,
        sale_300 : 10,
        sale_600 : 1,
        sale_1000 : 0,
        toySales : 95,
        trainsetSales :230,
        ceramicsSales : 88,
        throughTicketSales : 0,
        singleSales : 730,
        destroySales : 3090,
        grossEarnings : 4543,
        user : '陈三日',
        point : 0,
        other : 0
      },
      {
        date:'2018-06-25',
        id:59,
        key:59,
        sale_300 : 2,
        sale_600 :0,
        sale_1000 : 0,
        toySales : 227,
        trainsetSales :10,
        ceramicsSales : 0,
        throughTicketSales : 0,
        singleSales : 220,
        destroySales : 240,
        grossEarnings : 1257,
        user : '陈三日',
        point : 0,
        other : 0
      },
      {
        date:'2018-06-26',
        id:60,
        key:60,
        sale_300 : 6,
        sale_600 :0,
        sale_1000 : 0,
        toySales : 828,
        trainsetSales :20,
        ceramicsSales : 0,
        throughTicketSales : 0,
        singleSales : 336,
        destroySales : 1511,
        grossEarnings : 2768,
        user : '陈三日',
        point : 0,
        other : 0
      },
      {
        date:'2018-06-27',
        id:61,
        key:61,
        sale_300 : 4,
        sale_600 :1,
        sale_1000 : 0,
        toySales : 1,
        trainsetSales :120,
        ceramicsSales : 0,
        throughTicketSales : 0,
        singleSales : 120,
        destroySales : 1605,
        grossEarnings : 2441,
        user : '陈三日',
        point : 0,
        other : 0
      },
    ]
  }
};
export default {
  namespace: 'profit',

  state: {

  },

  effects: {
    *fetch(_, { call, put }) {
      const response = mock;
      yield put({
        type: 'show',
        payload: response,
      });
    },
    *fetchTimeLineData(_, { call, put }) {
      const response = mock;
      yield put({
        type: 'queryTimeLineData',
        payload: response,
      });
    },
    *fetchProfitData(_, { call, put }) {
      const response = mock;
      yield put({
        type: 'queryProfitData',
        payload: response,
      });
    },
  },

  reducers: {
    show(state, { payload }) {
      return {
        ...state,
        ...payload,
      };
    },
    queryTimeLineData(state, { payload }) {
      console.log('payload',payload)
      let data = [...payload.data.list];
      let dataArray = [], cardSalesArray = [], otherSalesArray = [],
          cardCount = {sale_300:0,sale_600:0,sale_1000:0},
          otherCount = {toySales:0,ceramicsSales:0,trainsetSales:0};
      let count = 0
      for(let i = 0; i < data.length; i++){
        count += data[i].sale_300;
        dataArray.push({
          x : data[i].date,
          y1 : data[i].destroySales,
          y2 : data[i].grossEarnings,
        })
        for(let j in cardCount){
          cardCount[j] += data[i][j];
        }
        for(let o in otherCount){
          otherCount[o] += data[i][o];
        }
      }
      dataArray.sort((a, b) => a.x - b.x);
      console.log('cardCount',cardCount,count,otherCount);
      for(let item in cardCount){
        let name = item.split('_')[1] + '元卡';
        let amount = cardCount[item] * parseInt(item.split('_')[1]);
        cardSalesArray.push({
          x : name,
          y : amount,
          count : cardCount[item]+'张'
        })
      }
      for(let it in otherCount){
        let name = it == 'toySales' ?
          '玩具': it == 'ceramicsSales' ?
            '陶艺' : '小火车';
        otherSalesArray.push({
          x : name,
          y : otherCount[it]
        })
      }
      return {
        ...state,
        timeLineData: dataArray,
        cardSalesData : cardSalesArray,
        otherSalesData: otherSalesArray
      };
    },
    queryProfitData(state, {payload}){
      let data = [...payload.data.list], thisMonthData = [], lastMonthData = [],
        destroyCardSum = 0, singleSum = 0, allSum = 0, toySum = 0, trainSum = 0, ceramicsSum = 0 ,totalSum = 0;
      let now = new Date();
      let nowMonth = now.getMonth();
      for(let i = 0; i < data.length; i++){
        if(isThisMonth(data[i].date)){
          thisMonthData.push(data[i])
        }else if(isLastMonth(data[i].date)){
          lastMonthData.push(data[i])
        }
        destroyCardSum += data[i].destroySales;
        singleSum += data[i].singleSales;
        allSum += data[i].throughTicketSales;
        toySum += data[i].toySales;
        trainSum += data[i].trainsetSales;
        ceramicsSum += data[i].ceramicsSales;
      }
      totalSum = destroyCardSum + singleSum + allSum + toySum + trainSum + ceramicsSum;
      let IncomeSunData = {
        'id' : 1,
        'label':'收入',
        'children':[
          {
            'id' : 2,
            "label": "主营收入",
            "children": [
              {
                'id' : 3,
                "label": "主营收入-会员收入",
                "children": [{
                  'id' : 4,
                  'label':'主营收入-会员收入-销卡',
                  "uv": destroyCardSum,
                  "sum":destroyCardSum
                }],
              },
              {
                'id' : 5,
                "label": "主营收入-非会员收入",
                "children": [
                  {
                    'id' : 6,
                    'label':'主营收入-非会员收入-通票',
                    "uv": allSum,
                    "sum":allSum
                  },
                  {
                    'id' : 7,
                    "label":"主营收入-非会员收入-单次",
                    "uv": singleSum,
                    "sum": singleSum,
                }],
                "uv":0,
              }
            ],
            "uv": 0,
          },
          {
            'id' : 8,
            "label":"辅营收入",
            "children":[
              {
                'id' : 9,
                'label':'辅营收入-玩具',
                "uv": toySum,
                "sum": toySum
              },
              {
                'id' : 10,
                'label':'辅营收入-小火车',
                "uv": trainSum,
                "sum": trainSum
              },
              {
                'id' : 11,
                'label':'辅营收入-陶艺',
                "uv": ceramicsSum,
                "sum": ceramicsSum
              }
            ],
            "uv": 0,
          }
        ]
      }   //总收入分布
      let thisMonthStatistics = statistics(thisMonthData);
      let lastMonthStatistics = statistics(lastMonthData);
      /*图表数据*/
      let grossEarningsChartData = [], destroySalesChartData = [], realIncomeData = [];
      for(let m = 0; m < thisMonthData.length; m++){
        grossEarningsChartData.push({
          x : thisMonthData[m].date,
          y : thisMonthData[m].grossEarnings,
          title1 : thisMonthData[m].date
        });
        destroySalesChartData.push({
          x : thisMonthData[m].date,
          y : thisMonthData[m].destroySales,
          title1 : thisMonthData[m].date
        });
        realIncomeData.push({
          time : thisMonthData[m].date,
          value : thisMonthData[m].destroySales + thisMonthData[m].toySales + thisMonthData[m].trainsetSales +
              thisMonthData[m].ceramicsSales + thisMonthData[m].throughTicketSales + thisMonthData[m].singleSales
        })
      }
      //统计数据
      function statistics(dataArray){
        let grossEarningsSum = 0, destroySalesSum = 0, realIncomeSum = 0;
        for(let i = 0; i < dataArray.length; i++){
          grossEarningsSum += dataArray[i].grossEarnings;
          destroySalesSum += dataArray[i].destroySales;
          realIncomeSum += dataArray[i].destroySales + dataArray[i].toySales + dataArray[i].trainsetSales +
            dataArray[i].ceramicsSales + dataArray[i].throughTicketSales + dataArray[i].singleSales;
        }
        let grossEarningsAverage = grossEarningsSum / dataArray.length;
        let destroySalesAverage = destroySalesSum / dataArray.length;
        let realIncomeAverage = realIncomeSum / dataArray.length;
        return{
          grossEarningsSum : grossEarningsSum,
          destroySalesSum : destroySalesSum,
          grossEarningsAverage : grossEarningsAverage.toFixed(2),
          destroySalesAverage : destroySalesAverage.toFixed(2),
          realIncomeAverage:realIncomeAverage.toFixed(2)
        }
      }
      //判断是否为本月数据
      function isThisMonth(date) {
        let myDate = new Date(date);
        let myMonth = myDate.getMonth();
        return myMonth == nowMonth ? true : false;
      }
      //判断是否为上月数据
      function isLastMonth(date) {
        let myDate = new Date(date);
        let myMonth = myDate.getMonth();
        return myMonth == nowMonth - 1 ? true : false;
      }

      return{
        ...state,
        profitData:thisMonthData,
        thisMonthData:thisMonthStatistics,
        lastMonthData:lastMonthStatistics,
        profitChartData:{
          grossEarningsChartData : grossEarningsChartData,
          destroySalesChartData : destroySalesChartData
        },
        realIncomeData:realIncomeData,
        IncomeSunData:IncomeSunData
      }
    }
  },
};
