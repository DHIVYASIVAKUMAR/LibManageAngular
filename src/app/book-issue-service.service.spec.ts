import { TestBed } from '@angular/core/testing';

import { BookIssueServiceService } from './book-issue-service.service';

describe('BookIssueServiceService', () => {
  let service: BookIssueServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(BookIssueServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
