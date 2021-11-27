import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';

@Component({
  selector: 'app-show-results',
  templateUrl: './show-results.component.html',
  styleUrls: ['./show-results.component.css']
})
export class ShowResultsComponent implements OnInit {
  myResults: Observable<any> = new Observable<any>();

  constructor(private http: HttpClient) {
    console.log('ShowResultsComponent constructor works');
  }

  ngOnInit() {
    let myResults = this.http.get<any>('http://54.234.79.16:32019/StudentSurveyJerseyHibernate/rest/studentsurvey/get');
    myResults.subscribe(data => {this.myResults = data
    })
  }

}
