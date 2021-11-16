import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UiService {
  private showAddTask: boolean = false;
  private subject = new Subject<any>();

  constructor() { }

  //this function get's called when add Button is clicked
  //subject.next() put's the given object into the subject stream, so there Oberservers/Listeners listening for changes
  //asObservable set's it to an observable Object so the data can be accessed with calling onToggle().subscribe()
  toggleAddTask() : void {
    this.showAddTask = !this.showAddTask;
    this.subject.next(this.showAddTask);
  }

  //create new Observable with this.subject as source
  onToggle() : Observable<any> {
    return this.subject.asObservable();
  }
}
