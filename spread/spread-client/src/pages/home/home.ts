import {Component} from '@angular/core';
import {NavController} from 'ionic-angular';
import {CategoryService} from '../../services/category-service';
import {ItemService} from '../../services/item-service';
//mport {CategoriesPage} from "../categories/categories";
//import {CategoryPage} from "../category/category";
//import {ItemPage} from "../item/item";
import {SearchPage} from "../search/search";
import {CartPage} from "../cart/cart";


import {ListAnuncioPage} from "../lista-anuncio/lista-anuncio";
/*
 Generated class for the LoginPage page.

 See http://ionicframework.com/docs/v2/components/#navigation for more info on
 Ionic pages and navigation.
 */
@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  // list slides for slider
  public slides = [
    {
      src: 'assets/img/slide_1.jpg'
    },
    {
      src: 'assets/img/slide_2.jpg'
    },
    {
      src: 'assets/img/slide_3.jpg'
    }
  ];

  // list categories
  public categories: any;

  // list of items
  public items: any;

  constructor(public nav: NavController, public categoryService: CategoryService, public itemService: ItemService) {
    categoryService.findAll().subscribe(data =>{
      this.categories = data;
    });

    this.items = itemService.getAll();
  }

  // view categories
  viewCategories() {
    this.nav.push(ListAnuncioPage);
  }

  // view a category
  viewCategory(catId) {
    this.nav.push(ListAnuncioPage, {id: catId});
  }

  // view a item
  viewItem(itemId) {
   // this.nav.push(ItemPage, {id: itemId})
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
