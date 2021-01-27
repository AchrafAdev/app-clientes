import { Injectable } from '@angular/core';
import { Cliente } from './cliente';
import { ListClientes } from './clientes.json';

@Injectable()
export class ClienteService {

  constructor() { }

  getClientes(): Cliente[] {
    return ListClientes;
  }
}
