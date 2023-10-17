import { Injectable } from '@angular/core';
import { Customer } from '../interfaces/customer';

@Injectable({
  providedIn: 'root'
})
export class CustomerService {

  customerData: Customer[]=[
    {documentNumber: '22345451',firstName:'JOSE', secondName: 'RODRIGO', fatherName:'VELOSA', motherName:'GIL',age:34,sexo:'M',dateCreation:'01/01/2000' },
    {documentNumber: '6756747451',firstName:'ANDRES', secondName: 'FELIPE', fatherName:'VELOSA', motherName:'GIL',age:3,sexo:'M',dateCreation:'01/01/2000' },
    {documentNumber: '7652274651',firstName:'MARIA', secondName: 'FERNANDA', fatherName:'VELOSA', motherName:'GIL',age:25,sexo:'M',dateCreation:'01/01/2000' },
    {documentNumber: '890983151',firstName:'SANDRA', secondName: 'MILENA', fatherName:'VELOSA', motherName:'GIL',age:19,sexo:'M',dateCreation:'01/01/2000' },
    {documentNumber: '232231471',firstName:'ANDREA', secondName: 'MARIA', fatherName:'VELOSA', motherName:'GIL',age:37,sexo:'M',dateCreation:'01/01/2000' },
    {documentNumber: '343147451',firstName:'LORENA', secondName: 'MIA', fatherName:'VELOSA', motherName:'GIL',age:15,sexo:'M',dateCreation:'01/01/2000' },
    {documentNumber: '4563147451',firstName:'YENNY', secondName: 'MARTHA', fatherName:'VELOSA', motherName:'GIL',age:34,sexo:'M',dateCreation:'01/01/2000' },
    {documentNumber: '456147451',firstName:'MARCELA', secondName: 'DIANA', fatherName:'VELOSA', motherName:'GIL',age:12,sexo:'M',dateCreation:'01/01/2000' },
    {documentNumber: '567237451',firstName:'KELEY', secondName: 'JUANA', fatherName:'VELOSA', motherName:'GIL',age:14,sexo:'M',dateCreation:'01/01/2000' }
  ]

  constructor() { }

  getCustomer(){
    return this.customerData.slice();
  }

  deleteCustomer(i: number){
   this.customerData.splice(i,1);
  }

}
