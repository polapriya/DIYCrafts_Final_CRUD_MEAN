import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-api',
  templateUrl: './api.component.html',
  styleUrls: ['./api.component.css']
})
export class ApiComponent{
  player: YT.Player;
  public id: string = '30xXe5GcF7Q';
savePlayer(player) {​​
  this.player = player;
  console.log('player instance', player);
  }​​
onStateChange(event) {​​
  console.log('player state', event.data);
 }​​
 }
