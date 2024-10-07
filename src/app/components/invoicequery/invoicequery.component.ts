import { AfterViewInit, Component, OnInit, ViewChild, inject } from '@angular/core';

import {LiveAnnouncer} from '@angular/cdk/a11y';
import {MatSort, Sort, MatSortModule} from '@angular/material/sort';
import {MatTableDataSource, MatTableModule} from '@angular/material/table';
import { InvoiceService } from '../../services/invoice.service';
import { DatefilterPipe } from '../../pipes/datefilter.pipe';
import { MatPaginator, MatPaginatorModule } from '@angular/material/paginator';

@Component({
  selector: 'app-invoicequery',
  standalone: true,
  imports: [MatTableModule, MatSortModule, DatefilterPipe, MatPaginatorModule],
  templateUrl: './invoicequery.component.html',
  styleUrl: './invoicequery.component.scss'
})
export class InvoicequeryComponent implements OnInit, AfterViewInit {
  private _liveAnnouncer = inject(LiveAnnouncer);

  displayedColumns: string[] = ['position', 'nombre', 'fecha', 'importe', 'direccion', 'pdf'];
  
  dataSource:any;

  @ViewChild(MatSort) sort!: MatSort;

  @ViewChild(MatPaginator) paginator!: MatPaginator;

  constructor(
    private _invoiceService: InvoiceService
  ){}

  ngOnInit(): void {
    
    this.dataSource = this._invoiceService.getInvoice();
  }

  ngAfterViewInit() {
    this.dataSource.sort = this.sort;
    this.dataSource.paginator = this.paginator; 
  }

  /** Announce the change in sort state for assistive technology. */
  announceSortChange(sortState: Sort) {
    // This example uses English messages. If your application supports
    // multiple language, you would internationalize these strings.
    // Furthermore, you can customize the message to add additional
    // details about the values being sorted.
    if (sortState.direction) {
      this._liveAnnouncer.announce(`Sorted ${sortState.direction}ending`);
    } else {
      this._liveAnnouncer.announce('Sorting cleared');
    }
  }
}