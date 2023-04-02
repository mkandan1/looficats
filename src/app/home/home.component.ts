import { Component, Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import axios from 'axios';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent   {
    constructor(){}

    ngOnInit(){
      
    }
   

    submit(name: HTMLInputElement, email: HTMLInputElement, company: HTMLInputElement, sub: HTMLInputElement, message: HTMLTextAreaElement){
      
      axios.post('https://api.emailjs.com/api/v1.0/email/send', {
        service_id: 'service_6ueb06h',
        template_id: 'template_fdpv07y',
        user_id: 'zSy7pGYRxfzKffC5O',
        template_params: {
            'username': 'James',
            'g-recaptcha-response': '03AHJ_ASjnLA214KSNKFJAK12sfKASfehbmfd...',
            name: name,
            email: email,
            company: company,
            subject: sub,
            message: message
        }}).then(res => {
          console.log(res.data);
          
        }).catch(error=>{
          console.error(error)
        })
    }
}
