import { PageNumberCounters, PageNumberPagination } from 'prisma-extension-pagination/dist/types';
import { Pagination } from '../models';
import { cleanNestedFilterInput, transformGraphQLFields } from '../utils';
import graphqlFields from 'graphql-fields';
import { defaultPaginateLimit, defaultPaginatePage } from '../configs';
import { PaginateInput } from '../inputs';
import { GraphQLResolveInfo } from 'graphql';
import { PrismaClient } from '@prisma/client/extension';

export abstract class SourceService<TPrismaClient extends PrismaClient> {
  constructor(protected prismaClient: TPrismaClient, protected model: string) {}

  async getPaginatedItems<F extends object, O extends object, R extends object>(
    info: GraphQLResolveInfo,
    args: {
      filter?: F;
      orderBy?: O;
      paginate?: PaginateInput;
    },
  ): Promise<R> {
    const { filter, orderBy, paginate } = args;

    const [items, meta] = await this.prismaClient[this.model]
      .paginate({
        select: transformGraphQLFields(graphqlFields(info)['items']),
        where: cleanNestedFilterInput<F>(filter),
        orderBy,
      })
      .withPages({
        limit: paginate?.limit || defaultPaginateLimit,
        page: paginate?.page || defaultPaginatePage,
      });

    return {
      items: items,
      pagination: this.createPaginateModel(meta),
    } as R;
  }

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
