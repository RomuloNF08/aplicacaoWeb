import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { PedidoService } from '../services/pedido.service';
import { Pedido } from '../models/pedido';

@Component({
  selector: 'app-pedidos',
  standalone: true,
  imports: [CommonModule, HttpClientModule],  
  templateUrl: './pedidos.component.html',
  styleUrls: ['./pedidos.component.css']
})
export class PedidosComponent {
  pedidos: Pedido[] = [];

  constructor(private pedidoService: PedidoService) { }

  ngOnInit(): void {
    this.loadPedidos();
  }

  loadPedidos(): void {
    this.pedidoService.getPedidos().subscribe(pedidos => {
      this.pedidos = pedidos;
    });
  }
}
