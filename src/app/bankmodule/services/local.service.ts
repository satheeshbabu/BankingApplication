import { Injectable } from '@angular/core';
import {Http,Response,Headers, RequestOptions} from '@angular/http';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import {map} from 'rxjs/operators';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LocalService {
  bal;
  data;

  constructor(private http:Http) { }

  getBalance(){
    const headers = new Headers();
    headers.append('Content-Type','application/json');
    var token = localStorage.getItem('token');
    headers.append('authorization','Bearer '+token);

    const options = new RequestOptions({headers: headers});

    return this.http.get('http://localhost:8080/api/bank/checkbalance',options)
           .pipe(map(res=>this.bal=res.json()));
  }

  transferFund(amount,acctNum){

    const headers = new Headers();
    headers.append('Content-Type','application/json');
    var token = localStorage.getItem('token');
    headers.append('authorization','Bearer '+token);

    const options = new RequestOptions({headers: headers});

    return this.http.post('http://localhost:8080/api/bank/transfer',{amount:amount,acctNum:acctNum},options)
           .pipe(map(res=>this.data=res.json()));
  }
}
