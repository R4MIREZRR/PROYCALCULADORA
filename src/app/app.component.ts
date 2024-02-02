import {Component, OnInit} from '@angular/core';

@Component ({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})


export class AppComponent implements OnInit{
  title = 'PROYECTO CALCULADORA';
  screen= "";
  a:any;
  b:any;
  c:any;
  d="";
  e="";

  ngOnInit() {

  }

//   Calculadora

    enterValue(value:string){
      if((this.b=="+") || (this.b=="-") || (this.b=="*") || (this.b=="/")){
        this.d = this.d + value;
        this.screen = this.screen + value;
        this.c = this.d;

        console.log("op1-> ",this.b,this.c);

      }else{
        this.screen = this.screen + value;
        this.a = this.screen;
        console.log("op2-> ", this.a);
      }
    }

    condition(value: string){
        this.screen = this.screen + value;
        this.b = value;
    }

    clear(){
        this.screen= "";
        this.a="";
        this.b="";
        this.c="";
        this.d="";
    }

    result(){

      if(this.b == '+'){
        this.screen = `${this.screen} = ${(parseInt(this.a) + parseInt(this.c)).toString()}` ;
        this.screen = (parseInt(this.screen) + parseInt(this.c)).toString();
        console.log(this.a, this.b, this.c, '=', this.screen);
      }

        if(this.b == '-'){
            this.screen = `${this.screen} = ${(parseInt(this.a) - parseInt(this.c)).toString()}` ;
            this.screen = (parseInt(this.screen) - parseInt(this.c)).toString();
            console.log(this.a, this.b, this.c, '=', this.screen);
        }

        if(this.b == '*'){
            this.screen = `${this.screen} = ${(parseInt(this.a) * parseInt(this.c)).toString()}` ;
            this.screen = (parseInt(this.screen) * parseInt(this.c)).toString();
            console.log(this.a, this.b, this.c, '=', this.screen);
        }

        if(this.b == '/'){
            this.screen = `${this.screen} = ${(parseInt(this.a) / parseInt(this.c)).toString()}` ;
            this.screen = (parseInt(this.screen) / parseInt(this.c)).toString();
            console.log(this.a, this.b, this.c, '=', this.screen);
        }

      this.clear();

    }


}
