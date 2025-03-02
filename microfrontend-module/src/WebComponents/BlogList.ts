import r2wc from '@r2wc/react-to-web-component';
import { BlogList } from '../ModuleComponents/BlogList/BlogList';

const BlogListWC = r2wc(BlogList, {
  props: {
    blogPosts: 'json',
    blogFilter: 'json',
    paginationFilter: 'json',
    blogPerPage: 'string',
  },
  events: {
    handleFilterSelect: { bubbles: true },
    handleCardAction: { bubbles: true },
  },
});

customElements.define('blog-list', BlogListWC);
