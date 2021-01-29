import { Injectable } from '@angular/core';
import { Cliente } from './cliente';
import { ListClientes } from './clientes.json';
import { Observable } from 'rxjs';
import { of } from 'rxjs';

@Injectable()
export class ClienteService {

  constructor() { }

  getClientes(): Observable<Cliente[]> {
    return of(ListClientes);
  }
}
