import { Component, OnInit } from '@angular/core';
import { EmjService } from '../service/emj.service';

@Component({
  selector: 'app-del',
  templateUrl: './del.component.html'
})
export class DelComponent implements OnInit {

  title = 'Удалённые эмоджи';

  constructor(private emjService: EmjService) { }

  ngOnInit() {
    this.emjService.getDelEmjs()
  }
  
  retEmj(name: string) {
    this.emjService.retEmj(name)
    console.log('Возвращаем')
    
  }


}
