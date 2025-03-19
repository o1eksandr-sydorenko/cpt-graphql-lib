import { createPaginator } from 'prisma-extension-pagination';

export const defaultPaginateLimit = 10;
export const maxPaginateLimit = 1000;
export const defaultPaginatePage = 1;

export const paginate = createPaginator({
  pages: {
    limit: defaultPaginateLimit,
    includePageCount: true,
  },
});
