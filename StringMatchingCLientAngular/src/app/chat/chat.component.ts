import { Component, OnInit } from '@angular/core';
import { ServerInterfaceService } from '../server-interface.service'
@Component({
  selector: 'app-chat',
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.css']
})
export class ChatComponent implements OnInit {

  constructor(private serverInterfaceService : ServerInterfaceService) { }

  ngOnInit(): void {
    this.serverInterfaceService.sendDummy();

    console.log(this.serverInterfaceService.getTasks());
  }

}
