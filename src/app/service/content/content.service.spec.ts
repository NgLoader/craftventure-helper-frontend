import { TestBed } from '@angular/core/testing';
import { ContentService } from './content.service';

describe('ItemService', () => {
  let service: ContentService<any, any>;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ContentService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
