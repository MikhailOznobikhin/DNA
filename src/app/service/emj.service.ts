import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({providedIn: 'root'})
export class EmjService {

  public empjis = []
  public emjmas = []
  public emjsDel = []
  public emjsLike = []
 
  constructor(private http: HttpClient){}  

  getEmjs(){
    if(this.emjmas.length !== 0){
      console.log('Локальная загрузка')
    }else{
      if(JSON.parse(localStorage.getItem("emj")) === null){
        console.log('Загрузка с сервера')
        this.http.get('https://api.github.com/emojis')
        .subscribe(empjis =>{
          this.emjmas = Object.keys(empjis).map(key => ({name: key, link: empjis[key]}));
          localStorage.setItem("emj", JSON.stringify(this.emjmas))
        })
      }else{
        this.emjmas = JSON.parse(localStorage.getItem("emj"));
        console.log('Загрузка из Локального хранилища')        
      }
    }
  }


  getDelEmjs(){
    this.emjsDel = JSON.parse(localStorage.getItem("delemj"))
  }
    
  delEmj(name: string){
    this.emjsDel.push(this.emjmas.filter(t => t.name === name))
    this.emjmas = this.emjmas.filter(t => t.name !== name)
    localStorage.setItem("emj", JSON.stringify(this.emjmas))
    this.emjsDel = this.emjsDel.flat();
    if(this.emjsDel.length !== 0){
      localStorage.setItem("delemj", JSON.stringify(this.emjsDel))
      this.emjsDel = JSON.parse(localStorage.getItem("delemj"))
    }
    console.log('Удаление')
  }

  retEmj(name:string){
    console.log('Нужно вернуть', name)
    this.emjmas.push(this.emjsDel.filter(t => t.name === name))
    localStorage.setItem("emj", JSON.stringify(this.emjmas))
    this.emjsDel = this.emjsDel.filter(t => t.name !== name)
    this.emjmas = this.emjmas.flat();
    localStorage.setItem("delemj", JSON.stringify(this.emjsDel))
    this.emjsDel = JSON.parse(localStorage.getItem("delemj"))
  }

  likeEmj(name: string){
    this.emjsLike.push(this.emjmas.filter(t => t.name === name))
    this.emjsLike = this.emjsLike.flat();
    if(this.emjsLike.length !== 0){
      localStorage.setItem("likeemj", JSON.stringify(this.emjsLike))
      this.emjsLike = JSON.parse(localStorage.getItem("likeemj"))
    }
    console.log('Ставлю лайк')
  }

  getLikeEmjs(){
    if(JSON.parse(localStorage.getItem("likeemj")) !== null){
      this.emjsLike = JSON.parse(localStorage.getItem("likeemj"))
    }else{this.emjsLike = []}
  }

  notLikeEmj(name:string){
    console.log('Больше не нравится', name)
    this.emjsLike = this.emjsLike.filter(t => t.name !== name) 
    localStorage.setItem("likeemj", JSON.stringify(this.emjsLike))
    this.emjsLike = JSON.parse(localStorage.getItem("likeemj"))       
  }

  
}