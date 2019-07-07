import { Component, OnInit } from '@angular/core';
import { EmjService } from '../service/emj.service';

@Component({
  selector: 'app-like',
  templateUrl: './like.component.html',
  styleUrls: ['./like.component.css']
})
export class LikeComponent implements OnInit {

  lik: boolean = false;
  title = 'Любимые эмоджи';


  constructor(private emjService: EmjService) { }

  ngOnInit() {
    this.emjService.getLikeEmjs()
  }

  notLikeEmj(name: string) {
    this.lik = !this.lik
    this.emjService.notLikeEmj(name)
    console.log('Больше не нравится')
  }

}
