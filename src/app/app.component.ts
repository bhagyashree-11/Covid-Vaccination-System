import { Component, TemplateRef } from '@angular/core';
import { BsModalRef, BsModalService } from 'ngx-bootstrap/modal';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  name = "COVID-19 Management System";
  date = new Date();
  showMessage = false;

  candidateList:any = [

    {
      name:"Mrunali Wath",
      age:  23,
      phone:8411099837
    },
    {  
      name:"Rushali Wath",
      age: 23,
      phone:8605848795
    },
    {  
      name:"Likhit Sarode",
      age: 25,
      phone:9371804015
    },
    {  
      name:"Ahan Sarode",
      age: 25,
      phone:8411099837
    },
    {  
      name:"Vaidik Wath",
      age: 20,
      phone:9371804015
    },
    {  
      name:"Wanita Wath",
      age: 30,
      phone:8605848795
    },
    {  
      name:"Vishal Wath",
      age: 24,
      phone:8605848795
    },
    {  
      name:"Pranali Wath",
      age: 26,
      phone:8605848795
    },
    ];

  v1candidate:any = [];
  v2candidate:any = [];
  Bcandidate:any = [];

  candidateName = "";
  candidateAge = "";
  candidatePhone = "";
  selectedIndex = '';

  modalRef?: BsModalRef;
  constructor(private modalService: BsModalService) {}

  V1Done(i:any){

    console.log("candidateList",this.candidateList);

    this.v1candidate.push(this.candidateList[i])
    console.log("You clicked on v1 Done", this.candidateList[i]);
    this.candidateList.splice(i,1);
  }

  V2Done(i:any){
    this.v2candidate.push(this.v1candidate[i])
    console.log("You clicked on v2 Done")
    this.v1candidate.splice(i,1);
  }
  BDone(i:any){
    this.Bcandidate.push(this.v2candidate[i])
    console.log("You clicked on B Done")
    this.v2candidate.splice(i,1);
  }
 cBack(i:any){
  this.candidateList.push(this.v1candidate[i]);
  this.v1candidate.splice(i,1);
 }
 v1Back(i:any){
  this.v1candidate.push(this.v2candidate[i]);
  this.v2candidate.splice(i,1);
 }
 v2Back(i:any){
  this.v2candidate.push(this.Bcandidate[i]);
  this.Bcandidate.splice(i,1);
 }
 Delete(i:any){
  this.candidateList.splice(i,1);
 }

 
 openModal(template: TemplateRef<any>,index:any) {
  console.log('index', index);
   
  if(index != 'add'){
    this.candidateName = this.candidateList[index].name;
    this.candidateAge = this.candidateList[index].age;
    this.candidatePhone = this.candidateList[index].phone;
    this.selectedIndex = index;
  }
  
  this.modalRef = this.modalService.show(template);
  
}


 submit(){
// console.log('this.candidateName',this.candidateName);
// console.log('this.candidateAge',this.candidateAge);
// console.log('this.candidatePhone',this.candidatePhone);

let user = {
name:this.candidateName,
age:this.candidateAge,
phone:this.candidatePhone
}
 this.candidateList.push(user);

 this.showMessage = true;

 console.log('this.candidateList',this.candidateList)
 this.close()
 }

 update(){
  //let user = {
   // name:this.candidateName,
   // age:this.candidateAge,
   // phone:this.candidatePhone
   // }
    //console.log('this.user', user)
   // this.modalRef?.hide();
    //console.log('this.selectedIndex', this.selectedIndex)
    
    //this.candidateList[this.selectedIndex]= user;

    this.candidateList[this.selectedIndex].name = this.candidateName;
    this.candidateList[this.selectedIndex].age = this.candidateAge;
    this.candidateList[this.selectedIndex].phone = this.candidatePhone;

    this.close()
 }

 close(){
    this.candidateName="";
    this.candidateAge="";
    this.candidatePhone="";
    this.modalRef?.hide();
 }
 
}
