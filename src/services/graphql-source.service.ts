import { PageNumberCounters, PageNumberPagination } from 'prisma-extension-pagination/dist/types';
import { Pagination } from '../models';

export abstract class GraphQlSourceService {
  protected createPaginateModel(meta: PageNumberPagination & PageNumberCounters): Pagination {
    return {
      previous_page: meta.previousPage,
      next_page: meta.nextPage,
      current_page: meta.currentPage,
      count: meta.pageCount,
      total: meta.totalCount,
      is_first_page: meta.isFirstPage,
      is_last_page: meta.isLastPage,
    };
  }
}
