import { Injectable } from '@angular/core';  
import { HttpClient,HttpHeaders }    from '@angular/common/http';  
@Injectable({  
  providedIn: 'root'  
})  
  
export class ServiceService {  
  
constructor(private http: HttpClient) { }  
  httpOptions = {  
    headers: new HttpHeaders({  
      'Content-Type': 'application/json'  
    })  
  }    
  getData(){  
       
    return this.http.get('https://localhost:44333/api/Acc');  //https://localhost:44352/ webapi host url  
  }  
  
  postData(formData: any){  
    return this.http.post('https://localhost:44333/api/Acc',formData);  
  }  
  
  putData(id: string,formData: any){  
    return this.http.put('https://localhost:44333/api/Acc/'+id,formData);  
  }  
  deleteData(id: string){  
    return this.http.delete('https://localhost:44333/api/Acc/'+id);  
  }  
  checkData(value : any, secValue : any = null){
    return this.http.get('https://localhost:44333/api/Acc/'+ value);
  }
}  