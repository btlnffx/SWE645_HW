import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';

@Component({
  selector: 'app-survey-form',
  templateUrl: './survey-form.component.html',
  styleUrls: ['./survey-form.component.css']
})
export class SurveyFormComponent implements OnInit {
  myData: Observable<any> = new Observable<any>();

  constructor(private http: HttpClient) {
    console.log('SurveyFormComponent constructor works');
  }

  ngOnInit(): void {
  }

  onClickSubmit(data: any) {

    var jsonData = JSON.stringify(data);

    let httpHeaders = new HttpHeaders()
            .set('Content-Type', 'application/json');
    let options = {headers: httpHeaders};

    let myData = this.http.post<any>('http://54.234.79.16:32019/StudentSurveyJerseyHibernate/rest/studentsurvey/create','{jsonData}',options);
    myData.subscribe(jsonData => {this.myData = jsonData.id;});
    console.log('Your form data : ', data);
    alert("Thanks for responding, " + data.firstname + "!");

    console.log('JSON data : ', 'jsonData');
  }

}
