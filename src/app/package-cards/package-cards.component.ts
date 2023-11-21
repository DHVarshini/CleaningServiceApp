import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from '../user.service';
import { PackageDetails } from '../packageDetails';
import { MatDialog } from '@angular/material/dialog';
import { BookComponent } from '../book/book.component';
@Component({
  selector: 'app-package-cards',
  templateUrl: './package-cards.component.html',
  styleUrls: ['./package-cards.component.css']
})
export class PackageCardsComponent implements OnInit {
  PackageDetails: PackageDetails[] = [];
  constructor(private userService: UserService, private dialog: MatDialog, private router: Router) { }
  ngOnInit(): void {
    this.fetchPackageDetails();
  }
  fetchPackageDetails() {
    this.userService.fetchServicePackagesFromRemote().subscribe(
      data => {
        this.PackageDetails = data;
      },
      error => console.log(error));
  }
  Openpopup(val: string) {
    this.dialog.open(BookComponent, {
      width: '80%',
      height: '80%',
      data: {
        val: val,
      }
    })
  }
}
