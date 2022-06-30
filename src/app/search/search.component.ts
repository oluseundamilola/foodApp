import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})

//IN THIS CLASS WE HAVE A STRING CALLED {searchTerm} AND WE ARE MAKING THIS STRING BECOME A VARIABLE FOR :/searchTerm at the router.
export class SearchComponent implements OnInit {

  searchTerm:String = "";//creation of the string.
  constructor( private route:ActivatedRoute, private router:Router ) { }//Injection!!!!

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      if (params['searchTerm'])
        this['searchTerm'] = params['searchTerm'];
    })
  }

  search():void{
    if(this['searchTerm'])                                   //if we have a serchTrem navigate to by :/searchTerm
      this.router.navigateByUrl('/search/' + this['searchTerm']);
  }

}
