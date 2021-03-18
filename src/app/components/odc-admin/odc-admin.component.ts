import { MediaMatcher } from '@angular/cdk/layout';
import { ChangeDetectorRef, Component, OnDestroy, OnInit, ElementRef, ViewChild, VERSION } from '@angular/core';
import { SelectionModel } from '@angular/cdk/collections';
import { MatTableDataSource } from '@angular/material/table';
import { PageEvent } from '@angular/material/paginator';
import { MatDialog } from '@angular/material/dialog';

const ELEMENT_DATA: any[] = [
  { empId: 480331, enterprise_profile_details: 'Project A', enterprise_profile_type:"22/10/2020", status: 'Granted',action:"revoke"},
  { empId: 480331, enterprise_profile_details: 'Project A',enterprise_profile_type:"22/10/2020", status: 'Granted',action:""},
  { empId: 480331, enterprise_profile_details: 'Project A', enterprise_profile_type:"22/10/2020", status: 'Granted',action:"cancel"},
  { empId: 480331, enterprise_profile_details: 'Project A', enterprise_profile_type:"22/10/2020",  status: 'Granted',action:"revoke"},
  { empId: 480331, enterprise_profile_details: 'Project A', enterprise_profile_type:"22/10/2020", status: 'Granted',action:""},
];

@Component({
  selector: 'app-odc-admin',
  templateUrl: './odc-admin.component.html',
  styleUrls: ['./odc-admin.component.css']
})
export class OdcAdminComponent implements OnInit {
// variale initialization start
  mobileQuery: MediaQueryList;
  opened: boolean = true;
  length = 100;
  pageSize = 10;
  pageSizeOptions: number[] = [5, 10, 25, 100];
  private _mobileQueryListener: () => void;
  isVisible = false;
  advanceVisible = true;
  title = 'appBootstrap';

  closeResult: string;

  p: number = 1;
  displayedColumns: string[] = ['select', 'empId', 'enterprise_profile_details', 'enterprise_profile_type', 'status','action'];
  addNewColumns: string[] = [];
  filter = false;
  dataSource = new MatTableDataSource<any>(ELEMENT_DATA);
  selection = new SelectionModel<any>(true, []);
// variale initialization end

  constructor(changeDetectorRef: ChangeDetectorRef, media: MediaMatcher, public dialog: MatDialog) {
    this.mobileQuery = media.matchMedia('(max-width: 600px)');
    this._mobileQueryListener = () => changeDetectorRef.detectChanges();
    this.mobileQuery.addListener(this._mobileQueryListener);
  }

  pageEvent: PageEvent;

  setPageSizeOptions(setPageSizeOptionsInput: string) {
    if (setPageSizeOptionsInput) {
      this.pageSizeOptions = setPageSizeOptionsInput.split(',').map(str => +str);
    }
  }
  ngOnInit(): void {

  }
  ngOnDestroy(): void {
    this.mobileQuery.removeListener(this._mobileQueryListener);
  }

  isAllSelected() {
    const numSelected = this.selection.selected.length;
    const numRows = this.dataSource.data.length;
    return numSelected === numRows;
  }

  masterToggle() {
    this.isAllSelected() ?
      this.selection.clear() :
      this.dataSource.data.forEach(row => this.selection.select(row));
  }

  checkboxLabel(row?): string {
    if (!row) {
      return `${this.isAllSelected() ? 'select' : 'deselect'} all`;
    }
    return `${this.selection.isSelected(row) ? 'deselect' : 'select'} row ${row.position + 1}`;
  }
  
  addNewFilter() {
    this.filter = !this.filter;
    this.addNewColumns = this.filter ? ['header-row-first-group',
      'header-row-second-group', 'header-row-third-group',
      'header-row-fourth-group',
      'header-row-fifth-group'] : []
  }

  advance_click() {
    // debugger
    if (this.isVisible == false) {
      this.isVisible = true
      this.advanceVisible = false
    } else {
      this.isVisible = false
    }
  }

  close_advance_click() {
    //debugger
    if (this.isVisible == true) {
      this.isVisible = false
      this.advanceVisible = true
    } else {
      this.isVisible = true

      this.advanceVisible = true
    }
  }

}
