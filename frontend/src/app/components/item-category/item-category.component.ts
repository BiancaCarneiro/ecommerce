import { Component } from '@angular/core';

@Component({
  selector: 'app-item-category',
  templateUrl: './item-category.component.html',
  styleUrls: ['./item-category.component.css']
})
export class ItemCategoryComponent {
  $categoria!: {nome: string, descricao: string, imagem: string}[];

    constructor() {}

    ngOnInit(): void {

    }

}
