import r2wc from '@r2wc/react-to-web-component';
import { BlogPage } from '../ModuleComponents/BlogPage/BlogPage';

const BlogPageWC = r2wc(BlogPage, {
  props: { blogPost: 'json' },
  events: { handleBlogAction: { bubbles: true } },
});

customElements.define('blog-page', BlogPageWC);
