import { HttpClient } from '@angular/common/http'
import { Component, OnInit } from '@angular/core'

export class Users {

  constructor(
    public name: string,
    public age: string,
    public gender: string,
    public department: string,
    public address: {
      city: string,
      street: string,
    }
  ) {
  }
}

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss']
})
export class UsersComponent implements OnInit {

  option: String = ''
  users: Users[] = []
  genders: String[] = []
  departments: String[] = []
  cities: String[] = []  
  
  constructor(
    private httpClient: HttpClient
  ) { }

  ngOnInit(): void {
    this.getUsers()
  }

  getUsers() {
    this.httpClient.get<any>('https://gist.githubusercontent.com/bunopus/f48fbb06578003fb521c7c1a54fd906a/raw/e5767c1e7f172c6375f064a9441f2edd57a79f15/test_users.json').subscribe(
      response => {
        this.users = response
        this.genders = [...new Set(this.users.map(u => u.gender))]
        this.departments = [...new Set(this.users.map(u => u.department))]
        this.cities = [...new Set(this.users.map(u => u.address.city))]
      }
    )
  }

  key: string = 'name'
  reverse: boolean = false
  sort(key: string) {
    this.key = key
    this.reverse = !this.reverse
  }
}
