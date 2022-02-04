import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { ProspectService } from 'src/app/services/prospect.service';

@Component({
  selector: 'app-chat',
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.css']
})
export class ChatComponent implements OnInit {
  Entityid: any;
  EntityName: any;
  chatData: any;
  pageID: any;
  chat: any;
  keyword = 'name';
  prefixText:any;
  actorList: any;

  constructor( private listService: ProspectService,    @Inject(MAT_DIALOG_DATA) public data:any) {

    this.Entityid=this.data.EntityID,
    this.EntityName=this.data.EntityName
     
    // entity Product EntityModule name set start here

    if (this.EntityName === "POList") {
      this.pageID="PO";
      
    }
    else if (this.EntityName === "SalesOrderLIst") {
      this.pageID="SO"
      

    }
    // else if (this.EntityName === "Prospect") {
    //   this.pageID="Prospect"
      
    // }
    else if (this.EntityName === "Lead") {
      this.pageID="L"
      
    }
    else if (this.EntityName === "Payable") {
      this.pageID="Payable"
      

    }
    else if (this.EntityName === "MoList") {
      this.pageID="MO"
      

    }
    else if (this.EntityName === "MIList") {
      this.pageID="MI"
      

    }
    else if (this.EntityName === "Repair") {
      this.pageID="Repair"
      

    }
    else if (this.EntityName === "Payment") {
      this.pageID="Payment"
       

    }
    else if (this.EntityName === "AMC") {
      this.pageID="AMC"
      

    }
    else if (this.EntityName === "Work") {
      this.pageID="Work"
      

    }
    else if (this.EntityName === "Ticket") {
      this.pageID="Ticket"
      

    };

    // entity Product EntityModule name set end here

      this.listService.showChat(this.Entityid, this.pageID,  ).subscribe((data: any)=>{ 
        this.chat=JSON.parse(data) ;
        console.warn(data);
      
         
        
       
      }) ;
   }
  // showChat
  chatDataSubmit(data:any){
     
    this.listService.submitChat( this.Entityid,this.pageID,data.AddedUserinChat,data.chatMessage).subscribe((data: any) => {

    });
    
    this.listService.showChat(this.Entityid, this.pageID,  ).subscribe((data: any)=>{ 
      this.chat=JSON.parse(data) ;
    });
 
  };
  
  selectEvent(item:any) {
    console.log(item);
    // do something with selected item
  }

  onChangeSearch(val: string) {
 
    this.prefixText=val;
    this.listService.actorList(this.prefixText).subscribe((data: any)=>{ 
      this.actorList= data ;
    
    }) ;
     
  }
  
  
  ngOnInit(): void {
  }

}
