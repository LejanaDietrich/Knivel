import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-game',
  templateUrl: './game.page.html',
  styleUrls: ['./game.page.scss'],
})
export class GamePage implements OnInit {

  isRunning: boolean;
  players: any[];

  /*fields: {
    ones: {
      value: number,
      icon: ''
      description: "1er",
    },
    twos: {
      value: number,
      icon: '',
      description: "2er"
    },
    threes: {
      value: number,
      icon: '',
      description: "3er"
    },
    fours: {
      value: number,
      icon: '',
      description: "4er"
    },
    fives: {
      value: number,
      icon: '',
      description: "5er"
    },
    sixes: {
      value: number,
      icon: '',
      description: "6er"
    },
    numbersTotal: {
      value: number
      icon: '',
      description: "Gesamt"
    },
    bonus: {
      value: 0 | 35
      description: "Bonus (35P)"
    },
    sum1: {
      value: number
      description: "Summe 1"
    },
    threeAKind: {
      value: number,
      description: "Dreierpasch"
    },
    fourAKind: {
      value: number,
      description: "Dreierpasch"
    },
    fullHouse: {
      value: 0 | 25,
      description: "Full House (25P)"
    },
    flush: {
      value: 0 | 30,
      description: "kleine Straße (30P)"
    },
    straightFlush: {
      value: 0 | 40,
      description: "große Straße (40P)"
    },
    knivel: {
      value: 0 | 50,
      description: "Knivel (50P)"
    },
  } [];*/

  fields: Fields[] = [];

  constructor() { }

  ngOnInit() {
    this.fields.push(new Fields())
  }

  addPlayer(){
    if(!this.isRunning){
      this.fields.push(new Fields());
    }
  }

  setField(indexP: number, field: string, value: number){
    try { 
      this.fields[indexP][field].value = value;
      this.calculateForPlayer(indexP);
    } catch(e) {
      console.error(e);
    }
  }

  calculateForPlayer(indexP: number){
    let fieldsP = this.fields[indexP];
    fieldsP['numbersTotal'].value = fieldsP['ones'].value + fieldsP['twos'].value + fieldsP['threes'].value + fieldsP['fours'].value + fieldsP['fives'].value + fieldsP['sixes'].value;
    fieldsP['bonus'].value = fieldsP['numbersTotal'].value >= 63? 35: 0;
    fieldsP["sum1"].value = fieldsP['numbersTotal'].value + fieldsP['bonus'].value;
    fieldsP["sum2"].value = fieldsP['threeAKind'].value + fieldsP['fourAKind'].value + fieldsP['fullHouse'].value + fieldsP['flush'].value + fieldsP['straightFlush'].value + fieldsP['knivel'].value + fieldsP['chance'].value;
    fieldsP["total"].value = fieldsP["sum1"].value + fieldsP["sum2"].value;
  }
}

class Fields {
  
  ones: {
    value: number | undefined,
    icon: ''
    description: "1er",
  };
  twos: {
    value: number | undefined,
    icon: '',
    description: "2er"
  };
  threes: {
    value: number | undefined,
    icon: '',
    description: "3er"
  };
  fours: {
    value: number | undefined,
    icon: '',
    description: "4er"
  };
  fives: {
    value: number | undefined,
    icon: '',
    description: "5er"
  };
  sixes: {
    value: number | undefined,
    icon: '',
    description: "6er"
  };
  numbersTotal: {
    value: number | undefined,
    icon: '',
    description: "Gesamt"
  };
  bonus: {
    value: 0 | 35 | undefined,
    description: "Bonus (35P)"
  };
  sum1: {
    value: number | undefined,
    description: "Summe 1"
  };
  threeAKind: {
    value: number | undefined,
    description: "Dreierpasch"
  };
  fourAKind: {
    value: number | undefined,
    description: "Dreierpasch"
  };
  fullHouse: {
    value: 0 | 25 | undefined,
    description: "Full House (25P)"
  };
  flush: {
    value: 0 | 30 | undefined,
    description: "kleine Straße (30P)"
  };
  straightFlush: {
    value: 0 | 40 | undefined,
    description: "große Straße (40P)"
  };
  knivel: {
    value: 0 | 50 | undefined,
    description: "Knivel (50P)"
  };
  chance: {
    value: number | undefined, 
    description: "Chance"
  };
  sum2: {
    value: number | undefined, 
    description: "Summe 2"
  };
  total: {
    value: number | undefined, 
    description: "Gesamt"
  }
  
  constructor() { }
}

/*
type field = {
  value,
  icon?,
  description,
};

type fields = field[];

type players = fields[];
*/