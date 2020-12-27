import { BrowserModule } from '@angular/platform-browser'
import { NgModule } from '@angular/core'
import { AppComponent } from './app.component'
import { UsersComponent } from './users/users.component'
import { HttpClientModule } from '@angular/common/http'
import { OrderModule } from 'ngx-order-pipe'
import { FormsModule } from '@angular/forms'
import { FilterPipe } from './appPipes/filter.pipe'

@NgModule({
  declarations: [
    AppComponent,
    UsersComponent,
    FilterPipe
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    OrderModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
