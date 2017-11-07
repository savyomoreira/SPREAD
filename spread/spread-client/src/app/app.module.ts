import {NgModule} from '@angular/core';
import {IonicApp, IonicModule} from 'ionic-angular';
import {MyApp} from './app.component';
import {BrowserModule} from '@angular/platform-browser';
import {StatusBar} from '@ionic-native/status-bar';
import {SplashScreen} from '@ionic-native/splash-screen';

import { HttpModule } from '@angular/http';

// import services

import {GenericService} from '../services/generic.service';
import {AbstractHttpService} from '../services/abstract-http.service';
import {CategoryService} from '../services/category-service';
import {ItemService} from '../services/item-service';
import {UserService} from '../services/user-service';
import {StoreService} from '../services/store-service';
import {CartService} from '../services/cart-service';
import {OrderService} from '../services/order-service';
import {NewsService} from '../services/news-service';
import {AnuncioService} from '../services/anuncio-service';
import {SolicitacaoService} from '../services/solicitacao-service';
import {LoginService} from '../services/login-service';
import {BairroService} from '../services/bairro-service';

// end import services
// end import services

// import pages

import {ModalSolicitacaoPage} from '../pages/modal-solicitacao/modal-solicitacao';
import {CadastroAnuncioPage} from '../pages/cadastro-anuncio/cadastro-anuncio';
import {ListaCategotiaPage} from '../pages/lista-categotia/lista-categotia';
import {ListSolicitacoesServicoPage} from '../pages/lista-solicitacoes-servico/lista-solicitacoes-servico';
import {CartPage} from '../pages/cart/cart';
import {CategoriesPage} from '../pages/categories/categories';
import {CategoryPage} from '../pages/category/category';
import {ChangePasswordPage} from '../pages/change-password/change-password';
import {CurrencyConverterPage} from '../pages/currency-converter/currency-converter';
import {ForgotPasswordPage} from '../pages/forgot-password/forgot-password';
import {HomePage} from '../pages/home/home';
import {ItemPage} from '../pages/item/item';
import {LoginPage} from '../pages/login/login';
import {ModalFilterPage} from '../pages/modal-filter/modal-filter';
import {ModalItemOptionPage} from '../pages/modal-item-option/modal-item-option';
import {MyAccountPage} from '../pages/my-account/my-account';
import {MyOrderPage} from '../pages/my-order/my-order';
import {OrderConfirmPage} from '../pages/order-confirm/order-confirm';
import {RegisterPage} from '../pages/register/register';
import {SearchPage} from '../pages/search/search';
import {SettingsPage} from '../pages/settings/settings';
import {StorePage} from '../pages/store/store';
import {TabAttributePage} from '../pages/tab-attribute/tab-attribute';
import {TabFilterPage} from '../pages/tab-filter/tab-filter';
import {WelcomePage} from '../pages/welcome/welcome';
import {WishListPage} from '../pages/wish-list/wish-list';

import {ListAnuncioPage} from '../pages/lista-anuncio/lista-anuncio';

// end import pages

@NgModule({
  declarations: [
    MyApp,
    CartPage,
    CategoriesPage,
    CategoryPage,
    ChangePasswordPage,
    CurrencyConverterPage,
    ForgotPasswordPage,
    ListAnuncioPage,
    ListaCategotiaPage,
    CadastroAnuncioPage,
    ModalSolicitacaoPage,
    ListSolicitacoesServicoPage,
    HomePage,
    ItemPage,
    LoginPage,
    ModalFilterPage,
    ModalItemOptionPage,
    MyAccountPage,
    MyOrderPage,
    OrderConfirmPage,
    RegisterPage,
    SearchPage,
    SettingsPage,
    StorePage,
    TabAttributePage,
    TabFilterPage,
    WelcomePage,
    WishListPage
  ],
  imports: [
    BrowserModule,
    HttpModule,
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    CartPage,
    CategoriesPage,
    ListSolicitacoesServicoPage,
    CategoryPage,
    ModalSolicitacaoPage,
    CadastroAnuncioPage,
    ChangePasswordPage,
    CurrencyConverterPage,
    ForgotPasswordPage,
    HomePage,
    ItemPage,
    ListAnuncioPage,
    ListaCategotiaPage,
    LoginPage,
    ModalFilterPage,
    ModalItemOptionPage,
    MyAccountPage,
    MyOrderPage,
    OrderConfirmPage,
    RegisterPage,
    SearchPage,
    SettingsPage,
    StorePage,
    TabAttributePage,
    TabFilterPage,
    WelcomePage,
    WishListPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    CategoryService,
    AbstractHttpService,
    GenericService,
    ItemService,
    UserService,
    LoginService,
    SolicitacaoService,
    StoreService,
    CartService,
    BairroService,
    OrderService,
    NewsService,
    AnuncioService
    /* import services */
  ]
})
export class AppModule {
}
