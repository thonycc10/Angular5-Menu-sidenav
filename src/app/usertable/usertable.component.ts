import {Component, OnInit, ViewChild} from '@angular/core';
import {Observable} from 'rxjs/Observable';
import {MatSort, MatSortable, MatTableDataSource, MatPaginator} from '@angular/material';
import {UserService} from '../user.service';

@Component({
  selector: 'app-usertable',
  templateUrl: './usertable.component.html',
  styleUrls: ['./usertable.component.css']
})
export class UsertableComponent implements OnInit {

  @ViewChild(MatSort) sort: MatSort; // para la flichita de filtros
  @ViewChild(MatPaginator) paginator: MatPaginator; // paginacion

  dataSource;
  displayedColumns = ['name', 'username', 'email'];

  constructor(private userService: UserService) {
  }

  applyFilter(filterValue: string) {
    filterValue = filterValue.trim(); // Remove whitespace
    filterValue = filterValue.toLowerCase(); // MatTableDataSource defaults to lowercase matches
    this.dataSource.filter = filterValue;
  }

  ngOnInit() {
    this.userService.getUser().subscribe(results => {
      if (!results) {
        return;
      }
      this.dataSource = new MatTableDataSource(results);
      this.dataSource.sort = this.sort;
      this.dataSource.paginator = this.paginator;
    });
  }

  accionPagina(event: Event) {
    console.log(event);
    console.log('lol');
  }
}
