namespace L04_Hexenkessel {
    export interface Item {
        name: string;
        price?: number;
        stepper?: boolean;
    }
    export interface Data {
        [category: string]: Item[];
    }
    export let data: Data = {
        Wirkung: [
          {name: "Liebestrank"}, 
          {name: "Schlaftrunk"}, 
          {name: "Alterstrunk"},
          {name: "Euphorie-Trank"}, 
          {name: "Glückstrank"}, 
          {name: "Gegengift"},
          {name: "Elixir des Lebens"}, 
          {name: "Wahrheitselixir"}, 
          {name: "Vielsafttrank"},
          {name: "Stärketrunk"}    
        ],
        Zutaten: [
            {name: "Rattenschwanz", price: 10, stepper: true},
            {name: "Spinnenbeine", price: 5, stepper: true}, 
            {name: "Aalaugen", price: 15, stepper: true }, 
            {name: "Blutegel", price: 20, stepper: true },
            {name: "Echsenblut", price: 5, stepper: false },
            {name: "Einhorntränen", price: 300, stepper: false }, 
            {name: "Flubberwurmschleim", price: 50, stepper: false }, 
            {name: "Gift", price: 60, stepper: false }
        ]
    };
}