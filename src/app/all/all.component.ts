import { Component, OnInit } from '@angular/core';
import { EmjService } from '../service/emj.service';


@Component({
  selector: 'app-all',
  templateUrl: './all.component.html'
})
export class AllComponent implements OnInit {

  title = 'Все эмоджи';

  constructor(private emjService: EmjService){}

  ngOnInit(){
    this.emjService.getEmjs()
    this.emjService.getLikeEmjs()      
  }
  delEmj(name: string) {
    this.emjService.delEmj(name)
  }

  likeEmj(name: string) {
    console.log('функция вызвана')
    this.emjService.likeEmj(name)
  }

  likeemjF(name: string){
    if(this.emjService.emjsLike.filter(t => t.name === name).length !== 0){
      return false    
    }else{
      return true
    }
  }
}
