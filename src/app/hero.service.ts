import { Injectable } from '@angular/core';
import { Hero } from './hero';
import { HEROES } from './mock-heroes';
import { Observable , of } from 'rxjs';
import { MessageService } from './message.service';

@Injectable({
  providedIn: 'root'
})

export class HeroService {

  constructor(private messageService: MessageService) { }

  getHeroes(): Observable<Hero[]> {
    // TODO : 메시지는 히어로 데이터를 가져온 후에 보내야 한다.
    this.messageService.add('I am Iron-Man');
    return of(HEROES);
  }
}
