import { Component } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { CommenService } from '../service/commen.service';

@Component({
  selector: 'app-student-registration',
  templateUrl: './student-registration.component.html',
  styleUrls: ['./student-registration.component.css']
})
export class StudentRegistrationComponent {

  constructor( public fb:FormBuilder,public cs:CommenService){}

  loginForm:FormGroup;
 
 ngOnInit(){
this.loginForm= this.fb.group({
  productId:[],
  productName:[],
  productDescription:[],
  productPrice:[],
  stockCount:[]
})

 }
  saveData(){
   
      // if(this.cb.stu.sid==0){
   
        this.cs.saveData(this.loginForm.value).subscribe();
    window.location.reload();
    
   
//   this.cb.stu.sid=this.loginForm.value.sid;
//   this.cb.stu.name=this.loginForm.value.name;
//   this.cb.stu.addr=this.loginForm.value.addr;
//   if(this.cb.stu.sid!=0)  {
   
   
//     alert(this.cb.stu.sid);
//   this.cb.updateData(this.router.snapshot.params['id'],this.loginForm.value).subscribe();

//   this.loginForm.reset();
   // this.routing.navigate(["/tab"])

// }

}
  // prd:Suplier[];

// savedata(pp:Product){
//   if(pp.id==0){
// this.cs.savepp(pp).subscribe();
// }
// else{
//   this.cs.edit(pp).subscribe();
// }
// window.location.reload();
// }
// getData(){
//   this.cs.getData().subscribe((s:Suplier[])=>{
//     this.prd=s;
//   })
// }

// ngOnInit(){
//   this.getData();
// }
}
