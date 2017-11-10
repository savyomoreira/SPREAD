import {Component} from '@angular/core';
import {NavController} from 'ionic-angular';
import {CategoryService} from '../../services/category-service';
import {ItemService} from '../../services/item-service';
//mport {CategoriesPage} from "../categories/categories";
//import {CategoryPage} from "../category/category";
//import {ItemPage} from "../item/item";
import {SearchPage} from "../search/search";
import {CartPage} from "../cart/cart";

import {ListaCategotiaPage} from '../lista-categotia/lista-categotia';
import {AnuncioService} from '../../services/anuncio-service';

import {ListAnuncioPage} from "../lista-anuncio/lista-anuncio";
/*
 Generated class for the LoginPage page.

 See http://ionicframework.com/docs/v2/components/#navigation for more info on
 Ionic pages and navigation.
 */

declare var cordova: any;

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  // list slides for slider
  

  // list categories
  public categories: any;

  // list of items
  public items: any;

  constructor(public nav: NavController,
     public categoryService: CategoryService, 
     private anuncioService: AnuncioService,
     public itemService: ItemService) {
    categoryService.findAll().subscribe(data =>{
      this.categories = data;
    });

    this.anuncioService.findAll().subscribe(data => {
      this.items = data;
      // console.log(data);
    })

    //this.items = itemService.getAll();
  }

  // view categories
  viewCategories() {
    this.nav.push(ListAnuncioPage);
  }

  // view a category
  viewCategory(catId, catNome) {
    this.nav.push(ListAnuncioPage, {id: catId, nomeCategoria: catNome});
  }

  // view a item
  viewItem(itemId) {
   // this.nav.push(ItemPage, {id: itemId})
  }

  viewCategorias(){
    this.nav.push(ListaCategotiaPage);  
  }

  // go to search page
  goToSearch() {
    this.nav.push(SearchPage);
  }

  // view cart
  goToCart() {
    this.nav.setRoot(CartPage);
  }
}
