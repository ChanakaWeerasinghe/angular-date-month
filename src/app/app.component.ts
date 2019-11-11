import { Component } from "@angular/core";

@Component({
  selector: "my-app",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"]
})
export class AppComponent {
  name = "Angular";

  dateset = [
    {
      addedDate: "10/11/2019 01:08:50 AM",
      amount: 1500000,
      balance: null,
      creditDebit: null,
      currency: "LAK",
      description: "SVC Top Up",
      from: null,
      fromUsrId: null,
      id: "580167",
      originalSender: null,
      referenceNumber: "931501580167",
      terminalNo: "CMS     ",
      timestamp: 1576008918000,
      to: "1074",
      "toUsrId ": "WLT@0000646",
      transactionStatus: "Settled",
      type: "CREDIT"
    },
    {
      addedDate: "13/12/2019 01:08:50 AM",
      amount: 1500000,
      balance: null,
      creditDebit: null,
      currency: "LAK",
      description: "SVC Top Up",
      from: null,
      fromUsrId: null,
      id: "580167",
      originalSender: null,
      referenceNumber: "931501580167",
      terminalNo: "CMS     ",
      timestamp: 1576008918000,
      to: "1074",
      "toUsrId ": "WLT@0000646",
      transactionStatus: "Settled",
      type: "CREDIT"
    },
    {
      addedDate: "11/11/2019 01:08:50 AM",
      amount: 1500000,
      balance: null,
      creditDebit: null,
      currency: "LAK",
      description: "SVC Top Up",
      from: null,
      fromUsrId: null,
      id: "580167",
      originalSender: null,
      referenceNumber: "931501580167",
      terminalNo: "CMS     ",
      timestamp: 1576008918000,
      to: "1074",
      "toUsrId ": "WLT@0000646",
      transactionStatus: "Settled",
      type: "CREDIT"
    },
    {
      addedDate: "10/11/2019 01:08:50 AM",
      amount: 1500000,
      balance: null,
      creditDebit: null,
      currency: "LAK",
      description: "SVC Top Up",
      from: null,
      fromUsrId: null,
      id: "580167",
      originalSender: null,
      referenceNumber: "931501580167",
      terminalNo: "CMS     ",
      timestamp: 392002002132,
      to: "1074",
      "toUsrId ": "WLT@0000646",
      transactionStatus: "Settled",
      type: "CREDIT"
    },
    {
      addedDate: "11/11/2019 01:08:50 AM",
      amount: 1500000,
      balance: null,
      creditDebit: null,
      currency: "LAK",
      description: "SVC Top Up",
      from: null,
      fromUsrId: null,
      id: "580167",
      originalSender: null,
      referenceNumber: "931501580167",
      terminalNo: "CMS     ",
      timestamp: 392002002132,
      to: "1074",
      "toUsrId ": "WLT@0000646",
      transactionStatus: "Settled",
      type: "CREDIT"
    }
  ];

  data = [
    {
      notes: "Game was played",
      time: "2017-10-04T20:24:30+00:00",
      sport: "hockey",
      owner: "steve",
      players: "10",
      game_id: 1
    },
    {
      notes: "Game was played",
      time: "2017-10-04T12:35:30+00:00",
      sport: "lacrosse",
      owner: "steve",
      players: "6",
      game_id: 2
    },
    {
      notes: "Game was played",
      time: "2017-10-14T20:32:30+00:00",
      sport: "hockey",
      owner: "steve",
      players: "4",
      game_id: 3
    },
    {
      notes: "Game was played",
      time: "2017-10-04T10:12:30+00:00",
      sport: "hockey",
      owner: "henry",
      players: "10",
      game_id: 4
    },
    {
      notes: "Game was played",
      time: "2017-10-14T20:34:30+00:00",
      sport: "soccer",
      owner: "john",
      players: "12",
      game_id: 5
    }
  ];
  dates;
  constructor() {
    console.log("sdd");
    const monthNames = [
      "",
      "January",
      "February",
      "March",
      "April",
      "May",
      "June",
      "July",
      "August",
      "September",
      "October",
      "November",
      "December"
    ];
    console.log("sdd");
    const d = "12";
    var str = "11/11/2500";
    var str = "11/10/2009";

    let dateArr = str.split("/");
    let today = new Date().getFullYear();
    let givenDate = Number(dateArr[2]);
    let isCorrectYear = true;
    Number(today);
    if (givenDate >= today) {
      isCorrectYear = false;
      console.log(isCorrectYear);
    } else if((givenDate+18 ) >= today) {
       isCorrectYear = false;
      console.log(isCorrectYear);
    }
    else{isCorrectYear=true}

    var date = str.slice(0, 2);
    var month = str.slice(3, 5);
    var year = str.slice(6, 10);

    console.log(date + " " + monthNames[month] + " ", year);
    // this gives an object with dates as keys
    let groups = this.dateset.reduce((groups, dataob) => {
      const date = dataob.timestamp;
      if (!groups[date]) {
        groups[date] = [];
      }
      // ...is 1st Feb 2013!
      groups[date].push(Array.of(dataob));
      return groups;
    }, {});
    // this.dates=groups;
    this.dates = Array.of(groups);
    console.log(groups);
    // Edit: to add it in the array format instead
    const groupArrays = Object.keys(groups).map(date => {
      return {
        date,
        data: groups[date]
      };
    });

    console.log(groupArrays, "df");
  }
}
